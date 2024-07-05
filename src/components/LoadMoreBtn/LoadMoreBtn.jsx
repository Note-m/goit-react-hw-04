const LoadMoreBtn = ({ onSubmit }) => {
  return (
    <div>
      <button onSubmit={onSubmit} type="submit">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
