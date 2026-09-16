import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Bài tập cuối chương VI:",
      statements: [
          { text: "y = ax²+bx+c là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Hàm số bậc hai không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "BPT bậc hai là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: y = ax²+bx+c",
      math: "",
      answer: "Công thức: y = ax²+bx+c\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Parabol",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Đỉnh, trục đối xứng\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
