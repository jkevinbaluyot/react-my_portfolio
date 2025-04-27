import React from 'react';
import ProjectItem from './ProjectItem';
import { Container, Row, Col } from 'react-bootstrap';

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
    {
      title: 'Project 4',
      description: 'Description of project 4',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className='projects section alt-bg'>
      <Container>
        <h2>Projects</h2>
        <p>Here are some of my projects I worked on:</p>

        <Row>
          {
            projects?.map((project, index) => (
              <Col 
                  md={6} 
                  lg={3} 
                  key={index}
              >
                <ProjectItem 
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Projects;