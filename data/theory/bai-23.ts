import type { LessonTheory } from "@/lib/types";

const bai23: LessonTheory = {
  intro: "Quy tắc cộng và quy tắc nhân là hai nguyên lí nền tảng của toán đếm tổ hợp, giúp đếm số cách thực hiện một công việc.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Quy tắc đếm",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Quy tắc cộng","text":"Quy tắc cộng"},{"emoji":"📊","title":"Quy tắc nhân","text":"Quy tắc nhân"},{"emoji":"🔺","title":"Sơ đồ hình cây","text":"Sơ đồ hình cây"},{"emoji":"📏","title":"Bài toán đếm thực tế","text":"Bài toán đếm thực tế"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Quy tắc cộng: m + n cách (hai công việc không đồng thời)\\nQuy tắc nhân: m × n cách (hai công việc nối tiếp)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Quy tắc cộng: m + n cách (hai công việc không đồng thời)",
    "Quy tắc nhân: m × n cách (hai công việc nối tiếp)",
  ],
};

export default bai23;
