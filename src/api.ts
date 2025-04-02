import axios from "axios";
import { Personaje } from "./modelo"

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
    try{
        const { data} = await axios.get("http://localhost:3000/personajes")
        return data;
    }catch{
        throw new Error("No se han obtenido los personajes")
    }
}

export const buscarPersonaje = async (texto: string): Promise<Personaje[]> => {
    try{
        const { data} = await axios.get(`http://localhost:3000/personajes?nombre_like=${texto}`)
        return data;
    }catch{
        throw new Error("No hay resultado de la busqueda")
    }
}