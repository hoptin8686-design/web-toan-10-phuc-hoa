import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai về Tích của một vectơ với một số:",
      statements: [
          { text: "k·a⃗: cùng phương a⃗, |k·a⃗| = |k|·|a⃗| là công thức đúng.", answer: true, explain: "Đúng theo SGK." },
          { text: "Tích k·a⃗: |k|·|a⃗|, cùng hướng nếu k>0 không liên quan đến bài này.", answer: false, explain: "Đây là nội dung chính của bài. SAI." },
          { text: "Trọng tâm G: OG⃗ = (OA⃗+OB⃗+OC⃗)/3 là phần quan trọng.", answer: true, explain: "Đúng, đây là kiến thức trọng tâm." },
          { text: "Bài này không có ứng dụng thực tế.", answer: false, explain: "Toán học luôn có ứng dụng thực tế. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày và áp dụng: k·a⃗: cùng phương a⃗, |k·a⃗| = |k|·|a⃗|",
      math: "",
      answer: "Công thức: k·a⃗: cùng phương a⃗, |k·a⃗| = |k|·|a⃗|\\n\\nÁp dụng: Thay số vào công thức và tính toán theo từng bước.",
    },
    {
      id: "es-02",
      q: "Bài tập vận dụng: Hai vectơ cùng phương: b⃗ = k·a⃗",
      math: "",
      answer: "Giải:\\nBước 1: Xác định dữ kiện\\nBước 2: Áp dụng b⃗ cùng phương a⃗ (a⃗≠0⃗) ⟺ ∃k: b⃗ = k·a⃗\\nBước 3: Tính toán và kết luận.",
    },
  ],
};
