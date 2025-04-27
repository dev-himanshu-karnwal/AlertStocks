"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Error logging out");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-800 text-white px-2 py-1 text-sm ml-auto cursor-pointer block rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
