import { Sidebar } from "@/components/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-appBeige-100 w-full h-full relative flex">
      <Sidebar />

      <div className="w-full min-h-screen h-full px-200 py-300 md:p-500 pb-[52px] md:pb-[74px] lg:pb-400">
        {children}
      </div>
    </div>
  );
}
