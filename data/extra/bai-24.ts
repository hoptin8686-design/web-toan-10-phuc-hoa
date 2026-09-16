import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Hoán vị, chỉnh hợp và tổ hợp:",
      statements: [
          { text: "Pₙ = n! là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Hoán vị Pₙ = n! không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Phân biệt chỉnh hợp và tổ hợp là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Pₙ = n!",
      math: "",
      answer: "Công thức: Pₙ = n!\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Chỉnh hợp Aₙᵏ = n!/(n-k)!",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Aₙᵏ = n!/(n-k)!\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
