import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Vị trí tương đối và khoảng cách:",
      statements: [
          { text: "d(M, d) = |ax₀+by₀+c|/√(a²+b²) là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Cắt, song song, trùng nhau không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Điều kiện vuông góc là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: d(M, d) = |ax₀+by₀+c|/√(a²+b²)",
      math: "",
      answer: "Công thức: d(M, d) = |ax₀+by₀+c|/√(a²+b²)\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Góc giữa hai đường thẳng",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Vuông góc: a₁a₂+b₁b₂=0\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
