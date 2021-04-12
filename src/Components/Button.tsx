function Button({
  size,
  bgColor,
  textColor,
  children,
  disabled,
  onClick,
  className,
  hoverColor
}: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        className +
        ` mt-3 bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded ${hoverColor && "hover:bg-" + hoverColor}`
      }
    >
      {children}
    </button>
  );
}

export default Button;
