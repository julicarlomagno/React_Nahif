import React from 'react';
import './lastUserProd.css'

export default function LastMovieInDb(productInfo) {
     
      if(productInfo.lastProduct ===undefined){
            return(
                  <h3>Cargando</h3>
            )
      }
      
      let imagen = productInfo.lastProduct.imagen
      let rutaImagen = "/img/"+imagen
      return(
      
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last Product</h5>
                  </div>
                  <div className="card-body">
                              <div>
                                    <p>id:{productInfo.lastProduct.id}</p>
                                    <p>name:{productInfo.lastProduct.name}</p>
                                    <p>descripción: {productInfo.lastProduct.description}</p>
                                    <p>detail: {productInfo.lastProduct.detail}</p>
                              </div>
                            <div className="text-center">
                              <img className="imgLast" style={{ width: "40rem" }} src={rutaImagen} alt={productInfo.lastProduct.name} />
                            </div>
                  </div>
            </div>
        </div>

  );
}
