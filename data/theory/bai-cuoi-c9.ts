import type { LessonTheory } from "@/lib/types";

const baiCuoiC9: LessonTheory = {
  intro: "Ôn tập tổng hợp xác suất cổ điển và ứng dụng trong các bài toán dự báo, trò chơi.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương IX",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Xác suất cổ điển","text":"Xác suất cổ điển"},{"emoji":"📊","title":"Biến cố đối","text":"Biến cố đối"},{"emoji":"🔺","title":"Tổ hợp + xác suất","text":"Tổ hợp + xác suất"},{"emoji":"📏","title":"Ứng dụng","text":"Ứng dụng"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"P(A) = n(A)/n(Ω)\\nP(Ā) = 1 - P(A)\\nDùng Cₙᵏ để đếm","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "P(A) = n(A)/n(Ω)",
    "P(Ā) = 1 - P(A)",
    "Dùng Cₙᵏ để đếm",
  ],
};

export default baiCuoiC9;
