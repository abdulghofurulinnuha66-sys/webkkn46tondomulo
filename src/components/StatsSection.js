'use client';

import { useEffect, useRef, useState } from 'react';

function StatCard({ icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 1500;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center justify-center"
    >
      <div className="text-4xl mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center text-green-600">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">
        {count}
        <span className="text-green-600 ml-1">+</span>
      </div>
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection({ stats }) {
  const statsArray = Object.values(stats);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsArray.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
