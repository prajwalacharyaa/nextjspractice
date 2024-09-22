import React from "react";
import Card from "@/components/card";
import Link from "next/link";

export default function ArchievedNotifications() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
