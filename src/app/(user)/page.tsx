import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
import ProjectContent from "@/components/ProjectContent";

const query = groq`*[_type == "post"]|order(publishedAt asc)`;

export default async function Home() {
  const projects = await client.fetch(query);
  console.log(projects);
  return (
    <main>
      <Hero />
      <ProjectContent projects={projects} />
    </main>
  );
}
