const HeaderButton = ({ text, icon }) => {
  return (
    <button
      className="items-center justify-center w-full border border-solid-100 flex gap-x-2 px-4 rounded-2xl intems-center  bg-button-normal text-button-main font-bold py-2 text-xl gap-2 "
    
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default HeaderButton;
