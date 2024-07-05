const LoadMoreBtn = ({ onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit} type="submit">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
