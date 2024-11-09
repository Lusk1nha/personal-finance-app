import { cn } from "@/lib/utils";

interface IPageWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper(props: Readonly<IPageWrapperProps>) {
  const { id, children, className } = props;

  return (
    <div
      id={id}
      className={cn(
        "w-full h-full flex flex-col justify-start gap-400",
        className
      )}
    >
      {children}
    </div>
  );
}
