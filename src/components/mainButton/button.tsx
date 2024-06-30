const MainButton = ({ text, icon = null, className = null }) => {
  return (
    <button className="justify-center w-full flex rounded-2xl bg-button-main text-white  py-3 font-semibold text-xl gap-2">
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default MainButton;
