import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
  const skills =[
    {
      name: 'Ruby on Rails',
      description: 'Backend Framework',
      icon: <SiRubyonrails />
    },
    {
      name: 'ReactJs',
      description: 'Frontend Framework',
      icon: <FaReact />
    },
    {
      name: 'HTML&CSS',
      description: 'Web Markup and Styling',
      icon: <FaReact />
    },
    {
      name: 'MySQL',
      description: 'Relational Database',
      icon: <DiMysql />
    },
    {
      name: 'PostgreSQL',
      description: 'Relational Database',
      icon: <SiPostgresql />
    },
    {
      name: 'Zurb Foundation',
      description: 'Responsive Frontend Framework',
      icon: <FaReact />
    },
    {
      name: 'Bootstrap',
      description: 'Frontend Toolkit',
      icon: <FaBootstrap />
    },
  ]

  return (
    <div className='skills section'>
      <Container>
        <h2>My Skills</h2>
        <p>Here are some of the technologies I work with:</p>

        <Row>
          {
            skills.map((skill, index) => (
              <Col key={index} lg={2} md={3} xs={6}>
                <div className='skill-item rounded text-center p-2 my-1 d-flex align-items-center justify-content-center'>
                  <div>
                    <span className="me-2">{skill.icon}</span>
                    <p className='mb-1 fs-5'>{skill.name}</p>
                    <p className='mb-0 small'>{skill.description}</p>
                  </div>              
                </div>
              
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Skills;