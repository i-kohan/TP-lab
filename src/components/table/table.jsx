import React from 'react'

import './table.css'

export default function Table(props) {
    const mainRow = props.mainRow || []
    const rows = props.rows || [[]]
    const {
        mainRow: [],
        rows: [[]],
    } = props

    function renderMainRow(mainRow) {
        return (
            <tr className='mainRow'>
                {mainRow.map(item => (
                    <td>{item}</td>
                ))}
            </tr>
        )
    }

    function renderRows(rows) {
        return (
            rows.map(items => (
                <tr>
                    {items.map(item => (
                        <td>
                            {item}
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
               {renderRows(rows)} 
            </tbody>
        </table>
    )
}