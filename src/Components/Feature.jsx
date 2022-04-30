import React from 'react';
import Featurebox from './Featurebox';
import featureimage1 from '../Assets/featureimage1.png';
import featureimage2 from '../Assets/featureimage2.png';
import featureimage3 from '../Assets/featureimage3.png';

function Feature() {
  return (
    <div className='features'>
      <div className='a-container'>
          <Featurebox image = {featureimage1} title = "Tudo em um só lugar" />
          <Featurebox image = {featureimage2} title = "Tudo em suas mãos" />
          <Featurebox image = {featureimage3} title = "Assessoria" />
      </div>
    </div>
  )
}

export default Feature;