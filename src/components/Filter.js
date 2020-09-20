import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                <label>
                    Order by
                    <select className="form-control" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter status of curse
                    <select className="form-control" value={this.props.cursed}
                                onChange={this.props.handleChangeCursed}>
                                <option value="">ALL</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </label>
                    </div>
                </div>        
        )
    }
}
