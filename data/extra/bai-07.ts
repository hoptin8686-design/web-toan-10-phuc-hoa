import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Các khái niệm mở đầu về vectơ:",
      statements: [
          { text: "Vectơ AB⃗ có điểm đầu A, điểm cuối B, |AB⃗| = khoảng cách AB là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Phương, hướng, độ dài vectơ không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Hai vectơ cùng phương là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Vectơ AB⃗ có điểm đầu A, điểm cuối B, |AB⃗| = khoảng cách AB",
      math: "",
      answer: "Công thức: Vectơ AB⃗ có điểm đầu A, điểm cuối B, |AB⃗| = khoảng cách AB\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Vectơ-không",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Hai vectơ bằng nhau: cùng hướng và cùng độ dài\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
