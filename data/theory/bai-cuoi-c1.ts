import type { LessonTheory } from "@/lib/types";

const baiCuoiC1: LessonTheory = {
  intro:
    "Bài tập cuối chương I giúp em ôn tập tổng hợp kiến thức về mệnh đề logic và tập hợp. Đây là nền tảng vững chắc để bước vào các chương tiếp theo của Toán 10.",
  minutes: 12,
  sections: [
    {
      id: "on-tap-menh-de",
      emoji: "⚖️",
      heading: "1. Ôn tập Mệnh đề logic",
      blocks: [
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "✅",
              title: "Mệnh đề & Phủ định",
              text: "Mệnh đề là câu khẳng định đúng hoặc sai rõ ràng. Phủ định P̄ có chân trị ngược lại với P.",
            },
            {
              emoji: "➡️",
              title: "Kéo theo P ⇒ Q",
              text: "Chỉ SAI khi P đúng mà Q sai. Ghi nhớ: Đầu ĐỦ - Đuôi CẦN.",
            },
            {
              emoji: "↔️",
              title: "Tương đương P ⇔ Q",
              text: "Đúng khi P và Q cùng chân trị. P là điều kiện cần và đủ để có Q.",
            },
            {
              emoji: "🌐",
              title: "Lượng từ ∀ và ∃",
              text: "Phủ định ∀ thành ∃ và ngược lại, đồng thời phủ định tính chất.",
            },
          ],
        },
        {
          kind: "check",
          q: "Phủ định của mệnh đề '∃x ∈ ℝ, x² < 0' là:",
          options: ["∀x ∈ ℝ, x² ≥ 0", "∃x ∈ ℝ, x² ≥ 0", "∀x ∈ ℝ, x² > 0", "∃x ∈ ℝ, x² > 0"],
          answer: 0,
          explain: "Phủ định: ∃ đổi thành ∀, dấu '<' đổi thành '≥'. Vậy đáp án là ∀x ∈ ℝ, x² ≥ 0.",
        },
      ],
    },
    {
      id: "on-tap-tap-hop",
      emoji: "📦",
      heading: "2. Ôn tập Tập hợp & Phép toán",
      blocks: [
        {
          kind: "mathBox",
          title: "Tóm tắt các phép toán tập hợp",
          formula: "A ∩ B: Lấy chung | A ∪ B: Lấy hết\nA ∖ B: Thuộc A, không thuộc B | C_E A: Phần bù\nn(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
          note: "Luôn vẽ biểu đồ Ven trước khi giải bài toán đếm số phần tử.",
        },
        {
          kind: "check",
          q: "Cho A = (-2; 3] và B = [1; 5). Tập A ∩ B là:",
          options: ["[1; 3]", "[1; 3)", "(1; 3)", "(-2; 5)"],
          answer: 0,
          explain: "Giao lấy phần chung: x ≥ 1 (từ B) và x ≤ 3 (từ A). Tại 1 ngoặc vuông (B), tại 3 ngoặc vuông (A). Vậy A ∩ B = [1; 3].",
        },
      ],
    },
  ],
  summary: [
    "Mệnh đề là câu khẳng định có tính đúng sai dứt khoát. P ⇒ Q sai khi P đúng mà Q sai.",
    "Phủ định lượng từ: ∀ ↔ ∃ kèm phủ định tính chất.",
    "Giao ∩ lấy chung, Hợp ∪ lấy hết, Hiệu ∖ lấy riêng, Phần bù là hiệu đặc biệt.",
    "Công thức biểu đồ Ven: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
  ],
};

export default baiCuoiC1;
