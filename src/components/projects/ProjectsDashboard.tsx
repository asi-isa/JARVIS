import { useState } from "react";

import DashboardBody from "../dashboard/body";
import Kanban, { KanbanItem } from "../kanban";
import { generateID } from "../../lib/util";

interface ProjectsDashboardProps {
  isVisible: boolean;
}

function renderProject(project: ProjectType) {
  return (
    <div className="border border-white rounded-md p-3" key={project.id}>
      <p>title: {project.title}</p>
      <p>status: {project.status}</p>
      <p>index: {project.index}</p>
    </div>
  );
}

type ProjectType = KanbanItem & {
  title: string;
  category: string;
  description: string;
  tasks: TaskType[];
};

type TaskType = KanbanItem & {};

const data: ProjectType[] = [
  {
    id: generateID(),
    title: "title1",
    description: "des1",
    category: "c1",
    index: 1,
    status: "doing",
    tasks: [],
  },
  {
    id: generateID(),
    title: "title2",
    description: "des1",
    category: "c1",
    index: 0,
    status: "done",
    tasks: [],
  },
  {
    id: generateID(),
    title: "title3",
    description: "des1",
    category: "c1",
    index: 0,
    status: "todo",
    tasks: [],
  },
  {
    id: generateID(),
    title: "title4",
    description: "des1",
    category: "c1",
    index: 0,
    status: "doing",
    tasks: [],
  },
];

const ProjectsDashboard = ({ isVisible }: ProjectsDashboardProps) => {
  const [projects, setProjects] = useState<ProjectType[]>(data);

  console.log(projects);

  function showAddProjectForm() {
    // TODO
  }

  function addProject() {
    // TODO
  }

  return (
    <DashboardBody
      title="Projects"
      isVisible={isVisible}
      ctaTitle="Add Project"
      onCTA={showAddProjectForm}
    >
      <Kanban
        items={projects}
        setItems={setProjects}
        renderItem={renderProject}
      />
    </DashboardBody>
  );
};

export default ProjectsDashboard;
