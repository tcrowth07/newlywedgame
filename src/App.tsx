import { Link } from "react-router-dom";
import Button from "./Components/Button"

function App() {
  return (
    <div className="text-center">
      <Link to="/start"><Button className="mx-5" bgColor="yellow-500">Play Single Device Mode</Button></Link><br /><br />
      <Button bgColor="yellow-600" disabled={true}>Play Multi Device Mode</Button><br />
      <div className="text-xs text-gray-500">(Coming Soon)</div>
      <Button bgColor="yellow-600" disabled={true}>Play Multi Couple Mode</Button>
      <div className="text-xs text-gray-500">(Coming Soon)</div>
    </div>
  );
}
export default App;
