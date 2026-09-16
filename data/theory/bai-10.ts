import type { LessonTheory } from "@/lib/types";

const bai10: LessonTheory = {
  intro: "Tích vô hướng a⃗·b⃗ là phép nhân đặc biệt cho kết quả là một số, liên hệ chặt chẽ với góc giữa hai vectơ.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Tích vô hướng của hai vectơ",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Góc giữa hai vectơ","text":"Góc giữa hai vectơ"},{"emoji":"📊","title":"a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)","text":"a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)"},{"emoji":"🔺","title":"Tích vô hướng qua tọa độ","text":"Tích vô hướng qua tọa độ"},{"emoji":"📏","title":"Ứng dụng","text":"Ứng dụng: vuông góc khi a⃗·b⃗ = 0"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)\\na⃗(x₁;y₁), b⃗(x₂;y₂): a⃗·b⃗ = x₁x₂+y₁y₂\\na⃗ ⊥ b⃗ ⟺ a⃗·b⃗ = 0 ⟺ x₁x₂+y₁y₂=0","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)",
    "a⃗(x₁;y₁), b⃗(x₂;y₂): a⃗·b⃗ = x₁x₂+y₁y₂",
    "a⃗ ⊥ b⃗ ⟺ a⃗·b⃗ = 0 ⟺ x₁x₂+y₁y₂=0",
  ],
};

export default bai10;
