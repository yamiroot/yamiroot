
const home = () => {
    const view = `
      <div class="row">
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 id="title-home" class="text-center subtitle-view">¡Hola! <span class="bx bx-tada">👋</span> <br> Mi nombre es Yamira Quispe</h1>
          <p id="description-home" class="text-center mt-2 font-weight-bold">
            < Front End Developer />
          </p>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center item-last">
          <img id="banner" src="../src/asetts/monitor.png" alt="banner">
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'container mx-auto mt-5 bg-success';
    sectionView.innerHTML = view;
  
    return sectionView;
  };
  
  
  export default home;