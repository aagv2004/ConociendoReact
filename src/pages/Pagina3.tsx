import { registrarPersona } from '@/Firebase/Promesas'
import { Persona } from '@/interfaces/Interfaces'
import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const initialStatePersona:Persona = {
nombre: '',
apellido:'',
rut:'',
correo:'',
edad:0,
fechaNacimiento:''
}

const Pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialStatePersona)
    
    const validarLargoMinimo = (nombre:string, value:string) => {
        setPersona({...persona, [nombre]:value})
    }

    const registrar = () => {
        registrarPersona(persona).then(()=> {
            alert("Se registra con éxito")
        }).catch((e)=> {
            alert("Error: "+ e)
        })
    }

  return (
    <>
    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' placeholder='ingrese nombre'
            name='nombre'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type='text' placeholder='ingrese apellido'
            name='apellido'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Rut:</Form.Label>
            <Form.Control type='text' placeholder='ingrese rut'
            name='rut'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type='email' placeholder='ingrese correo' 
            name='correo'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Edad:</Form.Label>
            <Form.Control type='number' placeholder='ingrese edad' 
            name='edad' 
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Fecha Nacimiento:</Form.Label>
            <Form.Control type='date' placeholder='ingrese fecha nacimiento' 
            name='fechaNacimiento' 
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Button variant='success' type='button' onClick={registrar}>Registrar</Button>
    </Form>
    </>
  )
}
export default Pagina3
