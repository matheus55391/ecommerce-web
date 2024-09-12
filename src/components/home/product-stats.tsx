import { StarIcon, PackageIcon, TruckIcon } from "lucide-react";

export default function ProductStats() {
  return (
    <div className="flex items-center gap-4">
      <StatItem icon={<StarIcon className="h-5 w-5 text-yellow-500" />} label="4.8" />
      <StatItem icon={<PackageIcon className="h-5 w-5 text-primary" />} label="10k+ Vendas" />
      <StatItem icon={<TruckIcon className="h-5 w-5 text-primary" />} label="Entrega Rápida" />
    </div>
  );
}

function StatItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
