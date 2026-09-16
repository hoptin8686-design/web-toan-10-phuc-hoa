import type { LessonTheory } from "@/lib/types";

const bai27: LessonTheory = {
  intro: "Vận dụng tổ hợp và quy tắc đếm vào tính xác suất cho các bài toán thực tế: tung xúc xắc, rút bài, chọn nhóm.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Thực hành tính xác suất",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Kết hợp tổ hợp và xác suất","text":"Kết hợp tổ hợp và xác suất"},{"emoji":"📊","title":"Xúc xắc, đồng xu","text":"Xúc xắc, đồng xu"},{"emoji":"🔺","title":"Rút bài, chọn nhóm","text":"Rút bài, chọn nhóm"},{"emoji":"📏","title":"Ứng dụng thực tế","text":"Ứng dụng thực tế"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"n(Ω) = tổng số KQ đồng khả năng\\nn(A) = số KQ thuận lợi\\nThường dùng Cₙᵏ để đếm","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "n(Ω) = tổng số KQ đồng khả năng",
    "n(A) = số KQ thuận lợi",
    "Thường dùng Cₙᵏ để đếm",
  ],
};

export default bai27;
