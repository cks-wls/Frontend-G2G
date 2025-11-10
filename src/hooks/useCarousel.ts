import { useEffect, useRef, useState } from 'react'

interface UseCarouselProps {
  totalSlides: number
  isAutoPlay?: boolean
  delay?: number
  loop?: boolean
}

const TRANSITION_STYLE = 'transform 0.5s ease-in-out'

const useCarousel = ({
  totalSlides,
  isAutoPlay = false,
  delay = 4000,
  loop = true,
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [transition, setTransition] = useState(TRANSITION_STYLE)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = () => setCurrentSlide((prev) => prev + 1)
  const prev = () => setCurrentSlide((prev) => prev - 1)

  const startAutoPlay = () => {
    if (!isAutoPlay) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, delay)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleTransitionEnd = () => {
    if (!loop) return
    if (currentSlide === totalSlides - 1) {
      setTransition('none')
      setCurrentSlide(1)
    } else if (currentSlide === 0) {
      setTransition('none')
      setCurrentSlide(totalSlides - 2)
    }
  }

  useEffect(() => {
    if (transition === 'none') {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransition(TRANSITION_STYLE))
      )
    }
  }, [transition])

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [])

  return {
    currentSlide,
    transition,
    next,
    prev,
    handleTransitionEnd,
    startAutoPlay,
    stopAutoPlay,
  }
}

export default useCarousel
