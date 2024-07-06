interface Props {
  title: string;
  icon?: React.JSX.Element;
  className?: string;
  iconPosition?: string;
}

export function MainButton({ title, icon, className = "", iconPosition = "left" }: Props) {
  return (
    <button
      className={
        "justify-center w-full flex rounded-2xl font-semibold text-xl gap-2 hover:scale-110 transition-all items-center " +
        className
      }
    >
      {iconPosition === "left" && icon}
      {title}
      {iconPosition === "right" && icon}
    </button>
  );
}
