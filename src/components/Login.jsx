// src/components/Login.jsx
import React, { useState, useEffect } from "react";
import { auth, googleProvider, db } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [redirectMessage, setRedirectMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      setRedirectMessage(location.state.message);
    }
    // No longer calling testFirestoreRead here
  }, [location.state]);

  const handleLoginSuccess = async (userCredential) => {
    setUser(userCredential.user);
    setError("");
    setRedirectMessage(""); // Clear any redirect message on successful login

    const userId = userCredential.user.uid;
    console.log("--- Login Success Debug ---");
    console.log("Logged in user UID:", userId); // Log the user's UID
    console.log("Firestore DB instance (Login - before test read):", db);

    // --- TEMPORARY TEST READ (MOVED HERE) ---
    // This function will now only run AFTER a user has successfully logged in
    const testFirestoreReadAuthenticated = async () => {
      console.log("--- Starting Authenticated Test Firestore Read ---");
      try {
        const testDocRef = doc(db, "test_reads", "my_test_doc");
        console.log("Attempting to read test_reads/my_test_doc (as authenticated user)");
        const testDocSnap = await getDoc(testDocRef);

        if (testDocSnap.exists()) {
          console.log("AUTHENTICATED TEST SUCCESS: Test document found!");
          console.log("Test data:", testDocSnap.data());
        } else {
          console.log("AUTHENTICATED TEST FAILURE: Test document NOT found. This is critical.");
        }
      } catch (e) {
        console.error("AUTHENTICATED TEST ERROR: Error reading test document:", e);
      } finally {
        console.log("--- Authenticated Test Firestore Read End ---");
      }
    };
    await testFirestoreReadAuthenticated(); // Await this test read as well
    // --- END TEMPORARY TEST READ ---

    // Now, proceed with the actual admin role check
    const docRef = doc(db, "roles", userId);
    console.log("Firestore DB instance (Login - after test read):", db);
    console.log("Attempting to get role document for UID:", userId);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userRole = docSnap.data().role;
        console.log("Role document exists. User role:", userRole);
        if (userRole === "admin") {
          console.log("User is admin. Redirecting to /admin.");
          navigate("/ProtectedAdminRoute"); // Redirect to admin page if admin
        } else {
          console.log("User is not admin. Redirecting to /store.");
          navigate("/store"); // Redirect to store home or other default page
        }
      } else {
        console.log("Role document does NOT exist for UID:", userId, ". Redirecting to /store.");
        navigate("/store"); // Role document doesn't exist, assume not admin
      }
    } catch (firestoreError) {
      console.error("Error fetching role document from Firestore:", firestoreError);
      navigate("/store"); // On error, redirect to store
    }
    console.log("--- End Login Success Debug ---");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleLoginSuccess(result);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await handleLoginSuccess(result);
    } catch (err) {
      setError("Credenciales incorrectas o usuario no registrado.");
    }
  };

  const handleRegister = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await handleLoginSuccess(result);
      // Optional: Automatically assign a default role (e.g., "user") upon registration
      // await setDoc(doc(db, "roles", result.user.uid), { role: "user" });
    } catch (err) {
      setError("No se pudo registrar. Intenta con otro correo.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setRedirectMessage("");
    navigate("/login");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      {user ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Hola, {user.email}</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
          {redirectMessage && (
            <p className="text-yellow-600 bg-yellow-100 border-l-4 border-yellow-500 p-2 mb-2">
              {redirectMessage}
            </p>
          )}
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded"
          />
          <div className="flex gap-2 mb-4">
            <button
              onClick={handleEmailLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Iniciar sesión
            </button>
            <button
              onClick={handleRegister}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Registrarse
            </button>
          </div>
          <button
            onClick={handleGoogleLogin}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 w-full"
          >
            Iniciar con Google
          </button>
        </>
      )}
    </div>
  );
}