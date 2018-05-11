import React from 'react'

import './table.css'

export default function Table(props) {
    const mainRow = props.mainRow || []
    const rows = props.rows || [[]]
    const {
        mainRow: {},
        rows: [],
    } = props

    function renderMainRow(mainRow) {
        return (
            <tr className='mainRow'>
                {Object.entries(mainRow)
                    .map(([key, value]) => (
                        <td>{value}</td>
                    ))}
            </tr>
        )
    }

    function renderRows(mainRow, rows) {
        return (
            rows.map(item => (
                <tr>
                    {Object.keys(mainRow)
                        .map(key => (
                            <td>
                                {item[key]}
                            </td>
                        ))}
                </tr>
            ))
        )
    }

    return (
        <table>
            <tbody>
               {renderMainRow(mainRow)}
               {renderRows(mainRow, rows)} 
            </tbody>
        </table>
    )
}