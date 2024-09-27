import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <main>
      <h1>Welcome to RESTRO</h1>
      <h1>The food Delivery App</h1>
      <Navigation/>
    </main>
  );
}
