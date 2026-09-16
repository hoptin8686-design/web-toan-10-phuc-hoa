import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Bài tập cuối chương IX:",
      statements: [
          { text: "P(A) = n(A)/n(Ω) là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Xác suất cổ điển không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Ứng dụng là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: P(A) = n(A)/n(Ω)",
      math: "",
      answer: "Công thức: P(A) = n(A)/n(Ω)\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Biến cố đối",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng P(Ā) = 1 - P(A)\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
