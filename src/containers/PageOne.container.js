import { connect } from "react-redux";
import { getRandoes } from "../components/Randoes/randoes.action";
import { PageOne } from "../components/PageOne";
import { GET_RANDOES } from "../store/actions";
const mapStateToProps = (state)=>({
        randoes: state.randoes.data
});

const mapDispatchToProps = (dispatch)=>{
    return {
        getRandoes: ()=> dispatch(getRandoes(GET_RANDOES))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);