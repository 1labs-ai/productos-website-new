import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

// Check if user has an existing session
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const viewerId = cookieStore.get('pitch_viewer_id')?.value

    if (!viewerId) {
      return NextResponse.json({ authenticated: false })
    }

    // Verify viewer exists
    const viewer = await prisma.pitchDeckViewer.findUnique({
      where: { id: viewerId },
      select: { id: true, name: true, email: true },
    })

    if (!viewer) {
      return NextResponse.json({ authenticated: false })
    }

    // Create a new session for returning user
    const session = await prisma.pitchDeckSession.create({
      data: {
        viewerId: viewer.id,
        userAgent: request.headers.get('user-agent') || undefined,
        ipAddress: request.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
      },
    })

    // Update session cookie
    cookieStore.set('pitch_session_id', session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({
      authenticated: true,
      viewer: {
        name: viewer.name,
        email: viewer.email,
      },
      sessionId: session.id,
    })
  } catch (error) {
    console.error('Error checking session:', error)
    return NextResponse.json({ authenticated: false })
  }
}
