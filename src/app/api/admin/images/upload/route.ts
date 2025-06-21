/// <reference types="next" />
import { writeFile } from 'fs/promises'
import { mkdir } from 'fs/promises'
import path from 'path'

// Configure the route to handle uploads
export const config = {
  api: {
    bodyParser: false,
  },
}

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images')

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const category = formData.get('category') as string
    const files = formData.getAll('images')

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

    if (!files.length) {
      return new Response(
        JSON.stringify({ error: 'No images provided' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const categoryPath = path.join(IMAGES_DIR, category)
    
    // Create directory if it doesn't exist
    try {
      await mkdir(categoryPath, { recursive: true })
    } catch (error) {
      // Ignore error if directory already exists
    }

    const uploadedFiles = []

    for (const file of files) {
      if (!file || typeof file !== 'object') {
        continue
      }

      const buffer = Buffer.from(await (file as unknown as Blob).arrayBuffer())
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const filename = uniquePrefix + '-' + (file as any).name.replace(/[^a-zA-Z0-9.-]/g, '')
      const filepath = path.join(categoryPath, filename)

      await writeFile(filepath, buffer)
      uploadedFiles.push(`/images/${category}/${filename}`)
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Images uploaded successfully',
        files: uploadedFiles
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error uploading images:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to upload images' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
} 