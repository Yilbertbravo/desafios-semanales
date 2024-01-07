const main = document.getElementById("main");
const nav = {
    home: document.getElementById("home"),
    movies: document.getElementById("movies"),
    agregar: document.getElementById("agregar"),
};

window.onload = () => {
    refreshHTML();
};

function refreshHTML() {
    let curretPageName = window.location.hash.replace("#", "");

    if (!curretPageName) {
        curretPageName = "home";
    }

    getContentHTML(curretPageName);
}

const links = [nav.home, nav.movies, nav.agregar];
for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id);
    });
}

function getContentHTML(pageName) {
    if (!pageName) {
        pageName = "home";
    }

    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();

    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            setActiveLink(links, nav[pageName]);
            main.innerHTML = xhr.response;
        }
    };

    xhr.send();
}

function setActiveLink(links, linkActive) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.className = "";
    }

    linkActive.className = "link-active";
}

/* ****************** HISTORY  ****************** */
const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");


btnBack.addEventListener('click', () => {
    mainMovies.removeAttribute("class", "alertTitle")
    history.back();
});

btnForward.addEventListener('click', () => {
    history.forward();
});


window.onhashchange = (e) => {
    let pageName = e.currentTarget.location.hash.replace("#", "");
    getContentHTML(pageName);
};


    //******* Agregar Peliculas Nuevas ****/
    const divPeliculas = document.getElementById("main__movies");
    const tablePeliculas = document.getElementById("table-movies");
    const nameMovie = document.getElementById("name-movie");
    const anioMovie = document.getElementById("anio-movie");
    const descriptionMovie = document.getElementById("description-movie");
    const btnAddMovie = document.getElementById("btn-add-movie");
    const mainMovies = document.getElementById("main");



const CrearPelicula = function (name, anio, description) {
    this.name = name;
    this.anio = anio;
    this.description = description;
}

const peliculas = [

    new CrearPelicula ("Chaos", "2005", "El oficial de policía Conners es reincorporado a la unidad de investigaciones de Seattle, es indispensable para resolver una importante misión que implica el robo de un banco."),
    new CrearPelicula ("La francotiradora", "2015", "Es considerada como una de las mejores francotiradoras militares de todos los tiempos, y una venerada asesina nazi que es un verdadero icono legendario dentro del mundo de la Segunda Guerra Mundial."),
    new CrearPelicula ("Terremoto 10.0", "2014", "Cuando una serie de pequeños terremotos comienzan a tener lugar en Los Ángeles, una geóloga asegura que las microfisuras que se están generando darán lugar a un terremoto de intensidad 10 que hará que la cuenca entera de Los Ángeles se colapse"),
    new CrearPelicula ("Bermuda Triangle North Sea", "2011", "Fenómenos extraños en el Mar del Norte; los barcos desaparecen, las gaviotas caen del cielo, miles de peces muertos llegan a la orilla. Tal vez una corporación energética esté detrás de todo y Tom y Marie están decididos a averiguarl"),
    new CrearPelicula ("Un chofer en apuros", "2016", "Guy Carter es un arquitecto desempleado con serios problemas económicos y con una esposa embarazada, al no poder conseguir un empleo acorde con su carrera, Guy debe aceptar un trabajo como conductor de prostitutas."),
    new CrearPelicula ("Peligro en la Montaña", "2018", "Joe Braven es un leñador que vive en la frontera entre Estados Unidos y Canadá. Cuando él y su padre son atacados por un grupo de traficantes de drogas en su cabaña del bosque, Joe hará todo lo que esté en su poder para proteger a su familia."),
];



btnAddMovie.onclick = () => {

    mainMovies.innerHTML = "";

    nombrePelicula = nameMovie.value;
    anioEstreno = anioMovie.value;
    descripcionpelicula = descriptionMovie.value;


    if (nameMovie.value == "" && anioMovie.value == "" && descriptionMovie.value == "") {
        const addAlert = document.createElement('h2');
        addAlert.innerText = `Faltan Datos de la Pelicula que desea agregar`;

        mainMovies.append(addAlert);
        mainMovies.setAttribute("class", "alertTitle");
    }else {
        peliculas.push(new CrearPelicula(nombrePelicula, anioEstreno, descripcionpelicula))

        nameMovie.value = "";
        anioMovie.value = "";
        descriptionMovie.value = "";

        const addTable = document.createElement('table');

        const addFileEncabezado = document.createElement('tr');
        const addFileName = document.createElement('th');
        const addFileAnio = document.createElement('th');
        const addFileDescrip = document.createElement('th');
        addFileName.innerText = `Nombre Pelicula`;
        addFileAnio.innerText = `Año Estreno`;
        addFileDescrip.innerText = `Descripción`;

    peliculas.forEach((pelicula, index) => {
        const addFile = document.createElement('tr');
        const addFileIndex = document.createElement('td');
        const addFileOne = document.createElement('td');
        const addFileTwo = document.createElement('td');
        const addFilethree = document.createElement('td');

        addFileIndex.innerText = `${index}`;
        addFileOne.innerText = `${pelicula.name}`;
        addFileTwo.innerText = `${pelicula.anio}`;
        addFilethree.innerText = `${pelicula.description}`;

        addFileEncabezado.append(addFileName, addFileAnio, addFileDescrip)
        addFile.append(addFileOne, addFileTwo, addFilethree);

        addTable.append(addFile);
        mainMovies.append(addFileEncabezado, addTable);
        mainMovies.setAttribute("class", "pruebatable");

        return peliculas;
    });
    }


};

