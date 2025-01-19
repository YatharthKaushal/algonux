import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Algonux",
  description:
    "Algonux diverse services empower your business with seamless website development, AI integration, SaaS solutions, automation, app creation, backend management, and ongoing website maintenance,ensuring scalability, efficiency, and innovation at every step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="p-4 lg:py-2 overflow-hidden">
          <Header />
          <div className="mt-19">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
