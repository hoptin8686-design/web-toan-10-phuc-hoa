import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Tích vô hướng của hai vectơ:",
      statements: [
          { text: "a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗) là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Góc giữa hai vectơ không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Ứng dụng: vuông góc khi a⃗·b⃗ = 0 là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)",
      math: "",
      answer: "Công thức: a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: a⃗·b⃗ = |a⃗|·|b⃗|·cos(a⃗,b⃗)",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng a⃗(x₁;y₁), b⃗(x₂;y₂): a⃗·b⃗ = x₁x₂+y₁y₂\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
