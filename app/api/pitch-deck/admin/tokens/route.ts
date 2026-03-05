import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.PITCH_DECK_ADMIN_PASSWORD || 'ProductOS2026!'

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const authHeader = request.headers.get('x-admin-password')
  const cookieStore = await cookies()
  const adminCookie = cookieStore.get('pitch_admin_auth')?.value
  
  return authHeader === ADMIN_PASSWORD || adminCookie === 'authenticated'
}

// GET - List all tokens
export async function GET(request: NextRequest) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const tokens = await prisma.pitchDeckAccessToken.findMany({
      orderBy: { createdAt: 'desc' },
    })
    
    return NextResponse.json({ tokens })
  } catch (error) {
    console.error('Error fetching tokens:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tokens' },
      { status: 500 }
    )
  }
}

// POST - Create new token
export async function POST(request: NextRequest) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const body = await request.json()
    const { token, name, description, expiresAt } = body
    
    if (!token || !name) {
      return NextResponse.json(
        { error: 'Token slug and name are required' },
        { status: 400 }
      )
    }
    
    // Validate token format (lowercase, alphanumeric with hyphens)
    const tokenRegex = /^[a-z0-9-]+$/
    if (!tokenRegex.test(token)) {
      return NextResponse.json(
        { error: 'Token must be lowercase alphanumeric with hyphens only' },
        { status: 400 }
      )
    }
    
    // Check if token already exists
    const existing = await prisma.pitchDeckAccessToken.findUnique({
      where: { token },
    })
    
    if (existing) {
      return NextResponse.json(
        { error: 'Token already exists' },
        { status: 400 }
      )
    }
    
    const newToken = await prisma.pitchDeckAccessToken.create({
      data: {
        token,
        name,
        description: description || null,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    })
    
    return NextResponse.json({ token: newToken }, { status: 201 })
  } catch (error) {
    console.error('Error creating token:', error)
    return NextResponse.json(
      { error: 'Failed to create token' },
      { status: 500 }
    )
  }
}
