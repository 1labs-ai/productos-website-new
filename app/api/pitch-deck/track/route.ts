import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('pitch_session_id')?.value

    if (!sessionId) {
      return NextResponse.json(
        { error: 'No active session' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { slideIndex, slideName, timeSpentMs } = body

    if (slideIndex === undefined || !slideName) {
      return NextResponse.json(
        { error: 'slideIndex and slideName are required' },
        { status: 400 }
      )
    }

    // Create slide view record
    await prisma.pitchDeckSlideView.create({
      data: {
        sessionId,
        slideIndex,
        slideName,
        timeSpentMs: timeSpentMs || 0,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking slide view:', error)
    return NextResponse.json(
      { error: 'Failed to track slide view' },
      { status: 500 }
    )
  }
}
