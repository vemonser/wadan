import navbarLogo from "../public/assets/resources/logos/hero/wadan-logo.svg"
import styles from '../styles/Hero.module.css';
import Image from "next/image";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import slider01 from "../public/assets/resources/images/hero slider/01.jpg"
import slider02 from "../public/assets/resources/images/hero slider/02.jpg"
import slider03 from "../public/assets/resources/images/hero slider/03.jpg"
import Twitter from "../public/assets/resources/logos/hero/Twitter"
import Instagram from "../public/assets/resources/logos/hero/Instagram"
import LeftArrow from "../public/assets/resources/logos/hero/LeftArrow"
import RightArrow from "../public/assets/resources/logos/hero/RightArrow"
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
                                {clientWindowHeight > 280 ? <Image src={WadanLogoBlack} alt="logo image" layout="responsive" />
                                    : < Image src={navbarLogo} alt="logo image" layout="responsive" />
                                }
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
                            <div onClick={rightArrowHandler} >
                                <RightArrow className={styles.arrow1} width="40px" />
                            </div>
                            <div className={styles.arrow2} onClick={leftArrowHandler}>
                                <LeftArrow width="40px" />
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
                        <Twitter width="20px" />
                        <Instagram width="20px" />
                        <span className={styles.line}></span>
                        <p>{content.followUs}</p>
                    </div>
                </div>
            </div>
            </>    )
}