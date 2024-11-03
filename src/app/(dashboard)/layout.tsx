import { Sidebar } from "@/components/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-appBeige-100 w-full h-screen relative flex flex-col-reverse lg:flex-row">
      <Sidebar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
