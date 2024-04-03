const FormSelect = ({
  value,
  name,
  labelText,
  onChange,
  options,
  defaultLabel,
  required
}) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        required={required}
      >
        {defaultLabel && (
          <option value="">{defaultLabel}</option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
