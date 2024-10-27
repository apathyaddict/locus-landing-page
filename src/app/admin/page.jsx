"use client"; // Ensure this page runs on the client

import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { db } from "../../../firebase";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

const AdminPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchSignups = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "mailinglist"));
          const data = querySnapshot.docs.map((doc) => doc.data());

          setSignups(data);
        } catch (error) {
          console.error("Error fetching sign-ups:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSignups();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleLogin}
          className="space-y-10 p-8 border rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Skeleton className="w-1/2 h-12" />
      </div>
    );
  }

  // Process data for charts
  const provinceCounts = {};
  const professionCounts = {};

  signups.forEach((user) => {
    // Count provinces
    if (user.province) {
      provinceCounts[user.province] = (provinceCounts[user.province] || 0) + 1;
    }
    // Count professions
    if (user.profession) {
      professionCounts[user.profession] =
        (professionCounts[user.profession] || 0) + 1;
    }
  });

  const provinceData = Object.entries(provinceCounts).map(
    ([province, count]) => ({
      province,
      count,
    })
  );

  const professionData = Object.entries(professionCounts).map(
    ([profession, count]) => ({
      profession,
      count,
    })
  );

  const chartConfig = {
    province: {
      label: "Province",
      color: "#4fd1c5", // Teal color
    },
    profession: {
      label: "Profession",
      color: "#3b82f6", // Blue color
    },
  };

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-sm text-gray-500">
        Monitor your newsletter sign-ups and statistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Total Sign-ups</h2>
          <p className="text-4xl font-bold mt-2">{signups.length}</p>
        </div>

        {/* <div className="border rounded-lg p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <ul className="space-y-2">
            {signups.length > 0 ? (
              signups.map((user, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{user.email}</span> -{" "}
                  {user.province || "Unknown"}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No sign-ups found.</p>
            )}
          </ul>
        </div> */}

        <div className="border rounded-lg p-6  ">
          <h2 className="text-xl font-semibold mb-4">Province Distribution</h2>
          <ChartContainer
            config={chartConfig.province}
            className="min-h-[200px] w-full">
            <BarChart data={provinceData}>
              <XAxis dataKey="province" />
              {/* <YAxis />
              <Tooltip /> */}
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Bar
                dataKey="count"
                fill={chartConfig.province.color}
                radius={4}
              />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Profession Distribution
          </h2>
          <ChartContainer
            config={chartConfig.profession}
            className="min-h-[200px] w-full">
            <BarChart data={professionData}>
              <XAxis dataKey="profession" />

              <Bar
                dataKey="count"
                fill={chartConfig.profession.color}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
