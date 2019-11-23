import React, { useState } from 'react';
import { connect } from "react-redux";
import PageOneContainer from './containers/PageOne.container';
import RenderLogs from './components/RenderLogs';
import PageTwo from './components/PageTwo';
import { bindActionCreators } from 'redux';
import { changeTab } from './components/common.actions';
const tabs = {
  PAGE_ONE: "PAGE_ONE",
  PAGE_TWO: "PAGE_TWO"
}
function App(props) {
  const { counters, handleChangeTab } = props;
  const [activeTab, setActiveTab] = useState(tabs.PAGE_ONE);
  let TabComponent = null;
  switch (activeTab) {
    case tabs.PAGE_ONE:
      TabComponent = PageOneContainer;
      break;
    case tabs.PAGE_TWO:
      TabComponent = PageTwo;
    default:
      break;
  }
  return (
    <div className="App">
      <nav className="navbar">
        <div className="row justify-content-center w-50 mx-auto">
          <button className="btn btn-primary ml-5"
            onClick={() => {
              setActiveTab(tabs.PAGE_ONE);
              handleChangeTab();
            }}>
            Page One
          </button>
          <button
            className="btn btn-primary ml-3"
            onClick={() => {
              setActiveTab(tabs.PAGE_TWO);
              handleChangeTab();
            }}
          >
            Page Two
            </button>
        </div>
      </nav>
      <RenderLogs counters={counters} />
      <TabComponent />
    </div>
  );
}
const mapStateToProps = (state) => ({
  counters: state.componentRendered
});
const mapDispatchToProps = dispatch => bindActionCreators({
  handleChangeTab: changeTab
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
