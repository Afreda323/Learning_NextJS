({ url: { query: { title } } }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>This is the blog post content.</p>
    </div>
  );
};
