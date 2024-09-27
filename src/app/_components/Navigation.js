import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
        <a className="a">Click the Image</a>
          <Link className="Link" href="/restaurant">
            <div>
                <Image src="/food.png" width={300} height={300} alt="App Logo"/>
            </div>
          </Link>
    </div>
  );
};

export default Navigation;
