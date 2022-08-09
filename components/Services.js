import styles from '../styles/Services.module.css'
import Image from "next/image"
import { motion } from "framer-motion"

const content = {
    "title": "خدماتنا",
}
const items = [
    {
        "id": 0,
        "logo": "https://raw.githubusercontent.com/vemonser/photos/3fb181665249fe898c95c24188b76f7b8bd23293/01.svg",
        "service": "( بانوهات ) إطارات ديكورية",
        "desc": "بديلة للديكورات الجصية واكثر صلابة واسهل تركيب"
    },
    {
        "id": 1,
        "logo": "https://raw.githubusercontent.com/vemonser/photos/3fb181665249fe898c95c24188b76f7b8bd23293/02.svg",
        "service": "ارضيات البلاستيك الصلب SPC ",
        "desc": "ورق جدران بوجه بلاستيك. مقاس 15.60×1.06"
    },
    {
        "id": 3,
        "logo": "https://raw.githubusercontent.com/vemonser/photos/3fb181665249fe898c95c24188b76f7b8bd23293/04.svg",
        "service": "داخلية وخارجية (WPC) تكسيات",
        "desc": "قوالب مصنوعة من عجينة من الخشب والبلاستيك لتكون اكثر صلابة ومقاومة"
    },
    {
        "id": 4,
        "logo": "https://raw.githubusercontent.com/vemonser/photos/3fb181665249fe898c95c24188b76f7b8bd23293/05.svg",
        "service": "داخلية ( PVC ) تكسيات",
        "desc": "قوالب بولسترين الواح ديكورية بأشكال مختلفة ( خشبي, اسمنتي , دهان, معجون, حجري ...)"
    }, {
        "id": 2,
        "logo": "https://raw.githubusercontent.com/vemonser/photos/3fb181665249fe898c95c24188b76f7b8bd23293/03.svg",
        "service": "ورق جدران",
        "desc": "بديلة للديكورات الجصية واكثر صلابة واسهل تركيب"
    }
]
export default function Services() {

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1}}}
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