import React from 'react'                  // rafc + enter (autocompletar)

interface Props{
    nombre:string,
    apellido:string,
    edad:number,
}

export const Perfil = (props:Props) => {
  return (
    <div>
        Nombre: {props.nombre}
        Apellido: {props.apellido}
        Edad: {props.edad}
        {props.edad>18 && <p>Eres mayor de edad</p>}
    </div>
  )
}
