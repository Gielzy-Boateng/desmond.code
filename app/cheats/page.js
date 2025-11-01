'"use client";';

import React from "react";
import CheatVault from "@/components/cheat-vault";
import WidthConstraint from "@/components/width-constraint";

export default function Cheats() {
  return (
    <WidthConstraint className="mt-32">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Code Cheat Vault
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Welcome to my collection of code snippets, tips, and resources from my
          YouTube tutorials. Find helpful code examples and development tricks
          mentioned in my videos, all in one place.
        </p>
      </div>
      <CheatVault />
    </WidthConstraint>
  );
}
