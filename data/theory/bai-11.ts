import type { LessonTheory } from "@/lib/types";

const bai11: LessonTheory = {
  intro: "Trong thực tế, các phép đo luôn có sai số. Hiểu cách tính và đánh giá sai số giúp em có kết quả đáng tin cậy.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Số gần đúng và sai số",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Số gần đúng","text":"Số gần đúng"},{"emoji":"📊","title":"Sai số tuyệt đối","text":"Sai số tuyệt đối"},{"emoji":"🔺","title":"Sai số tương đối","text":"Sai số tương đối"},{"emoji":"📏","title":"Quy tròn số","text":"Quy tròn số"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Sai số tuyệt đối: |a - ā|\\nSai số tương đối: δ = Δa/|ā| × 100%\\nQuy tròn: Xét chữ số sau hàng cần quy tròn","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Sai số tuyệt đối: |a - ā|",
    "Sai số tương đối: δ = Δa/|ā| × 100%",
    "Quy tròn: Xét chữ số sau hàng cần quy tròn",
  ],
};

export default bai11;
