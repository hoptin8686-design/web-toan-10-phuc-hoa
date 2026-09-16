import type { LessonTheory } from "@/lib/types";

const bai06: LessonTheory = {
  intro: "Hệ thức lượng trong tam giác gồm định lí côsin, định lí sin và các công thức tính diện tích — bộ công cụ mạnh mẽ để giải mọi tam giác và ứng dụng trong đo đạc thực tế.",
  minutes: 15,
  sections: [
    {
      id: "dinh-li-cosin",
      emoji: "📐",
      heading: "1. Định lí côsin",
      blocks: [
        {
          kind: "mathBox",
          title: "Định lí côsin",
          formula: "a² = b² + c² − 2bc·cos A\\nb² = a² + c² − 2ac·cos B\\nc² = a² + b² − 2ab·cos C",
          note: "Khi A = 90°: cos A = 0, ta thu được định lí Pythagore a² = b² + c².",
        },
      ],
    },
    {
      id: "dinh-li-sin",
      emoji: "🔺",
      heading: "2. Định lí sin",
      blocks: [
        {
          kind: "mathBox",
          title: "Định lí sin",
          formula: "a/sin A = b/sin B = c/sin C = 2R",
          note: "R là bán kính đường tròn ngoại tiếp tam giác ABC.",
        },
      ],
    },
    {
      id: "dien-tich",
      emoji: "📏",
      heading: "3. Công thức tính diện tích tam giác",
      blocks: [
        {
          kind: "mathBox",
          title: "Các công thức diện tích",
          formula: "S = (1/2)·a·b·sin C = (1/2)·b·c·sin A = (1/2)·a·c·sin B\\nS = √[p(p-a)(p-b)(p-c)]  (Heron, p = (a+b+c)/2)",
          note: "Công thức Heron dùng khi biết 3 cạnh.",
        },
      ],
    },
  ],
  summary: [
    "Định lí côsin: a² = b² + c² − 2bc·cos A (tổng quát hóa Pythagore).",
    "Định lí sin: a/sin A = b/sin B = c/sin C = 2R.",
    "Diện tích: S = (1/2)ab·sin C hoặc Heron.",
    "Giải tam giác: Tìm các cạnh và góc còn lại.",
  ],
};

export default bai06;
