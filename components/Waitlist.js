import styles from "../styles/Home.module.css";
import Success from "./Success";
function Waitlist(session) {
  // sign with google
  async function signInWithGoogle(e) {
    e.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
    console.log(data);
  }

  // sign out of google
  async function signout(jwt) {
    const { error } = await supabaseClient.auth.signOut(jwt);
    console.log("error", error);
  }
  return (
    <div id="form" className={styles.rightDiv}>
      {!session ? (
        <div>
          <p
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              signInWithGoogle(e);
            }}
          >
            {" "}
            🚀 Join the waitlist via Google 🚀
          </p>
        </div>
      ) : (
        <>
          <Success />
        </>
      )}
    </div>
  );
}

export default Waitlist;
