export default function Card({ children }: CardProps) {
  return <p className="rounded-md bg-gray-50 p-3 text-gray-800">{children}</p>;
}

interface CardProps {
  children: string;
}
