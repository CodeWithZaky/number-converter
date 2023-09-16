const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h3 className="text-3xl font-bold text-center md:text-6xl text-retroPink">
        LOADING
        <span className="loading loading-ball loading-lg" />
        <span className="loading loading-ball loading-lg" />
        <span className="loading loading-ball loading-lg" />
      </h3>
    </div>
  );
};
export default Loading;
