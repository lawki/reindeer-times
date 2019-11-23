import React from "react";
import { connect } from "react-redux";
import StudentsContainer from "../../containers/Students.container";
import RandoesContainer from "../../containers/Randoes.container";
import { bindActionCreators } from "redux";
import { renderEvent } from "../common.actions";
function PageTwo(props) {
    props.notifyComponentRendered("PageTwo");
    return (
        <div className="col h-100">
            <div className="row">
                <div className="col container">
                    <StudentsContainer/>
                </div>
                <div className="col container">
                    <RandoesContainer/>
                </div>
            </div>
        </div>);
}
const mapDispatchToProps = dispatch=>bindActionCreators({
    notifyComponentRendered: renderEvent
},dispatch );
export default connect(null, mapDispatchToProps)(PageTwo);