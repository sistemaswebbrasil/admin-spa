import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pedidoActions } from '../_actions';

export class MesaPedido extends Component {

    componentDidMount() {
        const { mesa } = this.props;
        const { pedido } = this.props;
        /* eslint-disable no-debugger */
        // debugger;
        if (mesa) {

            // this.props.dispatch(pedidoActions.getPedido(mesa));
            // this.props.dispatch(pedidoActions.getAll());
            // this.firstAction();
            pedido(mesa);
        }
    }


    render() {
        const { pedidos } = this.props;
        return (
            <div>




                {pedidos.loading && <em>Loading pedido...</em>}
                {pedidos.error && <span className="text-danger">ERROR: {pedidos.error}</span>}
                {pedidos.items &&

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.items.map((pedido) =>
                                <tr key={pedido.id}>
                                    <th>{pedido.nome}</th>
                                    <th>{pedido.qtd}</th>
                                    <th>{pedido.preco}</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

MesaPedido.propTypes = {
    mesa: PropTypes.object,
    mesas: PropTypes.any,
    dispatch: PropTypes.any,
    pedido: PropTypes.any,
    pedidos: PropTypes.any,
};


function mapStateToProps(state) {
    const { pedidos } = state;
    return {
        pedidos
    };
}




// const mapDispatchToProps = {

// };


const mapDispatchToProps = (dispatch) => {
    return {
        pedido: (mesa) => dispatch(pedidoActions.getPedidos(mesa)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MesaPedido);
