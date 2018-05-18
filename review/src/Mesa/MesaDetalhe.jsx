import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mesaActions } from '../_actions';
import MesaPedido from './MesaPedido';



class MesaDetalhe extends Component {

    // componentDidMount() {
    //     this.props.dispatch(mesaActions.getMesa(this.props.match.params.id));
    // }

    componentDidMount  () {
        const { id } = this.props.match.params;
        if (id) {
            this.props.dispatch(mesaActions.getMesa(id));
        }
    }

    render() {
        const { mesa } = this.props;
        return (
            <div>
                {/* <div className={'btn-group pull-right ' + (this.props.showBulkActions ? 'show' : 'hidden')}></div> */}

                <div className={'panel ' + (mesa.situacao == 1  ? 'panel-success' : 'panel-danger')} >
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {'Mesa:'+`${mesa.numero}`.padStart(2, '0')  }
                        </h3>
                    </div>
                    <div className="panel-body">
                        <p>
                            {'Status: ' + (mesa.situacao == 1 ? 'Aberto' : 'Fechado')}
                        </p>
                        <p>
                            {'Garçon:' + mesa.numero}
                        </p>

                        {mesa.situacao == 1 &&
                            <MesaPedido mesa={mesa.numero}></MesaPedido>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes das propriedades recebidas pelos props
MesaDetalhe.propTypes = {
    mesa: PropTypes.any,
    user: PropTypes.object,
    mesas: PropTypes.any,
    dispatch: PropTypes.any,
    location: PropTypes.any,
    id: PropTypes.any,
    params: PropTypes.any,
    match: PropTypes.any,
};

// function mapStateToProps(state) {
//     // const { mesa } = state;
//     return {
//         mesa: state.mesas.mesa,
//     };
// }

function mapStateToProps(state) {
    const { mesas, authentication} = state;
    const { user } = authentication;
    const { mesa } = mesas;
    return {
        mesa,
        user
    };
}


// function mapStateToProps(state) {
//     //const { contacts } = state;
//     return {
//         contact: state.contacts.contact,
//         //contact: state.contacts,
//         contacts: state.contacts
//     };
// }

const connectedMesaDetalhe = connect(mapStateToProps)(MesaDetalhe);
export { connectedMesaDetalhe as MesaDetalhe };
