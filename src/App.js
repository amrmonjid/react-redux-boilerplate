import React from "react";
import "./App.css";
import { useDispatch, useSelector /*connect*/ } from "react-redux";
import { AddDataActionSampleOne } from "./redux/smaple-section/section.actions";
//import { createStructuredSelector } from "reselect";
import { selectSectionData } from "./redux/smaple-section/section.selectors";

function App() {
  const data = useSelector(selectSectionData);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React - Redux boilerplate</h1>
      <h2>Basic setup for a quick react project start</h2>
      {data.name}
      <br></br>
      <button
        onClick={() => {
          dispatch(
            AddDataActionSampleOne({
              name: "Test Data Added To The store - Check the console"
            })
          );
        }}
      >
        Text Redux
      </button>
    </div>
  );
}

export default App;

// const mapStateToProps = createStructuredSelector({
//   data: selectSectionData
// });

// const mapDispatchToProps = dispatch => ({
//   addData: data => dispatch(AddDataActionSampleOne(data))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
