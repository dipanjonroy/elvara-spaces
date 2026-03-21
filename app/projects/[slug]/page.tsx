import { projects } from "@/lib/projects";
import SingleProjectHeroSection from "./sections/SingleProjectHeroSection";

export default async function page({params}:{params: Promise<{slug:string}>}) {
  const {slug} = await params;

  const project = projects.find((item)=>item.slug === slug);

  if(!project) return;
  return (
    <>
      <SingleProjectHeroSection project={project}/>
    </>
  );
}