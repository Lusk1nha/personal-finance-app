import { cn } from "@/lib/utils";

interface IPageTitleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function PageTitle(props: Readonly<IPageTitleProps>) {
  const { title, children, className } = props;

  return (
    <div id="page-title" className={cn("flex", className)} title={title}>
      <h1 className="text-appGrey text-[32px] font-bold leading-500">
        {children}
      </h1>
    </div>
  );
}
