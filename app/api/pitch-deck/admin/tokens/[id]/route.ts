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

// PATCH - Update token (toggle active, edit fields)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { id } = await params
    const body = await request.json()
    const { isActive, name, description, expiresAt } = body
    
    // Check if token exists
    const existing = await prisma.pitchDeckAccessToken.findUnique({
      where: { id },
    })
    
    if (!existing) {
      return NextResponse.json({ error: 'Token not found' }, { status: 404 })
    }
    
    // Build update data
    const updateData: {
      isActive?: boolean
      name?: string
      description?: string | null
      expiresAt?: Date | null
    } = {}
    
    if (typeof isActive === 'boolean') {
      updateData.isActive = isActive
    }
    if (name !== undefined) {
      updateData.name = name
    }
    if (description !== undefined) {
      updateData.description = description || null
    }
    if (expiresAt !== undefined) {
      updateData.expiresAt = expiresAt ? new Date(expiresAt) : null
    }
    
    const updated = await prisma.pitchDeckAccessToken.update({
      where: { id },
      data: updateData,
    })
    
    return NextResponse.json({ token: updated })
  } catch (error) {
    console.error('Error updating token:', error)
    return NextResponse.json(
      { error: 'Failed to update token' },
      { status: 500 }
    )
  }
}

// DELETE - Delete token
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { id } = await params
    
    // Check if token exists
    const existing = await prisma.pitchDeckAccessToken.findUnique({
      where: { id },
    })
    
    if (!existing) {
      return NextResponse.json({ error: 'Token not found' }, { status: 404 })
    }
    
    await prisma.pitchDeckAccessToken.delete({
      where: { id },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting token:', error)
    return NextResponse.json(
      { error: 'Failed to delete token' },
      { status: 500 }
    )
  }
}
