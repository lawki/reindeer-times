import React from "react";
import Randoes from "../Randoes";
export class PageOne extends React.Component {
    componentDidMount() {
        const { getRandoes } = this.props;
        getRandoes();
    }
    render() {
        const { randoes } = this.props;
        return (<div>
            <Randoes randoes={randoes} />
        </div>);
    }
}