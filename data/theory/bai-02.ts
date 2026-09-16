import type { LessonTheory } from "@/lib/types";

const bai02: LessonTheory = {
  intro:
    "Tập hợp là ngôn ngữ cơ bản nhất của toán học hiện đại. Hiểu sâu các khái niệm tập con, các tập số thực và thành thạo các phép toán giao, hợp, hiệu, phần bù là chìa khóa để giải quyết mọi bài toán về hàm số, phương trình và bất phương trình trong suốt cấp THPT.",
  minutes: 15,
  sections: [
    {
      id: "khai-niem-tap-hop",
      emoji: "📦",
      heading: "1. Khái niệm Tập hợp & Tập rỗng (∅)",
      blocks: [
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🎯",
              title: "Tập hợp & Phần tử",
              text: "Tập hợp gồm các đối tượng cụ thể gọi là phần tử. Kí hiệu: a ∈ S (a thuộc S), b ∉ S (b không thuộc S). Số phần tử kí hiệu là n(S).",
            },
            {
              emoji: "📝",
              title: "2 Cách mô tả tập hợp",
              text: "Cách 1: Liệt kê các phần tử: A = {1; 2; 3; 4}.\nCách 2: Chỉ ra tính chất đặc trưng: A = {x ∈ ℕ | x < 5}.",
            },
            {
              emoji: "⭕",
              title: "Tập hợp rỗng (∅)",
              text: "Là tập hợp không chứa phần tử nào, kí hiệu ∅. Ví dụ tập nghiệm thực của x² + 1 = 0 là tập rỗng.",
            },
          ],
        },
        {
          kind: "mathBox",
          title: "Bẫy thường gặp về tập rỗng ∅",
          formula: "Tập {0} KHÔNG PHẢI là tập rỗng! (Tập {0} có 1 phần tử là số 0: n({0}) = 1).\nTập {∅} cũng KHÔNG PHẢI là tập rỗng! (Nó chứa 1 phần tử là kí hiệu ∅).",
          note: "Chỉ có ∅ (viết không có dấu ngoặc nhọn) mới là tập hợp rỗng.",
        },
        {
          kind: "check",
          q: "Trong các tập hợp sau, tập hợp nào là tập hợp rỗng?",
          options: [
            "A = {x ∈ ℝ | x² - 4 = 0}",
            "B = {x ∈ ℤ | x² - 2 = 0}",
            "C = {0}",
            "D = {x ∈ ℕ | x ≤ 0}",
          ],
          answer: 1,
          explain:
            "Phương trình x² - 2 = 0 có hai nghiệm x = ±√2. Vì ±√2 không phải là số nguyên (không thuộc ℤ), nên tập B không có phần tử nào: B = ∅. Trong khi đó: A = {-2; 2}, C = {0}, D = {0}.",
        },
      ],
    },
    {
      id: "tap-con-va-bang-nhau",
      emoji: "🧩",
      heading: "2. Tập hợp con & Hai tập hợp bằng nhau",
      blocks: [
        {
          kind: "mathBox",
          title: "Định nghĩa Tập hợp con (⊂)",
          formula: "T ⊂ S ⟺ (∀x, x ∈ T ⇒ x ∈ S)",
          note: "Đọc là 'T là tập con của S' hoặc 'T chứa trong S'. Quy ước: Tập rỗng là con của mọi tập hợp (∅ ⊂ S với mọi S).",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Tính chất 1",
              title: "Tính chất phản xạ & bắc cầu",
              text: "Mọi tập hợp đều là tập con của chính nó: S ⊂ S. Nếu A ⊂ B và B ⊂ C thì A ⊂ C.",
            },
            {
              label: "Tính chất 2",
              title: "Hai tập hợp bằng nhau (S = T)",
              text: "S = T ⟺ (S ⊂ T và T ⊂ S). Nghĩa là mọi phần tử của S đều thuộc T và ngược lại.",
            },
            {
              label: "Công thức",
              title: "Số tập con của tập hợp hữu hạn",
              text: "Một tập hợp gồm n phần tử sẽ có đúng 2ⁿ tập hợp con (tính cả tập rỗng ∅ và chính nó).",
            },
          ],
        },
        {
          kind: "example",
          title: "Ví dụ đếm số tập hợp con",
          text: "Tìm tất cả các tập hợp con của tập hợp S = {a; b}.",
          solution:
            "Số phần tử n = 2 ⇒ Số tập con là 2² = 4 tập con, gồm:\n1. Tập 0 phần tử: ∅\n2. Các tập 1 phần tử: {a}, {b}\n3. Tập 2 phần tử: {a; b} (chính là S).",
        },
        {
          kind: "figure",
          diagram: "venn_inclusion",
          caption: "Minh họa tập con T ⊂ S: Mọi phần tử của T đều nằm trọn vẹn bên trong miền của S.",
        },
      ],
    },
    {
      id: "tap-hop-so-va-truc-so",
      emoji: "📏",
      heading: "3. Các tập hợp số & Tập con của ℝ trên trục số",
      blocks: [
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🌲",
              title: "Hệ thống tập số",
              text: "ℕ (Số tự nhiên) ⊂ ℤ (Số nguyên) ⊂ ℚ (Số hữu tỉ) ⊂ ℝ (Số thực).",
            },
            {
              emoji: "🔲",
              title: "Đoạn [a; b]",
              text: "[a; b] = {x ∈ ℝ | a ≤ x ≤ b}. Lấy cả hai đầu mút a và b (dùng ngoặc vuông).",
            },
            {
              emoji: "⚪",
              title: "Khoảng (a; b)",
              text: "(a; b) = {x ∈ ℝ | a < x < b}. KHÔNG lấy hai đầu mút a và b (dùng ngoặc tròn).",
            },
            {
              emoji: "🌗",
              title: "Nửa khoảng [a; b) hoặc (a; b]",
              text: "Lấy một đầu mút ngoặc vuông và bỏ đầu mút ngoặc tròn. Vô cực luôn dùng ngoặc tròn: (-∞; b], (a; +∞).",
            },
          ],
        },
        {
          kind: "warn",
          title: "Lưu ý sống còn khi biểu diễn trên trục số",
          text: "Tại đầu mút ngoặc vuông '[ ]', phần tử ĐƯỢC THUỘC tập hợp. Tại đầu mút ngoặc tròn '( )', phần tử KHÔNG THUỘC tập hợp. Phần không thuộc tập hợp phải gạch chéo bỏ đi.",
        },
        {
          kind: "figure",
          diagram: "number_line_intervals",
          caption: "Minh họa khoảng (a; b), đoạn [a; b] và nửa khoảng [a; b) trên trục số thực ℝ.",
        },
        {
          kind: "check",
          q: "Tập hợp A = {x ∈ ℝ | -3 ≤ x < 5} được viết dưới dạng kí hiệu khoảng, đoạn là:",
          options: ["(-3; 5)", "[-3; 5]", "[-3; 5)", "(-3; 5]"],
          answer: 2,
          explain:
            "Vì x ≥ -3 có dấu bằng nên tại đầu -3 dùng ngoặc vuông '['; x < 5 không có dấu bằng nên tại đầu 5 dùng ngoặc tròn ')'. Vậy A = [-3; 5).",
        },
      ],
    },
    {
      id: "phep-toan-tap-hop",
      emoji: "⚡",
      heading: "4. Các phép toán trên tập hợp (Giao, Hợp, Hiệu, Phần bù)",
      blocks: [
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "∩",
              title: "Giao của hai tập hợp (A ∩ B)",
              text: "A ∩ B = {x | x ∈ A và x ∈ B}. Lấy các phần tử CHUNG của cả hai tập hợp.",
            },
            {
              emoji: "∪",
              title: "Hợp của hai tập hợp (A ∪ B)",
              text: "A ∪ B = {x | x ∈ A hoặc x ∈ B}. Gộp TẤT CẢ phần tử của cả hai tập hợp lại (không viết lặp lại).",
            },
            {
              emoji: "∖",
              title: "Hiệu của hai tập hợp (A ∖ B)",
              text: "A ∖ B = {x | x ∈ A và x ∉ B}. Lấy phần tử thuộc A nhưng BỊ LOẠI BỎ nếu có mặt trong B.",
            },
            {
              emoji: "🛡️",
              title: "Phần bù (C_A B)",
              text: "Khi B ⊂ A, hiệu A ∖ B được gọi là phần bù của B trong A, kí hiệu C_A B.",
            },
          ],
        },
        {
          kind: "mathBox",
          title: "Ví dụ trực quan về phép toán tập hợp",
          formula: "Cho A = {1; 2; 3; 4} và B = {3; 4; 5; 6}.\n• Giao: A ∩ B = {3; 4}\n• Hợp: A ∪ B = {1; 2; 3; 4; 5; 6}\n• Hiệu: A ∖ B = {1; 2}  |  B ∖ A = {5; 6}",
          note: "Hiệu A ∖ B khác hoàn toàn với B ∖ A!",
        },
        {
          kind: "figure",
          diagram: "venn_operations",
          caption: "Minh họa 4 phép toán cơ bản bằng biểu đồ Ven: Giao, Hợp, Hiệu và Phần bù.",
        },
        {
          kind: "check",
          q: "Cho hai tập hợp A = [-2; 3) và B = [1; 5]. Tập hợp A ∩ B là:",
          options: ["[-2; 5]", "[1; 3)", "[1; 3]", "(-2; 1]"],
          answer: 1,
          explain:
            "Giao là phần chung của cả hai tập hợp trên trục số. Các số thực vừa thuộc [-2; 3) vừa thuộc [1; 5] chính là nửa khoảng [1; 3).",
        },
      ],
    },
    {
      id: "bieu-do-ven-va-ung-dung",
      emoji: "📊",
      heading: "5. Biểu đồ Ven & Bài toán thực tế đếm số phần tử",
      blocks: [
        {
          kind: "mathBox",
          title: "Công thức cộng số phần tử kinh điển",
          formula: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
          note: "Phải trừ đi phần giao n(A ∩ B) vì phần này đã bị tính lặp lại hai lần (một lần trong n(A) và một lần trong n(B)).",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Vẽ biểu đồ Ven gồm 2 hình tròn giao nhau",
              text: "Vòng tròn trái đại diện cho tập A, vòng tròn phải đại diện cho tập B, phần giao nhau ở giữa là A ∩ B.",
            },
            {
              label: "Bước 2",
              title: "Điền số lượng vào phần giao (giữa) trước tiên",
              text: "Bắt đầu điền số lượng phần tử của n(A ∩ B) vào tâm giữa hai vòng tròn.",
            },
            {
              label: "Bước 3",
              title: "Tính các phần chỉ thuộc riêng từng tập",
              text: "Số phần tử chỉ thuộc A: n(A) - n(A ∩ B). Số phần tử chỉ thuộc B: n(B) - n(A ∩ B).",
            },
            {
              label: "Bước 4",
              title: "Cộng tổng để trả lời câu hỏi thực tế",
              text: "Cộng các miền rời rạc để tìm tổng số người tham gia hoặc số người không tham gia hoạt động nào.",
            },
          ],
        },
        {
          kind: "example",
          title: "Ví dụ bài toán lớp học",
          text: "Lớp 10A có 40 học sinh, trong đó có 25 bạn thích môn Toán, 20 bạn thích môn Văn, và 10 bạn thích cả hai môn Toán và Văn. Hỏi lớp 10A có bao nhiêu bạn không thích cả hai môn này?",
          solution:
            "• Số bạn thích ít nhất một môn: n(T ∪ V) = n(T) + n(V) - n(T ∩ V) = 25 + 20 - 10 = 35 bạn.\n• Số bạn không thích môn nào: 40 - 35 = 5 bạn.",
        },
      ],
    },
  ],
  summary: [
    "Tập hợp là nhóm các phần tử có tính chất xác định. Kí hiệu ∅ là tập rỗng (không có phần tử nào).",
    "T ⊂ S khi mọi phần tử của T đều thuộc S. Tập hợp có n phần tử thì có đúng 2ⁿ tập con.",
    "Hệ thống số: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Chú ý phân biệt ngoặc vuông [ ] (lấy đầu mút) và ngoặc tròn ( ) (không lấy đầu mút).",
    "Các phép toán: Giao ∩ (lấy chung), Hợp ∪ (lấy hết), Hiệu ∖ (lấy riêng A bỏ B), Phần bù C_A B (khi B ⊂ A).",
    "Công thức biểu đồ Ven: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) luôn điền phần giao ở giữa trước khi giải.",
  ],
};

export default bai02;
