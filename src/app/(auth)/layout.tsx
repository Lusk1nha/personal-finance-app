import { AuthHeader } from "@/components/auth-header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-appBeige-100 w-full h-screen flex relative">
      <div className="w-full h-full flex items-start justify-start gap-4 flex-col lg:flex-row lg:p-10">
        <AuthHeader />
        {children}
      </div>
    </div>
  );
}
