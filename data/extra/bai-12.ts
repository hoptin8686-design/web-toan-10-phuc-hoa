import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Số đặc trưng đo xu thế trung tâm:",
      statements: [
          { text: "x̄ = (x₁+x₂+...+xₙ)/n là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Số trung bình cộng không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Mốt (Mo) là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: x̄ = (x₁+x₂+...+xₙ)/n",
      math: "",
      answer: "Công thức: x̄ = (x₁+x₂+...+xₙ)/n\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Trung vị (Me)",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Trung vị Me: giá trị giữa khi sắp xếp\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