//********** Filtros por Nombre ********/

    const searchTitle = document.getElementById("texto-buscado");
    const btnSearchMovie = document.getElementById("btn-buscar-titulo");

    let peliculasAMostrar = [];

    btnSearchMovie.onclick = () => {
        const peliculasBuscadas = peliculas.filter((pelicula) => pelicula.name.includes(searchTitle.value));
        mainMovies.innerHTML = "";

        if (searchTitle.value == "" ) {
           alertInfo();
        }else{
            peliculasAMostrar = !searchTitle.value ? peliculas : peliculasBuscadas;
            const addTable = document.createElement('table');

            const addFileEncabezado = document.createElement('tr');
            const addFileName = document.createElement('th');
            const addFileAnio = document.createElement('th');
            const addFileDescrip = document.createElement('th');
            addFileName.innerText = `Nombre Pelicula`;
            addFileAnio.innerText = `Año Estreno`;
            addFileDescrip.innerText = `Descripción`;
       
            peliculasAMostrar.forEach((pelicula, index) => {

                const addFile = document.createElement('tr');
                const addFileIndex = document.createElement('td');
                const addFileOne = document.createElement('td');
                const addFileTwo = document.createElement('td');
                const addFilethree = document.createElement('td');

                addFileIndex.innerText = `${index}`;
                addFileOne.innerText = `${pelicula.name}`;
                addFileTwo.innerText = `${pelicula.anio}`;
                addFilethree.innerText = `${pelicula.description}`;

                addFileEncabezado.append(addFileName, addFileAnio, addFileDescrip)
                addFile.append(addFileOne, addFileTwo, addFilethree);

                addTable.append(addFile);
                mainMovies.append(addFileEncabezado,addTable);
                mainMovies.setAttribute("class", "pruebatable");

            });
        };
    }

//********** Filtros por Año ********/

const searchYear = document.getElementById("fecha-buscada");
const btnSearchMovieYear = document.getElementById("btn-buscar-fecha");

let peliculasAMostrarPorAño = [];

btnSearchMovieYear.onclick = () => {
    const peliculasBuscadasPorAño = peliculas.filter((pelicula) => pelicula.anio.includes(searchYear.value));
    mainMovies.innerHTML = "";

    if (searchYear.value == "" ) {
        alertInfo();
    }else {
        peliculasAMostrarPorAño = !searchYear.value ? peliculas : peliculasBuscadasPorAño;
        const addTable = document.createElement('table');

        const addFileEncabezado = document.createElement('tr');
        const addFileName = document.createElement('th');
        const addFileAnio = document.createElement('th');
        const addFileDescrip = document.createElement('th');
        addFileName.innerText = `Nombre Pelicula`;
        addFileAnio.innerText = `Año Estreno`;
        addFileDescrip.innerText = `Descripción`;

        peliculasAMostrarPorAño.forEach((pelicula, index) => {

            const addFile = document.createElement('tr');
            const addFileIndex = document.createElement('td');
            const addFileOne = document.createElement('td');
            const addFileTwo = document.createElement('td');
            const addFilethree = document.createElement('td');

            addFileIndex.innerText = `${index}`;
            addFileOne.innerText = `${pelicula.name}`;
            addFileTwo.innerText = `${pelicula.anio}`;
            addFilethree.innerText = `${pelicula.description}`;

            addFileEncabezado.append(addFileName, addFileAnio, addFileDescrip)
            addFile.append(addFileOne, addFileTwo, addFilethree);

            addTable.append(addFile);
            mainMovies.append(addFileEncabezado,addTable);
            mainMovies.setAttribute("class", "pruebatable");

        });
     }
};


//**Alerta por falta de datos en la busqwueda */
function alertInfo() {
    const addAlert = document.createElement('h2');
    addAlert.innerText = `Agregar Informacion en la busqueda`;

    mainMovies.append(addAlert);
    mainMovies.setAttribute("class", "alertTitle");
};
