import styles from "../styles/About.module.css";
import Image from "next/image";
import AboutImg from "../public/assets/resources/images/hero slider/03.jpg";

import { motion } from "framer-motion";

const content = {
  title: "من نحن",
  desc: "نحن وادان , شركة تنشط في تجارة الديكورات , وتهتم بتوفير أرقى أشكالها ومُلائمة لتزيين مساحات جدرانكم وأرضياتكم، لنجعلها مُشبعة بجمال المنظر ونعومة الملمس ، ويسعدنا دوما وضع كافة خبراتنا المتراكمة منذ العام 2011م بين يديكم وتحت خدمتكم.",
};
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className={styles.flexContainer} id="about">
        <div className={styles.flexText}>
          <h1 className={styles.flexTextTitle}>{content.title}</h1>
          <p className={styles.flexTextDesc}>{content.desc}</p>
        </div>

        <div className={styles.flexImg}>
          <Image src={AboutImg} layout="responsive" alt="about us image" />
        </div>
      </div>
    </motion.div>
  );
}
