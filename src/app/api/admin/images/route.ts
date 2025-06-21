import { readdir } from 'fs/promises'
import path from 'path'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    if (!category) {
      return new Response(
        JSON.stringify({ error: 'Category is required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const categoryPath = path.join(process.cwd(), 'public', 'images', category)

    try {
      const files = await readdir(categoryPath)
      const images = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map(file => `/images/${category}/${file}`)

      return new Response(
        JSON.stringify({ 
          success: true,
          images
        }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (error) {
      // If directory doesn't exist, return empty array
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return new Response(
          JSON.stringify({ 
            success: true,
            images: []
          }),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
      }
      throw error
    }
  } catch (error) {
    console.error('Error listing images:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to list images' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
} 