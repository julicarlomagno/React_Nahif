import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({productInfo, userInfo}) {
 
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categories={Object.keys(productInfo.countByCategory)}
                             userInfo = {userInfo}
                             productInfo={productInfo}
                             />

              <MoviesTable data = {productInfo.products} 
                           header = {['id', 'name', 'description', 'detail', 'category']}/>
              <MoviesTable data = {userInfo.users} 
                           header = {['id', 'name', 'email', 'detail']}/>
        </div>
              <Footer /> 
    </div>
  );
}