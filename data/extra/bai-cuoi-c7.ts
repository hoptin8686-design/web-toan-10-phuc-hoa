import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Bài tập cuối chương VII:",
      statements: [
          { text: "ax+by+c=0 là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "PT đường thẳng không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Khoảng cách, góc là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: ax+by+c=0",
      math: "",
      answer: "Công thức: ax+by+c=0\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: PT đường tròn",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng (x-a)²+(y-b)²=R²\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
