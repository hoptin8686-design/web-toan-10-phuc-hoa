import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Phương trình đường thẳng:",
      statements: [
          { text: "PT tham số: x=x₀+at, y=y₀+bt là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Vectơ chỉ phương u⃗ không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "PT tổng quát ax+by+c=0 là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: PT tham số: x=x₀+at, y=y₀+bt",
      math: "",
      answer: "Công thức: PT tham số: x=x₀+at, y=y₀+bt\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Vectơ pháp tuyến n⃗",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng PT tổng quát: ax+by+c=0\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
