import type { LessonTheory } from "@/lib/types";

const bai18: LessonTheory = {
  intro: "Nhiều phương trình phức tạp có thể đưa về dạng bậc hai bằng phép đặt ẩn phụ hoặc biến đổi đại số.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Phương trình quy về phương trình bậc hai",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"PT trùng phương ax⁴+bx²+c=0","text":"PT trùng phương ax⁴+bx²+c=0"},{"emoji":"📊","title":"PT căn thức","text":"PT căn thức"},{"emoji":"🔺","title":"Đặt ẩn phụ t = f(x)","text":"Đặt ẩn phụ t = f(x)"},{"emoji":"📏","title":"Điều kiện ẩn phụ","text":"Điều kiện ẩn phụ"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"ax⁴+bx²+c=0: đặt t=x², t≥0\\n√f(x) = g(x): ĐK g(x)≥0, bình phương hai vế","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "ax⁴+bx²+c=0: đặt t=x², t≥0",
    "√f(x) = g(x): ĐK g(x)≥0, bình phương hai vế",
  ],
};

export default bai18;
