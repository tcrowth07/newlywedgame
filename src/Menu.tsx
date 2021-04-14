import { Link } from "react-router-dom";
import Button from "./Components/Button";
import { motion } from "framer-motion";

function Menu() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="text-center"
    >
      <Link to="/start">
        <Button className="mx-5" bgColor="yellow-500" hoverColor="yellow-600">
          Play Single Device Mode
        </Button>
      </Link>
      <br />
      <br />
      <Button bgColor="yellow-600" disabled={true}>
        Play Multi Device Mode
      </Button>
      <br />
      <div className="text-xs text-gray-500">(Coming Soon)</div>
      <Button bgColor="yellow-600" disabled={true}>
        Play Multi Couple Mode
      </Button>
      <div className="text-xs text-gray-500">(Coming Soon)</div>
    </motion.div>
  );
}
export default Menu;
