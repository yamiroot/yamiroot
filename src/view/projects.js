const projects = () => {
    const view = `
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 id="subtitle-projects" class="subtitle-view text-center subtitle-view-spacing">Mis proyectos</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center">
            <div class="item-project d-flex justify-content-center align-items-center bg-info my-3"> 
              <img class="img-item-project" src="../src/asetts/demogame.png" alt="memory-game">
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <div class="item-project d-flex justify-content-center align-items-center bg-info my-3"> 
              <img class="img-item-project" src="../src/asetts/demo-encode.png" alt="memory-game">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
            <div class="item-last item-last-project d-flex justify-content-center align-items-center bg-info mt-3"> 
              <img class="img-item-project" src="../src/asetts/demo-marked-links.png" alt="memory-game">
            </div>
          </div>
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = '';
    sectionView.innerHTML = view;
  
    return sectionView;
  };


  export default projects;