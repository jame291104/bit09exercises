import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Exs1 } from './Exs1'
import { Exs2 } from './Exs2'
import { Exs3 } from "./Exs3";



export const Exercise = () => {
    const [exercise, setExercise] = useState(null)
 

  return (
    <div>
      <h1 className="text-center">Ejercicios</h1>
        {!exercise ? (
          <ol>
            <li onClick={() => setExercise(<Exs1 />)}>Exercise 1</li>
            <li onClick={() => setExercise(<Exs2 />)}>Exercise 2</li>
            <li onClick={() => setExercise(<Exs3 />)}>Exercise 3</li>
          </ol>
        ) : (
        <div className='text-center'>
          {exercise}
          <Button onClick={() => setExercise(null)} variant="light">
            Regresar
          </Button>
        </div>
       )}
    </div>
  )
}
