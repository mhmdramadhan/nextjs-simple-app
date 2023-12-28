import PlaceContentCenter from "./components/PlaceContentCenter";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Sign for new account</Card.Title>
        <Card.Body>
          <div className="mb-6">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
        </Card.Body>
        <Card.Footer>
          <Button className="bg-black">Register</Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}

export default App;
