const rutaImagen='https://image.tmdb.org/t/p/w1280';
const apiConsulta='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2';

CargarPelicula();

async function CargarPelicula()
{
    let consulta=await fetch(apiConsulta);
    let resultado = await consulta.json();
    //let aleatorio = math.floor(math.Random()*19);
    let aleatorio = Math.floor(Math.random() * 20) + 1;
    let pelicula = resultado.result(aleatorio);
    
    

    console.log(aleatorio);


}