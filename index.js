// Array con los proyectos (puedes almacenarlo en otro archivo .json o en tu base de datos)
const projects = [
    {
        "uuid": "4",
        "name": "Lorem ipsum",
        "description": "Lorem ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/4.jpg?raw=true",
        "completed_on": "June 10, 2021"
    },
    {
        "uuid": "3",
        "name": "Vectorify",
        "description": "User Experience Design",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true",
        "completed_on": "June 10, 2021"
    },
    {
        "uuid": "2",
        "name": "Dashcoin",
        "description": "Web Development",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/2.jpg?raw=true",
        "completed_on": "June 10, 2021"
    },
    {
        "uuid": "1",
        "name": "Simplify",
        "description": "UI Design & App Development",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/1.jpg?raw=true",
        "completed_on": "June 22, 2021"
    }
];

// Función para mostrar los detalles del proyecto
function displayProjectDetails(uuid) {
    const project = projects.find(p => p.uuid === uuid); // Encuentra el proyecto por uuid

    if (project) {
        // Modifica el HTML para mostrar los detalles del proyecto
        document.querySelector('#simplify h1').textContent = project.name;
        document.querySelector('.simplifyp1').textContent = project.description;
        document.querySelector('.simplifyp2 span').textContent = project.completed_on;
        document.querySelector('.simplify-img img').src = project.image;
        document.querySelector('.simplify-text').innerHTML = project.content; // Asegúrate de permitir HTML si es necesario
    }
}
// Obtener el uuid de la URL
const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get('uuid'); // Obtiene el valor de "uuid" desde la URL

// Mostrar los detalles del proyecto si existe el uuid
if (uuid) {
    displayProjectDetails(uuid);
}






