import React from "react";
import { PastorItem } from "../../styles/Intro";
import pastor from "../../assets/images/pastor.jpg";

interface PasterItem {
  name: string;
  phone?: string;
}

export default function PasterItem({ name, phone }: PasterItem) {
  return (
    <PastorItem>
      <img src={pastor} alt="" width="100%" height="100%" />
      <p>{name}</p>
      <p>{phone}</p>
    </PastorItem>
  );
}
