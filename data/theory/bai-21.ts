import type { LessonTheory } from "@/lib/types";

const bai21: LessonTheory = {
  intro: "Đường tròn trong mặt phẳng tọa độ Oxy được xác định bởi tâm và bán kính, có phương trình đặc trưng.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Đường tròn",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"PT đường tròn (x-a)²+(y-b)²=R²","text":"PT đường tròn (x-a)²+(y-b)²=R²"},{"emoji":"📊","title":"Dạng khai triển x²+y²+Dx+Ey+F=0","text":"Dạng khai triển x²+y²+Dx+Ey+F=0"},{"emoji":"🔺","title":"Tiếp tuyến","text":"Tiếp tuyến"},{"emoji":"📏","title":"Vị trí tương đối đường thẳng - đường tròn","text":"Vị trí tương đối đường thẳng - đường tròn"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"(x-a)²+(y-b)²=R², tâm I(a;b), bán kính R\\nTiếp tuyến tại M(x₀;y₀): (x₀-a)(x-a)+(y₀-b)(y-b)=R²","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "(x-a)²+(y-b)²=R², tâm I(a;b), bán kính R",
    "Tiếp tuyến tại M(x₀;y₀): (x₀-a)(x-a)+(y₀-b)(y-b)=R²",
  ],
};

export default bai21;
