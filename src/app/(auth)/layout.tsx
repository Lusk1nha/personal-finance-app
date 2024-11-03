import { Logo } from "@/components/logo";
import Image from "next/image";

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

function AuthHeader() {
  return (
    <>
      <div className="w-full flex lg:hidden">
        <MobileAuthHeader />
      </div>

      <div className="hidden h-full lg:flex">
        <DesktopAuthHeader />
      </div>
    </>
  );
}

function MobileAuthHeader() {
  return (
    <div className="bg-appGrey w-full min-h-[70px] rounded-b-100 flex items-center justify-center">
      <Logo title="Logo" ariaDescription="Logo" type="full" />
    </div>
  );
}

function DesktopAuthHeader() {
  return (
    <div className="bg-appGrey relative min-w-[560px] w-full h-full flex flex-col justify-between rounded-150 p-10 overflow-hidden shadow-lg">
      <Image
        className="absolute -top-14 left-0"
        width={560}
        height={920}
        src="/images/illustration-authentication.svg"
        alt="Authentication illustration"
        priority
      />

      <div className="z-20">
        <Logo title="Logo" ariaDescription="Logo" type="full" />
      </div>

      <div className="flex flex-col gap-6 z-20 mt-10">
        <h1 className="text-[2rem] text-appWhite font-bold">
          Keep track of your money and save for your future
        </h1>

        <p className="text-sm text-appWhite">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
    </div>
  );
}
