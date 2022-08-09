import styles from '../styles/Partners.module.css'
import Image from "next/image"

const content = { "title": "شركائنا" }


// const items = [
//     {
//         "logo": "https://github.com/vemonser/photos/blob/main/01.png?raw=true"

//     },
//     {
//         "logo": "https://github.com/vemonser/photos/blob/main/02.png?raw=true"
//     },
//     {
//         "logo": "https://github.com/vemonser/photos/blob/main/03.png?raw=true"
//     },
//     {
//         "logo": "https://github.com/vemonser/photos/blob/main/04.png?raw=true"
//     },
//     {
//         "logo": "https://github.com/vemonser/photos/blob/main/05.png?raw=true"
//     }
// ]


export default function Partners() {
    return (
        <div className={styles.fullWidth}>
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>
                    {content.title}
                </h1>
            </div>
            <div className={styles.flexImgsContainer}>
                <div className={styles.flexImg}>
                    <Image src={"https://github.com/vemonser/photos/blob/main/01.png?raw=true"} width={113} height={113} layout="responsive" alt='our Partners' />
                </div>
                <div className={styles.flexImg}>
                    <Image src={"https://github.com/vemonser/photos/blob/main/02.png?raw=true"} width={95} height={94} layout="responsive" alt='our Partners' />
                </div>
                <div className={styles.flexImg}>
                    <Image src={"https://github.com/vemonser/photos/blob/main/03.png?raw=true"} width={334} height={142} layout="responsive" alt='our Partners' />
                </div>
                <div className={styles.flexImg}>
                    <Image src={"https://github.com/vemonser/photos/blob/main/04.png?raw=true"} width={311} height={311} objectFit="cover" objectPosition={"center 0%"} layout="responsive" alt='our Partners' />
                </div>
                <div className={styles.flexImg}>
                    <Image src={"https://github.com/vemonser/photos/blob/main/05.png?raw=true"} width={569} height={439} layout="responsive" alt='our Partners' />
                </div>

                {/* {items.map(item => {
                    return (
                        <div className={styles.flexImg}>
                            <Image width={95} height={94} src={item.logo} objectFit="cover" layout="responsive" />
                        </div>
                    )
                })} */}
            </div>
        </div>
    </div>
    )

}
