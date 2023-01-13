import styles from "../styles/Home.module.css";
function Hero() {
  // handle when user clicks on fox
  const handleMouseHover = () => {
    const hero = document.getElementById("hero");
    hero.style.visibility = "hidden";
    hero.style.opacity = "0";
    hero.style.transition = "visibility 0s 1s, opacity 1s linear";
    setTimeout(() => {
      hero.style.display = "none";
      const form = document.getElementById("form");
      form.style.display = "flex";
      form.style.visibility = "visible";
      form.style.opacity = "1";
      form.style.transition = "hidden 0s 1s, opacity 1s linear";
    }, 2000);
  };

  return (
    <div id="hero" className={styles.heroDiv}>
      <div className={styles.firstHalf}>
        <p>🚧 Builder Mode On 🚧</p>
      </div>
      <div className={styles.secondHalf}>
        <p>Making your wallet UX much more simple</p>
        <p onClick={() => handleMouseHover()}>
          Click on the <span style={{ cursor: "pointer" }}>🦊</span> to be part
          of it!!
        </p>
      </div>
    </div>
  );
}

export default Hero;
