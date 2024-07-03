
//import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Perfil } from "./componentes/Perfil";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useState } from "react";



export default function Home() {
  return (
    <>
      <nav>
        <Breadcrumb>
          <Breadcrumb.Item href="Pagina1">Pagina 1</Breadcrumb.Item>
          <Breadcrumb.Item href="About">About</Breadcrumb.Item>
          <Breadcrumb.Item href="Pagina2">Pagina 2</Breadcrumb.Item>
          <Breadcrumb.Item href="Pagina3">Registrar</Breadcrumb.Item>
          <Breadcrumb.Item href="Pagina4">Ver Datos</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
        {/* <nav>
          { 
          Busque: useEffect, useState
          }
            <Link href="Pagina1">Pagina1</Link>
            <Link href="About">About</Link>
            <Link href="Pagina2">Pagina2</Link>
        </nav>*/}
        <p>hola</p>
        <Perfil nombre="Rodrigo" apellido="Carrizo" edad={17} />
        <Perfil nombre="Juanito" apellido="Kanicas" edad={30}></Perfil>
    </>

  );
}
