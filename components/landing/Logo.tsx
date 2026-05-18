import { NCMark } from "./NCMark";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={className}>
      <NCMark size="sm" light={light} />
    </div>
  );
}
