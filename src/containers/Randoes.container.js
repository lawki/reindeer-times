import { connect } from "react-redux";
import Randoes from "../components/Randoes";
import { getRandoes } from "../components/Randoes/randoes.action";
import { renderEvent } from "../components/common.actions";
const mapStateToProps = state=>({
    randoes: state.randoes.data
});
const mapDispatchToProps = dispatch=>({
    getRandoes: ()=>dispatch(getRandoes()),
    notifyComponentRendered: (pageName)=> dispatch(renderEvent(pageName))
});
export default connect(mapStateToProps,mapDispatchToProps)(Randoes);