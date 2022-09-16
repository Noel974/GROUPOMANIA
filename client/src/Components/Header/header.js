import React from 'react';
import imgNav from '../../Assets/icon-left-font-monochrome-white.svg';

export default function Header() {
  return (
    <div className="container-header">
      <img className="App-logo" src={imgNav} alt="logo groupomania" />
    </div>
  );
}