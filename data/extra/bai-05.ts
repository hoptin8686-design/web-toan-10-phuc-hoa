import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về giá trị lượng giác:",
      statements: [
          { text: "sin 120° = sin 60°.", answer: true, explain: "sin(180°-60°) = sin 60° = √3/2. ĐÚNG." },
          { text: "cos 150° = cos 30°.", answer: false, explain: "cos 150° = -cos 30° = -√3/2 ≠ cos 30°. SAI." },
          { text: "Với 0° < α < 180°, sin α luôn dương.", answer: false, explain: "sin 0° = 0, sin 180° = 0. Tại 0° và 180° sin α = 0, không dương. SAI (nếu tính cả biên)." },
          { text: "tan α không xác định khi α = 90°.", answer: true, explain: "cos 90° = 0 nên tan 90° = sin90°/cos90° không xác định. ĐÚNG." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Cho cos α = -3/5 với 90° < α < 180°.\\na) Tính sin α.\\nb) Tính tan α và cot α.",
      math: "\\cos \\alpha = -\\frac{3}{5}",
      answer: "a) sin²α = 1 - cos²α = 1 - 9/25 = 16/25.\\nVì 90° < α < 180° nên sin α > 0. Vậy sin α = 4/5.\\n\\nb) tan α = sin α / cos α = (4/5)/(-3/5) = -4/3.\\ncot α = 1/tan α = -3/4.",
    },
    {
      id: "es-02",
      q: "Chứng minh rằng: sin⁴α - cos⁴α = sin²α - cos²α với mọi α.",
      math: "\\sin^4\\alpha - \\cos^4\\alpha",
      answer: "VT = sin⁴α - cos⁴α = (sin²α - cos²α)(sin²α + cos²α)\\n= (sin²α - cos²α) · 1 = sin²α - cos²α = VP.\\nĐPCM.",
    },
  ],
};
