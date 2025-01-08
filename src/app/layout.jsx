import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Algonux",
  description: "A coding Giant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="p-4 lg:py-2 overflow-hidden">
          <Header />
          <div className="mt-19">{children}</div>
        </div>
      </body>
    </html>
  );
}
