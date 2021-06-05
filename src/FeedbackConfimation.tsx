import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Button from './Components/Button'

function FeedbackConfirmation() {
  return (
    <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="text-center"
    >

    <div className="p-10 max-w-xl mx-auto shadow-md border-0 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded">
        <h3>Thanks, your feeback has been sent</h3>
        <Link to="/"><Button>Home</Button></Link>
    </div>
    </motion.div>
  );
}
export default FeedbackConfirmation;
