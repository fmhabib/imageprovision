import React from 'react';
interface Props {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="relative inline-flex w-full md:w-[143px] h-[50px] max-sm:text-base text-md max-md:my-6 px-4 py-2 text-white justify-center items-center gap-2 rounded-md overflow-hidden font-medium  transition duration-300 ease-out bg-[#743EB4] shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"> {text}</span>
            <span className="relative invisible"> </span>
        </button>

    );
};

{/* <button
    onClick={onClick}
    className="w-full md:w-[143px] h-[50px] text-white max-sm:text-base text-md bg-[#743EB4] max-md:my-6 px-4 py-2 flex justify-center items-center gap-2 rounded-md "
>
  
</button> */}

export default Button;