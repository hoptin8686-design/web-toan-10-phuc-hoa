import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "q02-01",
    q: "Cho tập hợp A = {x ∈ ℕ | x là ước chung của 18 và 24}. Số phần tử của tập hợp A là:",
    options: ["4", "5", "6", "8"],
    answer: 0,
    explain:
      "Các ước của 18 là {1; 2; 3; 6; 9; 18}. Các ước của 24 là {1; 2; 3; 4; 6; 8; 12; 24}.\nƯớc chung tự nhiên của 18 và 24 là A = {1; 2; 3; 6}. Tập A có đúng 4 phần tử tự nhiên n(A) = 4 phần tử.",
  },
  {
    id: "q02-02",
    q: "Trong các tập hợp sau đây, tập hợp nào là tập hợp rỗng (∅)?",
    options: [
      "A = {x ∈ ℝ | x² + x + 1 = 0}",
      "B = {x ∈ ℤ | x² - 4 = 0}",
      "C = {x ∈ ℚ | 2x - 5 = 0}",
      "D = {x ∈ ℕ | x² = 9}",
    ],
    answer: 0,
    explain:
      "Phương trình x² + x + 1 = 0 có biệt thức Δ = 1² - 4 = -3 < 0 nên vô nghiệm trên tập số thực ℝ. Do đó A = ∅. Trong khi đó: B = {-2; 2} ≠ ∅, C = {5/2} ≠ ∅, D = {3} ≠ ∅.",
  },
  {
    id: "q02-03",
    q: "Cho tập hợp S = {1; 2; 3}. Khẳng định nào sau đây là khẳng định SAI?",
    options: [
      "1 ∈ S",
      "{1} ⊂ S",
      "{1; 2} ∈ S",
      "∅ ⊂ S",
    ],
    answer: 2,
    explain:
      "Kí hiệu '∈' dùng để chỉ phần tử thuộc tập hợp. Tập hợp con {1; 2} phải dùng kí hiệu chứa trong: {1; 2} ⊂ S chứ không được viết {1; 2} ∈ S. Do đó khẳng định C là sai.",
  },
  {
    id: "q02-04",
    q: "Số tập hợp con của tập hợp X = {a; b; c} là:",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explain:
      "Tập hợp X có 3 phần tử (n = 3). Số tập con của X là 2ⁿ = 2³ = 8 tập con (gồm: ∅, 3 tập 1 phần tử, 3 tập 2 phần tử và chính tập X).",
  },
  {
    id: "q02-05",
    q: "Cho hai tập hợp A = {x ∈ ℝ | (x - 1)(x² - 4) = 0} và B = {-2; 1; 2}. Khẳng định nào sau đây đúng?",
    options: [
      "A ⊂ B và A ≠ B",
      "B ⊂ A và A ≠ B",
      "A = B",
      "A ∩ B = {1}",
    ],
    answer: 2,
    explain:
      "Phương trình (x - 1)(x² - 4) = 0 ⟺ x = 1 hoặc x = ±2. Do đó A = {-2; 1; 2}. Ta thấy tập A và tập B có cùng các phần tử, nên A = B.",
  },
  {
    id: "q02-06",
    q: "Tập hợp S = {x ∈ ℝ | -4 < x ≤ 3} được biểu diễn dưới dạng khoảng, đoạn là:",
    options: ["(-4; 3)", "[-4; 3]", "(-4; 3]", "[-4; 3)"],
    answer: 2,
    explain:
      "Vì x > -4 không có dấu bằng nên tại -4 dùng ngoặc tròn '('; x ≤ 3 có dấu bằng nên tại 3 dùng ngoặc vuông ']'. Vậy S = (-4; 3].",
  },
  {
    id: "q02-07",
    q: "Cho hai tập hợp A = {1; 2; 3; 4; 5} và B = {2; 4; 6; 8}. Tập hợp A ∩ B là:",
    options: [
      "{1; 2; 3; 4; 5; 6; 8}",
      "{2; 4}",
      "{1; 3; 5}",
      "{6; 8}",
    ],
    answer: 1,
    explain:
      "Giao của hai tập hợp A ∩ B là tập hợp các phần tử vừa thuộc A vừa thuộc B. Các phần tử chung là 2 và 4. Vậy A ∩ B = {2; 4}.",
  },
  {
    id: "q02-08",
    q: "Cho hai tập hợp A = {-1; 0; 2} và B = {0; 1; 2; 3}. Tập hợp A ∪ B là:",
    options: [
      "{0; 2}",
      "{-1; 1; 3}",
      "{-1; 0; 1; 2; 3}",
      "{-1; 0; 0; 1; 2; 2; 3}",
    ],
    answer: 2,
    explain:
      "Hợp của hai tập hợp A ∪ B gồm tất cả các phần tử thuộc A hoặc thuộc B. Khi viết tập hợp, các phần tử lặp lại chỉ ghi 1 lần: A ∪ B = {-1; 0; 1; 2; 3}.",
  },
  {
    id: "q02-09",
    q: "Cho hai tập hợp A = {1; 2; 3; 4} và B = {3; 4; 5}. Hiệu A ∖ B là:",
    options: [
      "{1; 2}",
      "{5}",
      "{3; 4}",
      "{1; 2; 5}",
    ],
    answer: 0,
    explain:
      "Hiệu A ∖ B là tập hợp gồm các phần tử thuộc A nhưng không thuộc B. Lấy các phần tử của A bỏ đi các phần tử chung với B (3 và 4), ta còn lại A ∖ B = {1; 2}.",
  },
  {
    id: "q02-10",
    q: "Cho hai tập hợp A = (-3; 2) và B = [0; 5). Tập hợp A ∩ B là:",
    options: ["(-3; 5)", "[0; 2)", "(0; 2)", "[-3; 0]"],
    answer: 1,
    explain:
      "Giao là phần chung của hai tập trên trục số: Số x vừa thỏa mãn -3 < x < 2 vừa thỏa mãn 0 ≤ x < 5 là 0 ≤ x < 2, tức nửa khoảng [0; 2).",
  },
  {
    id: "q02-11",
    q: "Cho hai tập hợp A = [-1; 4] và B = (2; 6). Tập hợp A ∪ B là:",
    options: ["(2; 4]", "[-1; 6)", "[-1; 2)", "[4; 6)"],
    answer: 1,
    explain:
      "Hợp hai tập hợp trên trục số là miền phủ từ điểm nhỏ nhất đến điểm lớn nhất liên tục: từ -1 (ngoặc vuông) đến 6 (ngoặc tròn). Vậy A ∪ B = [-1; 6).",
  },
  {
    id: "q02-12",
    q: "Cho tập hợp A = (-∞; 3]. Phần bù của tập hợp A trong ℝ (kí hiệu C_ℝ A = ℝ ∖ A) là:",
    options: ["(3; +∞)", "[3; +∞)", "(-∞; 3)", "(-3; 3)"],
    answer: 0,
    explain:
      "Phần bù trong ℝ là toàn bộ các điểm thuộc trục số nhưng không thuộc A. Vì A lấy từ -∞ đến 3 (lấy cả 3), nên phần còn lại không lấy 3, tức khoảng (3; +∞).",
  },
  {
    id: "q02-13",
    q: "Cho hai tập hợp A = [-2; 5] và B = (1; +∞). Tập hợp A ∖ B là:",
    options: ["[-2; 1]", "[-2; 1)", "[-2; +∞)", "(5; +∞)"],
    answer: 0,
    explain:
      "A ∖ B gồm các số thuộc [-2; 5] nhưng không thuộc (1; +∞). Các số không thuộc (1; +∞) là các số ≤ 1. Giao của [-2; 5] và (-∞; 1] là đoạn [-2; 1].",
  },
  {
    id: "q02-14",
    q: "Lớp 10B có 45 học sinh, trong đó có 25 bạn đăng kí môn bóng đá, 20 bạn đăng kí môn cầu lông, và 8 bạn không đăng kí môn nào. Số học sinh đăng kí cả hai môn là:",
    options: ["5 bạn", "8 bạn", "10 bạn", "12 bạn"],
    answer: 1,
    explain:
      "Số học sinh đăng kí ít nhất một môn thể thao là: 45 - 8 = 37 bạn.\nÁp dụng công thức biểu đồ Ven: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\n⇒ 37 = 25 + 20 - n(A ∩ B) ⟺ 37 = 45 - n(A ∩ B) ⟺ n(A ∩ B) = 8 bạn.",
  },
  {
    id: "q02-15",
    q: "Cho hai tập hợp A = (m; m + 2) và B = (1; 4). Tìm tất cả các giá trị của tham số m để A ∩ B ≠ ∅?",
    options: [
      "-1 < m < 4",
      "-1 ≤ m ≤ 4",
      "m > 4 hoặc m < -1",
      "1 < m < 4",
    ],
    answer: 0,
    explain:
      "Hai khoảng (m; m + 2) và (1; 4) giao nhau bằng rỗng (A ∩ B = ∅) khi và chỉ khi:\nKhoảng A nằm hoàn toàn bên trái B (m + 2 ≤ 1 ⟺ m ≤ -1) hoặc A nằm hoàn toàn bên phải B (m ≥ 4).\nDo đó, để A ∩ B ≠ ∅ thì phủ định lại: -1 < m < 4.",
  },
];
