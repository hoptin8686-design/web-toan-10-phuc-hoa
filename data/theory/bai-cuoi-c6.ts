import type { LessonTheory } from "@/lib/types";

const baiCuoiC6: LessonTheory = {
  intro: "Ôn tập tổng hợp hàm số, hàm số bậc hai, dấu tam thức bậc hai và phương trình quy về bậc hai.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương VI",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Hàm số bậc hai","text":"Hàm số bậc hai"},{"emoji":"📊","title":"Parabol","text":"Parabol"},{"emoji":"🔺","title":"Tam thức bậc hai","text":"Tam thức bậc hai"},{"emoji":"📏","title":"BPT bậc hai","text":"BPT bậc hai"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"y = ax²+bx+c\\nĐỉnh, trục đối xứng\\nXét dấu theo Δ","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "y = ax²+bx+c",
    "Đỉnh, trục đối xứng",
    "Xét dấu theo Δ",
  ],
};

export default baiCuoiC6;
