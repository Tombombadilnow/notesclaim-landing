export function NCMark({ size = "lg", light = false }: { size?: "sm" | "lg"; light?: boolean }) {
  const nSize = size === "lg" ? "text-6xl md:text-7xl" : "text-4xl";
  const cSize = size === "lg" ? "text-6xl md:text-7xl" : "text-4xl";
  const titleSize = size === "lg" ? "text-3xl md:text-4xl" : "text-2xl";
  const nColor = light ? "text-white" : "text-navy";
  const titleColor = light ? "text-white" : "text-navy";

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-0.5 leading-none">
        <span className={`font-serif-display font-bold ${nColor} ${nSize}`}>N</span>
        <span className={`font-serif-display font-bold text-gold -ml-1 ${cSize}`}>C</span>
      </div>
      <p className={`mt-2 font-bold tracking-tight ${titleColor} ${titleSize}`}>
        NC <span className="font-serif-display">NotesClaim</span>
      </p>
    </div>
  );
}
