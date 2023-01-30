import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <strong>DEMO INC.</strong> would like to know:
      </div>

      <div className={styles.question}>How is your week going?</div>

      <div className={styles.flex}>
        {[
          "https://assets.butterfly.ai/email-images/mood-1.v2.png",
          "https://assets.butterfly.ai/email-images/mood-2.v2.png",
          "https://assets.butterfly.ai/email-images/mood-3.v2.png",
          "https://assets.butterfly.ai/email-images/mood-4.v2.png",
          "https://assets.butterfly.ai/email-images/mood-5.v2.png",
        ].map((str, i) => (
          <Image
            className={styles.mood_image}
            key={i}
            src={str}
            width={80}
            height={80}
            alt={`${i}`}
          />
        ))}
      </div>

      <div className={styles.message}>
        Your answer will always remain anonymous
      </div>
    </div>
  );
}
