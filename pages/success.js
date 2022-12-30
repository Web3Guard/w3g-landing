import styles from "../styles/Home.module.css";
import Success from "../components/Success";
import Confetti from "react-confetti";
function success() {
  return (
    <div className={styles.mainDiv}>
     <div >
        <Confetti numberOfPieces={150} />
        <p>Hang on tight!! You are in our waitlist!!</p>
      </div>
    </div>
  );
}

export default success;
