import React from 'react';

const FormTextarea = ({
  name,
  labelText,
  value,
  onChange,
  required,
  className,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{labelText}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className='form-textarea'
      />
    </div>
  );
};

export default FormTextarea;