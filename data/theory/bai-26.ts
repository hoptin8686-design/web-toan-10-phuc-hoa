import type { LessonTheory } from "@/lib/types";

const bai26: LessonTheory = {
  intro: "Xác suất đo lường khả năng xảy ra của một biến cố. Định nghĩa cổ điển P(A) = n(A)/n(Ω) là nền tảng của lý thuyết xác suất.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Biến cố và xác suất cổ điển",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Phép thử, không gian mẫu Ω","text":"Phép thử, không gian mẫu Ω"},{"emoji":"📊","title":"Biến cố A ⊂ Ω","text":"Biến cố A ⊂ Ω"},{"emoji":"🔺","title":"P(A) = n(A)/n(Ω)","text":"P(A) = n(A)/n(Ω)"},{"emoji":"📏","title":"Biến cố chắc chắn, không thể, đối","text":"Biến cố chắc chắn, không thể, đối"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"P(A) = n(A)/n(Ω), 0 ≤ P(A) ≤ 1\\nP(Ω) = 1, P(∅) = 0\\nP(Ā) = 1 - P(A)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "P(A) = n(A)/n(Ω), 0 ≤ P(A) ≤ 1",
    "P(Ω) = 1, P(∅) = 0",
    "P(Ā) = 1 - P(A)",
  ],
};

export default bai26;
