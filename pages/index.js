import styles from "../styles/Home.module.css";
import waitlist from "@zootools/waitlist-js";

function App() {
  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("bVywIx9HNRJhUMyx3sl5")
  }

  return (
    <div >
      <div className={styles.leftDiv }>
        <div className={styles.firstHalf}>
          <p>Builder Mode On</p>
        </div>
        <div className={styles.secondHalf}>
          <p>Your Go-To Wallet Guardian</p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <p>Join Our Waitlist</p>
        <button onClick={clickPopup}>Join waitlist!</button>
      </div>
    </div>
  );
}

export default App;
