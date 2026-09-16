import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context:
        "Cho hai tập hợp A = {x ∈ ℝ | x² - 3x - 4 = 0} và B = {x ∈ ℤ | -2 ≤ x < 3}. Xét tính Đúng / Sai của các mệnh đề sau:",
      statements: [
        {
          text: "Tập hợp A có đúng 2 phần tử và cả hai phần tử đều là số nguyên.",
          answer: true,
          explain:
            "Phương trình x² - 3x - 4 = 0 có a - b + c = 1 - (-3) - 4 = 0 nên có hai nghiệm là x = -1 và x = 4. Cả hai nghiệm đều là số nguyên. Vậy A = {-1; 4}, mệnh đề ĐÚNG.",
        },
        {
          text: "Số phần tử của tập hợp B là n(B) = 5.",
          answer: true,
          explain:
            "Vì x ∈ ℤ và -2 ≤ x < 3 nên B = {-2; -1; 0; 1; 2}. Tập B gồm đúng 5 phần tử. Mệnh đề ĐÚNG.",
        },
        {
          text: "Tập hợp giao A ∩ B = {-1; 4}.",
          answer: false,
          explain:
            "Phần tử 4 thuộc A nhưng không thuộc B (vì điều kiện của B là x < 3). Phần tử chung duy nhất là -1. Do đó A ∩ B = {-1}. Mệnh đề SAI.",
        },
        {
          text: "Hiệu A ∖ B = {4}.",
          answer: true,
          explain:
            "A ∖ B là các phần tử thuộc A nhưng không thuộc B. Lấy A = {-1; 4} bỏ đi phần tử -1 (thuộc B), ta được {4}. Mệnh đề ĐÚNG.",
        },
      ],
    },
    {
      id: "tf-02",
      context:
        "Trên trục số thực ℝ, cho hai tập hợp con C = [-3; 2) và D = (0; 5]. Xét tính Đúng / Sai của các khẳng định sau:",
      statements: [
        {
          text: "Giao của hai tập hợp là C ∩ D = (0; 2).",
          answer: true,
          explain:
            "Giao là phần chung trên trục số: x ∈ [-3; 2) ⟺ -3 ≤ x < 2; x ∈ (0; 5] ⟺ 0 < x ≤ 5. Phần chung là 0 < x < 2, tức khoảng (0; 2). Mệnh đề ĐÚNG.",
        },
        {
          text: "Hợp của hai tập hợp là C ∪ D = [-3; 5].",
          answer: true,
          explain:
            "Vì C và D có phần chung là (0; 2) nên hai khoảng này dính liền nhau. Hợp của chúng phủ kín từ -3 (ngoặc vuông) đến 5 (ngoặc vuông), tức đoạn [-3; 5]. Mệnh đề ĐÚNG.",
        },
        {
          text: "Hiệu C ∖ D = [-3; 0).",
          answer: false,
          explain:
            "Bẫy quan trọng tại điểm 0: Điểm 0 không thuộc D (do D dùng ngoặc tròn (0; 5]). Do đó khi lấy C trừ đi D, điểm 0 vẫn còn nguyên! Vậy C ∖ D = [-3; 0] (tại 0 phải là ngoặc vuông). Mệnh đề SAI.",
        },
        {
          text: "Phần bù của D trong ℝ là C_ℝ D = (-∞; 0] ∪ (5; +∞).",
          answer: true,
          explain:
            "Tập D là nửa khoảng (0; 5]. Phần bù gồm tất cả các số thực không thuộc D, tức các số x ≤ 0 hoặc x > 5. Kí hiệu: (-∞; 0] ∪ (5; +∞). Mệnh đề ĐÚNG.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Một lớp học có 42 học sinh tham gia phong trào thể dục thể thao của trường. Trong đó có 22 học sinh đăng ký môn Cầu lông, 26 học sinh đăng ký môn Bóng chuyền và 5 học sinh không tham gia môn nào trong hai môn trên.\na) Tính số học sinh đăng ký cả hai môn Cầu lông và Bóng chuyền.\nb) Tính số học sinh chỉ đăng ký duy nhất môn Cầu lông.",
      math: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
      answer:
        "1. Lập luận logic và sơ đồ Ven:\n• Tổng số học sinh tham gia ít nhất 1 môn thể thao:\nn(C ∪ B) = 42 - 5 = 37 (học sinh).\n\n2. Tính số học sinh đăng ký cả 2 môn:\nÁp dụng công thức cộng số phần tử:\nn(C ∪ B) = n(C) + n(B) - n(C ∩ B)\n⇔ 37 = 22 + 26 - n(C ∩ B)\n⇔ 37 = 48 - n(C ∩ B)\n⇔ n(C ∩ B) = 48 - 37 = 11 (học sinh).\n\n3. Tính số học sinh chỉ đăng ký môn Cầu lông:\nSố học sinh chỉ chơi cầu lông = n(C) - n(C ∩ B) = 22 - 11 = 11 (học sinh).\n\nKết luận:\na) Có 11 học sinh đăng ký cả hai môn Cầu lông và Bóng chuyền.\nb) Có 11 học sinh chỉ đăng ký duy nhất môn Cầu lông.",
    },
    {
      id: "es-02",
      q: "Cho hai tập hợp A = [m; m + 3] và B = (1; 6) với m là tham số thực.\na) Tìm tất cả các giá trị của m để A ⊂ B.\nb) Tìm tất cả các giá trị của m để A ∩ B = ∅.",
      math: "A = [m; m + 3], B = (1; 6)",
      answer:
        "a) Điều kiện để A ⊂ B:\nĐoạn [m; m + 3] nằm trọn vẹn bên trong khoảng (1; 6) khi và chỉ khi:\n{ m > 1\n{ m + 3 < 6\n⇔ { m > 1\n  { m < 3\n⇔ 1 < m < 3.\n(Chú ý: Tại hai đầu 1 và 6 là ngoặc tròn nên m không thể bằng 1 và m + 3 không thể bằng 6).\n\nb) Điều kiện để A ∩ B = ∅:\nHai tập hợp rời nhau khi đoạn A nằm hẳn về phía bên trái B hoặc hẳn về phía bên phải B:\n• Trường hợp 1: A nằm bên trái B:\nm + 3 ≤ 1 ⇔ m ≤ -2.\n(Tại 1 là ngoặc tròn của B nên khi m + 3 = 1 thì hai tập vẫn không có phần tử chung).\n\n• Trường hợp 2: A nằm bên phải B:\nm ≥ 6.\n(Tại 6 là ngoặc tròn của B nên khi m = 6 thì hai tập vẫn không có phần tử chung).\n\nKết luận: A ∩ B = ∅ khi và chỉ khi m ≤ -2 hoặc m ≥ 6.",
    },
  ],
};
