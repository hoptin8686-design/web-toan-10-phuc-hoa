import type { LessonTheory } from "@/lib/types";

const bai22: LessonTheory = {
  intro: "Elip, hypebol và parabol là ba đường conic — quỹ tích các điểm thỏa mãn điều kiện khoảng cách đặc biệt.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Ba đường conic",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Elip","text":"Elip: x²/a²+y²/b²=1"},{"emoji":"📊","title":"Hypebol","text":"Hypebol: x²/a²-y²/b²=1"},{"emoji":"🔺","title":"Parabol","text":"Parabol: y²=2px"},{"emoji":"📏","title":"Tiêu điểm, tiêu cự","text":"Tiêu điểm, tiêu cự"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Elip: c²=a²-b², e=c/a<1\\nHypebol: c²=a²+b², e=c/a>1\\nParabol: tiêu điểm F(p/2;0)","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Elip: c²=a²-b², e=c/a<1",
    "Hypebol: c²=a²+b², e=c/a>1",
    "Parabol: tiêu điểm F(p/2;0)",
  ],
};

export default bai22;
