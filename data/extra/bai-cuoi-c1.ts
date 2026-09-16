import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai của các khẳng định sau về mệnh đề và tập hợp:",
      statements: [
        {
          text: "Mệnh đề 'Nếu 2 + 3 = 6 thì 1 + 1 = 3' là mệnh đề ĐÚNG.",
          answer: true,
          explain: "Giả thiết P: '2 + 3 = 6' là SAI. Khi P sai thì P ⇒ Q luôn ĐÚNG bất kể Q thế nào.",
        },
        {
          text: "Tập hợp {x ∈ ℕ | 1 ≤ x ≤ 5} có đúng 4 phần tử.",
          answer: false,
          explain: "Tập = {1; 2; 3; 4; 5} có 5 phần tử (không phải 4). Mệnh đề SAI.",
        },
        {
          text: "Cho A = {1; 2} và B = {1; 2; 3}. Khi đó A ⊂ B.",
          answer: true,
          explain: "Mọi phần tử của A (1 và 2) đều thuộc B. Vậy A ⊂ B. Mệnh đề ĐÚNG.",
        },
        {
          text: "Phần bù của tập [0; +∞) trong ℝ là (-∞; 0).",
          answer: true,
          explain: "C_ℝ [0; +∞) = {x ∈ ℝ | x < 0} = (-∞; 0). Mệnh đề ĐÚNG.",
        },
      ],
    },
    {
      id: "tf-02",
      context: "Cho A = [-3; 1) và B = (-1; 4]. Xét tính Đúng / Sai:",
      statements: [
        {
          text: "A ∩ B = (-1; 1).",
          answer: true,
          explain: "Giao: x ≥ -3, x < 1 (từ A) và x > -1, x ≤ 4 (từ B). Phần chung: -1 < x < 1 = (-1; 1). ĐÚNG.",
        },
        {
          text: "A ∪ B = [-3; 4].",
          answer: true,
          explain: "Hai tập có phần chung nên hợp liền: từ -3 (vuông) đến 4 (vuông). A ∪ B = [-3; 4]. ĐÚNG.",
        },
        {
          text: "A ∖ B = [-3; -1].",
          answer: true,
          explain: "A ∖ B: thuộc A nhưng không thuộc B. Vì B bắt đầu từ -1 (tròn), điểm -1 không thuộc B nên vẫn còn. A ∖ B = [-3; -1]. ĐÚNG.",
        },
        {
          text: "B ∖ A = (1; 4].",
          answer: false,
          explain: "B ∖ A: thuộc B nhưng không thuộc A. Vì A kết thúc tại 1 (tròn), điểm 1 không thuộc A. Vậy B ∖ A = [1; 4]. Mệnh đề ghi (1; 4] là SAI.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Cho mệnh đề P: '∀x ∈ ℝ, x² + 2x + 2 > 0'.\na) Xét tính đúng sai của mệnh đề P.\nb) Viết mệnh đề phủ định P̄ và xét tính đúng sai của P̄.",
      math: "x^2 + 2x + 2",
      answer:
        "a) Ta có: x² + 2x + 2 = (x + 1)² + 1 ≥ 1 > 0 với mọi x ∈ ℝ.\nVậy mệnh đề P là ĐÚNG.\n\nb) Phủ định P̄: '∃x ∈ ℝ, x² + 2x + 2 ≤ 0'.\nVì P đúng nên P̄ nhận giá trị SAI.",
    },
    {
      id: "es-02",
      q: "Một cuộc khảo sát 50 học sinh cho thấy: 30 bạn thích đọc sách, 25 bạn thích thể thao, và mỗi bạn thích ít nhất một trong hai hoạt động.\na) Tính số bạn thích cả hai hoạt động.\nb) Tính số bạn chỉ thích đọc sách.",
      math: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
      answer:
        "a) Vì mỗi bạn thích ít nhất 1 hoạt động: n(Đ ∪ T) = 50.\nÁp dụng: 50 = 30 + 25 - n(Đ ∩ T)\n⇒ n(Đ ∩ T) = 55 - 50 = 5 bạn thích cả hai.\n\nb) Số bạn chỉ thích đọc sách = n(Đ) - n(Đ ∩ T) = 30 - 5 = 25 bạn.",
    },
  ],
};
