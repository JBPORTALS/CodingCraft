import Sidebar from "@/components/sidebar";
import RightBar from "@/components/rightbar";

export default function PrivateRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"h-full w-full grid grid-cols-12 overflow-hidden"}>
      <Sidebar />
      <div className="col-span-8">{children}</div>
      <RightBar />
    </div>
  );
}
