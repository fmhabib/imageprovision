import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { motion } from 'framer-motion';

interface props {
    title: string;
    open: boolean;
    content: string;
    first?: boolean | undefined;
}


const FaqCard = ({ title, open, content, first }: props) => {
    const [show, setShow] = useState(open)
    return (
        <div className={`pb-6 ${first ? 'pt-0' : "pt-10"} border-b-2 border-gray-200`}>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(!show)}>
                <h1 className="text-md sm:text-lg font-medium ">{title}</h1>
                <motion.div
                    animate={{ rotate: show ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <MdKeyboardArrowDown className="cursor-pointer text-3xl" />
                </motion.div>
            </div>
            {show && (
                <motion.p
                    className="slide-bottom pt-6 text-[#656565]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {content}
                </motion.p>
            )}
        </div>
    );
}

export default FaqCard