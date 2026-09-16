import type { LessonTheory } from "@/lib/types";

const bai20: LessonTheory = {
  intro: "Xác định vị trí tương đối (cắt, song song, trùng, vuông góc) và tính khoảng cách từ điểm đến đường thẳng.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Vị trí tương đối và khoảng cách",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Cắt, song song, trùng nhau","text":"Cắt, song song, trùng nhau"},{"emoji":"📊","title":"Góc giữa hai đường thẳng","text":"Góc giữa hai đường thẳng"},{"emoji":"🔺","title":"Khoảng cách từ điểm đến đường thẳng","text":"Khoảng cách từ điểm đến đường thẳng"},{"emoji":"📏","title":"Điều kiện vuông góc","text":"Điều kiện vuông góc"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"d(M, d) = |ax₀+by₀+c|/√(a²+b²)\\nVuông góc: a₁a₂+b₁b₂=0\\nSong song: a₁/a₂=b₁/b₂≠c₁/c₂","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "d(M, d) = |ax₀+by₀+c|/√(a²+b²)",
    "Vuông góc: a₁a₂+b₁b₂=0",
    "Song song: a₁/a₂=b₁/b₂≠c₁/c₂",
  ],
};

export default bai20;
