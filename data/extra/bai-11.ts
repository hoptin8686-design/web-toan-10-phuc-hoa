import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Số gần đúng và sai số:",
      statements: [
          { text: "Sai số tuyệt đối: |a - ā| là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Số gần đúng không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Quy tròn số là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Sai số tuyệt đối: |a - ā|",
      math: "",
      answer: "Công thức: Sai số tuyệt đối: |a - ā|\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Sai số tuyệt đối",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Sai số tương đối: δ = Δa/|ā| × 100%\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
