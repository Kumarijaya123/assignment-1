
function Dropdown({ options, onChange, selectedItem }) {
  return (
    // eslint-disable-next-line
    <select
      name="currency"
      id="currency"
      value={selectedItem}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
