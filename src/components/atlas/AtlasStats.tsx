export function AtlasStats() {
  const stats = [
    { value: "6", label: "Targeted Formulas" },
    { value: "AI", label: "Personalized" },
    { value: "GLP-1", label: "Designed For" },
    { value: "Men", label: "Built For" },
  ];

  return (
    <section className="bg-navy border-y border-white/5 py-12 px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4">
            <div className="text-4xl md:text-[44px] font-bold tracking-tight bg-gradient-to-br from-sage to-teal bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-[13px] text-text-dim mt-1.5 tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
