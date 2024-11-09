import { cn } from "@/lib/utils";

interface IPageMainProps {
  children: React.ReactNode;
  className?: string;
}

export function PageMain(props: Readonly<IPageMainProps>) {
  const { children, className } = props;

  return (
    <main
      id="page-main"
      className={cn("w-full h-full flex flex-col flex-1 gap-400", className)}
    >
      {children}
    </main>
  );
}
