import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Thực hành tính xác suất:",
      statements: [
          { text: "n(Ω) = tổng số KQ đồng khả năng là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Kết hợp tổ hợp và xác suất không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Ứng dụng thực tế là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: n(Ω) = tổng số KQ đồng khả năng",
      math: "",
      answer: "Công thức: n(Ω) = tổng số KQ đồng khả năng\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Xúc xắc, đồng xu",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng n(A) = số KQ thuận lợi\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
