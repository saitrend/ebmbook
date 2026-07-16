interface Props {
  title: string;
  message: string;
}

export default function EmptyState({ title, message }: Props) {
  return (
    <div className="rounded-xl border p-10 text-center">
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>

      <p className="text-gray-500">{message}</p>
    </div>
  );
}
