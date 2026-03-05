import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    
    if (!token) {
      return NextResponse.json({ valid: false, error: 'Token required' })
    }
    
    // Find the token
    const accessToken = await prisma.pitchDeckAccessToken.findUnique({
      where: { token },
    })
    
    if (!accessToken) {
      return NextResponse.json({ valid: false, error: 'Token not found' })
    }
    
    // Check if active
    if (!accessToken.isActive) {
      return NextResponse.json({ valid: false, error: 'Token is inactive' })
    }
    
    // Check if expired
    if (accessToken.expiresAt && new Date() > accessToken.expiresAt) {
      return NextResponse.json({ valid: false, error: 'Token has expired' })
    }
    
    // Token is valid - increment view count and update lastUsedAt
    await prisma.pitchDeckAccessToken.update({
      where: { id: accessToken.id },
      data: {
        viewCount: { increment: 1 },
        lastUsedAt: new Date(),
      },
    })
    
    return NextResponse.json({
      valid: true,
      name: accessToken.name,
      description: accessToken.description,
    })
  } catch (error) {
    console.error('Error validating access token:', error)
    return NextResponse.json(
      { valid: false, error: 'Failed to validate token' },
      { status: 500 }
    )
  }
}
