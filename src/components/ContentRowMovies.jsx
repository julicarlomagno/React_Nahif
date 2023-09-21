import React, { Component }  from 'react';
import { Cards } from './index'

export default function ContentRowMovies ({userInfo, productInfo}) {
  let categories = Object.keys(productInfo.countByCategory)
    return (
      <div className='row'>
              <Cards 
                title = "Total de Productos"
                quantity = {productInfo.count}
                color = "primary" />
              <Cards 
                title = "Total de Usuarios"
                quantity = {userInfo.count}
                color = "success"/>
              <Cards 
                title = "Cantidad de Categorias"
                quantity = {categories.length}
                color = "warning"
/>
      </div>

    )
  }
