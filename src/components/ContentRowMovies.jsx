import React, { Component }  from 'react';
import { Cards } from './index'

class ContentRowMovies extends Component {
  constructor(props){
    super(props);
      this.state = {
        totalMovies: [],
        totalAwards: [],
        actorsQuantity: []
      }
  }


  
  
  render() {
    return (
      <div className='row'>
              <Cards 
                title = "Movies in Data Base"
                quantity = {this.state.totalMovies}
                color = "primary"
                icon = "fa-film" />
              <Cards 
                title = "Total awards"
                quantity = {this.state.totalAwards}
                color = "success"
                icon = "fa-award" />
              <Cards 
                title = "Actors quantity"
                quantity = {this.state.actorsQuantity}
                color = "warning"
                icon = "fa-user" />
      </div>

    )
  }
}

export default ContentRowMovies
