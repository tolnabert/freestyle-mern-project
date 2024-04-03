const FormRow = ({ type, name, labelText, defaultValue, onChange, required }) => {
  return (
    <div className='form-row'>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormRow;