"use client"; // Ensure the component runs on the client side

import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../firebase"; // Adjust path if needed

const AdminPage = () => {
  useEffect(() => {
    const fetchSignups = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mailinglist"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched sign-ups:", data); // Log fetched data
      } catch (error) {
        console.error("Error fetching sign-ups:", error);
      }
    };

    fetchSignups();
  }, []); // Run only once when component mounts

  return <div>Fetching data... Check the console!</div>;
};

export default AdminPage;
