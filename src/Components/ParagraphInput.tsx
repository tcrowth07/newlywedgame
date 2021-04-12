function ParagraphInput({
  name,
  children,
  value,
  onChange,
  id,
  placeholder,
  label,
}: any) {

  return (
    <div className="mb-3 bg-green-100 px-3 py-5 rounded-md">
      <label className="text-xl" htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        onChange={onChange}
      />
    </div>
  );
}
export default ParagraphInput;
