import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Secret token to prevent unauthorized revalidation
const REVALIDATE_TOKEN = process.env.REVALIDATE_TOKEN || 'productos-revalidate-2026'

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const path = searchParams.get('path') || '/blog'

    // Verify token
    if (token !== REVALIDATE_TOKEN) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    // Revalidate the specified path
    revalidatePath(path)
    
    return NextResponse.json({ 
      revalidated: true, 
      path,
      timestamp: new Date().toISOString() 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}

// Also support GET for easy testing
export async function GET(request: NextRequest) {
  return POST(request)
}
