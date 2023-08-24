interface Props {
  handleToggle: () => void;
}

const Hamburger = ({ handleToggle }: Props) => {
  return (
    <div onClick={handleToggle} className="flex flex-col gap-1">
      <div className="rounded-lg w-[23px] h-[4px] bg-retroWhite" />
      <div className="rounded-lg w-[23px] h-[4px] bg-retroWhite" />
      <div className="rounded-lg w-[23px] h-[4px] bg-retroWhite" />
    </div>
  );
};

export default Hamburger;
