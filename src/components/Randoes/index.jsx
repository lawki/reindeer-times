import React from "react";
export default class Randoes extends React.Component{
    render(){
        const { randoes } = this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {randoes && Array.isArray(randoes) ?
                            randoes.map((rando, index) => (
                                <tr key={`${rando.name}_${index}`}>
                                    <td>{rando.name}</td>
                                    <td>{rando.age}</td>
                                </tr>
                            )) : null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}