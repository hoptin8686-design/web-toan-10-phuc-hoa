import type { LessonTheory } from "@/lib/types";

const bai15: LessonTheory = {
  intro: "Hàm số là quy tắc gán mỗi giá trị x trong tập xác định đúng một giá trị y. Đồ thị hàm số biểu diễn mối quan hệ giữa x và y.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Hàm số",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Hàm số, tập xác định D, tập giá trị","text":"Hàm số, tập xác định D, tập giá trị"},{"emoji":"📊","title":"Đồ thị hàm số","text":"Đồ thị hàm số"},{"emoji":"🔺","title":"Hàm số đồng biến, nghịch biến","text":"Hàm số đồng biến, nghịch biến"},{"emoji":"📏","title":"Hàm số chẵn, lẻ","text":"Hàm số chẵn, lẻ"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"y = f(x), D = tập xác định\\nĐồng biến: x₁ < x₂ ⇒ f(x₁) < f(x₂)\\nNghịch biến: x₁ < x₂ ⇒ f(x₁) > f(x₂)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "y = f(x), D = tập xác định",
    "Đồng biến: x₁ < x₂ ⇒ f(x₁) < f(x₂)",
    "Nghịch biến: x₁ < x₂ ⇒ f(x₁) > f(x₂)",
  ],
};

export default bai15;
