import React from 'react';


export default function LastUser(lastUser) {
      {console.log("lastuser "+lastUser)}
     
      if(lastUser ===undefined){
            return(
                  <h3>Cargando</h3>
            )
      }
      let imagen = lastUser.imagen
      let rutaImagen = "/public/img/"+imagen
      return(
      
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last User</h5>
                  </div>
                  <div className="card-body">
                              <div>
                                    <p>id:{lastUser.id}</p>
                                    <p>name:{lastUser.name}</p>
                                    <p>email: {lastUser.email}</p>
                                    <p>detail: {lastUser.detail}</p>
                              </div>
                            <div className="text-center">
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={rutaImagen} alt={lastUser.name} />
                            </div>
                  </div>
            </div>
        </div>

  );
}
