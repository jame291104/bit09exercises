import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';


export const Exs3 = () => {
    const [api, setApi] = useState(null)
    const [row, setRow] = useState(null)

    useEffect(() => {
        if (api) {
          createUser
        }
    }, [api])
    
    useEffect(() => {
      getApi()
    }, [])
      const getApi = async() => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          setApi(await response.json())
        } catch (error) {
          console.log('sorry, something is wrong')
        }finally{
          
        }
      }
    
      const createUser = () => {
        const arr = api.map((u) => {
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        })
      }




  return (
    <div>
        <h1 className='text-center'>Ejercicio 3</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </Table>
    </div>
  )
}
