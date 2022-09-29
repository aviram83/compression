import React from "react";

import "./Table.css";

const Table = ({ label, rows = [] }) => {

    return (
        <div className="table">
            <div className="label">{label}</div>
            <div className="inner-table">
                <div className="table-header">
                    <div className="column">Counterparty Name</div>
                    <div className="column">Amount</div>
                </div>
                <div className="table-body">
                    {
                        rows.map((row, idx) => (
                            <div className="row">
                                <div className="cell">
                                    {idx + 1}. {row.counterparty}
                                </div>
                                <div className="cell">
                                    ${Math.abs(row.amount)}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Table
