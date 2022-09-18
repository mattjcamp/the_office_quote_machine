import styles from "../styles/Home.module.css";
import OfficeQuoter from "../components/office_quoter";

export default function Home() {
  return (
    <div className={styles.container}>
      <OfficeQuoter />
    </div>
  );
}
