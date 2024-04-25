interface props {
    name: string;
    placeholder: string;
    type: string;
    textarea?: boolean | undefined;
    value: string | undefined;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    bgWhite?: boolean;
}

const Input = ({ name, textarea, handleChange, type, placeholder, value, error, bgWhite }: props) => {
    return <div className="relative z-0 w-full mb-5 group">
        {
            textarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={`block min-h-[100px] py-2.5 px-0 w-full ${bgWhite ? "placeholder-black" : "placeholder-white"} text-base ${bgWhite ? "text-black" : "text-white"} bg-transparent border-0 border-b-2 border-[rgb(116,62,180)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    required
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    className={`block py-0 px-0 w-full text-base md:text-lg ${bgWhite ? "placeholder-black" : "placeholder-white"} sm:text-base ${bgWhite ? "text-black" : "text-white"} bg-transparent border-0 border-b-2 border-[rgb(116,62,180)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    required
                    placeholder={placeholder}
                />
            )
        }
        {error && <p className="absolute mt-1 text-xs text-red-500">{error}</p>}


        {/* <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-10 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label> */}
    </div>
}


export default Input