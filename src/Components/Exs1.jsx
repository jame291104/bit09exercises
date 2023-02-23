import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Exs1 = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('secondary')

    useEffect(() => {
     if (count > 0) setColor('success');
     else if (count < 0) setColor('danger');
     else setColor('secondary');
    }, [count])
    

  return (
    <div>
      <h2>
        Contador <Badge bg={color}>{count}</Badge>
      </h2>
      <Button onClick={() => setCount(count - 1)} variant="outline-danger">
        <i className="bi bi-dash-square-fill"></i>
      </Button>
      <Button onClick={() => setCount(0)} className = 'mx-4' variant="outline-dark">
        <i className="bi bi-arrow-clockwise"></i>
      </Button> 
      <Button onClick={() => setCount(count + 1)} variant="outline-success">
        <i className="bi bi-plus-square-fill"></i>
      </Button>
      
    </div>
  )
}
