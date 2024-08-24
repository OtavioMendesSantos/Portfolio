import { useEffect, useState } from 'react'

const useResponsive = (): { isMobile: boolean; isDesktop: boolean } => {
    const [isMobile, setIsMobile] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    function match(query: string): boolean {
        return window.matchMedia(query).matches
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        function handleResize() {
            setIsMobile(match('(max-width: 600px)'))
            setIsDesktop(match('(min-width: 600px)'))
        }
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return {
        isMobile,
        isDesktop,
    }
}

export default useResponsive
