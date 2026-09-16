import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về hệ thức lượng:",
      statements: [
          { text: "Định lí côsin là dạng tổng quát của định lí Pythagore.", answer: true, explain: "Khi C=90°, cosC=0, côsin trở thành Pythagore. ĐÚNG." },
          { text: "Trong tam giác, nếu a > b thì A > B.", answer: true, explain: "Cạnh lớn hơn đối diện với góc lớn hơn. ĐÚNG." },
          { text: "Công thức Heron chỉ dùng cho tam giác vuông.", answer: false, explain: "Heron dùng cho mọi tam giác khi biết 3 cạnh. SAI." },
          { text: "Diện tích tam giác có thể tính bằng S = (1/2)·a·h_a.", answer: true, explain: "S = (1/2) × đáy × chiều cao tương ứng. ĐÚNG." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Cho tam giác ABC có a = 7, b = 5, C = 120°.\\na) Tính cạnh c.\\nb) Tính diện tích tam giác ABC.",
      math: "a=7, b=5, C=120°",
      answer: "a) c² = a²+b²-2ab·cosC = 49+25-2(7)(5)cos120°\\n= 74-70(-1/2) = 74+35 = 109.\\nc = √109.\\n\\nb) S = (1/2)·7·5·sin120° = (35/2)·(√3/2) = 35√3/4.",
    },
    {
      id: "es-02",
      q: "Hai tàu xuất phát từ cảng A, tàu 1 đi theo hướng Bắc 10 km đến B, tàu 2 đi theo hướng lệch Đông 60° một đoạn 8 km đến C. Tính khoảng cách BC.",
      math: "AB=10, AC=8, \\hat{A}=60°",
      answer: "Áp dụng định lí côsin:\\nBC² = AB²+AC²-2·AB·AC·cosA\\n= 100+64-2(10)(8)cos60°\\n= 164-160(1/2) = 164-80 = 84.\\nBC = √84 = 2√21 ≈ 9.17 km.",
    },
  ],
};
