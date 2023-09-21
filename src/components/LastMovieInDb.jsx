import React from 'react';


export default function LastMovieInDb(productInfo) {
      {console.log("lastprod " +productInfo.lastProduct)}
     
      if(productInfo.lastProduct ===undefined){
            return(
                  <h3>Cargando</h3>
            )
      }
      
      let imagen = productInfo.lastProduct.imagen
      let rutaImagen = "/public/img/"+imagen
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
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={rutaImagen} alt={productInfo.lastProduct.name} />
                            </div>
                  </div>
            </div>
        </div>

  );
}
