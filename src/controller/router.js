import { views } from '../view/views.js';

const router = (hash) => {
    const main = document.getElementById('view');
    main.innerHTML = '';

    switch (hash) {
        
        case '#/home':
            return main.appendChild(views.home());
        case '#/aboutme':
            return main.appendChild(views.aboutMe());
        case '#/skills':
            return main.appendChild(views.skills());
        case '#/projects':
            return main.appendChild(views.projects());
        case '#/contact':
            return main.appendChild(views.contact());
        default:
            return main.appendChild(views.viewError());
    }
};


export const viewController = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') return router('#/home');

    return router(hash);
};
