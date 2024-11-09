import { cn } from "@/lib/utils";

interface IPageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeader(props: Readonly<IPageHeaderProps>) {
  const { children, className } = props;

  return (
    <header id="page-header" className={cn("w-full flex", className)}>
      {children}
    </header>
  );
}
