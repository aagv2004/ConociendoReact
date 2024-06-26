
//import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Perfil } from "./componentes/Perfil";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



export default function Home() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href=""></Breadcrumb.Item>
      </Breadcrumb>
      <nav>
        {/* 
        Busque: useEffect, useState
        */}
          <Link href="Pagina1">Pagina1</Link>
          <Link href="About">About</Link>
          <Link href="Pagina2">Pagina2</Link>
      </nav>
      <p>hola</p>
      <Perfil nombre="Rodrigo" apellido="Carrizo" edad={17} />
      <Perfil nombre="Juanito" apellido="Kanicas" edad={30}></Perfil>
    </>

  );
}
