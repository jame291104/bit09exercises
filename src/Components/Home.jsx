import React from 'react'
import Figure from 'react-bootstrap/Figure';

export const Home = () => {
  return (
    <section className='d-flex flex-column'>
        <h1 className="text-center">Welcome!</h1>
        <Figure className='text-center'>
          <Figure.Image
            roundedCircle
            width={171}
            height={180} 
            alt="171x180"
            src="https://jame291104.github.io/bit07me/img/me.jpg" 
          />
         <Figure.Caption>Jesús Morán Espinoza</Figure.Caption>
        </Figure>
    </section>
  )
}
