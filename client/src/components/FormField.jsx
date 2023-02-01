import React from "react";

const FormField = ({
  name,
  placeholder,
  isSurpriseMe,
  labelName,
  type,
  value,
  handleChange,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor={name}>{labelName}{" "}</label>
        {isSurpriseMe && (
          <button
          type="button"
            onClick={handleSurpriseMe}
            className="bg-gray-200 text-sm font-bold px-2 rounded-lg"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="px-4 py-2 ring-1 ring-gray-300 rounded-sm w-full mb-4 text-gray-700"
      />
    </div>
  );
};

export default FormField;
