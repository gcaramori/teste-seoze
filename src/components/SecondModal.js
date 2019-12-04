import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class SecondModal extends Component {
    constructor(props) {
        super(props);

        this.addProduct = this.addProduct.bind(this);

        this.state = {
            data: [],
            isDisabled: true
        }
        
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://apitest.seoze.net/api/catalog/product/list"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
        }) 
        .then(res => res.json())
        .then(json => {
            this.setState({ data: json.msg });
        })
    }
    
    addProduct(id) {
        const obj = {
            product_id: id,
            cart_identification: 'carrinhogui'
          };
        
          axios.post('https://cors-anywhere.herokuapp.com/https://apitest.seoze.net/api/catalog/product/add', obj)
              .then(res => {
                    console.log(res.data)

                    if(document.querySelectorAll('.selected').length > 2) {
                        this.setState({ isDisabled: false })
                    }
           });

           switch(id) {
            case 1:
                document.querySelectorAll('.products li')[0].classList.toggle('selected');
                break;

            case 2:
                document.querySelectorAll('.products li')[1].classList.toggle('selected');
                break;
            
            case 3:
                document.querySelectorAll('.products li')[2].classList.toggle('selected');
                break;
            }
    }

    render() {
        return (
            <div className="row">
                <div className="secondContainer">
                    <h1>Levando 4 o frete sai de graça</h1>
                    <div className="defaultProduct">
                        <div className="productImg">
                            <img src="https://www.seoze.com/media/catalog/product/import/Coral-Teste-Facil-Fita-Violeta.jpg" alt="teste"></img>
                            <span>Coral Teste Facil Fita Violeta</span>
                        </div>
                    </div>
                    <ul className="products">
                        { this.state.data.map((item) => {
                        return (
                          <li key={item.id} onClick={() => this.addProduct(item.id)}>
                            <div className="image">

                            </div>
                            <span>{item.name}</span>
                          </li>
                        )
                    })}
                    </ul>
                    <button className="btn btn-success" disabled={this.state.isDisabled}> Finalizar compra </button>
                </div>
            </div>
        );
    }
}  