"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
  loadingStrategy?: "eager" | "lazy"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 75,
  placeholder = "blur",
  blurDataURL,
  onLoad,
  onError,
  fallbackSrc = "/placeholder.svg",
  loadingStrategy = "lazy",
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Reset state when src changes
  useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImageSrc(fallbackSrc)
      setHasError(true)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
    onError?.()
  }

  // Determine if this image should be prioritized
  const isPriority = priority || loadingStrategy === "eager"

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        priority={isPriority}
        loading={isPriority ? "eager" : "lazy"}
        sizes={responsiveSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || "/blur.jpg"}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Error state */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  )
}

// Specialized components for different use cases
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      loadingStrategy="eager"
      quality={85}
      sizes="100vw"
    />
  )
}

export function GalleryImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={false}
      loadingStrategy="lazy"
      quality={75}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={false}
      loadingStrategy="lazy"
      quality={60}
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  )
}
