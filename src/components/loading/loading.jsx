import { useEffect } from 'react'
import './style.css'
import gsap from 'gsap'

export function LoadingMain() {
    return (
        <>
            <main className='Loading'>
                <LoadingText />
            </main>
        </>
    )
}

export function LoadingEye() {
    useEffect(()=>{
    }, [])

    return (
        <main className="EyeWrap">
            <div className="leftEye blink"></div>
            <div className="rightEye blink"></div>
        </main>
    )
}

export function LoadingText(props) {
    const {action} = props

    useEffect(()=>{
        const t1 = gsap.timeline({
            delay: 1
        })

        const loadText = gsap.to('.deText_Rec', {
            width: '103%',
            ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
            duration: 3,
        })

        const hideText = gsap.to('.deTextWrap', {
            transform: 'translateY(60px)',
            duration: 0.5,
            onComplete: ()=>{
                action(true)
            }
        })

        t1.add(loadText, 1)
        t1.add(hideText, 4)
        
    }, [])

    return (
        <main className="loadingText">
            <div className="deText">
                <div className="deTextWrap">
                    <h3 className='deText_behind'>
                        deHypeChief
                    </h3>
                    <div className="deText_Rec">
                        <h3 className='deText_mask'>
                            deHypeChief
                        </h3>
                    </div>
                    
                </div>
            </div>
            <div className="justContext">
                <p className="plus">+</p>
                <div className="context">
                    <p><span className="c_brand orange">Brand.</span></p>
                    <p><span className="c_design green">Deisgn.</span></p>
                    <p><span className="c_code purple">Code.</span></p>
                </div>
            </div>
        </main>
    )
}