import navbarLogo from "../public/assets/resources/logos/hero/wadan-logo.svg"
import styles from '../styles/Hero.module.css';
import Image from "next/image";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Twitter from "../public/assets/resources/logos/hero/Twitter"
import Instagram from "../public/assets/resources/logos/hero/Instagram"
import slider01 from "../public/assets/resources/images/hero slider/01.jpg"
import slider02 from "../public/assets/resources/images/hero slider/02.jpg"
import slider03 from "../public/assets/resources/images/hero slider/03.059acd5a.jpg"
import WadanLogoBlack from "../public/assets/resources/logos/hero/WadanLogoBlack.svg"
import { useState, useEffect } from "react"

// setTimeout


const content = {
    "title": "شركة وادان التجارية",
    "desc": "متخصصون بالديكورات الداخلية والخارجية معنا بيتك أجمل",
    "followUs": "تابعنا على مواقع التواصل الإجتماعي"

}
const navbarLinks = {
    "navbar": [
        {
            "id": "0",
            "name": "الرئيسية",
            "route": "home"
        },
        {
            "id": "1",
            "name": "من نحن",
            "route": "about"
        }, {
            "id": "2",
            "name": "خدماتنا",
            "route": "Services"
        },
        , {
            "id": "3",
            "name": "منتجاتنا الإبداعية",
            "route": "CreativeProducts"
        }, {
            "id": "4",
            "name": "اتصل بنا",
            "route": "Contact"
        }
    ]
}



export default function Hero() {


    const [clientWindowHeight, setClientWindowHeight] = useState("");



    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);

    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

 
    const sliders = [slider01, slider02, slider03]
    const [currentIndex, setCurrentIndex] = useState(0);
    const rightArrowHandler = () => {
        if (currentIndex !== sliders.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (currentIndex === sliders.length - 1) {
            setCurrentIndex(0)
        }
        console.log(currentIndex)
    }
    const leftArrowHandler = () => {
        if (currentIndex === 0) {
            setCurrentIndex(sliders.length - 1)
        } else if (currentIndex !== 3) {
            setCurrentIndex(currentIndex - 1)

        }
        console.log(currentIndex)
        // style={clientWindowHeight > 280 ? { background: "#be9e79" } : { background: "transparent" }}
    }

    return (

        <>

            <div className={styles.Grid} id="home">
                <div className={styles.hero}>
                    <Image src={sliders[currentIndex]} objectFit="cover" objectPosition={"center 80%"} alt={`hero image ${sliders[currentIndex + 1]}`} layout="fill" />
                    {/* <Image src={sliders[currentIndex + 1]} objectFit="cover" objectPosition={"center 80%"} layout="fill" /> */}
                    <div className={styles.bg} style={clientWindowHeight > 280 ? { background: "#ffff", color: "#000" } : { background: "transparent" }}>
                        <nav className={styles.nav} >
                            <div className={styles.navLogo}>
                                <Link to={"home"} spy={true} smooth={true} offset={-60} duration={500} >

                                    {clientWindowHeight > 280 ? <Image src={WadanLogoBlack} alt="logo image" layout="responsive" />
                                        : < Image src={navbarLogo} alt="logo image" layout="responsive" />
                                    }
                                </Link>
                            </div>
                            <ul>{navbarLinks.navbar.map(item => {
                                return (
                                    <Link key={item.id} to={item.route} spy={true} smooth={true} offset={-60} duration={500} >
                                        <li style={clientWindowHeight > 280 ? { color: "#000" } : { color: "#fff" }}>{item.name}</li>
                                    </Link>
                                )
                            }
                            )}</ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.overlay}>
                    <div className={styles.text}>
                        <h1>{content.title}</h1>
                        <p>{content.desc}</p>
                    </div>
                </div>
                <div className={styles.controlers}>
                    <div className={styles.controlersContent}>

                        <div className={styles.arrows}>
                            <div onClick={rightArrowHandler} className={styles.arrow1}>
                                <svg
                                    id="right-arrow_svg__Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1000 1000"
                                    width="40px"
                                >
                                    <defs>
                                        <style>{".right-arrow_svg__cls-1{fill:#010101}"}</style>
                                    </defs>
                                    <path
                                        className="right-arrow_svg__cls-1"
                                        d="M500 68.12c238.14 0 431.88 193.74 431.88 431.88S738.14 931.88 500 931.88 68.12 738.14 68.12 500 261.86 68.12 500 68.12M500 0C223.86 0 0 223.86 0 500s223.86 500 500 500 500-223.86 500-500S776.14 0 500 0Z"
                                    />
                                    <path
                                        className="right-arrow_svg__cls-1"
                                        d="m443.54 667.48 200.15-166.8-190.78-167.57-44.95 51.17 130.96 115.03-138.99 115.83 43.61 52.34z"
                                    />
                                </svg>
                                {/* <RightArrow className={styles.arrow1} width="40px" /> */}
                            </div>
                            <div className={styles.arrow2} onClick={leftArrowHandler}>
                                <svg
                                    id="left-arrow_svg__Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1000 1000"
                                    width="40px"
                                >
                                    <defs>
                                        <style>{".left-arrow_svg__cls-1{fill:#010101}"}</style>
                                    </defs>
                                    <path
                                        className="left-arrow_svg__cls-1"
                                        d="M500 68.12c238.14 0 431.88 193.74 431.88 431.88S738.14 931.88 500 931.88 68.12 738.14 68.12 500 261.86 68.12 500 68.12M500 0C223.86 0 0 223.86 0 500s223.86 500 500 500 500-223.86 500-500S776.14 0 500 0Z"
                                    />
                                    <path
                                        className="left-arrow_svg__cls-1"
                                        d="m556.46 667.48-200.15-166.8 190.78-167.57 44.95 51.17-130.96 115.03 138.99 115.83-43.61 52.34z"
                                    />
                                </svg>

                            </div>
                        </div>


                        <div className={styles.dots} dir="ltr">
                            {Array.from({ length: 3 }).map((item, index) => (
                                <div key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={currentIndex === index ? "dot filled" : "dot"}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.social}>
                    <div className={styles.socialContent}>
                        <a href="https://twitter.com/WadaanCo" target="_blank" rel="noreferrer">
                            <Twitter width="20px" />
                        </a>
                        <a href="https://instagram.com/wadaan3?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <Instagram width="20px" />
                        </a>
                        <span className={styles.line}></span>
                        <p>{content.followUs}</p>
                    </div>
                </div>
            </div>
        </>)
}