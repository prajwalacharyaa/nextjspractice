"use client";
import { useState } from "react";

export default function DashboardPage2() {
  console.log("Dashboard Client component");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p> Hello, {name}!!!</p>
    </div>
  );
}
