import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./(components)/layouts/header";
import Footer from "./(components)/layouts/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: "RPEC – India's Premier Network for Commercial Real Estate",
  description:
    "Connecting Office, Retail, Hospitality, Logistics & Investments with Global Opportunities. One Network. Endless Possibilities.",
  keywords: "commercial real estate, CRE network, India, office space, retail, logistics, investments",
  openGraph: {
    title: "RPEC – India's Premier Network for Commercial Real Estate",
    description: "One Network. Endless Possibilities.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-white text-gray-900">

        {/* ── Header ── */}
        <Header />

        {/* ── Page Content ── */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* ── Footer ── */}
        <Footer />

      </body>
    </html>
  );
}