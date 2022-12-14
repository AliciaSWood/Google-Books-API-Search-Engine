import React from "react";
import Header from "../../components/Header/Header";
import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
  return (
    <div className={styles.MainHeader}>
      <Header />
    </div>
  );
};

export default HeaderSection;
