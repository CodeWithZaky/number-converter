const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] p-2 text-retroWhite bg-retroBrown ">
      <h1 className="text-2xl font-semibold text-center md:text-3xl">
        NUMBER CONVERTION
        <span className="text-retroPink">
          {" by"}
          <a
            href="https://azaku.vercel.app"
            target={"_blank"}
            className="cursor-pointer hover:text-retroPink/90"
          >{` @Zaky`}</a>
        </span>
      </h1>
    </div>
  );
};

export default Header;
