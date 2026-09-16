import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Đường tròn:",
      statements: [
          { text: "(x-a)²+(y-b)²=R², tâm I(a;b), bán kính R là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "PT đường tròn (x-a)²+(y-b)²=R² không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Vị trí tương đối đường thẳng - đường tròn là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: (x-a)²+(y-b)²=R², tâm I(a;b), bán kính R",
      math: "",
      answer: "Công thức: (x-a)²+(y-b)²=R², tâm I(a;b), bán kính R\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Dạng khai triển x²+y²+Dx+Ey+F=0",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Tiếp tuyến tại M(x₀;y₀): (x₀-a)(x-a)+(y₀-b)(y-b)=R²\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
