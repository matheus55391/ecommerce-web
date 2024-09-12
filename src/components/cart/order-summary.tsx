export default function OrderSummary() {
  const summaryItems = [
    { label: "Subtotal", value: "R$1500", isDiscount: false },
    { label: "Descontos", value: "-R$100", isDiscount: true },
    { label: "Frete", value: "R$10", isDiscount: false },
  ];

  return (
    <div className="space-y-4 pb-4">
      {summaryItems.map(({ label, value, isDiscount }) => (
        <OrderSummaryItem
          key={label}
          label={label}
          value={value}
          isDiscount={isDiscount}
        />
      ))}
    </div>
  );
}

function OrderSummaryItem({
  label,
  value,
  isDiscount,
}: {
  label: string;
  value: string;
  isDiscount: boolean;
}) {
  return (
    <div className="flex justify-between">
      <p
        className={`text-muted-foreground font-light text-base ${
          isDiscount ? "text-red-500" : ""
        }`}
      >
        {label}
      </p>
      <p className="text-base">{value}</p>
    </div>
  );
}
