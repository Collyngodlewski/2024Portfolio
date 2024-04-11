import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="studio-navbar">
        <Link
          href={"/"}
          className="studio-return flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <GoArrowLeft />
          Return to Website
        </Link>
        <Logo title="Collyns Studio" className="studio-logo" />
        <p className="text-sm">Studio for Project Content</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
