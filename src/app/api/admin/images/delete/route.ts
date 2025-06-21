import { unlink } from 'fs/promises'
import path from 'path'

export async function DELETE(request: Request) {
  try {
    const { category, imagePath } = await request.json()

    if (!category || !imagePath) {
      return new Response(
        JSON.stringify({ error: 'Category and image path are required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    // Extract filename from the image path
    const filename = path.basename(imagePath)
    
    // Construct the full path to the image
    const fullPath = path.join(process.cwd(), 'public', 'images', category, filename)

    // Delete the file
    await unlink(fullPath)

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Image deleted successfully'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error deleting image:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to delete image' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
} 