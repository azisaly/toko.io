
import React, { Component } from 'react'
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Menu from './component/Menu';
import Product from './component/Product';








export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product: [],
      category: 'men clothing'
    }
  }

  componentDidMount() {
    const urlFetch = fetch('https://fakestoreapi.com/products/category/' + this.state.category);

    urlFetch.then(res => {
      if (res.status === 200)
        return res.json()
    }).then(resJson => {
      this.setState({
        product: resJson
      })
      console.log(this.state)
    })

  }


  changeCategory = (value) => {
    this.setState({
      category: value,
      product: []
    })
    const urlFetch = fetch('https://fakestoreapi.com/products/category/' + value);

    urlFetch.then(res => {
      if (res.status === 200)
        return res.json()
    }).then(resJson => {
      this.setState({
        product: resJson
      })
      console.log(this.state)
    })
  }



  render() {
    return (

      <div className="App">
        <Header />

        <div className="clearfix container-web relative">
          <div className=" container relative">
            <div className="row">
              <div className=" relative menu-slide col-lg-12 clear-padding"></div>

              <Menu changeCategory={this.changeCategory} category={this.category} />







            </div>
          </div>

          <div className="clearfix content-product-box bottom-margin-default full-width deal-hot-v2">
            {this.state.product.map((element, i) => (
              <Product gambar={element.image} title={element.title} category={element.category} description={element.description} price={element.price} />
            ))}
          </div>





          <Footer />

        </div>
      </div>


    )
  }
}


export default App;
