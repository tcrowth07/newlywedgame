function Button ({size, bgColor, textColor, children, disabled, onClick, className} : any) {
    return (
        <button onClick={onClick} disabled={disabled} className={className + ` mt-3 bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded hover:bg-yellow-600`}>
        {children}
    </button>
    )
};

export default Button;