const Button = ({ children, label, onClick, isActive }) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded mt-6">
      {children}
    </button>
  );
};

export default Button;
