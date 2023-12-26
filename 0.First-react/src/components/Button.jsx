const Button = ({ children, type, className }) => {
  return (
    <button type={type} className={`${className} text-white px-4 py-2 rounded bg-blue-600`}>
      {children}
    </button>
  );
};

export default Button;
