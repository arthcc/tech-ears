interface MainButtonProps {
  title?: string;
  icon?: React.JSX.Element;
  className?: string;
  iconPosition?: string;
  disabled?: boolean;
  onPress?: () => void;
  onClick?: () => void;
}

export function MainButton({
  title,
  icon,
  className = "",
  iconPosition = "left",
  disabled = false,
  onPress,
  onClick
}: MainButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <button
      className={
        "justify-center w-full flex rounded-2xl font-semibold text-xl gap-2 hover:scale-110 transition-all items-center " +
        className
      }
      disabled={disabled}
      onClick={handleClick}
    >
      {iconPosition === "left" && icon}
      {title}
      {iconPosition === "right" && icon}
    </button>
  );
}
