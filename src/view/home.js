
const home = () => {
    const view = `
      <div>
        <h1 class="u-center-text">Mi nombre es Yamira Quispe</h1>
        <p class="u-center-text">
            Front End Developer
        </p>
      </div>
      <div>
        <img src="../src/asetts/portada.png" alt="banner">
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'content-view-encode-decode u-flex';
    sectionView.innerHTML = view;
  
    return sectionView;
  };
  
  
  export default home;