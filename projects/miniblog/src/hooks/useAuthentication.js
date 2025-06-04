import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect, use } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // cleanup
  // TODO: study about memory leaks in React
  // the lesson didn't explain this well
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      return user;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // TODO: really study about memory leaks in React
  // the lesson didn't explain this well
  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
