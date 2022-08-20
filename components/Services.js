import styles from '../styles/Services.module.css'
import Image from "next/image"
import { motion } from "framer-motion"



import svg1 from "../public/assets/resources/logos/services/service01.svg"
import svg2 from "../public/assets/resources/logos/services/service02.svg"
import svg3 from "../public/assets/resources/logos/services/service03.svg"
import svg4 from "../public/assets/resources/logos/services/service04.svg"
import svg5 from "../public/assets/resources/logos/services/service05.svg"
 

const content = {
    "title": "خدماتنا",
}
const items = [
    {
        "id": 0,
        "logo": svg1,
        "service": "( بانوهات ) إطارات ديكورية",
        "desc": "بديلة للديكورات الجصية واكثر صلابة واسهل تركيب"
    },
    {
        "id": 1,
        "logo": svg2,
        "service": "ارضيات البلاستيك الصلب SPC ",
        "desc": "ورق جدران بوجه بلاستيك. مقاس 15.60×1.06"
    },
    {
        "id": 3,
        "logo": svg4,
        "service": "داخلية وخارجية (WPC) تكسيات",
        "desc": "قوالب مصنوعة من عجينة من الخشب والبلاستيك لتكون اكثر صلابة ومقاومة"
    },
    {
        "id": 4,
        "logo": svg5,
        "service": "داخلية ( PVC ) تكسيات",
        "desc": "قوالب بولسترين الواح ديكورية بأشكال مختلفة ( خشبي, اسمنتي , دهان, معجون, حجري ...)"
    }, {
        "id": 2,
        "logo": svg3,
        "service": "ورق جدران",
        "desc": "بديلة للديكورات الجصية واكثر صلابة واسهل تركيب"
    }
]
export default function Services() {

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
            <div className={styles.container} id="Services">
                <div className={styles.titleContainer}>
                    <h1>
                        {content.title}
                    </h1>
                </div>
                <div className={styles.flexContainer}>
                    {items.map(item => {
                        return (
                            <div className={styles.flexCol} key={item.id}>
                                <div className={styles.imgSize} >
                                    <Image src={item.logo} width="1000" height={1000} layout="responsive" alt='our Service icon' />
                                </div>
                                <h3>{item.service}</h3>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div >


    )
}