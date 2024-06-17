import { useEffect } from "react";

/**
 * ErrorMessage component displays an error message on the screen for a specified duration.
 * Props:
 * - message: The error message to display.
 * - onClose: Callback function to close the error message.
 */
interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [onClose]);

  return (
    <div className="text-center fixed bottom-4 left-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md z-50 transition-opacity duration-500 opacity-100">
      {message}
    </div>
  );
};

export default ErrorMessage;
