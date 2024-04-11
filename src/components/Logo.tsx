import Link from "next/link";

interface Props {
  title?: string;
  className?: string;
}

function Logo({ title, className }: Props) {
  return (
    <Link href={"/"}>
      <h1 className={`nav-logo-title ${className}`}>
        {title || "Collyn Godlewski"}
      </h1>
    </Link>
  );
}

export default Logo;
