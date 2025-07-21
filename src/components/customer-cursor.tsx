'use client'
import { useEffect, useRef, type FC } from 'react';
import { useMediaQuery } from 'react-responsive'
import { gsap } from 'gsap'
interface CustomerCursorProps { }

const CustomerCursor: FC<CustomerCursorProps> = () => {
    const cursorRef = useRef(null)
    const cursorBorderRef = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: 768 });
    if (isMobile) return null

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        const xCursor = gsap.quickTo(cursor, "x", {
            duration: 0.2,
            ease: 'power3.out'
        })

        const yCursor = gsap.quickTo(cursor, "y", {
            duration: 0.2,
            ease: 'power3.out'
        })
        const xCursorBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.2,
            ease: 'power3.out'
        })

        const yCursorBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.2,
            ease: 'power3.out'
        })

        const handleMouseMove = (e: MouseEvent) => {
            xCursor(e.clientX)
            yCursor(e.clientY)
            xCursorBorder(e.clientX)
            yCursorBorder(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mousedown", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2
            })
        })
        document.addEventListener("mouseup", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2
            })
        })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                // if (trigger.vars.trigger === sectionRef.current)
                    trigger.kill()
            })
        }
    }, [])

    return (
        <>
            <div ref={cursorRef} className='rounded-full bg-white w-5 h-5 
                fixed pointer-events-none mix-blend-difference top-0 left-0 z-[999] '/>

            <div ref={cursorBorderRef} className='rounded-full border border-white w-10 h-10 
                fixed pointer-events-none mix-blend-difference top-0 left-0 z-[999]'/>
        </>
    );
}

export default CustomerCursor;
