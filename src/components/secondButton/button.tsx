const SecondButton = ({ text, icon }) => {
    return (
      <button
      
        className="justify-center w-full border-2 border-solid flex rounded-2xl bg-button-normal text-black font-bold py-3 text-xl gap-2 "
        type="button"
      
      >
        {icon && <span>{icon}</span>}
        {text}
     
      </button>
      
    );
  };
  
  export default SecondButton; 