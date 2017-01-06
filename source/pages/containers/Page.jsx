import React from 'react';
import {
  /* Componentes */
  Match, // que tiene que hacer en cada ruta
  Miss, // que hacer cuando no encuentro la ruta
  Link, // para moverse entre rutas
} from 'react-router';

import Home from './Home.jsx';
import Post from './Post.jsx';
import Error404 from './Error404.jsx';
import Profile from './Profile.jsx';

function Pages() {
  return (
    <main role="application">
      {/* Lista de artículos */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Detalle de artículo */}
      <Match
        pattern="/post/:id"
        exactly
        component={Post}
      />
      {/* Perfil de usuario */}
      <Match
        pattern="/user/:id"
        exactly
        component={Profile}
      />
      {/* Error 404 */}
      <Miss component={Error404} />
    </main>
  );
}

export default Pages;
