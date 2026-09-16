import type { LessonTheory } from "@/lib/types";

const baiCuoiC7: LessonTheory = {
  intro: "Ôn tập hình học giải tích: phương trình đường thẳng, đường tròn và ba đường conic.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương VII",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"PT đường thẳng","text":"PT đường thẳng"},{"emoji":"📊","title":"PT đường tròn","text":"PT đường tròn"},{"emoji":"🔺","title":"Đường conic","text":"Đường conic"},{"emoji":"📏","title":"Khoảng cách, góc","text":"Khoảng cách, góc"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"ax+by+c=0\\n(x-a)²+(y-b)²=R²\\nd(M,d)=|ax₀+by₀+c|/√(a²+b²)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "ax+by+c=0",
    "(x-a)²+(y-b)²=R²",
    "d(M,d)=|ax₀+by₀+c|/√(a²+b²)",
  ],
};

export default baiCuoiC7;
