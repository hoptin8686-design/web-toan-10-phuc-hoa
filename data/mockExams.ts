import type { Question } from "@/lib/types";

export type MockExam = {
  id: string;
  title: string;
  badge: string;
  durationMinutes: number;
  description: string;
  questions: Question[];
};

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-giua-ki-1",
    title: "Đề Ôn tập Kiểm tra Giữa Kì I — Toán học 10",
    badge: "Học kì 1 · 45 Phút",
    durationMinutes: 45,
    description:
      "Đề ôn tập bám sát chuẩn kiến thức kĩ năng THPT Phục Hòa: Chương I (Mệnh đề & Tập hợp), Chương II (Bất phương trình bậc nhất 2 ẩn) và Chương III (Hệ thức lượng trong tam giác).",
    questions: [
      {
        id: "gk1-m01",
        q: "Mệnh đề nào sau đây là mệnh đề ĐÚNG về logic toán học?",
        options: [
          "∀x ∈ ℝ, x² + 1 > 0",
          "∀x ∈ ℝ, x² > 0",
          "∃x ∈ ℝ, x² + 4 = 0",
          "∀n ∈ ℕ, 2n + 1 chia hết cho 3",
        ],
        answer: 0,
        explain: "Vì với mọi số thực x, x² ≥ 0 nên x² + 1 ≥ 1 > 0 luôn đúng với mọi x ∈ ℝ.",
      },
      {
        id: "gk1-m02",
        q: "Cho hai tập hợp A = {1; 2; 3; 4} và B = {3; 4; 5; 6}. Giao của hai tập hợp A ∩ B là:",
        options: [
          "Tập hợp {3; 4} gồm các phần tử vừa thuộc A vừa thuộc B.",
          "Tập hợp {1; 2; 3; 4; 5; 6} gồm tất cả các phần tử của cả A và B.",
          "Tập hợp {1; 2} gồm các phần tử chỉ thuộc A mà không thuộc B.",
          "Tập hợp {5; 6} gồm các phần tử chỉ thuộc B mà không thuộc A.",
        ],
        answer: 0,
        explain: "Giao A ∩ B là tập hợp các phần tử chung của cả hai tập hợp A và B, ở đây là {3; 4}.",
      },
      {
        id: "gk1-m03",
        q: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình 2x + y - 4 ≤ 0?",
        options: [
          "Điểm O(0; 0) vì khi thay vào ta được: 2*0 + 0 - 4 = -4 ≤ 0 (thỏa mãn).",
          "Điểm A(3; 2) vì khi thay vào ta được: 2*3 + 2 - 4 = 4 > 0 (không thỏa mãn).",
          "Điểm B(2; 3) vì khi thay vào ta được: 2*2 + 3 - 4 = 3 > 0 (không thỏa mãn).",
          "Điểm C(1; 5) vì khi thay vào ta được: 2*1 + 5 - 4 = 3 > 0 (không thỏa mãn).",
        ],
        answer: 0,
        explain: "Thay toạ độ (0; 0) vào bất phương trình: 2(0) + 0 - 4 = -4 ≤ 0, là mệnh đề đúng.",
      },
      {
        id: "gk1-m04",
        q: "Cho tam giác ABC có góc A = 60°, b = 5, c = 8. Độ dài cạnh a bằng bao nhiêu theo định lí côsin?",
        options: [
          "Độ dài cạnh a = 7 (vì a² = b² + c² - 2bc*cosA = 25 + 64 - 2*5*8*(1/2) = 49).",
          "Độ dài cạnh a = 9 (do nhầm lẫn dấu trong công thức định lí côsin).",
          "Độ dài cạnh a = √129 (do tính thiếu tích số 2bc trong định lí côsin).",
          "Độ dài cạnh a = 6 (do áp dụng sai giá trị cos 60° sang giá trị khác).",
        ],
        answer: 0,
        explain: "Theo định lí côsin: a² = b² + c² - 2bc.cos A = 5² + 8² - 2*5*8*cos(60°) = 25 + 64 - 40 = 49 => a = 7.",
      },
      {
        id: "gk1-m05",
        q: "Công thức nào sau đây dùng để tính diện tích S của tam giác ABC?",
        options: [
          "S = (1/2) * a * b * sin C",
          "S = (1/2) * a * b * cos C",
          "S = a * b * sin C",
          "S = (1/2) * a * b * c",
        ],
        answer: 0,
        explain: "Diện tích tam giác bằng nửa tích hai cạnh nhân với sin của góc xen giữa: S = 1/2 ab sin C.",
      },
      {
        id: "gk1-m06",
        q: "Cho mệnh đề: 'Nếu a và b là hai số chẵn thì a + b là số chẵn'. Mệnh đề đảo của mệnh đề này là:",
        options: [
          "Nếu a + b là số chẵn thì a và b là hai số chẵn.",
          "Nếu a và b không phải là hai số chẵn thì a + b không là số chẵn.",
          "Nếu a + b không phải là số chẵn thì a và b không là hai số chẵn.",
          "a và b là hai số chẵn khi và chỉ khi a + b là số chẵn.",
        ],
        answer: 0,
        explain: "Mệnh đề đảo của P ⇒ Q là Q ⇒ P. Chú ý mệnh đề đảo này sai (ví dụ 1 + 3 = 4 chẵn nhưng 1 và 3 đều lẻ).",
      },
    ],
  },
  {
    id: "de-cuoi-ki-1",
    title: "Đề Ôn tập Kiểm tra Cuối Kì I — Toán học 10",
    badge: "Học kì 1 · 90 Phút",
    durationMinutes: 90,
    description:
      "Tổng hợp toàn bộ kiến thức Học kì 1: Mệnh đề, Tập hợp, Bất phương trình bậc nhất 2 ẩn, Hệ thức lượng, Phép toán Vectơ và Thống kê mô tả số liệu.",
    questions: [
      {
        id: "ck1-m01",
        q: "Cho hình bình hành ABCD có tâm O. Khẳng định nào sau đây về vectơ là ĐÚNG?",
        options: [
          "Vectơ AB + vectơ AD = vectơ AC (theo quy tắc hình bình hành).",
          "Vectơ AB + vectơ BC = vectơ CA (sai chiều vectơ kết quả).",
          "Vectơ OA + vectơ OB = vectơ không (chỉ đối xứng khi cùng phương).",
          "Độ dài vectơ AB bằng độ dài vectơ BC trong mọi hình bình hành.",
        ],
        answer: 0,
        explain: "Theo quy tắc hình bình hành: vectơ AB + vectơ AD = vectơ AC.",
      },
      {
        id: "ck1-m02",
        q: "Tích vô hướng của hai vectơ a và b vuông góc với nhau nhận giá trị bằng bao nhiêu?",
        options: [
          "Bằng 0 (vì cos 90° = 0 nên tích vô hướng hai vectơ vuông góc luôn bằng 0).",
          "Bằng 1 (do nhầm lẫn với giá trị độ dài của các vectơ đơn vị).",
          "Bằng tích độ dài của hai vectơ đã cho ban đầu.",
          "Bằng -1 (do nhầm lẫn với trường hợp hai vectơ ngược hướng nhau).",
        ],
        answer: 0,
        explain: "a . b = |a| * |b| * cos(90°) = 0.",
      },
      {
        id: "ck1-m03",
        q: "Cho mẫu số liệu điểm kiểm tra: 6, 7, 7, 8, 8, 8, 9, 10. Số mốt (Mode) của mẫu số liệu là:",
        options: [
          "Mốt là 8 (vì giá trị 8 có tần số xuất hiện nhiều nhất là 3 lần).",
          "Mốt là 7 (vì giá trị 7 xuất hiện 2 lần trong mẫu số liệu).",
          "Mốt là 10 (vì giá trị 10 là số điểm cao nhất trong dãy số).",
          "Mốt là 7.5 (do nhầm lẫn sang công thức tính số trung bình cộng).",
        ],
        answer: 0,
        explain: "Mốt (Mo) là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu. Ở đây điểm 8 xuất hiện 3 lần.",
      },
      {
        id: "ck1-m04",
        q: "Tập hợp A = {x ∈ ℝ | -2 ≤ x < 5} được viết dưới dạng nửa khoảng là:",
        options: [
          "[-2; 5) với dấu ngoặc vuông tại -2 và ngoặc tròn tại 5.",
          "(-2; 5] với dấu ngoặc tròn tại -2 và ngoặc vuông tại 5.",
          "[-2; 5] với cả hai đầu đều sử dụng dấu ngoặc vuông.",
          "(-2; 5) với cả hai đầu đều sử dụng dấu ngoặc tròn.",
        ],
        answer: 0,
        explain: "Dấu ≤ tương ứng với ngoặc vuông [; dấu < tương ứng với ngoặc tròn ).",
      },
      {
        id: "ck1-m05",
        q: "Cho ba điểm phân biệt A, B, C bất kì. Đẳng thức vectơ nào sau đây luôn luôn đúng theo quy tắc 3 điểm?",
        options: [
          "Vectơ AB + vectơ BC = vectơ AC",
          "Vectơ AB + vectơ AC = vectơ BC",
          "Vectơ BA + vectơ BC = vectơ AC",
          "Vectơ CA + vectơ BA = vectơ CB",
        ],
        answer: 0,
        explain: "Theo quy tắc ba điểm (quy tắc nối đuôi): vectơ AB + vectơ BC = vectơ AC.",
      },
    ],
  },
];
