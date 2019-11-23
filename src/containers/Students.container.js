import { connect } from "react-redux";
import Students from "../components/Students";
import { fetchStudents } from "../components/Students/students.action";
import { bindActionCreators } from "redux";
import { renderEvent } from "../components/common.actions";
const mapStateToProps = state=>({
    students: state.students.data
});
const mapDispatchToProps = dispatch=>bindActionCreators({
    fetchStudents,
    notifyComponentRendered: renderEvent
}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Students);