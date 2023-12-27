import PlaceContentCenter from "./components/PlaceContentCenter";
import Counter from "./components/Counter";

function App() {
  return (
    <PlaceContentCenter>
      <Counter initialValue={10} />
    </PlaceContentCenter>
    // <div className="bg-slate-100 antialiased flex items-center justify-center min-h-screen">
    //   <div className="max-w-md w-full">
    //     <Card>
    //       <Card.Title>Hello World</Card.Title>
    //       <Card.Body>
    //         lorem das asd dasddasdasdsadsa dasdasd dasd
    //         adasdasdasdasdsdsadwddasd asdasd asdadawdawddwdasd asdasda sdasd sad
    //         s ds dsdsad awd awda dw daw d asda sd a sd sdasdasdasdasda d
    //       </Card.Body>
    //       <Card.Footer>
    //         <Button>Register</Button>
    //       </Card.Footer>
    //     </Card>
    //   </div>
    // </div>
  );
}

export default App;
