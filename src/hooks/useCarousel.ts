import { useEffect, useRef, useState } from 'react'

interface UseCarouselProps {
  totalSlides: number
  isAutoPlay?: boolean
  delay?: number
  isLoop?: boolean
}

const TRANSITION_STYLE = 'transform 0.5s ease-in-out'

export const useCarousel = ({
  totalSlides,
  isAutoPlay = false,
  delay = 4000,
  isLoop = false,
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(isLoop ? 1 : 0)
  const [transition, setTransition] = useState(TRANSITION_STYLE)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isStart = !isLoop && currentSlide === 0
  const isEnd = !isLoop && currentSlide === totalSlides - 1

  const next = () => {
    if (!isLoop && isEnd) return
    setCurrentSlide((prev) => prev + 1)
  }
  const prev = () => {
    if (!isLoop && isStart) return
    setCurrentSlide((prev) => prev - 1)
  }

  const startAutoPlay = () => {
    if (!isAutoPlay) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, delay)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleTransitionEnd = () => {
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
    isStart,
    isEnd,
  }
}
