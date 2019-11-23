import React from "react";
export default class Randoes extends React.Component{
    componentDidMount(){
        const { getRandoes } = this.props;
        if(getRandoes) getRandoes();
    }
    render(){
        const { randoes } = this.props;
        return (
            <div>
                <h2> List of Random People with their age</h2>
                <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
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