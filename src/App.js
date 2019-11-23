import React, { useState } from 'react';
import { connect } from "react-redux";
import PageOneContainer from './containers/PageOne.container';
import RenderLogs from './components/RenderLogs';
const tabs = {
  PAGE_ONE: "PAGE_ONE",
  PAGE_TWO: "PAGE_TWO"
}
function App(props) {
  const { counters } = props;
  const [activeTab, setActiveTab] = useState(tabs.PAGE_ONE);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="row justify-content-center w-50 mx-auto">
          <button className="btn btn-primary ml-5" onClick={()=> setActiveTab(tabs.PAGE_ONE)}>Page One</button>
          <button className="btn btn-primary ml-3" onClick={()=> setActiveTab(tabs.PAGE_TWO)}>Page Two</button>
        </div>
      </nav>
      <RenderLogs counters={counters} />
      <PageOneContainer/>
    </div>
  );
}
const mapStateToProps = (state)=>({
  counters: state.componentRendered
});
export default connect(mapStateToProps)(App);
