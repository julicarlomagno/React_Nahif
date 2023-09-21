import React from 'react';
import { ContentRowMovies, LastMovieInDb, GenresInDb, LastUser} from './index'


export default function ContentRowTop({categories, userInfo, productInfo}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                <ContentRowMovies 
                  userInfo={userInfo} 
                  productInfo={productInfo}
                  />
                
          <div className="row">
              {console.log("prodinfo.lastprod"+productInfo.lastProduct)}
              {console.log("userinfo.last"+userInfo.lastUser)}
                 <LastMovieInDb lastProduct={productInfo.lastProduct}/>
                 <LastUser lastUser={userInfo.lastUser}/>
                 <GenresInDb categories = {categories} countByCategory={productInfo.countByCategory}/>
          </div>
    </div>

  );
}