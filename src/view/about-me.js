const aboutMe = () => {
    const view = `
      <div class="w-100">
        <div class="row">
          <div class="col-md-12">
            <h1 id="subtitle-aboutme" class="text-center subtitle-view subtitle-view-spacing">ABOUT ME</h1>
          </div>   
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-style">
              <li class="mb-2">
                <div class="d-flex">
                  <div class="me-2 ms-n4 text-paragraph">
                    👋 
                  </div>
                  <div class="text-justify me-2 text-paragraph">
                    ¡Hola! Mi nombre es Yamira Quispe, soy front end developer, estudiante de Ingeniería Informática 
                    y presidenta del Capítulo Estudiantil IEEE Computer Society UNFV.
                  </div>
                </div> 
              </li>
              <li class="mb-2">
                <div class="d-flex">
                  <div class="me-2 ms-n4 text-paragraph">
                    👨‍🎓  
                  </div>
                  <div class="text-justify me-2 text-paragraph">
                    Mi interés en programación empezó gracias a mi carrera universitaria. El primer lenguaje que 
                    aprendí fue C++. Paralelo a ello tuve la oportunidad de participar en una hackaton interna en mi 
                    centro de estudios y para mi suerte, mi grupo y yo perdimos. Fue ahí cuando me propuse aprender 
                    más allá de lo que la universidad pudiera ofrecerme.
                  </div>
                </div> 
              </li>
              <li class="mb-2">
                <div class="d-flex">
                  <div class="me-2 ms-n4 text-paragraph">
                    📚  
                  </div>
                  <div class="text-justify me-2 text-paragraph">
                    Así fue como decidí especializarme en algo antes de egresar, postulé a Laboratoria y felizmente 
                    me fue bien. Aunque no fue nada fácil esta etapa de aprendizaje, porque más allá de la dificultad 
                    de los proyectos que realizaba en el bootcamp, también me encontraba laborando medio tiempo en mi 
                    centro de estudios y además, llevaba dos cursos muy exigentes en mi universidad. Pero todo me fue 
                    bien, y lo más importante es que egrese de este programa teniendo un aprendizaje sólido.
                  </div>
                </div>
              </li>
              <li class="mb-2">
                <div class="d-flex">
                  <div class="me-2 ms-n4 text-paragraph">
                    🎯  
                  </div>
                  <div class="text-justify me-2 text-paragraph">
                    Soy una persona que siempre se moviliza bajo una meta. Actualmente me encuentro aprendiendo el 
                    idioma Inglés. También tengo interés en aprender sobre tecnologías back end y RPA. Me gustaría a 
                    futuro poder laborar en una importante empresa del sector tech.
                  </div>
                </div>
              </li>
              <li class="mb-2">
                <div class="d-flex">
                  <div class="me-2 ms-n4 text-paragraph">
                    🤝  
                  </div>
                  <div class="text-justify me-2 text-paragraph">
                    Te comparto mi CV para que puedas saber más sobre mí.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row item-last">
          <div class="col-md-12 d-flex justify-content-center">
            <button id="button-cv" type="button" class="btn btn-lg btn-outline-success mt-1">Ver CV</button>
          </div>
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.id = 'container-about';
    sectionView.className = 'mx-auto';
    sectionView.innerHTML = view;
  
    return sectionView;
  };


  export default aboutMe;