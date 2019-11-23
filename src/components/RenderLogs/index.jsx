import React from "react";
export default function RenderLogs(props) {
    const { counters } = props;
    return (
        <div className="container">
            <h2>Render Logs</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Component Name</th>
                        <th>#Mounted Times</th>
                    </tr>
                </thead>
                <tbody>
                    {counters && Object.keys(counters).length > 0 ?
                        Object.keys(counters).map(name => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{counters[name]}</td>
                            </tr>
                        )) : null}
                </tbody>
            </table>
        </div>)
} 