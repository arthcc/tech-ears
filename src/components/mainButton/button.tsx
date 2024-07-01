interface Props {
  text: string;
  icon?: React.JSX.Element;
}

export function MainButton(props: Props){
  return (
    <button onClick={() => console.log("jisaijsa")} className="justify-center w-full flex rounded-2xl bg-button-main text-white py-3 font-semibold text-xl gap-2 hover:scale-110 transition-all">
      {props.icon}
      {props.text}
    </button>
  );
};
