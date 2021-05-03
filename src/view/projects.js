const projects = () => {
    const view = `
      <div class="container w-100 mx-auto">
        <div class="row">
          <div class="col-md-12">
            <h1>Mis projectos</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="item-project bg-danger" style="opacity:1"> 
              <img src="../src/asetts/demogame.png" alt="memory-game">
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-project bg-danger" style="opacity:1"> 
              <img src="../src/asetts/demo-encode.png" alt="memory-game">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="" style="opacity:1"> 
              <img src="../src/asetts/demo-marked-links.png" alt="memory-game">
            </div>
          </div>
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'content-view-encode-decode u-flex';
    sectionView.innerHTML = view;
  
    return sectionView;
  };


  export default projects;