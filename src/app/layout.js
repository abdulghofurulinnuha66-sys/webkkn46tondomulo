import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KKN 46 Desa Tondomulo",
  description:
    "Website resmi program Kuliah Kerja Nyata (KKN) 46 di Desa Tondomulo, Kecamatan Kedungadem, Kabupaten Bojonegoro, Jawa Timur. Membangun desa melalui program kerja nyata.",
  keywords: [
    "KKN 46",
    "Desa Tondomulo",
    "Kedungadem",
    "Bojonegoro",
    "Jawa Timur",
    "Kuliah Kerja Nyata",
  ],
  openGraph: {
    title: "KKN 46 Desa Tondomulo",
    description:
      "Mengabdi, belajar, dan berkontribusi nyata untuk kemajuan Desa Tondomulo.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1 mt-16 md:mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
