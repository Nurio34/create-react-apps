import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

function CopyButton({ setIsCopied, children }) {
    return (
        <motion.button
            className=" absolute top-6 right-4 cursor-pointer "
            onClick={(e) => {
                setIsCopied(true);
                navigator.clipboard.writeText(children);
            }}
            whileHover={{
                scale: 1.1,
            }}
        >
            <FaCopy size={16} color="blue" />
        </motion.button>
    );
}

export default CopyButton;
