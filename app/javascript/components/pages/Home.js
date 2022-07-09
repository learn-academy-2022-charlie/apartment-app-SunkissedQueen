import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
        <h1>TreeHouse</h1>
        <h2>Don't just swing on it, Sleep in it</h2>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrf03_DeE1f17uDlDkVI6JNyZM_Ehv5y3wg&usqp=CAU" className="d-block w-100" alt="treehouse"/>
            </div>
            <div className="carousel-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Inside_the_Tree_House_-_geograph.org.uk_-_571538.jpg" className="d-block w-100" alt="treehouse"/>
            </div>
            <div className="carousel-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg" className="d-block w-100" alt="treehouse"/>
            </div>            
            <div className="carousel-item">
              <img src="https://a0.muscache.com/pictures/bc94fc3c-f812-4723-88c1-b8e6995113e1.jpg" className="d-block w-100" alt="treehouse"/>
            </div>            
            <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsejCYbjmB5GDQX2GXhUKcpfaCDzStfHpuA&usqp=CAU" className="d-block w-100" alt="treehouse"/>
            </div>            
            <div className="carousel-item">
              <img src="https://live.staticflickr.com/7399/27301630834_ed0fa93b17_c.jpg" className="d-block w-100" alt="treehouse"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    )
  }
}
export default Home