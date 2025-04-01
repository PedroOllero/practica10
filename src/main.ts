import { obtenerPersonajes } from "./api";
import { Personaje } from "./modelo";

const crearImagen = (portada: string, titulo: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `http://localhost:3000/${portada}`;
  imagen.alt = titulo;
  return imagen;
};

const crearParrafo = (titulo: string, texto: string) => {
  const parrafo = document.createElement("p");
  parrafo.textContent = `${titulo}: ${texto}`;
  return parrafo;
};

const crearElementoLista = (habilidad: string): HTMLLIElement => {
  const elementoLista = document.createElement("li");
  elementoLista.textContent = habilidad;
  return elementoLista;
};

const crearListaHabilidades = (elementosLista: string[]): HTMLUListElement => {
  const lista = document.createElement("ul");
  elementosLista.forEach((item: string) => {
    const nuevoElemento = crearElementoLista(item);
    lista.appendChild(nuevoElemento);
  });
  return lista;
};

const crearPersonaje = (pelicula: Personaje): HTMLDivElement => {
  const personajeContenedor = document.createElement("div");
  personajeContenedor.classList.add("personaje");

  const imagen = crearImagen(pelicula.imagen, pelicula.nombre);
  personajeContenedor.appendChild(imagen);

  const nombre = crearParrafo("Nombre", pelicula.nombre);
  personajeContenedor.appendChild(nombre);

  const apodo = crearParrafo("Apodo", pelicula.apodo);
  personajeContenedor.appendChild(apodo);

  const especialidad = crearParrafo("Especialidad", pelicula.especialidad);
  personajeContenedor.appendChild(especialidad);

  const amigo = crearParrafo("Amigo de", pelicula.amigo);
  personajeContenedor.appendChild(amigo);

  const habilidades = crearListaHabilidades(pelicula.habilidades);
  personajeContenedor.appendChild(habilidades);

  return personajeContenedor;
};

const pintarPersonaje = async () => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector("#contenedor-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const contenedorPersonajes = crearPersonaje(personaje);
      listado.appendChild(contenedorPersonajes);
    });
  } else {
    throw new Error("No se ha encontrado el listado de personajes");
  }
};

const textInput = (): void => {
  const input = document.getElementById("input");
  if (input && input instanceof HTMLInputElement) {
    input.addEventListener("input", async () => {
      const texto = input.value.toLocaleLowerCase();
      const personajes: Personaje[] = await obtenerPersonajes();
      const filtro: Personaje[] = personajes.filter((item) =>
        item.nombre.toLocaleLowerCase().includes(texto)
      );
      console.log(filtro);
    });
  } else {
    throw new Error("Input element not found or is not an HTMLInputElement");
  }
};

textInput();

pintarPersonaje();
