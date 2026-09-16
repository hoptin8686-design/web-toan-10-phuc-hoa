import type { LessonTheory } from "@/lib/types";

const bai25: LessonTheory = {
  intro: "Nhị thức Newton cho phép khai triển (a + b)ⁿ thành tổng các hạng tử chứa Cₙᵏ — công cụ mạnh trong đại số và xác suất.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Nhị thức Newton",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Khai triển (a+b)ⁿ","text":"Khai triển (a+b)ⁿ"},{"emoji":"📊","title":"Hệ số nhị thức Cₙᵏ","text":"Hệ số nhị thức Cₙᵏ"},{"emoji":"🔺","title":"Tam giác Pascal","text":"Tam giác Pascal"},{"emoji":"📏","title":"Tìm hệ số, số hạng","text":"Tìm hệ số, số hạng"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"(a+b)ⁿ = Σ Cₙᵏ · aⁿ⁻ᵏ · bᵏ, k=0..n\\nHệ số hạng thứ k+1: Cₙᵏ\\nTam giác Pascal: Cₙᵏ = Cₙ₋₁ᵏ⁻¹ + Cₙ₋₁ᵏ","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "(a+b)ⁿ = Σ Cₙᵏ · aⁿ⁻ᵏ · bᵏ, k=0..n",
    "Hệ số hạng thứ k+1: Cₙᵏ",
    "Tam giác Pascal: Cₙᵏ = Cₙ₋₁ᵏ⁻¹ + Cₙ₋₁ᵏ",
  ],
};

export default bai25;
