interface InputFieldProps {
  id: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const InputField = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  className = "",
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-300 text-sm font-semibold">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`w-full mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${className}`}
      />
    </div>
  );
};

export default InputField;
