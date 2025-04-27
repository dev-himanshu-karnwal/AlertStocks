"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import toast from "react-hot-toast";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If logged in, go to dashboard
        router.replace("/dashboard");
        toast.success("Logged in successfully");
      } else {
        // Otherwise, go to login
        router.replace("/login");
        toast.error("Not logged in");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  );
}
