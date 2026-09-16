import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Ba đường conic:",
      statements: [
          { text: "Elip: c²=a²-b², e=c/a<1 là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Elip: x²/a²+y²/b²=1 không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Tiêu điểm, tiêu cự là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Elip: c²=a²-b², e=c/a<1",
      math: "",
      answer: "Công thức: Elip: c²=a²-b², e=c/a<1\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Hypebol: x²/a²-y²/b²=1",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng Hypebol: c²=a²+b², e=c/a>1\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
