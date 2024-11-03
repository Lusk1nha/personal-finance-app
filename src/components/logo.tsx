import Image from "next/image";
import logoSmall from "../../public/images/logo-small.svg";
import logoLarge from "../../public/images/logo-large.svg";

interface ILogoProps {
  title: string;
  ariaDescription: string;

  type: "full" | "icon";
}

export function Logo(props: Readonly<ILogoProps>) {
  const { title, ariaDescription, type } = props;

  const component = type === "icon" ? <ShortLogo /> : <LongLogo />;

  return (
    <div title={title} aria-label={ariaDescription}>
      {component}
    </div>
  );
}

function ShortLogo() {
  return <Image src={logoSmall} alt="Logo image only with the icon" priority />;
}

function LongLogo() {
  return (
    <Image
      src={logoLarge}
      alt="Logo image with the icon and the name"
      priority
    />
  );
}
