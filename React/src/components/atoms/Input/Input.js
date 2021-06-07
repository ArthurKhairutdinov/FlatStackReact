const Input = ({ onChange, ...props }) => {
    const handleChange = (ev) => {
        onChange(ev.target.value);
    };
    return <Input{...props} onChange={handleChange} />;
};

export default Input;
