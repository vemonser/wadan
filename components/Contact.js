import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const content = {
  title: "لطلب إحدى خدماتنا ",
  contact: "اتصل بنـا",
  contactDetail: "تواصـل معنـا",
  addressTitle: " العنوان :  ",
  addres1: "الرياض : 1 - حي الحمراء طريق خالد بن الوليد",
  addres2: "الرياض : 2 - حي العارض طريق الملك عبدالعزيز",
  contactTitle: "معلومات التواصل : ",
  tel: "533318136",
  email: "Wadaanco4@gmail.com",
};

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className={styles.container} id="Contact">
        <div className={styles.flex}>
          <h1>{content.title}</h1>
          <div>
            <button className={styles.btn} onClick={() => setIsOpen(true)}>
              {content.contact}
            </button>
          </div>
          <div
            className={styles.active}
            style={
              isOpen
                ? { opacity: 1, display: "block" }
                : { opacity: 0, display: "none" }
            }
          >
            <div
              className={styles.overlay}
              onClick={() => setIsOpen(false)}
            ></div>
            <div className={styles.closeIcon} onClick={() => setIsOpen(false)}>
              <span></span>
              <span></span>
            </div>
            <div className={styles.box}>
              <h2 className={styles.center}>{content.contactDetail}</h2>
              <div className={styles.concatination}>
                <h3>{content.addressTitle}</h3>
                <p> {content.addres1} </p>
                <p> {content.addres2} </p>
              </div>
              <h3>{content.contactTitle}</h3>
              <a href="tel:+966533318136">{content.tel}</a>
              <p>{content.email}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
