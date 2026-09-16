import type { LessonTheory } from "@/lib/types";

const baiCuoiC8: LessonTheory = {
  intro: "Ôn tập đại số tổ hợp: quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp và nhị thức Newton.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương VIII",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Quy tắc đếm","text":"Quy tắc đếm"},{"emoji":"📊","title":"P, A, C","text":"P, A, C"},{"emoji":"🔺","title":"Nhị thức Newton","text":"Nhị thức Newton"},{"emoji":"📏","title":"Ứng dụng","text":"Ứng dụng"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Quy tắc cộng/nhân\\nn!, Aₙᵏ, Cₙᵏ\\n(a+b)ⁿ","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Quy tắc cộng/nhân",
    "n!, Aₙᵏ, Cₙᵏ",
    "(a+b)ⁿ",
  ],
};

export default baiCuoiC8;
