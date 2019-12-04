import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class FirstModal extends Component {
    render() {
        return (
            <div className="row">
                <div className="firstContainer">
                    <div className="productImg">
                        <img src="https://www.seoze.com/media/catalog/product/import/Coral-Teste-Facil-Fita-Violeta.jpg" alt="teste"></img>
                    </div>
                    <h1>Este produto possui o teste fácil, você deseja experimentar?</h1>
                    <span>Coral Teste Facil Fita Violeta</span>
                    <div className="firstButtons">
                        <button className="btn btn-success" onClick={this.props.passedFunction}> Sim </button>
                        <button className="btn btn-danger"> Não </button>
                    </div>
                </div>
            </div>
        );
    }
}  
