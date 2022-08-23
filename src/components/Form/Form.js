function Form({
  children,
  method = 'get',
  className='',
  formName,
  onSubmit,
}) {
  return (
    <form
      className={`form ${className}`}
      method={method}
      name={formName}
      onSubmit={onSubmit}
      noValidate>
        {children}
    </form>
  );
};

export default Form;
