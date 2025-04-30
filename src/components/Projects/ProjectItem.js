import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectItem = ({ title, description, link, tags }) => {
  return (
    <Card className='mb-4'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <div className='mb-2'>
          {tags.map((tag, index) => (
            <Badge key={index} className='me-1'>{tag}</Badge>
          ))}
        </div>

        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button 
          variant="link" 
          className='px-0 d-flex align-items-center' 
          href={link} 
          target='_noblank'
          rel="noreferrer"
        >
          View website <FaArrowUpRightFromSquare className='ms-1' />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;