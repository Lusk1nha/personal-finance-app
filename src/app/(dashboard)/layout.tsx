import { Sidebar } from "@/components/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-appBeige-100 w-full h-screen relative flex">
      <Sidebar />

      <div className="w-full h-full pb-[52px] md:pb-[74px] lg:pb-0">
        {children}
      </div>
    </div>
  );
}
