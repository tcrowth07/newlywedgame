import { useState } from "react"
function FloatingLabelInput({ type, name, children, id } :any) {
    const [active, setActive] = useState(false);
  
    function handleActivation(e : any) {
      setActive(!!e.target.value);
    }
  
    return (
      <div className="relative border rounded mb-2 bg-gray-500 text-white border-white border-opacity-25">
        <input
          className={[
            "outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2",
            active ? "pt-6" : ""
          ].join(" ")}
          id={id}
          name={name}
          type={type}
          onChange={handleActivation}
        />
        <label
          className={[
            "absolute top-0 left-0 flex items-center text-white text-opacity-50 p-2 transition-all duration-200 ease-in-out",
            active ? "text-xs" : "text-sm"
          ].join(" ")}
          htmlFor={name}
        >
          {children}
        </label>
      </div>
    );
  }
  export default FloatingLabelInput;