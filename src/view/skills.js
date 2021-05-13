const skills = () => {
  const view = `
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center subtitle-view mb-3">HABILIDADES</h1>
            </div>
          </div>
          <div class="row item-last bg-info">
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div class="row">  
                <div class="col-md-12">
                  <h3 class="text-center my-3">Blandas</h3>
                </div>
              </div>
              <div class="row">  
                <div class="col-md-6">
                  <div class="item-soft-skill d-flex justify-content-center align-items-center">
                      <div></div>
                      <div class="text-center">Autoaprendizaje</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="item-soft-skill d-flex justify-content-center align-items-center">
                    <div></div>
                    <div class="text-center">Capacidad de análisis</div>
                  </div>
                </div>
              </div>
              <div class="row">  
                <div class="col-md-6">
                  <div class="item-soft-skill d-flex justify-content-center align-items-center">
                    <div></div>
                    <div class="text-center">Trabajo en equipo</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="item-soft-skill d-flex justify-content-center align-items-center">
                    <div></div>
                    <div class="text-center">Negociación</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div class="row"> 
                <div class="col-md-12">
                  <h3 class="text-center my-3">Técnicas</h3>
                </div>
              </div>
              <div class="row">  
                <div class="col-md-12">
                  <div class="espacio3D">
                    <div class="cubo3D">
                      <div class="base"></div>
                      <aside class="cara cara1 d-flex justify-content-center align-items-center"><img src="../src/asetts/javascript.png" alt="Javascript" class="w-img-cubo"></aside>
                      <aside class="cara cara2 d-flex justify-content-center align-items-center"><img src="../src/asetts/react.png" alt="Javascript" class="w-img-cubo"></aside>
                      <aside class="cara cara3 d-flex justify-content-center align-items-center"><img src="../src/asetts/git.png" alt="Javascript" class="w-img-cubo"></aside>
                      <aside class="cara cara4 d-flex justify-content-center align-items-center"><img src="../src/asetts/jest.png" alt="Javascript" class="w-img-cubo"></aside>
                      <aside class="cara cara5 d-flex justify-content-center align-items-center"><img src="../src/asetts/sass.png" alt="Javascript" class="w-img-cubo"></aside>
                      <aside class="cara cara6 d-flex justify-content-center align-items-center"><img src="../src/asetts/c++.png" alt="Javascript" class="w-img-cubo"></aside>
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
  sectionView.className = 'container mx-auto';
  sectionView.innerHTML = view;

  return sectionView;
};


export default skills;