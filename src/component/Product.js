import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (

            <div className="col-md4">
                <div className="card">
                    <div className="card-block">
                        <img src="" alt="" className="img-fluid" />
                        <div className="card-title">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="card-text">{this.props.category}</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Product
