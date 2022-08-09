import styles from '../styles/Footer.module.css'
import Image from "next/image"
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const content = {
    "logo": "https://raw.githubusercontent.com/vemonser/photos/b2501862d4280c6f1865c492d22573185c062830/wadan-logo-footer.svg",
    "desc": "متخصصون بالديكورات الداخلية والخارجية معنا بيتك أجمل",
    "nav": [
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
    ],
    "addresTitle": "العنوان",
    "addres": "الرياض : المركز الرئيسي : السلي 8019 شارع   . إسطنبول",
    "contact": "معلومات التواصل",
    "num": "8128870",
    "email": "admin@domainame.com"
}

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.maxWfooter}>
                <div className={styles.rightFlex}>
                    <div className={styles.logo}>
                        <Image src={content.logo} width={1000} height={1000} layout={"responsive"} alt="logo icon"/>
                    </div>
                    <div className={styles.rightFlexDesc}>
                        <p className={styles.rightFlexp}>{content.desc}</p>
                        <div className={styles.rightFlexNav}>
                            {content.nav.map(item => {
                                return (
                                    <div key={item.id} className={styles.navLinks}>
                                        <Link to={item.route} spy={true} smooth={true} offset={-60} duration={500} >
                                            <p >{item.name}</p>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.leftFlex}>
                    <div >
                        <p>{content.addresTitle}</p>
                        <p>{content.addres}</p>
                        <div className={styles.leftFlexAddres}>
                            <p>{content.contact}</p>
                            <p>{content.num}</p>
                            <p>{content.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
