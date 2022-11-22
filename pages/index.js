import styles from "../styles/Home.module.css";
import waitlist from "@zootools/waitlist-js";

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'
import { useUser } from "../context/AuthContext";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
function App() {
  //const { user } = useUser();
  const session = useSession()
  const supabaseClient = useSupabaseClient()
  //const supabase = useSupabaseClient()


  

  

  console.log(session)
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    })
    console.log(data)
  }
  
  async function signout(jwt) {
    const { error } = await supabaseClient.auth.signOut(jwt)
    console.log("error",error)
     

  }

  
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
        {/* <button onClick={clickPopup}>Join waitlist!</button> */}
        {!session ?<button onClick={signInWithGoogle}>Sign Up with Google</button>:<>
        <button onClick={clickPopup}>Join waitlist!</button>
        <button onClick={()=>signout(session)}>Sign Out</button></>}

      </div>
      
    </div>
  );
}

export default App;
