const rutaImagen='https://image.tmdb.org/t/p/w1280';
const apiConsulta='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2';
const contenedor= document.getElementById('contenedor');
 
DevolverPeliculas();
 
async function DevolverPeliculas()
{
    let query= await fetch(apiConsulta);
    let data= await query.json();
    console.log(data);
    await MostrarResultados(data.results);
}
 

async function MostrarResultados(peliculas)
{

    let aleatorio = Math.floor(Math.random() * 19);
    console.log(aleatorio);


        let pelicula=peliculas[aleatorio];
        let div= document.createElement('div'); 
        //para ponerle una clase al div
        div.classList.add("cont");
        
        if (pelicula.vote_average>=8 && pelicula.vote_average<=10) {
            div.classList.add("buena");
        }
        else if (pelicula.vote_average>=6 && pelicula.vote_average<8) {
            div.classList.add("media")   
        }
        else{
            div.classList.add("mala")
    }

    div.innerHTML=`<img src='${rutaImagen +pelicula.poster_path }'/>
     </div>`;
    contenedor.appendChild(div);

}