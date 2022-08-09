import styles from '../styles/About.module.css'
import Image from "next/image"
import AboutImg from "../public/assets/resources/images/about/about.jpg"

const content = {
    "title": "من نحن",
    "desc": "كانت البدايات في تجارة الملابس و مواد التجميل , وفي عام 2010 بدأت الشركة في تجارة الديكوات ( مبيعات الجملة ) ونتيجة لثقة عملائنا توسعت الشركة باقتتاح قرعها في جدة ثم قرعها في الدمام, واستمرت الشركة في إضافة منتجات ديكورية جديدة ."
}
export default function About() {

    return (
        <div className={styles.flexContainer} id="about">
            <div className={styles.flexText}>
                <h1 className={styles.flexTextTitle}>{content.title}</h1>
                <p className={styles.flexTextDesc}>{content.desc}</p>
            </div>
            <div className={styles.flexImg}>

                    <Image src={AboutImg} layout="responsive" alt='about us image'/>
            </div>

        </div>
    )
}