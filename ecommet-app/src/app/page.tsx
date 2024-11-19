import Image from "next/image";
import styles from "./page.module.css";
import { HomeComponent } from "./lib/HomeComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeComponent />
    </div>
  );
}
