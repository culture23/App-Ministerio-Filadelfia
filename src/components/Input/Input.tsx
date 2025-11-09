import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = "", id, ...props }) => {
  const autoId = React.useId();
  const inputId = id ?? (label ? `input-${autoId}` : undefined);

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium mb-2 text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        className={`w-full border border-gray-300 rounded-2xl h-10 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
      />
    </div>
  );
};
