const contact = () => {
    const view = `
      <div>
        <h1 class="u-center-text subtitle-view">CONTACT</h1>
        <p class="u-center-text">
            Front End Developer
        </p>
      </div>
      `;
  
    const sectionView = document.createElement('section');
    sectionView.className = 'content-view-encode-decode u-flex';
    sectionView.innerHTML = view;
  
    return sectionView;
  };
  
  
  export default contact;