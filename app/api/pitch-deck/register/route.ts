import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, linkedin } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if viewer already exists
    let viewer = await prisma.pitchDeckViewer.findUnique({
      where: { email },
    })

    if (viewer) {
      // Update existing viewer's info
      viewer = await prisma.pitchDeckViewer.update({
        where: { email },
        data: { name, phone, company, linkedin },
      })
    } else {
      // Create new viewer
      viewer = await prisma.pitchDeckViewer.create({
        data: { name, email, phone, company, linkedin },
      })
    }

    // Create a new session
    const session = await prisma.pitchDeckSession.create({
      data: {
        viewerId: viewer.id,
        userAgent: request.headers.get('user-agent') || undefined,
        ipAddress: request.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
      },
    })

    // Set cookie to remember user
    const cookieStore = await cookies()
    cookieStore.set('pitch_viewer_id', viewer.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
    cookieStore.set('pitch_session_id', session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({
      success: true,
      viewerId: viewer.id,
      sessionId: session.id,
    })
  } catch (error) {
    console.error('Error registering viewer:', error)
    return NextResponse.json(
      { error: 'Failed to register viewer' },
      { status: 500 }
    )
  }
}
