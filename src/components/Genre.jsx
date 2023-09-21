import React from 'react';
// import PropTypes from 'prop-types'

export default function Genre({name, cantidad}) {
  {/*if (!name) return console.log("Cargando");
if (!cantidad) return console.log("Cargando");*/}
  return (
    <>  
        <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                      <div className="card-body ">
                        {console.log(name)}
                        {console.log(cantidad)}
                         <p>{name ? name : " - "}:   {cantidad ? " "+ cantidad : " - "}</p>
                      </div>
                </div>
        </div>
    </>
  );
}

