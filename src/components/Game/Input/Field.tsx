interface GameFieldTextareaProps {
  children: React.ReactNode;
}

export const GameFieldTextarea = ({ children }: GameFieldTextareaProps) => {
  return (
    <div className="w-full max-w-[500px] min-h-24 rounded-md border border-border bg-white px-3 py-2 shadow-[0px_6px_0px_0px_#E0E3EE] mb-10">
      {children}
    </div>
  );
};
