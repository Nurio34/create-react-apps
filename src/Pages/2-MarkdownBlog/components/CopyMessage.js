import { motion, AnimatePresence } from "framer-motion";

function CopyMessage({ isCopied }) {
    return (
        <AnimatePresence>
            {isCopied && (
                <motion.div
                    className=" absolute top-6 right-12 p-1 bg-green-300 "
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    exit={{
                        x: 100,
                        opacity: 0,
                    }}
                >
                    Code Copied
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CopyMessage;
