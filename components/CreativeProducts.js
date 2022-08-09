import styles from '../styles/CreativeProducts.module.css'
import Image from "next/image"
import LeftArrow from "../public/assets/resources/logos/hero/LeftArrow"
import RightArrow from "../public/assets/resources/logos/hero/RightArrow"

import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { useState } from 'react';
import SvgLeftArrow from '../public/assets/resources/logos/hero/LeftArrow'
import SvgRightArrow from '../public/assets/resources/logos/hero/RightArrow'
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

                        <SvgRightArrow onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        } width="40px" className={styles.rightarrw} />
                        <SvgLeftArrow onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        } width="40px" className={styles.leftarrw} />
                    </div>
                )}
            </div >

        </div>
    )


}
// function Arrow(props) {
//     return (
//         <svg
//             onClick={props.onClick}
//             className={`arrow ${props.left ? "arrow--left" : "arrow--right"} `}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <svg
//                     id="left-arrow_svg__Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1000 1000"
//                     {...props}

//                 >
//                     <defs>
//                         <style>{".left-arrow_svg__cls-1{fill:#010101}"}</style>
//                     </defs>
//                     <path
//                         className="left-arrow_svg__cls-1"
//                         d="M500 68.12c238.14 0 431.88 193.74 431.88 431.88S738.14 931.88 500 931.88 68.12 738.14 68.12 500 261.86 68.12 500 68.12M500 0C223.86 0 0 223.86 0 500s223.86 500 500 500 500-223.86 500-500S776.14 0 500 0Z"
//                     />
//                     <path
//                         className="left-arrow_svg__cls-1"
//                         d="m556.46 667.48-200.15-166.8 190.78-167.57 44.95 51.17-130.96 115.03 138.99 115.83-43.61 52.34z"
//                     />
//                 </svg>

//             )}
//             {!props.left && (
//                 <svg
//                     id="right-arrow_svg__Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1000 1000"

//                     {...props}
//                 >
//                     <defs>
//                         <style>{".right-arrow_svg__cls-1{fill:#010101}"}</style>
//                     </defs>
//                     <path
//                         className="right-arrow_svg__cls-1"
//                         d="M500 68.12c238.14 0 431.88 193.74 431.88 431.88S738.14 931.88 500 931.88 68.12 738.14 68.12 500 261.86 68.12 500 68.12M500 0C223.86 0 0 223.86 0 500s223.86 500 500 500 500-223.86 500-500S776.14 0 500 0Z"
//                     />
//                     <path
//                         className="right-arrow_svg__cls-1"
//                         d="m443.54 667.48 200.15-166.8-190.78-167.57-44.95 51.17 130.96 115.03-138.99 115.83 43.61 52.34z"
//                     />
//                 </svg>
//             )}
//         </svg>
//     )
// }



// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p1-1.png
// تكسيات ( PVC ) داخلية                                                      className={styles.ImgContainer}
//  قوالب بولسترين الواح ديكورية بأشكال مختلفة (خشبي، اسمنتي، دهان، معجون، حجري ....)

// =====================================


// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p3.png
// ورق جدران
//  ورق جدران بوجه بلاستيك.  مقاس: 1.06X15.60


// =====================================

// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p4.png
//  تكسيات ( PVC ) داخلية
//  قوالب بولسترين الواح ديكورية بأشكال مختلفة (خشبي، اسمنتي، دهان، معجون، حجري ....)

// =====================================

// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p5.png
// إطارات ديكورية ( بانوهات )
//  بديلة للديكورات الجصية واكثر صلابة واسهل تركيب

// =====================================


// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p6.png

// تكسيات (WPC) داخلية وخارجية
//  قوالب مصنوعة من عجينة من الخشب والبلاستيك لتكون أكثر صلابة ومقاومة

// =====================================


// https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p2.png

// ارضيات البلاستيك الصلب SPC
//  البديل الأفضل للباركيه  لايتأثر بالماء و يتلافى عيوب التمدد والانكماش . 

{/* <div ref={sliderRef} className="keen-slider">


<div className="keen-slider__slide number-slide1">1</div>
<div className="keen-slider__slide number-slide2">2</div>
<div className="keen-slider__slide number-slide3">
    <div className={styles.imgSlide}>
        <Image src={"https://mayada.azq1.com/wp/wadaan/wp-content/uploads/2021/10/p1-1.png"} width={794} height={722} layout="responsive" />
    </div>
</div>
<div className="keen-slider__slide number-slide4">4</div>
<div className="keen-slider__slide number-slide5">5</div>
<div className="keen-slider__slide number-slide6">6</div>
</div> */}