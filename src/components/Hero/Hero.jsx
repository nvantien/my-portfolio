import React from 'react'
import './Hero.css'

export const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Research and Development
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./images/img01.png" alt="" />
                    </div>
                    <img src="./images/device.jpg" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./images/img02.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./images/img03.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./images/img04.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
