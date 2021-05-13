const skills = () => {
    const view = `
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center subtitle-view">HABILIDADES</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div class="row">  
                <div class="col-md-12">
                  <h3 class="text-center">Habilidades blandas</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div class="row"> 
                <div class="col-md-12">
                  <h3 class="text-center">Habilidades técnicas</h3>
                </div>
              </div>
              <div class="row">  
                <div class="col-md-12">
                  <div class="espacio3D">
                    <div class="cubo3D">
                      <div class="base"></div>
                      <aside class="cara cara1">Autodidacta</aside>
                      <aside class="cara cara2">Asume retos</aside>
                      <aside class="cara cara3">Proactiva</aside>
                      <aside class="cara cara4">Dipuesta al cambio</aside>
                      <aside class="cara cara5">GGGGG</aside>
                      <aside class="cara cara6">HHHHHH</aside>
                    </div><!-- termina cubo 3d -->
                  </div><!-- termina espacio 3d -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'container mx-auto mt-5';
    sectionView.innerHTML = view;
  
    return sectionView;
  };


  export default skills;