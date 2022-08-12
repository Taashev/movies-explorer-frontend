function Form({
  children,
  mothod = 'get',
  className='',
  formName,
  onSubmit,
}) {
  return (
    <form
      className={`form ${className}`}
      method={mothod}
      name={formName}
      onSubmit={onSubmit}
      noValidate>
        {children}
    </form>
  );
};

export default Form;
