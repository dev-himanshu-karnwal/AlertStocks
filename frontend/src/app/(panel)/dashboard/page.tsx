"use client";

import React, { useState } from "react";

import { STOCK_INDICES } from "@/app/constants/indexes";
import IndexSelect from "@/components/IndexSelect";
import IndexStats from "@/components/IndexStats";
import IndexChart from "@/components/IndexChart";
import LogoutButton from "@/components/ui/LogoutButton";

export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(STOCK_INDICES[0].id);

  return (
    <div className="container mx-auto p-4">
      <LogoutButton />
      <h1 className="text-3xl font-bold text-center mb-6">Stock Dashboard</h1>

      <IndexSelect selectedIndex={selectedIndex} onSelect={setSelectedIndex} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <IndexStats index={selectedIndex} />
        <IndexChart index={selectedIndex} />
      </div>
    </div>
  );
}
