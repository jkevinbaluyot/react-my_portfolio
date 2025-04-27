import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectItem = ({ title, description, link }) => {
  return (
    <Card>
      <Card.Header>Card Title</Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="link" className='px-0'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;