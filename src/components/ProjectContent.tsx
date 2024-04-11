import Link from "next/link";
import { Project } from "../../types";
import Image from "next/image";
import { urlFor } from "@/lib/createClient";

interface Props {
  projects: Project[];
}

function ProjectContent({ projects }: Props) {
  return (
    <div className="projects-container">
      {projects.map((project, i) => (
        <Link key={i} href={"/"}>
          <div className="project">
            <div className="project-inner">
              <Image
                className="project-image"
                src={urlFor(project?.mainImage).url()}
                width={600}
                height={350}
                alt="project image"
              />
              <div className="overlay"></div>
              <div className="popup">Read More</div>
            </div>
            <div>Hello this is the right side</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectContent;
