import React from "react";

import Textform from "../components/Textform";
import Alert from "../components/Alert";

const Home = ({ mode, showAlert, alerts }) => {
  return (
    <div>
      <Textform mode={mode} showAlert={showAlert} />
      <Alert alerts={alerts} />
    </div>
  );
};

export default Home;
