import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLeads } from '../../actions/leads'

export class Leads extends Component {
    static propTypes = {
        leadsProp: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getLeads()
    }

    render() {
        return (
            <div>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leadsProp.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <button
                                    {/* binding is necessary to make `this` work */}
                                        onClick={this.props.deleteLeads.bind(
                                            this,
                                            lead.id
                                        )}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

// state of redux to props of this
// componenets
const mapStateToProps = state => ({
    // state.leads is leads reducer,
    // state.leads.leads is part of state
    // that we want
    leadsProp: state.leadsReducer.leads,
})

const mapDispatchToProps = { getLeads, deleteLeads }

// in order to use react and redux
// we need connect. For our state? Not
// exactly sure why
export default connect(mapStateToProps, mapDispatchToProps)(Leads)
