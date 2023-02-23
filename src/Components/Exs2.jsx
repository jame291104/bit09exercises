import React from 'react'
import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Image  from "react-bootstrap/Image";

export const Exs2 = () => {
    const [image, setImage] = useState("")
    const press = () => {
    fetch('https://random-d.uk/api/v2/random')
    .then(resp => resp.json())
    .then(data => setImage(data.url))
    .catch(error => console.log(error))
    }
  return (
    <div>
       <h1>Whats Up Duck?</h1>        
        <Button className='mx-auto' onClick={press} variant="primary">Hey Duck</Button>
        <Image src= {image}  width = {200} alt=""  thumbnail/>
    </div>
  )
}
