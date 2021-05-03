import { viewController } from './router.js';


const hashChange = () => {
    // Muestra al cargar el documento la vista encode.
    viewController(window.location.hash);



    // hashchange: Evento que se dispara al cambiar el hash de la URL.
    window.addEventListener('hashchange', () => {
        viewController(location.hash);
        console.log(window.location.hash);
    });

}



// load: Evento que se dispara al cargar el documento.
window.addEventListener('load', () => hashChange());
