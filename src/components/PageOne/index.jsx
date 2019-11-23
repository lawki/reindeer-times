import React from "react";
import Randoes from "../Randoes";
import Students from "../Students";
import RenderLogs from "../RenderLogs";
export class PageOne extends React.Component {
    render() {
        const { randoes, students, notifyComponentRendered, fetchStudents, getRandoes } = this.props;
        notifyComponentRendered(this.constructor.name);
        return (
        <div className="col h-100">
            <div className="row">
                <div className="col container">
                    <Randoes randoes={randoes} getRandoes={getRandoes}
                        notifyComponentRendered={notifyComponentRendered}
                    />
                </div>
                <div className="col container">
                    <Students students={students} fetchStudents={fetchStudents}
                        notifyComponentRendered={notifyComponentRendered}
                    />
                </div>
            </div>
        </div>);
    }
}