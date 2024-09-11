import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
};

function BarChart() {
  return <h1> Bar Chart</h1>;
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
    </div>
  );
}
 