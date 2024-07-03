interface Props {
  text: string;
  icon?: React.JSX.Element;
}

export default function SecondButton(props: Props) {
  return (
    <button className="justify-center w-full border-2 border-solid flex rounded-2xl bg-button-normal text-black font-bold py-3 text-xl gap-2 hover:scale-110 transition-all">
      {props.icon}
      {props.text}
    </button>
  );
}
