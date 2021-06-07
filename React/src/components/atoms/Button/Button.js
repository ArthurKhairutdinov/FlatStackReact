const Button = (props) => {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
};

export default Button;
