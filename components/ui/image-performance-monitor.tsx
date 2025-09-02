"use client"

import { useEffect, useState } from "react"

interface ImagePerformanceMetrics {
  totalImages: number
  loadedImages: number
  failedImages: number
  averageLoadTime: number
  totalLoadTime: number
}

interface ImagePerformanceMonitorProps {
  onMetricsUpdate?: (metrics: ImagePerformanceMetrics) => void
  showStats?: boolean
}

export function ImagePerformanceMonitor({ 
  onMetricsUpdate, 
  showStats = false 
}: ImagePerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<ImagePerformanceMetrics>({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    totalLoadTime: 0
  })

  useEffect(() => {
    // Monitor all images on the page
    const images = document.querySelectorAll('img')
    let totalLoadTime = 0
    let loadedCount = 0
    let failedCount = 0

    const handleImageLoad = (event: Event) => {
      const img = event.target as HTMLImageElement
      const loadTime = performance.now() - performance.timeOrigin
      totalLoadTime += loadTime
      loadedCount++
      
      updateMetrics(images.length, loadedCount, failedCount, totalLoadTime)
    }

    const handleImageError = () => {
      failedCount++
      updateMetrics(images.length, loadedCount, failedCount, totalLoadTime)
    }

    // Add event listeners to existing images
    images.forEach(img => {
      if (img.complete) {
        loadedCount++
      } else {
        img.addEventListener('load', handleImageLoad)
        img.addEventListener('error', handleImageError)
      }
    })

    // Monitor for new images added dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            const newImages = element.querySelectorAll('img')
            newImages.forEach(img => {
              img.addEventListener('load', handleImageLoad)
              img.addEventListener('error', handleImageError)
            })
          }
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Initial metrics update
    updateMetrics(images.length, loadedCount, failedCount, totalLoadTime)

    return () => {
      observer.disconnect()
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad)
        img.removeEventListener('error', handleImageError)
      })
    }
  }, [])

  const updateMetrics = (
    total: number, 
    loaded: number, 
    failed: number, 
    totalTime: number
  ) => {
    const newMetrics = {
      totalImages: total,
      loadedImages: loaded,
      failedImages: failed,
      totalLoadTime: totalTime,
      averageLoadTime: loaded > 0 ? totalTime / loaded : 0
    }
    
    setMetrics(newMetrics)
    onMetricsUpdate?.(newMetrics)
  }

  if (!showStats) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>Total: {metrics.totalImages}</div>
        <div>Loaded: {metrics.loadedImages}</div>
        <div>Failed: {metrics.failedImages}</div>
        <div>Avg: {metrics.averageLoadTime.toFixed(2)}ms</div>
      </div>
    </div>
  )
}

// Hook for getting image performance metrics
export function useImagePerformance() {
  const [metrics, setMetrics] = useState<ImagePerformanceMetrics>({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    totalLoadTime: 0
  })

  return {
    metrics,
    onMetricsUpdate: setMetrics
  }
}
