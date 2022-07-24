import React from "react";
import Card from "./Card";
import Socials from "./Socials";

export default function SocialsCard() {
  return (
    <div>
      <Card p={4}>
        <p className="text-xl mb-4">Social Handles</p>
        <p className="mb-4">Follow us on your favourite social platform</p>
        <Socials />
      </Card>
    </div>
  );
}
