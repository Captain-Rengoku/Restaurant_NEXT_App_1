import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <main className="header-main">
      <div className="header-wrapper">
        <div className="logo">
          <img style={{ width: 100 }} src="food.png" alt="APP LOGO" />
        </div>
        <ul>
          <li>
            Go back to
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login / Sign up</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default RestaurantHeader;
