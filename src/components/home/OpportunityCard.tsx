interface Props {
  asset: string;
  direction: string;
  confidence: number;
}

export default function OpportunityCard({
  asset,
  direction,
  confidence,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <div className="text-lg font-bold">{asset}</div>

      <div className="mt-2">{direction}</div>

      <div className="mt-2">Confidence: {confidence}%</div>
    </div>
  );
}
