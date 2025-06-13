// src/components/ProtectedAdminRoute.jsx
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedAdminRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingRole, setCheckingRole] = useState(true);

  useEffect(() => {
    console.log("--- ProtectedAdminRoute Effect Start ---");
    console.log("Auth loading:", loading, "User:", user ? user.uid : "null");

    if (loading) {
      setCheckingRole(true); // Keep checking role true while auth state is loading
      console.log("Auth still loading. Keeping checkingRole true.");
      return;
    }

    if (!user) {
      setIsAdmin(false);
      setCheckingRole(false);
      console.log("No user authenticated. Setting isAdmin=false, checkingRole=false.");
      return;
    }

    const checkRole = async () => {
      setCheckingRole(true); // Start checking role
      console.log("Starting role check for UID:", user.uid);
      try {
        console.log("Firestore DB instance:", db);
        const docRef = doc(db, "roles", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().role === "admin") {
          setIsAdmin(true);
          console.log("Role document found and user IS admin.");
        } else {
          setIsAdmin(false);
          console.log("Role document NOT found or user is NOT admin. Data:", docSnap.exists() ? docSnap.data() : "does not exist");
        }
      } catch (error) {
        console.error("Error checking admin role in ProtectedAdminRoute:", error);
        setIsAdmin(false); // Assume not admin on error
      } finally {
        setCheckingRole(false); // Role check complete
        console.log("Role check finished. Current isAdmin:", isAdmin); // Note: isAdmin might be stale here due to closure
      }
    };

    checkRole();
    console.log("--- ProtectedAdminRoute Effect End ---");
  }, [user, loading, isAdmin]);

  console.log("ProtectedAdminRoute Render: loading=", loading, "checkingRole=", checkingRole, "isAdmin=", isAdmin);

  if (loading || checkingRole) {
    console.log("ProtectedAdminRoute: Displaying loading spinner.");
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  console.log("ProtectedAdminRoute: User IS admin. Rendering children.");
  return children;
}