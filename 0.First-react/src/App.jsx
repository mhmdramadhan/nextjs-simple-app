import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { Label } from './components/Label';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const formExec = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <PlaceContentCenter>
      <form onSubmit={formExec}>
        <Card>
          <Card.Title>Sign for new account</Card.Title>
          <Card.Body>
            <div className="mb-5 border rounded-lg p-3">
              <p>Name : {form.name}</p>
              <p>Email : {form.email}</p>
            </div>
            <div className="mb-6">
              <Label htmlFor="name" value={'Name'} />
              <Input
                value={form.name}
                onChange={(e) => {
                  setForm((form) => ({ ...form, name: e.target.value }));
                }}
                id="name"
                name="name"
              />
            </div>
            <div>
              <Label htmlFor="email" value={'Email'} />
              <Input
                value={form.email}
                onChange={(e) => {
                  setForm((form) => ({ ...form, email: e.target.value }));
                }}
                type="email"
                id="email"
                name="email"
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <Button className="bg-black">Register</Button>
          </Card.Footer>
        </Card>
      </form>
    </PlaceContentCenter>
  );
}

export default App;
