import React from 'react';

const Loader = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
    <div className="preloader-wrapper small active">
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader; 