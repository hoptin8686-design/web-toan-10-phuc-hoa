import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Bài tập cuối chương IV:",
      statements: [
          { text: "AB⃗+BC⃗=AC⃗ là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Vectơ bằng nhau, cùng phương không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Tích vô hướng, vuông góc là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: AB⃗+BC⃗=AC⃗",
      math: "",
      answer: "Công thức: AB⃗+BC⃗=AC⃗\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Quy tắc cộng trừ",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng GA⃗+GB⃗+GC⃗=0⃗\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
