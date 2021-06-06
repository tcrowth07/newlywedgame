import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useHistory } from "react-router-dom";


function Feedback() {
    let history = useHistory();
    function sendEmail(e: any) {
      e.preventDefault();
      if (!e.target[0].value) { document.getElementById('nameError')!.innerHTML = "Name Required" }
      if (!e.target[1].value) { document.getElementById('messageError')!.innerHTML = "Message Required" }
      if (e.target[0].value && e.target[1].value) {
        emailjs
          .sendForm(
            "service_iegyvfq",
            "template_2akjg4g",
            e.target,
            "user_50rnFVFh6oUClyRZuI8VK"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        history.push("/feedback-confirmation");
      }
    }

  return (
    <motion.div
      exit={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "-100vh" }}
    >

    <form onSubmit={sendEmail} className="p-10 max-w-xl mx-auto shadow-md border-0 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded">
        <div className="mb-10">
            <h1 className="font-bold text-4xl mb-3">Feedback</h1>
            <p className="font-medium text-lg mb-5">Let me know how you like the game and any suggestions on how to improve it!</p>
            <hr className="border-gray-900 dark:border-gray-100"/>
        </div>
        <div className="mb-5">
            <label htmlFor="name" className="text-lg flex justify-between items-end"><span>Name</span><span id="nameError" className="text-xs text-red-500 "></span></label>
            <div className="mt-1 flex shadow-md">
                <input type="text" name="user_name" className="flex-1 p-2 block w-full sm:text-sm rounded border dark:border-gray-100 bg-white dark:bg-gray-900"/>
            </div>
        </div>
        <div className="mb-5 mt-5">
            <label htmlFor="message" className="text-lg flex justify-between items-end"><span>Message</span><span id="messageError" className="text-xs text-red-500"></span></label>
            <textarea name="message" id="message" cols={30} rows={10} className="p-2 shadow-md mt-1 block w-full sm:text-sm rounded border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"></textarea>
        </div>
        
        <div>
            <button type="submit" className="p2 font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-700 dark:bg-gray-200 text-green-500 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"><i className="fas fa-check"></i> Send</button>
        </div>
    </form>
    </motion.div>
  );
}
export default Feedback;
