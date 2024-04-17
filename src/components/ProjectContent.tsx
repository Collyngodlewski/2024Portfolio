import Link from "next/link";
import { Project } from "../../types";
import Image from "next/image";
import { urlFor } from "@/lib/createClient";

interface Props {
  projects: Project[];
}

function ProjectContent({ projects }: Props) {
  return (
    <div id="projects" className="projects-container">
      {projects.map((project) => (
        <Link key={project?._id} href={"/"}>
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
              <div>
                {project?.categories.map((item) => (
                  <p key={item?._id}>{item?.title}</p>
                ))}
                <h2>{project?.title}</h2>
                <p>{project?.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectContent;
