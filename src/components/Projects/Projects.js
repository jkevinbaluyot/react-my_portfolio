import React from 'react';
import ProjectItem from './ProjectItem';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {

  const projects = [
    {
      title: 'PNG Business Website',
      description: 'Content Management System for the News Website',
      link: 'https://www.pngbusinessnews.com',
      tags: ['Ruby on Rails', 'Foundation']
    },
    {
      title: 'SevenSharp Creatives',
      description: 'Content Management System for the Blog Website',
      link: 'https://www.sevensharpcreatives.com/',
      tags: ['Ruby on Rails', 'Bootstrap']
    },
    {
      title: 'Course Climber Website',
      description: 'A  Web-based Course Platform with Stripe Payment',
      link: 'https://courseclimber.com/',
      tags: ['Ruby on Rails', 'Foundation', 'Stripe']
    },
    {
      title: 'Upprovall',
      description: 'A Project Management Tool',
      link: 'https://upprovall.com/',
      tags: ['ReactJs', 'Ruby on Rails', 'Foundation',
        'Google OAuth']
    },
  ];

  return (
    <div 
      className='projects section alt-bg'
      id={'projectsSection'}
    >
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
                  tags={project.tags}
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