interface GameInputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const GameInputTextarea = (props: GameInputTextareaProps) => {
  return (
    <textarea
      className="w-full max-w-[500px] min-h-24 rounded-md border border-border bg-white px-3 py-2 shadow-[0px_6px_0px_0px_#E0E3EE] mb-10 resize-none
      focus:outline-none focus:ring-2 focus:ring-border focus:ring-opacity-50 h-416 flex-1"
      placeholder="Type here..."
      {...props}
    />
  );
};
