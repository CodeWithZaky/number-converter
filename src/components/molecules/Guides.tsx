const Guides = () => {
  return (
    <div className="flex-col justify-start hidden w-1/4 h-full gap-5 p-10 border-l border-retroBrown/10 md:flex">
      <ul className="list-decimal list-inside text-retroBrown">
        <h3 className="mb-2 font-semibold">Instructions</h3>
        <li>Fill in the numbers in the provided form.</li>
        <li>{`Click the "Submit" button to obtain the results.`}</li>
      </ul>
    </div>
  );
};

export default Guides;
