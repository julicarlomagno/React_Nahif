import React, { Component }  from 'react';
import { Cards } from './index'

export default function ContentRowMovies ({userInfo, productInfo, cantCategorias}) {
    return (
      <div className='row'>
              <Cards 
                title = "Total de Productos"
                quantity = {productInfo}
                color = "primary" />
              <Cards 
                title = "Total de Usuarios"
                quantity = {userInfo}
                color = "success"/>
              <Cards 
                title = "Cantidad de Categorias"
                quantity = {cantCategorias}
                color = "warning"
/>
      </div>

    )
  }
