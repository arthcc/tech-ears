import { TextInput } from "@/components/TextInput";

interface GameInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GameInput = ({ onChange }: GameInputProps) => {
  return <TextInput onChange={onChange} />;
};
