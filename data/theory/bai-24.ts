import type { LessonTheory } from "@/lib/types";

const bai24: LessonTheory = {
  intro: "Hoán vị, chỉnh hợp, tổ hợp là ba công cụ đếm cơ bản: đếm cách sắp xếp (có/không quan tâm thứ tự) k phần tử từ n phần tử.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Hoán vị, chỉnh hợp và tổ hợp",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Hoán vị Pₙ = n!","text":"Hoán vị Pₙ = n!"},{"emoji":"📊","title":"Chỉnh hợp Aₙᵏ = n!/(n-k)!","text":"Chỉnh hợp Aₙᵏ = n!/(n-k)!"},{"emoji":"🔺","title":"Tổ hợp Cₙᵏ = n!/[k!(n-k)!]","text":"Tổ hợp Cₙᵏ = n!/[k!(n-k)!]"},{"emoji":"📏","title":"Phân biệt chỉnh hợp và tổ hợp","text":"Phân biệt chỉnh hợp và tổ hợp"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Pₙ = n!\\nAₙᵏ = n!/(n-k)!\\nCₙᵏ = Aₙᵏ/k! = n!/[k!(n-k)!]","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Pₙ = n!",
    "Aₙᵏ = n!/(n-k)!",
    "Cₙᵏ = Aₙᵏ/k! = n!/[k!(n-k)!]",
  ],
};

export default bai24;
