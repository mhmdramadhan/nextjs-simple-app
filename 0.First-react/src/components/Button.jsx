const Button = ({ children, type, className, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={`${className} text-white px-4 py-2 rounded `}
    >
      {children}
    </button>
  );
};

export default Button;
