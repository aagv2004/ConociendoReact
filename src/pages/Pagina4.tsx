import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/interfaces/Interfaces'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Pagina4 = () => {
  const[personas, setPersonas] = useState<Persona[]>([])
    const traerDatos = ()=> {
        obtenerPersonas().then((personas)=> {
            console.log(personas)
            setPersonas(personas)
        })
    }
    useEffect(()=>{
        traerDatos()
    }, [])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rut</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Fecha Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            personas.map((p, i)=>{
              return <tr key={i}>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.rut}</td>
                <td>{p.correo}</td>
                <td>{p.edad}</td>
                <td>{p.fechaNacimiento}</td>
                <td>
                  <Link href={{pathname:'/Pagina5/', query:{key:p.key}}}>
                    <Button variant='success'>
                      <FaEdit />
                    </Button>
                  </Link>
                <Button variant='danger'><MdDelete /></Button></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </>
  )
}
export default Pagina4