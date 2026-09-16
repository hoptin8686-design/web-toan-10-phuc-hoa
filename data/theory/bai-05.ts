import type { LessonTheory } from "@/lib/types";

const bai05: LessonTheory = {
  intro: "Giá trị lượng giác mở rộng khái niệm sin, cos, tan, cot từ tam giác vuông sang góc bất kì từ 0° đến 180° thông qua nửa đường tròn đơn vị.",
  minutes: 15,
  sections: [
    {
      id: "nua-duong-tron",
      emoji: "🔵",
      heading: "1. Nửa đường tròn đơn vị & Giá trị lượng giác",
      blocks: [
        {
          kind: "mathBox",
          title: "Định nghĩa qua tọa độ điểm M",
          formula: "M(cos α; sin α) trên nửa đường tròn đơn vị\\ntan α = sin α / cos α (cos α ≠ 0)\\ncot α = cos α / sin α (sin α ≠ 0)",
          note: "Với 0° < α < 180°: sin α ≥ 0. cos α dương khi α nhọn, âm khi α tù.",
        },
        {
          kind: "check",
          q: "sin 90° bằng:",
          options: ["1","0","-1","1/2"],
          answer: 0,
          explain: "Tại α = 90°, M ở đỉnh nửa đường tròn (0; 1). sin 90° = 1.",
        },
      ],
    },
    {
      id: "goc-bu",
      emoji: "🔄",
      heading: "2. Giá trị lượng giác của hai góc bù nhau",
      blocks: [
        {
          kind: "mathBox",
          title: "Công thức góc bù nhau (α + β = 180°)",
          formula: "sin(180° - α) = sin α\\ncos(180° - α) = -cos α\\ntan(180° - α) = -tan α",
          note: "Sin giữ nguyên dấu, Cos và Tan đổi dấu.",
        },
      ],
    },
  ],
  summary: [
    "sin α = tung độ, cos α = hoành độ trên nửa đường tròn đơn vị.",
    "0° < α < 90°: sin, cos, tan đều dương.",
    "90° < α < 180°: sin dương, cos và tan âm.",
    "Góc bù: sin giữ, cos và tan đổi dấu.",
  ],
};

export default bai05;
