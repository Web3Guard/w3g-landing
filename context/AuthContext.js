import React, { createContext, useContext, useEffect, useState } from 'react';

import { Session, User } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export const AuthContext = createContext({
  user: null,
  session: null,
});

export const AuthContextProvider = (props) => {
  const [userSession, setUserSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`);
      console.log(session)
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription;
    };
  }, []);

  const value = {
    userSession,
    user,
  };
  return <AuthContext.Provider value={value} {...props} />;

  
};

export const useUser = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a AuthContextProvider.');
    }
    return context;
  };
