import EntryBottom from "@/components/animation/EntryBottom";
import ProjectStoryItem from "../components/ProjectStoryItem";
import ScrollTextReveal from "@/components/animation/ScrollTextReveal";

type ProjectType = {
  images: string[];
  description: {
    shortDescription: string;
    clientVision: string;
    challenge: string;
    solution: string;
    result: string;
  };
};

export default function ProjectDescriptionSection({
  project,
}: {
  project: ProjectType;
}) {
  const { shortDescription, clientVision, challenge, solution, result } =
    project?.description;
  return (
    <section className="pt-20 md:pt-25 lg:pt-30 bg-(--background) z-4 relative">
      <div className="container mx-auto">
        <div className="w-full space-y-4">
          <ScrollTextReveal
            text={shortDescription}
            className="text-center leading-tight"
          />

          <ProjectStoryItem
            badge="Vision"
            title="The Dream Space"
            desc={clientVision}
            textDirection="left"
            image={project?.images[1]}
          />

          <span className="block h-px w-full bg-(--foreground)" />

          <ProjectStoryItem
            badge="Challenge"
            title="The Obstacles"
            desc={challenge}
            textDirection="right"
            image={project?.images[2]}
          />

          <span className="block h-px w-full bg-(--foreground)" />

          <ProjectStoryItem
            badge="Solution"
            title="Our Design Approach"
            desc={solution}
            textDirection="left"
            image={project?.images[3]}
          />

          <span className="block h-px w-full bg-(--foreground)" />

          <ProjectStoryItem
            badge="Result"
            title="The Transformation"
            desc={result}
            textDirection="right"
            image={project?.images[4]}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}
