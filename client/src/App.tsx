// import CardChasseurs from "./components/CardChasseurs";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <div>
        <h2>App</h2>
        {/* <CardChasseurs /> */}
      </div>
    </>
  );
}

export default App;
