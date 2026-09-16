import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Số đặc trưng đo độ phân tán:",
      statements: [
          { text: "R = xmax - xmin là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Khoảng biến thiên R = xmax - xmin không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Độ lệch chuẩn S là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: R = xmax - xmin",
      math: "",
      answer: "Công thức: R = xmax - xmin\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Khoảng tứ phân vị ΔQ = Q₃ - Q₁",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng S² = Σ(xᵢ - x̄)²/n\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
