import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Tổng và hiệu của hai vectơ:",
      statements: [
          { text: "AB⃗ + BC⃗ = AC⃗ (quy tắc 3 điểm) là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Quy tắc 3 điểm: AB⃗ + BC⃗ = AC⃗ không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Hiệu: AB⃗ - AC⃗ = CB⃗ là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: AB⃗ + BC⃗ = AC⃗ (quy tắc 3 điểm)",
      math: "",
      answer: "Công thức: AB⃗ + BC⃗ = AC⃗ (quy tắc 3 điểm)\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Quy tắc hình bình hành",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng AB⃗ + AD⃗ = AC⃗ (ABCD hình bình hành)\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
