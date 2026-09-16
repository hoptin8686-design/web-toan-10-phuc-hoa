import type { LessonTheory } from "@/lib/types";

const bai07: LessonTheory = {
  intro: "Vectơ là đại lượng có cả hướng và độ lớn, khác với số thông thường chỉ có độ lớn. Hiểu vectơ là nền tảng để học hình học giải tích.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Các khái niệm mở đầu về vectơ",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Phương, hướng, độ dài vectơ","text":"Phương, hướng, độ dài vectơ"},{"emoji":"📊","title":"Vectơ-không","text":"Vectơ-không"},{"emoji":"🔺","title":"Hai vectơ bằng nhau","text":"Hai vectơ bằng nhau"},{"emoji":"📏","title":"Hai vectơ cùng phương","text":"Hai vectơ cùng phương"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Vectơ AB⃗ có điểm đầu A, điểm cuối B, |AB⃗| = khoảng cách AB\\nHai vectơ bằng nhau: cùng hướng và cùng độ dài\\nVectơ-không 0⃗ có độ dài bằng 0, mọi phương mọi hướng","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Vectơ AB⃗ có điểm đầu A, điểm cuối B, |AB⃗| = khoảng cách AB",
    "Hai vectơ bằng nhau: cùng hướng và cùng độ dài",
    "Vectơ-không 0⃗ có độ dài bằng 0, mọi phương mọi hướng",
  ],
};

export default bai07;
