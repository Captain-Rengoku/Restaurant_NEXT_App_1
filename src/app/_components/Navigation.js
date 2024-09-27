import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <p className="p">Click the Image</p>
      <div className="linkdiv">
        <Link className="Link" href="/restaurant">
          <Image src="/food.png" width={300} height={300} alt="App Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
