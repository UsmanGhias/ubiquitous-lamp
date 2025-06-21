declare module 'next/server' {
  import { NextRequest as BaseNextRequest, NextResponse as BaseNextResponse } from 'next/dist/server/web/spec-extension/request'
  export type NextRequest = BaseNextRequest
  export type NextResponse = BaseNextResponse
  export { NextResponse }
}

declare module 'next/dynamic' {
  import { ComponentType, DynamicOptions } from 'react'
  
  type DynamicImportOptions<P> = DynamicOptions<P> & {
    loading?: ComponentType
    loader?: () => Promise<{ default: ComponentType<P> }>
    ssr?: boolean
  }

  export default function dynamic<P = {}>(
    dynamicOptions: DynamicImportOptions<P> | (() => Promise<ComponentType<P>>),
    options?: DynamicImportOptions<P>
  ): ComponentType<P>
}

declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

  export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    quality?: number
    priority?: boolean
    loading?: 'lazy' | 'eager'
    sizes?: string
    className?: string
    style?: React.CSSProperties
    onLoadingComplete?: (img: HTMLImageElement) => void
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
  }

  export default function Image(props: ImageProps): JSX.Element
} 