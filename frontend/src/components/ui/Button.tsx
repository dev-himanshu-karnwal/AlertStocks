interface ButtonProps {
  text: string;
  type: "submit" | "button" | "reset";
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  color?: "blue" | "red" | "green";
}

const Button = ({
  text,
  type,
  isLoading = false,
  onClick,
  disabled = false,
  color = "blue",
}: ButtonProps) => {
  let buttonColor: string;
  if (color === "blue")
    buttonColor = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
  else if (color === "red")
    buttonColor = "bg-red-600 hover:bg-red-700 focus:ring-red-500";
  else buttonColor = "bg-green-600 hover:bg-green-700 focus:ring-green-500";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${buttonColor} w-full py-2 text-white cursor-pointer rounded-lg font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-2`}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-25"
            ></circle>
            <path
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              d="M4 25a21 21 0 0142 0"
              className="opacity-75"
            ></path>
          </svg>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
