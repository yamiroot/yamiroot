const aboutMe = () => {
    const view = `
      <div id="container-about" class="bg-danger pr-3">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center subtitle-view">ABOUT ME</h1>
          </div>   
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-style">
              <li>
                <div class="container">
                  <div class="row bg-success">
                    <div class="col-md-1 bg-info">
                      👋 
                    </div>
                    <div class="col-md-11 ml-n5">
                      ¡Hola! Mi nombre es Yamira Quispe, soy front end developer, estudiante de Ingeniería Informática 
                      y presidenta del Capítulo Estudiantil IEEE Computer Society UNFV.
                    </div>
                  
                  </div>
                </div>
                
              </li>
              <li>
                👨‍🎓 Mi interés en programación empezó gracias a mi carrera universitaria. El primer lenguaje que 
                aprendí fue C++. Paralelo a ello tuve la oportunidad de participar en una hackaton interna en mi 
                centro de estudios y para mi suerte, mi grupo y yo perdimos. Fue ahí cuando me propuse aprender 
                más allá de lo que la universidad pudiera ofrecerme.
              </li>
              <li>
                📚 Así fue como decidí especializarme en algo antes de egresar, postulé a Laboratoria y felizmente 
                me fue bien. Aunque no fue nada fácil esta etapa de aprendizaje, porque más allá de la dificultad 
                de los proyectos que realizaba en el bootcamp, también me encontraba laborando medio tiempo en mi 
                centro de estudios y además, llevaba dos cursos muy exigentes en mi universidad. Pero todo me fue 
                bien, y lo más importante es que egrese de este programa teniendo un aprendizaje sólido.
              </li>
              <li>
                🎯 Soy una persona que siempre se moviliza bajo una meta. Actualmente me encuentro aprendiendo el 
                idioma Inglés y me desempeño laboralmente en un proyecto freelance. Tengo interés aprender sobre 
                tecnologías back end y RPA. Me gustaría a futuro poder laborar en una importante empresa del sector
                tech.
              </li>
              <li>
                🤝 Te comparto mi CV para que puedas saber más sobre mí.
              </li>
            </ul>
          </div>
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'content-view-encode-decode u-flex';
    sectionView.innerHTML = view;
  
    return sectionView;
  };


  export default aboutMe;