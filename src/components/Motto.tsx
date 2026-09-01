"use client";

import styles from "./MottoSection.module.css";

export default function MottoSection() {
  return (
    <section className={styles.mottoSection}>
      <div className={styles.overlayWord}>BUILD</div>

      <div className={styles.content}>
        <h1 className={styles.primary}>
          We Don’t Just Build Products.
        </h1>

        <h2 className={styles.emphasis}>
          We Build Impact.
        </h2>

        <p className={styles.support}>
          Thoughtful design. Intentional engineering.
          Solutions that move businesses forward.
        </p>
      </div>
    </section>
  );
}