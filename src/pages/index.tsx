
//import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Perfil } from "./componentes/Perfil";


export default function Home() {
  return (
    <>
    <nav>
      {/* 
      Busque: useEffect, useState
      */}
        <Link href="Pagina1">Pagina1</Link>
        <Link href="About">About</Link>
    </nav>
    <p>hola</p>
    <Perfil nombre="Rodrigo" apellido="Carrizo" edad={17} />
    <Perfil nombre="Juanito" apellido="Kanicas" edad={30}></Perfil>
    </>

  );
}
