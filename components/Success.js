import styles from "../styles/Success.module.css";
import Confetti from "react-confetti";

function Success() {
  return (
      <div className={styles.successDiv}>
        <Confetti numberOfPieces={150} />
        <p>Hang on tight!! You are in our waitlist!!</p>
      </div>
  );
}

export default Success;
