export default function ClickableCard({ children }: ClickableCardProps) {
  return (
    <p className="cursor-pointer rounded-md bg-gray-50 p-3 text-gray-800 hover:bg-gray-200">
      {children}
    </p>
  );
}

interface ClickableCardProps {
  children: string;
}
