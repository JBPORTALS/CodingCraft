import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen text-base flex">
      <Sidebar />
      <div className="text-4xl font-extrabold flex flex-col items-center justify-between p-4 w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
