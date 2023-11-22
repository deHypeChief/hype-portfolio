import './../assets/styles/home.css'
import heroImg from '../assets/images/images/Hero -Img.png'

import instagram from './../assets/images/icons/bi_instagram.svg'
import linkedin from './../assets/images/icons/basil_linkedin-solid.svg'
import x from './../assets/images/icons/akar-icons_x-fill.svg'
import { LoadingText } from '../components/loading/loading'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/navbar/navbar'

import gsap from 'gsap'

export default function Home() {
    const [ready, setReady] = useState(false)
    const heroBall = useRef()

    useEffect(()=>{
        const heroTimeline = gsap.timeline({
        })

        const loadLargeText = gsap.to('.largeText', 
        {
            transform: 'translateY(0)',
            ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
            opacity: 1,
            duration: 0.5,
        })
        const loadSubText = gsap.to('.subText', 
        {
            transform: 'translateY(0)',
            ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
            opacity: 1,
            duration: 0.5,
        })


        heroTimeline.add(loadLargeText, 1)
        heroTimeline.add(loadSubText, 1.2)
    }, [ready])

   

    return (
        <>
            {
                ready === false ? (
                    <LoadingText action={setReady}/>
                ) : (
                    <div className="homeMain">
                        <div className="hero_round ">
                            <div className="heroBall" ref={heroBall}></div>
                        </div>


                        <section className="heroSection">
                            <div className="heroImg">
                                <div className="heroImgWrap">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>

                            <div className="HeroTextWrap">
                                <div className="heroTextSection">
                                    <div className="subTextWrap">
                                        <p className="subText">
                                            A Full-stack developer Ui
                                            and Brand Designer
                                        </p>
                                    </div>
                                    <div className="heroTextWrap">
                                        <h1 className="largeText">
                                            deHypeChief
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="socials">
                                <div className="socialBox">
                                    <img src={instagram} alt="" />
                                </div>
                                <div className="socialBox">
                                    <img src={linkedin} alt="" />
                                </div>
                                <div className="socialBox">
                                    <img src={x} alt="" />
                                </div>
                            </div>
                        </section>

                        <section className="about">
                            <div className="nameOfVistor">
                                <h2>
                                    Hi <br /><span className='visitor green'>Obioma</span>,
                                </h2>
                            </div>
                            <div className="myStory">
                                <p>
                                    I'm David Okoye, a <span className="green">creative developer</span> based in Nigeria.
                                    I specialize in fullstack development and design,
                                    delivering robust web applications with proficiency
                                    in <span className="orange">
                                        React, Javascript, Python and Backend
                                        development.
                                    </span>
                                </p>
                                <p>
                                    My experience as a <span className="purple">UI and brand designer </span>
                                    emphasizes my commitment to creating visually
                                    stunning, user-centric designs that elevate brands.
                                </p>
                            </div>
                        </section>


                        <section className="quote"></section>
                    </div>
                )
            }
        </>
    )
}

