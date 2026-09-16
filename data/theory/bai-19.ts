import type { LessonTheory } from "@/lib/types";

const bai19: LessonTheory = {
  intro: "Phương trình đường thẳng trong mặt phẳng Oxy có nhiều dạng: tham số, tổng quát. Mỗi dạng phù hợp với từng loại bài toán.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Phương trình đường thẳng",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Vectơ chỉ phương u⃗","text":"Vectơ chỉ phương u⃗"},{"emoji":"📊","title":"Vectơ pháp tuyến n⃗","text":"Vectơ pháp tuyến n⃗"},{"emoji":"🔺","title":"PT tham số","text":"PT tham số"},{"emoji":"📏","title":"PT tổng quát ax+by+c=0","text":"PT tổng quát ax+by+c=0"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"PT tham số: x=x₀+at, y=y₀+bt\\nPT tổng quát: ax+by+c=0\\nu⃗=(a;b) chỉ phương, n⃗=(-b;a) pháp tuyến","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "PT tham số: x=x₀+at, y=y₀+bt",
    "PT tổng quát: ax+by+c=0",
    "u⃗=(a;b) chỉ phương, n⃗=(-b;a) pháp tuyến",
  ],
};

export default bai19;
