import styles from "../styles/Home.module.css";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
//import { useUser } from "../context/AuthContext";
import Hero from "../components/Hero";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
function App() {
  const [error, setError] = useState("Invalid Email");
  const session = useSession();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    const form = document.getElementById("form");
    if (session) form.style.display = "flex";
    form.style.visibility = "visible";
    form.style.opacity = "1";
    form.style.transition = "hidden 0s 1s, opacity 1s linear";
  }, [session]);

  // sign with google
  async function signInWithGoogle(e) {
    e.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}`,
      },
    });
    console.log(data);
  }

  // sign out of google
  async function signout(jwt) {
    // const { error } = await supabaseClient.auth.signOut(jwt);
    // console.log("error", error);
  }

  return (
    <div className={styles.mainDiv}>
      {!session && <Hero />}
      <div id="form" className={styles.waitlistDiv}>
        {!session ? (
          <div
            onClick={(e) => {
              signInWithGoogle(e);
            }}
          >
            <p style={{ cursor: "pointer" }}>
              {" "}
              🚀 Join the waitlist via Google 🚀
            </p>
          </div>
        ) : (
          <>
            <Confetti numberOfPieces={150} />
            <p onClick={signout}>🥳 YUHUUU!! You made it to our waitlist</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
