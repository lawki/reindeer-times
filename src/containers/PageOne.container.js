import { connect } from "react-redux";
import { getRandoes } from "../components/Randoes/randoes.action";
import { fetchStudents } from "../components/Students/students.action";
import { PageOne } from "../components/PageOne";
import { GET_RANDOES, FETCH_STUDENTS } from "../store/actions";
import { renderEvent } from "../components/common.actions";
const mapStateToProps = (state)=>({
        randoes: state.randoes.data,
        students: state.students.data
});

const mapDispatchToProps = (dispatch)=>{
    return {
        getRandoes: ()=> dispatch(getRandoes(GET_RANDOES)),
        fetchStudents: ()=> dispatch(fetchStudents(FETCH_STUDENTS)),
        notifyComponentRendered: (pageName)=> dispatch(renderEvent(pageName)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);