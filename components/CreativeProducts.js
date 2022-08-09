import styles from '../styles/CreativeProducts.module.css'
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import LeftArrow from "../public/assets/resources/logos/CreativeProducts arrows/LeftArrow"
import RightArrow from "../public/assets/resources/logos/CreativeProducts arrows/RightArrow"
import "keen-slider/keen-slider.min.css"
import { motion } from "framer-motion"

import { useState } from 'react';

const content = {
    "title": "منتجاتنا الإبداعية"
}
const items = [
    {
        id: 0,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p1-1.png",
        OnHoverTitle: "تكسيات ( PVC ) داخلية",
        OnHoverDesc: "قوالب بولسترين الواح ديكورية بأشكال مختلفة (خشبي، اسمنتي، دهان، معجون، حجري ....)"
    },

    {
        id: 1,
        img: "https://github.com/vemonser/photos/blob/main/02.jpeg?raw=true",
        OnHoverTitle: "قوالب بولسترين الواح ديكورية بأشكال مختلفة ( خشبي, اسمنتي , دهان, معجون, حجري ...)",
        OnHoverDesc: "قوالب بولسترين الواح ديكورية بأشكال مختلفة ( خشبي, اسمنتي , دهان, معجون, حجري ...)"
    },
    {
        id: 2,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p3.png",
        OnHoverTitle: "ورق جدران",
        OnHoverDesc: "ورق جدران بوجه بلاستيك.  مقاس: 1.06 × 15.60"
    },
    {
        id: 3,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p4.png",
        OnHoverTitle: " تكسيات ( PVC ) داخلية",
        OnHoverDesc: " قوالب بولسترين الواح ديكورية بأشكال مختلفة (خشبي، اسمنتي، دهان، معجون، حجري ....)"
    },
    {
        id: 4,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p5.png",
        OnHoverTitle: "إطارات ديكورية ( بانوهات )",
        OnHoverDesc: "بديلة للديكورات الجصية واكثر صلابة واسهل تركيب"
    },
    {
        id: 5,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p6.png",
        OnHoverTitle: "تكسيات (WPC) داخلية وخارجية",
        OnHoverDesc: "قوالب مصنوعة من عجينة من الخشب والبلاستيك لتكون أكثر صلابة ومقاومة"
    },
    {
        id: 6,
        img: "https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p2.png",
        OnHoverTitle: "ارضيات البلاستيك الصلب SPC",
        OnHoverDesc: "البديل الأفضل للباركيه  لايتأثر بالماء و يتلافى عيوب التمدد والانكماش"
    },
]
export default function CreativeProducts() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

        breakpoints: {
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })

    const [hoverd, setHoverd] = useState()
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
            <div className={styles.container} id="CreativeProducts">
                <div className={styles.mainTitle}>
                    <h1>{content.title}</h1>
                </div>
                <div className={` navigation-wrapper  ${styles.flexImgsContainer}`}>
                    <div ref={sliderRef} className="keen-slider">

                        {items.map(item => {
                            return (
                                <div key={item.id} onMouseEnter={() => setHoverd(item.id)} onMouseOut={() => setHoverd("")} className={`keen-slider__slide number-slide${item.id + 1}`}>
                                    <div onMouseEnter={() => setHoverd(item.id)} className={styles.imgSlide}>
                                        <Image src={item.img} width={794} height={722} layout="responsive" objectFit={"cover"} objectPosition=" center right" alt={`our Creative Products image number ${item.id + 1} `} />
                                    </div>
                                    <div className={styles.desc} style={hoverd === item.id ? { display: "flex", position: "absolute", bottom: "0%", zIndex: "20", transition: "all 500ms ease ", color: "#fff", background: "#be9e7999" } : { color: "#fff", display: "flex", opacity: 0, transition: "all 500ms ease ", position: "absolute", bottom: "20%", zIndex: "20" }} onMouseEnter={() => setHoverd(item.id)}  >
                                        <h3 onMouseEnter={() => setHoverd(item.id)}>{item.OnHoverTitle}</h3>
                                        <p onMouseEnter={() => setHoverd(item.id)} >{item.OnHoverDesc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {loaded && instanceRef.current && (
                        <div  >

                            <RightArrow onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            } width="40px" className={styles.rightarrw} />
                            <LeftArrow onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            } width="40px" className={styles.leftarrw} />
                        </div>
                    )}
                </div >

            </div>
        </motion.div>

    )


}
