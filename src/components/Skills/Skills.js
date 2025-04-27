import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = () => {
  const skills =[
    {
      name: 'Ruby on Rails',
      icon: '🟨'
    },
    {
      name: 'ReactJs',
      icon: '⚛️'
    },
    {
      name: 'CSS',
      icon: '🎨'
    },
    {
      name: 'HTML',
      icon: '🔤'
    },
    {
      name: 'MySQL',
      icon: '🗄️'
    },
    {
      name: 'Zurb Foundation',
      icon: '🛠️'
    },
    {
      name: 'Bootstrap',
      icon: '🛠️'
    },
  ]

  return (
    <div className='skills section'>
      <Container>
        <h2>My Skills</h2>
        <p>Here are some of the technologies I work with:</p>

        <ul className="list-unstyled">
          {skills.map((skill, index) => (
            <li key={index}>
              <span className="me-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Skills;