import React from 'react';

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
    <div className='text-center skills'>
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
    </div>
  );
};

export default Skills;