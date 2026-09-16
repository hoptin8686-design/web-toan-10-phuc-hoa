import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Nhị thức Newton:",
      statements: [
          { text: "(a+b)ⁿ = Σ Cₙᵏ · aⁿ⁻ᵏ · bᵏ, k=0..n là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Khai triển (a+b)ⁿ không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Tìm hệ số, số hạng là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: (a+b)ⁿ = Σ Cₙᵏ · aⁿ⁻ᵏ · bᵏ, k=0..n",
      math: "",
      answer: "Công thức: (a+b)ⁿ = Σ Cₙᵏ · aⁿ⁻ᵏ · bᵏ, k=0..n\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Hệ số nhị thức Cₙᵏ",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Hệ số hạng thứ k+1: Cₙᵏ\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
