import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mesaActions } from '../_actions';
import mesaLogo from '../../images/rekit-logo.svg';
class MesaPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(mesaActions.getAll());
    }

    handleDeleteUser(id) {
        return () => this.props.dispatch(mesaActions.delete(id));
    }

    render() {
        const { mesas } = this.props;
        return (
            <div>
                <div className="row">
                    {mesas.loading && <em>Loading mesas...</em>}
                    {mesas.error && <span className="text-danger">ERROR: {mesas.error}</span>}
                    {mesas.items &&
                        <div>

                            {mesas.items.map((mesa) =>
                                <div key={mesa.id_mesa} className="col-xs-2 col-md-1">
                                    <div >
                                        <h3>Mesa {mesa.numero}</h3>
                                        <img className="img-thumbnail" alt="200x200" src={mesaLogo} style={mesa.situacao == 1 ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></img>
                                        <Link to={`/mesa/edit/${mesa.id_mesa}`} className="btn">Detalhar</Link>

                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
                <div className="">
                    <h1>Mesa</h1>
                    {mesas.loading && <em>Loading mesas...</em>}
                    {mesas.error && <span className="text-danger">ERROR: {mesas.error}</span>}
                    {mesas.items &&
                        <ul>
                            {mesas.items.map((mesa) =>
                                <li key={mesa.id_mesa}>
                                    {mesa.numero + ' ' + mesa.situacao}
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes das propriedades recebidas pelos props
MesaPage.propTypes = {
    mesa: PropTypes.object,
    mesas: PropTypes.any,
    dispatch: PropTypes.any,
};

function mapStateToProps(state) {
    const { mesas } = state;
    return {
        mesas
    };
}

const connectedMesaPage = connect(mapStateToProps)(MesaPage);
export { connectedMesaPage as MesaPage };
