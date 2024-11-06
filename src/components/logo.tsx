import IconLogoSmall from "./icons/logo-small";
import IconLogoLarge from "./icons/logo-large";

interface ILogoProps {
  title: string;
  ariaDescription: string;

  type: "full" | "icon";
}

export function Logo(props: Readonly<ILogoProps>) {
  const { title, ariaDescription, type } = props;

  const component = type === "icon" ? <ShortLogo /> : <LongLogo />;

  return (
    <div className="text-appWhite" title={title} aria-label={ariaDescription}>
      {component}
    </div>
  );
}

function ShortLogo() {
  return <IconLogoSmall />;
}

function LongLogo() {
  return <IconLogoLarge />;
}
