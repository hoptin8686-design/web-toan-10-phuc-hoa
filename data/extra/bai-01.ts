import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context:
        "Xét các phát biểu logic toán học liên quan đến các tập hợp số tự nhiên ℕ, số nguyên ℤ và số thực ℝ:",
      statements: [
        {
          text: "Mệnh đề P: '∀n ∈ ℕ, n² ≥ n' là một mệnh đề ĐÚNG.",
          answer: true,
          explain:
            "Với mọi n ∈ ℕ: Với n = 0, 0² = 0 ≥ 0 (đúng). Với n ≥ 1, nhân hai vế với n ta được n² ≥ n (đúng).",
        },
        {
          text: "Mệnh đề Q: '∃x ∈ ℝ, x² + 2x + 5 = 0' là một mệnh đề ĐÚNG.",
          answer: false,
          explain:
            "Ta có biệt thức Δ' = 1² - 5 = -4 < 0, hoặc viết x² + 2x + 5 = (x + 1)² + 4 ≥ 4 > 0 với mọi x ∈ ℝ. Do đó không tồn tại x thực nào để biểu thức bằng 0.",
        },
        {
          text: "Phủ định của mệnh đề '∀x ∈ ℝ, x² - 4 = 0' là '∃x ∈ ℝ, x² - 4 ≠ 0'.",
          answer: true,
          explain:
            "Theo quy tắc phủ định: Lượng từ '∀' đổi thành '∃' và dấu '=' đổi thành '≠'.",
        },
        {
          text: "Mệnh đề: 'Nếu một số chia hết cho 3 thì số đó chia hết cho 9' là mệnh đề ĐÚNG.",
          answer: false,
          explain:
            "Đây là mệnh đề SAI. Ví dụ phản chứng: Số 6 chia hết cho 3 nhưng 6 không chia hết cho 9.",
        },
      ],
    },
    {
      id: "tf-02",
      context:
        "Cho tam giác ABC. Xét tính đúng sai của các khẳng định logic hình học sau:",
      statements: [
        {
          text: "Mệnh đề: 'Tam giác ABC có 3 cạnh bằng nhau là điều kiện cần để tam giác ABC đều'.",
          answer: true,
          explain:
            "Tam giác ABC đều khi và chỉ khi 3 cạnh bằng nhau. Đây là điều kiện cần và đủ, do đó phát biểu nó là điều kiện cần vẫn hoàn toàn đúng.",
        },
        {
          text: "Mệnh đề kéo theo: 'Nếu tam giác ABC cân thì tam giác ABC đều' là một mệnh đề ĐÚNG.",
          answer: false,
          explain:
            "Tam giác cân có 2 cạnh bằng nhau, chưa chắc 3 cạnh bằng nhau. Ví dụ tam giác có các cạnh 3, 3, 4 là tam giác cân nhưng không đều.",
        },
        {
          text: "Mệnh đề đảo của mệnh đề 'Nếu tam giác ABC đều thì tam giác ABC có góc 60°' là 'Nếu tam giác ABC có góc 60° thì tam giác ABC đều'.",
          answer: true,
          explain:
            "Mệnh đề đảo là đổi vai trò của giả thiết và kết luận, nên phát biểu trên hoàn toàn chính xác.",
        },
        {
          text: "Mệnh đề 'Tam giác ABC có góc A = 90° khi và chỉ khi BC² = AB² + AC²' là một mệnh đề tương đương ĐÚNG.",
          answer: true,
          explain:
            "Theo định lí Pythagore thuận và đảo, tam giác vuông tại A khi và chỉ khi bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Phát biểu mệnh đề phủ định của mệnh đề sau và xét tính đúng sai của mệnh đề phủ định đó: P: 'Mọi hình bình hành đều có hai đường chéo cắt nhau tại trung điểm của mỗi đường'.",
      math: "P: ∀ tứ giác ABCD ∈ HBH, AC và BD cắt nhau tại trung điểm mỗi đường",
      answer:
        "1. Phát biểu mệnh đề phủ định P̄:\n'Tồn tại ít nhất một hình bình hành mà hai đường chéo không cắt nhau tại trung điểm của mỗi đường.'\n\n2. Xét tính đúng sai:\nTheo tính chất hình học cơ bản, mọi hình bình hành đều có hai đường chéo cắt nhau tại trung điểm của mỗi đường (mệnh đề P đúng).\nDo đó, mệnh đề phủ định P̄ nhận giá trị SAI.",
    },
    {
      id: "es-02",
      q: "Cho mệnh đề chứa biến: P(x): 'x² - 5x + 6 = 0'.\na) Tìm tất cả các giá trị của x để P(x) là mệnh đề đúng.\nb) Viết mệnh đề phủ định của mệnh đề: '∃x ∈ ℝ, x² - 5x + 6 = 0'.",
      math: "x^2 - 5x + 6 = 0",
      answer:
        "a) Giải phương trình x² - 5x + 6 = 0:\nTa phân tích: (x - 2)(x - 3) = 0\nSuy ra: x = 2 hoặc x = 3.\nVậy với x ∈ {2; 3} thì P(x) là mệnh đề đúng. Với x ∉ {2; 3} thì P(x) là mệnh đề sai.\n\nb) Mệnh đề phủ định là:\n'∀x ∈ ℝ, x² - 5x + 6 ≠ 0' (Với mọi số thực x, giá trị của x² - 5x + 6 luôn khác 0).",
    },
  ],
};
