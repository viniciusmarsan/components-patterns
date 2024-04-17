import "./App.scss";

import Alert from "./components/molecules/Alert";
import Lexend from "./components/atoms/Lexend";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <p>Components</p>
        <Lexend text="Lexend" size="80px" weight={600} color="#061C3D" />
        <Alert
          title="This is a info alert"
<<<<<<< Updated upstream
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. teste tse tstywets sets te st"
=======
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. teste teste teste"
>>>>>>> Stashed changes
          status="error"
          type=""
          filledBackground={false}
          linkRedirect="www.google.com.br"
          linkText="Alert link"
          hasIconClose
        />
      </div>
    </div>
  );
}

export default App;
