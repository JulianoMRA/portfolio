import { useEffect, useRef } from 'react'

export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = {}) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (el.dataset.revealed === 'true') return
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.dataset.revealed = 'true'
                        io.unobserve(e.target)
                    }
                })
            },
            { threshold, rootMargin }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [threshold, rootMargin])
    return ref
}
