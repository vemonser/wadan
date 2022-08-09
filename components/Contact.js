import styles from '../styles/Contact.module.css'
import Image from "next/image"
import { useState } from 'react';

const content =

{
    "title": "تريد التواصل معنا وطلــب أحــد خدمــاتنــا",
    "contact": "اتصل بنـا",
    "contactDetail": "معلومات التواصل ",
    "addressTitle": " العنوان :  ",
    "address": " الرياض : المركز الرئيسي: السلي 8019 شارع.إسطنبول   ",
    "tel": "8128870",
    "email": "admin@domainame.com"
}

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.container} id="Contact">

            <div className={styles.flex}>
                <h1>{content.title}</h1>
                <div>
                    <button className={styles.btn} onClick={() => setIsOpen(true)}>{content.contact}</button>
                </div>
                <div className={styles.active} style={isOpen ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} >

                    <div className={styles.overlay} onClick={() => setIsOpen(false)} >
                    </div>
                    <div className={styles.closeIcon} onClick={() => setIsOpen(false)}>
                        <span ></span>
                        <span ></span>
                    </div>
                    <div className={styles.box}>
                        <h2 className={styles.center}>{content.contactDetail}</h2>
                        <div className={styles.concatination}>
                            <h3>{content.addressTitle}</h3>
                            <p> {content.address} </p>
                        </div>
                        <h3>{content.tel}</h3>
                        <p>{content.email}</p>

                    </div>
                </div>
            </div>
        </div>)
        

}
