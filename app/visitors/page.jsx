import VisitorsLayout from "@/components/visitors/visitors-layout";
import VisitorsList from "@/components/visitors/visitors-list";
import React from "react";

export default function Visitor() {
  return (
    <VisitorsLayout>
      <VisitorsList />
    </VisitorsLayout>
  );
}
