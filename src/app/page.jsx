"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

export default function WelomePage() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logoAndTitle}>
          <Image src={"/tasker_brand_icon.svg"} width={120} height={120} alt="Tasker logo"/>
          <h1 className={styles.mainTitle}>
            Tasker
          </h1>
        </div>
        <p className={styles.desc}>is a minimalistic, simple, effective and absolutely free way to organaise your plans!</p>
        <button className={styles.btn} onClick={() => router.push('/authorization')}><span>Get in</span></button>
        </div>
    </main>
  );
}
