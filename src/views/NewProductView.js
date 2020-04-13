import React, { Component } from 'react';
//componente criado para ser o formulario para inserir novos produtos.

import { ProductService } from '../services/ProductService';

class NewProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            description: '',
            price: 0

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        //target e o alvo da onde esta saindo o evento
        const { target } = event,
            { name, value } = target;

        this.setState({

            [name]: value
        })

    }

    handleSubmit(event) {
        //evita arenderizacao automatica da pagina.
        event.preventDefault();
        const newProduct = this.state;

        if (newProduct.description && newProduct.image) {

            ProductService.create(newProduct);

            this.setState({

                image: '',
                description: '',
                price: 0


            })
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
                <h1>Novo Produto</h1>
                <form className="product-form" onSubmit={this.handleSubmit}>
                    <label>
                        <span>Imagem</span>
                        {/* ficara mais facil de atribuir os valores no estado quando forem alterados. */}
                        <input name="image" onChange={this.handleChange} type="text" value={state.image}></input>

                    </label>

                    <label>
                        <span>Descrição</span>
                        {/* ficara mais facil de atribuir os valores no estado quando forem alterados. */}
                        <input name="description" onChange={this.handleChange} type="text" value={state.description}></input>

                    </label>

                    <label>
                        <span>Preço</span>
                        {/* ficara mais facil de atribuir os valores no estado quando forem alterados. */}
                        <input name="price" onChange={this.handleChange} type="text" value={state.price}></input>

                    </label>
                    <button type="submit">Criar Produto</button>

                </form>

            </div>

        )

    }

}

export default NewProductView;