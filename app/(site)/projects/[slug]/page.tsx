import { projects } from "@/lib/projects";
import SingleProjectHeroSection from "./sections/SingleProjectHeroSection";
import ProjectDescriptionSection from "./sections/ProjectDescriptionSection";
import CTASection from "@/app/(site)/sections/CTASection";
import SingleProjectSkeleton from "@/components/skeletons/SingleProjectSkeleton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  return {
    title: `${project?.title} | Elvara Spaces`,
    description: "Project Description Here",
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  if (!project) return;
  return (
    <>
      <SingleProjectHeroSection project={project} />
      <ProjectDescriptionSection project={project} />
      <CTASection />
    </>
  );
}
