import styles from "./about.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">
        Start with us now for clean body and
        <br />
        mind !!
      </h1>
    </div>
  );
};

export default HeroSection;
