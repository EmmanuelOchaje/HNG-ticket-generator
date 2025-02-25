import { Afacad, Geist, Geist_Mono, Road_Rage } from "next/font/google";
import "./globals.css";

/* const afacad = Afacad({
  variable: "--afacad",
  subsets: ["latin"],
}); */

const roadRage = Road_Rage({
  weight: "400",
  variable: "--road-rage",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roadRage.variable}`}>{children}</body>
    </html>
  );
}
