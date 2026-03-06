export function MetosStats() {
  const stats = [
    { value: "6", desc: "System Modules" },
    { value: "100%", desc: "Science-Backed" },
    { value: "GLP-1", desc: "Optimized For" },
    { value: "Men", desc: "Engineered For" },
  ];

  return (
    <section className="bg-navy border-y border-teal/[0.08] py-12 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.desc} className="relative">
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-white/[0.06]" />
            )}
            <div className="text-4xl md:text-[48px] font-bold tracking-tight bg-gradient-to-br from-teal to-sage bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-text-dim mt-2">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
