import type { LessonTheory } from "@/lib/types";

const baiCuoiC4: LessonTheory = {
  intro: "Ôn tập tổng hợp kiến thức vectơ: khái niệm, phép cộng trừ, tích với số và tích vô hướng.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương IV",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Vectơ bằng nhau, cùng phương","text":"Vectơ bằng nhau, cùng phương"},{"emoji":"📊","title":"Quy tắc cộng trừ","text":"Quy tắc cộng trừ"},{"emoji":"🔺","title":"Tích với số, trung điểm, trọng tâm","text":"Tích với số, trung điểm, trọng tâm"},{"emoji":"📏","title":"Tích vô hướng, vuông góc","text":"Tích vô hướng, vuông góc"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"AB⃗+BC⃗=AC⃗\\nGA⃗+GB⃗+GC⃗=0⃗\\na⃗·b⃗=|a⃗||b⃗|cos(a⃗,b⃗)\\nVuông góc ⟺ tích vô hướng = 0","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "AB⃗+BC⃗=AC⃗",
    "GA⃗+GB⃗+GC⃗=0⃗",
    "a⃗·b⃗=|a⃗||b⃗|cos(a⃗,b⃗)",
    "Vuông góc ⟺ tích vô hướng = 0",
  ],
};

export default baiCuoiC4;
