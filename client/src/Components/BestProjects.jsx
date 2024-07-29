import { useEffect, useState } from "react";
import BookCards from "../home/ProjectCard";

const BestProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/all-projects')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data.slice(0, 5));
        } else if (data.result && Array.isArray(data.result)) {
          setProjects(data.result.slice(0, 5));
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div>
      <BookCards projects={projects} headline="Best of the projects" />
    </div>
  );
};

export default BestProjects;
