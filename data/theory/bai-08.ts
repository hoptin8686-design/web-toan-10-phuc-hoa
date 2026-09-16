import type { LessonTheory } from "@/lib/types";

const bai08: LessonTheory = {
  intro: "Phép cộng và trừ vectơ tuân theo các quy tắc hình học đặc biệt: quy tắc 3 điểm, quy tắc hình bình hành.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Tổng và hiệu của hai vectơ",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Quy tắc 3 điểm","text":"Quy tắc 3 điểm: AB⃗ + BC⃗ = AC⃗"},{"emoji":"📊","title":"Quy tắc hình bình hành","text":"Quy tắc hình bình hành"},{"emoji":"🔺","title":"Vectơ đối","text":"Vectơ đối: -AB⃗ = BA⃗"},{"emoji":"📏","title":"Hiệu","text":"Hiệu: AB⃗ - AC⃗ = CB⃗"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"AB⃗ + BC⃗ = AC⃗ (quy tắc 3 điểm)\\nAB⃗ + AD⃗ = AC⃗ (ABCD hình bình hành)\\nAB⃗ - AC⃗ = CB⃗ (quy tắc hiệu)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "AB⃗ + BC⃗ = AC⃗ (quy tắc 3 điểm)",
    "AB⃗ + AD⃗ = AC⃗ (ABCD hình bình hành)",
    "AB⃗ - AC⃗ = CB⃗ (quy tắc hiệu)",
  ],
};

export default bai08;
