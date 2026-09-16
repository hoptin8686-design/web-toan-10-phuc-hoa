import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Bài tập cuối chương V:",
      statements: [
          { text: "x̄, Me, Mo, S², S là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Sai số không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Phân tích dữ liệu thực tế là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: x̄, Me, Mo, S², S",
      math: "",
      answer: "Công thức: x̄, Me, Mo, S², S\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Trung bình, trung vị, mốt",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Quy tròn số\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
