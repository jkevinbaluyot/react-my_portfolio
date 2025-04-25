import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {

  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className='text-center projects'>
      <h2>Projects</h2>
      <p>Here are some of my projects:</p>

      <ul className='list-unstyled'>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectItem 
              title={project.title}
              description={project.description}
              link={project.link}
            >
            </ProjectItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;