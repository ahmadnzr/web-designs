import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lamamia",
  description: "Lamamia Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
