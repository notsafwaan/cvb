"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Covid Vaccination Booking</h1>

      <h1>User</h1>
      <Button type="primary" onClick={() => router.push("/user/login")}>
        Login
      </Button>
      <Button type="primary" onClick={() => router.push("/user/signup")}>
        Sign Up
      </Button>

      <h1>Admin</h1>
      <Button type="primary" onClick={() => router.push("/admin/login")}>
        Login
      </Button>
    </main>
  );
}
