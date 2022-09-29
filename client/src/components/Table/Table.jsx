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
                            <div className="table-body__row" key={`${row.counterparty}-${row.amount}`}>
                                <div className="table-body__cell">
                                    {idx + 1}. {row.counterParty}
                                </div>
                                <div className="table-body__cell">
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
