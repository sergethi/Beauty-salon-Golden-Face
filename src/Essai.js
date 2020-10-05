import React from 'react';
import ReactDom from 'react-dom';
import Essai from './Essai';

function greeting() {
 return (
  <section>
  <Essai />
    <H1>Essai page</H1>
  </section>
 )
}

ReactDom.render(<greeting />, document.getElementById('root'));
