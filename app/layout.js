"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <a onClick={() => router.push("/")}>Home</a>
          </Menu.Item>
          <Menu.Item key="user">
            <a onClick={() => router.push("/user/login")}>User</a>
          </Menu.Item>
          <Menu.Item key="admin">
            <a onClick={() => router.push("/admin/login")}>Admin</a>
          </Menu.Item>
        </Menu>
        {children}
      </body>
    </html>
  );
}
