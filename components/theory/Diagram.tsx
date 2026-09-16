export default function Diagram({ name }: { name: string }) {
  if (name === "truth_table_negation") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-sea/30 bg-[#07131b] p-6">
        <svg viewBox="0 0 680 180" className="w-full max-w-xl text-star">
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Cột Trái: P */}
          <rect x="50" y="30" width="220" height="120" rx="14" fill="#102631" stroke="#38bdf8" strokeWidth="2" />
          <text x="160" y="65" textAnchor="middle" fill="#38bdf8" fontWeight="bold" fontSize="18">Mệnh đề P</text>
          <line x1="60" y1="80" x2="260" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="160" y="105" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="16">Đúng (True - Đ)</text>
          <text x="160" y="132" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="16">Sai (False - S)</text>

          {/* Mũi tên đảo logic */}
          <path d="M 290 75 L 370 75" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="375,75 365,69 365,81" fill="#f59e0b" />
          <text x="330" y="65" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Phủ định</text>

          <path d="M 370 125 L 290 125" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="285,125 295,119 295,131" fill="#f59e0b" />

          {/* Cột Phải: P ngang */}
          <rect x="390" y="30" width="220" height="120" rx="14" fill="#102631" stroke="#f43f5e" strokeWidth="2" />
          <text x="500" y="65" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="18">Mệnh đề phủ định P̄</text>
          <line x1="400" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="500" y="105" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="16">Sai (False - S)</text>
          <text x="500" y="132" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="16">Đúng (True - Đ)</text>
        </svg>
      </div>
    );
  }

  if (name === "quantifier_map") {
    return (
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-sea/30 bg-void-card p-5 text-center">
          <span className="text-4xl">∀</span>
          <h4 className="mt-2 font-display text-lg font-bold text-sea-deep">Với mọi (Universal)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">∀x ∈ X, P(x)</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Khẳng định đúng với toàn bộ 100% phần tử trong tập X. Chỉ cần chỉ ra duy nhất 1 phản ví dụ là mệnh đề bị bác bỏ ngay lập tức!
          </p>
        </div>
        <div className="rounded-2xl border border-coral/30 bg-void-card p-5 text-center">
          <span className="text-4xl">∃</span>
          <h4 className="mt-2 font-display text-lg font-bold text-coral">Tồn tại (Existential)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">∃x ∈ X, P(x)</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Khẳng định có ít nhất một phần tử thuộc tập X thỏa mãn. Chỉ cần tìm được một đối tượng cụ thể là chứng minh mệnh đề đúng!
          </p>
        </div>
      </div>
    );
  }

  return null;
}
