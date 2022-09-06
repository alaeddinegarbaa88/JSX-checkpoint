import "./App.css";
import Adress from "./Component/Profile/Adress";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <ProfilPhoto />
        <Card.Body>
          <Card.Title>
            <FullName />
          </Card.Title>
          <Card.Text>
            <Adress />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
