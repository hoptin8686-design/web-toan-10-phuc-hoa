import type { LessonTheory } from "@/lib/types";

const bai09: LessonTheory = {
  intro: "Tích k·a⃗ cho phép thay đổi độ dài và hướng của vectơ theo hệ số k, là công cụ quan trọng trong phân tích vectơ.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Tích của một vectơ với một số",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Tích k·a⃗","text":"Tích k·a⃗: |k|·|a⃗|, cùng hướng nếu k>0"},{"emoji":"📊","title":"Hai vectơ cùng phương","text":"Hai vectơ cùng phương: b⃗ = k·a⃗"},{"emoji":"🔺","title":"Trung điểm M","text":"Trung điểm M: OM⃗ = (OA⃗+OB⃗)/2"},{"emoji":"📏","title":"Trọng tâm G","text":"Trọng tâm G: OG⃗ = (OA⃗+OB⃗+OC⃗)/3"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"k·a⃗: cùng phương a⃗, |k·a⃗| = |k|·|a⃗|\\nb⃗ cùng phương a⃗ (a⃗≠0⃗) ⟺ ∃k: b⃗ = k·a⃗\\nTrung điểm: MA⃗ + MB⃗ = 0⃗\\nTrọng tâm: GA⃗ + GB⃗ + GC⃗ = 0⃗","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "k·a⃗: cùng phương a⃗, |k·a⃗| = |k|·|a⃗|",
    "b⃗ cùng phương a⃗ (a⃗≠0⃗) ⟺ ∃k: b⃗ = k·a⃗",
    "Trung điểm: MA⃗ + MB⃗ = 0⃗",
    "Trọng tâm: GA⃗ + GB⃗ + GC⃗ = 0⃗",
  ],
};

export default bai09;
