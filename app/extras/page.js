import React from "react";
import CheatVault from "@/components/cheat-vault";
import WidthConstraint from "@/components/width-constraint";

export default function Extras() {
  return (
    <WidthConstraint className="mt-32">
      <CheatVault />
    </WidthConstraint>
  );
}
