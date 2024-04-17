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
            <div className="project-inner flex-col">
              <Image
                className="project-image"
                src={urlFor(project?.mainImage).url()}
                width={500}
                height={350}
                alt="project image"
              />
              <div className="overlay"></div>
              <div>Hello this is the right side</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectContent;
