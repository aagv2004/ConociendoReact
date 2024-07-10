import { obtenerPersona } from '@/Firebase/Promesas'
import { initialStatePersona } from '@/initial states/ISPersona'
import { Persona } from '@/interfaces/Interfaces'
import { link } from 'fs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



const Pagina5 = () => {
    const params = useRouter()
    const [persona, setPersona] = useState<Persona>(initialStatePersona)
    useEffect(()=> {
        console.log(params.query)
        console.log(params.query.key)
        const key = params.query.key
        if(typeof(key) === 'string') {
            obtenerPersona(key).then((p) => {
                if (p != undefined){
                    setPersona(p)
                } else {
                    alert("No se encontró la persona")
                }
            })
        }

    }, [])


    const validarLargoMinimo = (nombre:string, value:string) => {
        setPersona({...persona, [nombre]:value})
    }

    const modificar = () => {
        
    }

  return (
    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' placeholder='ingrese nombre'
            value={persona.nombre}
            name='nombre'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type='text' placeholder='ingrese apellido'
            value={persona.apellido}
            name='apellido'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Rut:</Form.Label>
            <Form.Control type='text' placeholder='ingrese rut'
            value={persona.rut}
            name='rut'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type='email' placeholder='ingrese correo'
            value={persona.correo}
            name='correo'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Edad:</Form.Label>
            <Form.Control type='number' placeholder='ingrese edad'
            value={persona.edad}
            name='edad' 
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Fecha Nacimiento:</Form.Label>
            <Form.Control type='date' placeholder='ingrese fecha nacimiento'
            value={persona.fechaNacimiento} 
            name='fechaNacimiento' 
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Button variant='success' type='button' onClick={modificar}>Modificar</Button>
    </Form>
  )
}
export default Pagina5
