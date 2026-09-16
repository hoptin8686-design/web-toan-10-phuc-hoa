import type { LessonTheory } from "@/lib/types";

const bai17: LessonTheory = {
  intro: "Xét dấu tam thức bậc hai f(x) = ax² + bx + c là kỹ năng then chốt để giải bất phương trình bậc hai và nhiều bài toán khác.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Dấu của tam thức bậc hai",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Tam thức bậc hai","text":"Tam thức bậc hai"},{"emoji":"📊","title":"Định lí về dấu","text":"Định lí về dấu"},{"emoji":"🔺","title":"Xét dấu theo Δ","text":"Xét dấu theo Δ"},{"emoji":"📏","title":"Giải bất phương trình bậc hai","text":"Giải bất phương trình bậc hai"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Δ < 0: f(x) cùng dấu a, ∀x\\nΔ = 0: f(x) = a(x - x₀)², cùng dấu a trừ x = x₀\\nΔ > 0: f(x) trái dấu a trong (x₁; x₂)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Δ < 0: f(x) cùng dấu a, ∀x",
    "Δ = 0: f(x) = a(x - x₀)², cùng dấu a trừ x = x₀",
    "Δ > 0: f(x) trái dấu a trong (x₁; x₂)",
  ],
};

export default bai17;
