import Card from ".";

interface ProjectCardProps {}

const ProjectCard = ({}: ProjectCardProps) => {
  return (
    <Card styles="col-span-2">
      <div>
        <p>Projects</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
