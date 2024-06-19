import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src="/assets/images/Logo.PNG" alt="Logo" priority height={20} />
      <span>Logo</span> {/* Normal text added here */}
    </Link>
  );
}
