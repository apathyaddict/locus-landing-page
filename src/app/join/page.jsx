"use client";

import { AuroraBackground } from "@/components/ui/AuroraBakcground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { db } from "../../../firebase";
import Footer from "../components/Footer";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const JoinPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    profession: "",
    province: "",
  });

  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!formData.email || !formData.profession || !formData.province) {
      setError("All fields are required.");
      return;
    }

    try {
      // Check if the email already exists
      const q = query(
        collection(db, "mailinglist"),
        where("email", "==", formData.email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast({
          title: "Error",
          description: "This email is already sign up.",

          variant: "destructive",
        });
        return;
      }

      const docRef = await addDoc(collection(db, "mailinglist"), formData);

      if (docRef.id) {
        toast({
          title: "Success!",
          description: "You have successfully joined the mailing list.",
        });
        setFormData({ email: "", profession: "", province: "" }); // Reset form
      } else {
        toast({
          title: "Error",
          description: "There was an issue submitting your form.",

          variant: "destructive",
        });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",

        variant: "destructive",
      });
    }
  };

  return (
    <>
      <section className="bg-dot-black/[0.1]  ">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4   px-4 ">
            <div className="h-[300px]"></div>
            <div className="flex flex-col max-w-lg mx-auto  px-6 rounded-lg sm:shadow-lg bg-white/50 sm:border py-6">
              <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-4">
                Join our mailing list
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Sign up to receive updates and be notified when LOCVM goes live.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Profession Field */}
                <div className="mb-4">
                  <label
                    htmlFor="profession"
                    className="block text-sm font-medium text-gray-700">
                    Profession
                  </label>
                  <Input
                    type="text"
                    name="profession"
                    id="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Doctor, Nurse..."
                  />
                </div>

                {/* Province Dropdown */}
                <div className="mb-4">
                  <label
                    htmlFor="province"
                    className="block text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <select
                    name="province"
                    id="province"
                    value={formData.province}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                    <option value="" disabled>
                      Select your province
                    </option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                {/* Submit Button */}
                <div className="flex justify-center mt-10">
                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md">
                    Sign up for Updates
                  </Button>
                </div>
              </form>
              <p className="mt-4 text-gray-500 text-sm">
                We will not share your email with anyone and we will only use it
                to send you relevant and timely updates.
              </p>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>
    </>
  );
};

export default JoinPage;
