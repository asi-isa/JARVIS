import Card from "../dashboard/card";

interface ProjectCardProps {}

const ProjectCard = ({}: ProjectCardProps) => {
  return (
    <Card styles="col-span-2">
      <div>
        <p>Project card</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
