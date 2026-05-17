import Navbar from '@/components/Navbar';
import '../globals.css'
import IplPageCommon from '@/components/IplPageCommon';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`  antialiased`}
    >
        <body className="h-screen flex">
            <div className=" w-[80vw] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700  bg-gray-800 flex flex-col gap-4  px-8 py-4  " >
                <IplPageCommon/>
                <div>{children}</div>
            </div>
        </body>
      
    </html>
  );
}
