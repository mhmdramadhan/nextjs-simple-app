const Button = ({ children, type, text, className, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={`${className} text-white inline-flex justify-center items-center whitespace-nowrap gap-x-2 px-4 h-10 rounded bg-black`}
    >
      {children || text}
    </button>
  );
};

export default Button;
