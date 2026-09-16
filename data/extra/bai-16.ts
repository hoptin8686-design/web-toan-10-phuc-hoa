import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Hàm số bậc hai:",
      statements: [
          { text: "Đỉnh I(-b/2a; -Δ/4a) là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Đỉnh I(-b/2a; -Δ/4a) không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Đồ thị parabol là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: Đỉnh I(-b/2a; -Δ/4a)",
      math: "",
      answer: "Công thức: Đỉnh I(-b/2a; -Δ/4a)\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Trục đối xứng x = -b/2a",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng a > 0: bề lõm quay lên, GTNN = -Δ/4a\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
