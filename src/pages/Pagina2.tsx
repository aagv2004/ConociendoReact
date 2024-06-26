import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina2 = () => {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    // const actualizarN1 = (valor:number) => {
    //     setNumero1(valor)
    // }
    // const actualizarN2 = (valor:number) => {
    //     setNumero2(valor)
    // }
    // const actualizarN3 = (valor:number) => {
    //     setResultado(valor)
    // }


    useEffect(() => {
        calcular()
    },[numero1, numero2])
    
    


    const calcular = () => {
        const total = numero1 + numero2
        setResultado(total)
    }


    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label> Primer Numero</Form.Label>
                    <Form.Control type="text" placeholder='numero1' onChange={(e) => {setNumero1(parseInt(e.currentTarget.value))}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Segundo Numero </Form.Label>
                    <Form.Control type="text" placeholder='numero2' onChange={(e) => {setNumero2(parseInt(e.currentTarget.value))}}/>
                </Form.Group>
                <Button variant='info' onClick={calcular}>Calcular</Button>

                <Form.Group>
                    <Form.Label> Resultado </Form.Label>
                    <Form.Control type="text" readOnly value={resultado}></Form.Control>
                </Form.Group>
            </Form>

        </>
    )
}
export default Pagina2