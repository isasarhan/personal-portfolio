import "./globals.css";
import Navbar from "@/components/common/navbar";
import CustomerCursor from "@/components/customer-cursor";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CustomerCursor />
        {children}
      </body>
    </html>
  );
}
