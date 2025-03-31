import "./style.css";
import axios from "axios";

const peliculaActualizada = {
  id: "27",
  title: "Spider-Man200",
  year: 2002,
  director: "Sam Raimi y el petrinho",
  actors: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst"],
  description:
    "Peter Parker, a shy high school student, is often bullied by people. His life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to save the city from evil forces.",
  coverUrl: "https://example.com/spiderman2.jpg",
};

const actualizarPelicula = async (pelicula, id) => {
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}`,{
      method: "PUT",
      body: JSON.stringify(pelicula),
      headers: {
        "content-type": "application/json"
      }
    });
    if(response){
      const respuesta = await response.json()
    console.log(respuesta)
    }else{
      throw error("jajsdjasd")
    }
  } catch (error) {
    console.log(error);
  }
};

actualizarPelicula(peliculaActualizada, "27");
