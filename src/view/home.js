
const home = () => {
    const view = `
      <div class="row">
        <div class="col-md-5 d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-center description-home">¡Hola! <span class="bx bx-tada">👋</span> <br> Mi nombre es Yamira Quispe</h1>
          <p id="" class="text-center mt-2 ">
              < Front End Developer />
          </p>
        </div>
        <div class="col-md-7 d-flex justify-content-center align-items-center">
          <img id="banner" src="../src/asetts/monitor.png" alt="banner">
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'container mt-5';
    sectionView.innerHTML = view;
  
    return sectionView;
  };
  
  
  export default home;