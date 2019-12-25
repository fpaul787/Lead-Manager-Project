import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLeads } from '../../actions/leads'

export class Leads extends Component {
    // Still works w/o proptypes
    // just good practice
    static propTypes = {
        leadsProp: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLeads: PropTypes.func.isRequired,
    }

    componentDidMount() {
        // action creator
        // Part 1 of thunk sequence
        this.props.getLeads()
    }

    // binding event handler in
    // constructor
    // best way to bind because
    // 1. clean render method
    // 2. best performance
    // 3. does not autobind
    // Disadvantage:
    // more code to write
    constructor(props) {
        super(props)
        this.deleteLead = this.deleteLead.bind(this)
    }

    // onClick={() =>   this.deleteLeadS(lead.id)}
    // deleteLeadS = id => {
    //     console.log(id)
    // }

    deleteLead(leadID) {
        //console.log(id)
        this.props.deleteLeads(leadID)
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
                                        onClick={() => this.deleteLead(lead.id)}
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
