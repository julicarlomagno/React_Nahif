import React from 'react';
import './lastUserProd.css'

export default function LastUser(userInfo) {

     
      if(userInfo.lastUser ===undefined){
            return(
                  <h3>Cargando</h3>
            )
      }
      let imagen = userInfo.lastUser.imagen
      let rutaImagen = "/img/"+imagen

      return(
      
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last User</h5>
                  </div>
                  <div className="card-body">
                              <div>
                                    <p>id:{userInfo.lastUser.id}</p>
                                    <p>name:{userInfo.lastUser.name}</p>
                                    <p>email: {userInfo.lastUser.email}</p>
                                    <p>detail: {userInfo.lastUser.detail}</p>
                              </div>
                            <div className="text-center">
                              <img className="imgLast" style={{ width: "40rem" }} src={rutaImagen} alt={userInfo.lastUser.name} />
                            </div>
                  </div>
            </div>
        </div>

  );
}
