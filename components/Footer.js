import styles from '../styles/Footer.module.css'
import Image from "next/image"
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { motion } from "framer-motion"


const content = {
    "logo": "https://raw.githubusercontent.com/vemonser/photos/b2501862d4280c6f1865c492d22573185c062830/wadan-logo-footer.svg",
    "desc": "متخصصون بالديكورات الداخلية والخارجية معنا بيتك أجمل",
    "nav": [
        {
            "name": "الرئيسية",
            "route": "home"
        },
        {
            "name": "من نحن",
            "route": "about"
        }, {
            "name": "خدماتنا",
            "route": "Services"
        },
        , {
            "name": "منتجاتنا الإبداعية",
            "route": "CreativeProducts"
        }, {
            "name": "اتصل بنا",
            "route": "Contact"
        }
    ],
    "addresTitle": "العنوان",
    "addres1": "الرياض : 1 - حي الحمراء طريق خالد بن الوليد",
    "addres2": "الرياض : 2 - حي العارض طريق الملك عبدالعزيز",
    "contact": "معلومات التواصل",
    "num": "0545178717",
    "email": "admin@domainame.com"
}

export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
            <div className={styles.footer}>
                <div className={styles.maxWfooter}>
                    <div className={styles.rightFlex}>
                        <div className={styles.logo}>
                            <Image src={content.logo} width={1000} height={1000} layout={"responsive"} alt="logo icon" />
                        </div>
                        <div className={styles.rightFlexDesc}>
                            <p className={styles.rightFlexp}>{content.desc}</p>
                        </div>
                        {/* <div className={styles.rightFlexNav}>
                            {content.nav.map(item => {
                                return (
                                    <div key={item.id} className={styles.navLinks}>
                                        <Link to={item.route} spy={true} smooth={true} offset={-60} duration={500} >
                                            <p >{item.name}</p>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div> */}
                    </div>
                    <div className={styles.leftFlex}>
                        <div className={styles.mobileLayout}>
                            <h4>{content.addresTitle}</h4>
                            <p>{content.addres1}</p>
                            <p>{content.addres2}</p>
                            <div className={styles.leftFlexAddres}>
                                <h4>{content.contact}</h4>
                                <p>{content.num}</p>
                                <p>{content.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}
