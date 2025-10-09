import { Outlet } from "react-router-dom";
import ScrollToTop from "../scrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

function MainLayout() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar user={currentUser} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
