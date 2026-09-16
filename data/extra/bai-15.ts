import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Hàm số:",
      statements: [
          { text: "y = f(x), D = tập xác định là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Hàm số, tập xác định D, tập giá trị không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Hàm số chẵn, lẻ là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: y = f(x), D = tập xác định",
      math: "",
      answer: "Công thức: y = f(x), D = tập xác định\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Đồ thị hàm số",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Đồng biến: x₁ < x₂ ⇒ f(x₁) < f(x₂)\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
