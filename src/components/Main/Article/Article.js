function Article({children, className=''}) {
  return (
    <article className={`article ${className}`}>
      {children}
    </article>
  );
};

export default Article;
