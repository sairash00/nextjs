import Navbar from '@/components/Navbar';
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full  antialiased`}
    >
        <body className="h-screen w-screen flex ">
        <Navbar /> 
        <div>{children}</div>
        </body>
      
    </html>
  );
}
