import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Dấu của tam thức bậc hai:",
      statements: [
          { text: "Δ < 0: f(x) cùng dấu a, ∀x là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Tam thức bậc hai không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Giải bất phương trình bậc hai là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Δ < 0: f(x) cùng dấu a, ∀x",
      math: "",
      answer: "Công thức: Δ < 0: f(x) cùng dấu a, ∀x\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Định lí về dấu",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Δ = 0: f(x) = a(x - x₀)², cùng dấu a trừ x = x₀\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
