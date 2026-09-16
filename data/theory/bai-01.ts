import type { LessonTheory } from "@/lib/types";

const bai01: LessonTheory = {
  intro:
    "Mệnh đề là viên gạch nền móng đầu tiên của tư duy logic và toàn bộ lâu đài Toán học. Nắm vững bản chất mệnh đề, các phép toán logic và kí hiệu ∀, ∃ giúp em lập luận chặt chẽ và không bao giờ bị 'mắc bẫy' trong các đề thi THPT.",
  minutes: 15,
  sections: [
    {
      id: "khai-niem",
      emoji: "⚖️",
      heading: "1. Định nghĩa Mệnh đề & Mệnh đề chứa biến",
      blocks: [
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "✅",
              title: "Mệnh đề logic",
              text: "Là một câu khẳng định có tính ĐÚNG hoặc SAI dứt khoát. Không thể vừa đúng vừa sai.",
            },
            {
              emoji: "❌",
              title: "Không phải mệnh đề",
              text: "Các câu nghi vấn (?), câu cầu khiến, câu cảm thán (!) hoặc câu bộc lộ cảm xúc chủ quan.",
            },
            {
              emoji: "🔤",
              title: "Mệnh đề chứa biến P(x)",
              text: "Khẳng định chứa biến số. Chỉ trở thành mệnh đề có tính đúng/sai khi thay biến bằng giá trị cụ thể.",
            },
          ],
        },
        {
          kind: "mathBox",
          title: "Ví dụ minh họa tính chân trị",
          formula: "P: '17 là số nguyên tố' (Đúng) | Q: '2 + 3 = 6' (Sai) | R(n): 'n chia hết cho 3'",
          note: "R(n) là mệnh đề chứa biến. Với n = 6 thì R(6) ĐÚNG; với n = 7 thì R(7) SAI.",
        },
        {
          kind: "check",
          q: "Trong các câu sau, câu nào là một mệnh đề toán học?",
          options: [
            "Hôm nay trời đẹp quá!",
            "Bạn có thích học môn Toán không?",
            "Số 2026 là số chẵn.",
            "Hãy chú ý nghe thầy cô giảng bài!",
          ],
          answer: 2,
          explain:
            "'Số 2026 là số chẵn' là một câu khẳng định có thể xác định rõ tính đúng sai (cụ thể là ĐÚNG). Các câu còn lại là cảm thán, câu hỏi hoặc câu mệnh lệnh.",
        },
      ],
    },
    {
      id: "phu-dinh",
      emoji: "🔄",
      heading: "2. Mệnh đề phủ định (P̄)",
      blocks: [
        {
          kind: "text",
          text: "Để phủ định một mệnh đề P, ta thêm hoặc bớt từ 'không' (hoặc 'không phải') trước vị ngữ của P. Kí hiệu mệnh đề phủ định là P̄.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔵",
            title: "Mệnh đề gốc P",
            items: [
              "P nhận giá trị Đúng (True)",
              "P nhận giá trị Sai (False)",
              "Ví dụ: 'Tam giác đều có 3 góc 60°' (Đúng)",
            ],
          },
          right: {
            emoji: "🔴",
            title: "Mệnh đề phủ định P̄",
            items: [
              "P̄ lập tức nhận giá trị Sai (False)",
              "P̄ lập tức nhận giá trị Đúng (True)",
              "Phủ định: 'Tam giác đều không có 3 góc 60°' (Sai)",
            ],
          },
        },
        {
          kind: "figure",
          diagram: "truth_table_negation",
          caption: "Bảng chân trị của phép phủ định logic: P và P̄ luôn trái ngược giá trị.",
        },
      ],
    },
    {
      id: "keo-theo-va-dao",
      emoji: "➡️",
      heading: "3. Mệnh đề kéo theo (P ⇒ Q) & Điều kiện Cần - Đủ",
      blocks: [
        {
          kind: "mathBox",
          title: "Quy tắc then chốt của mệnh đề kéo theo P ⇒ Q",
          formula: "P ⇒ Q chỉ SAI khi và chỉ khi: P Đúng mà Q lại Sai!",
          note: "Nếu giả thiết P Sai, thì bất kể kết luận Q thế nào, mệnh đề P ⇒ Q luôn luôn ĐÚNG theo quy ước logic.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Xác định Giả thiết (P) và Kết luận (Q)",
              text: "Trong cấu trúc 'Nếu P thì Q', mệnh đề P đứng sau 'Nếu', mệnh đề Q đứng sau 'thì'.",
            },
            {
              label: "Bước 2",
              title: "Phát biểu dưới dạng Điều kiện Đủ",
              text: "'P là điều kiện đủ để có Q'. (Có P là ĐỦ đảm bảo Q xảy ra).",
            },
            {
              label: "Bước 3",
              title: "Phát biểu dưới dạng Điều kiện Cần",
              text: "'Q là điều kiện cần để có P'. (Bắt buộc phải CẦN có Q thì mới có P).",
            },
            {
              label: "Bước 4",
              title: "Thiết lập Mệnh đề đảo Q ⇒ P",
              text: "Hoán đổi vị trí của P và Q. Lưu ý: Mệnh đề gốc đúng chưa chắc mệnh đề đảo đã đúng!",
            },
          ],
        },
        {
          kind: "warn",
          title: "Bẫy thường gặp giữa Cần và Đủ",
          text: "Ghi nhớ thần chú: 'ĐẦU ĐỦ - ĐUÔI CẦN'. Trong mệnh đề P ⇒ Q: Đầu mũi tên (P) là Điều kiện ĐỦ, Đuôi/đích đến (Q) là Điều kiện CẦN.",
        },
      ],
    },
    {
      id: "tuong-duong",
      emoji: "↔️",
      heading: "4. Mệnh đề tương đương (P ⇔ Q)",
      blocks: [
        {
          kind: "text",
          text: "Mệnh đề 'P nếu và chỉ nếu Q' (hoặc 'P khi và chỉ khi Q') được gọi là mệnh đề tương đương, kí hiệu là P ⇔ Q. Nó thực chất là sự kết hợp của cả hai chiều: (P ⇒ Q) và (Q ⇒ P).",
        },
        {
          kind: "mathBox",
          title: "Chân trị tương đương",
          formula: "P ⇔ Q Đúng ⟺ P và Q có cùng chân trị (cùng Đ hoặc cùng S)",
          note: "Khi P ⇔ Q đúng, ta nói P là điều kiện cần và đủ để có Q.",
        },
        {
          kind: "example",
          title: "Ví dụ định lí tương đương",
          text: "P: 'Tam giác ABC có hai góc bằng 60°' | Q: 'Tam giác ABC là tam giác đều'.",
          solution: "Vì cả hai chiều P ⇒ Q và Q ⇒ P đều đúng, nên ta có định lí: 'Tam giác ABC có hai góc bằng 60° khi và chỉ khi tam giác ABC là tam giác đều'.",
        },
      ],
    },
    {
      id: "ky-hieu-voi-moi-ton-tai",
      emoji: "🌐",
      heading: "5. Kí hiệu Với mọi (∀) & Tồn tại (∃)",
      blocks: [
        {
          kind: "cards",
          tone: "gold",
          items: [
            {
              emoji: "∀",
              title: "Kí hiệu Với mọi (For all)",
              text: "∀x ∈ X, P(x): Khẳng định đúng với TẤT CẢ các phần tử trong tập X. Chỉ cần 1 phản ví dụ là mệnh đề sai ngay!",
            },
            {
              emoji: "∃",
              title: "Kí hiệu Tồn tại (There exists)",
              text: "∃x ∈ X, P(x): Có ÍT NHẤT MỘT phần tử trong X thỏa mãn tính chất P(x). Tìm được 1 phần tử là chứng minh xong!",
            },
          ],
        },
        {
          kind: "mathBox",
          title: "Quy tắc vàng phủ định mệnh đề định lượng",
          formula: "Phủ định của [ ∀x ∈ X, P(x) ]  lập tức thành  [ ∃x ∈ X, P̄(x) ]\nPhủ định của [ ∃x ∈ X, P(x) ]  lập tức thành  [ ∀x ∈ X, P̄(x) ]",
          note: "Dấu 'bằng' phủ định thành 'khác'; 'lớn hơn hoặc bằng' (≥) phủ định thành 'nhỏ hơn' (<).",
        },
        {
          kind: "check",
          q: "Phủ định của mệnh đề: '∀x ∈ ℝ, x² - x + 7 > 0' là:",
          options: [
            "∃x ∈ ℝ, x² - x + 7 ≤ 0",
            "∀x ∈ ℝ, x² - x + 7 ≤ 0",
            "∃x ∈ ℝ, x² - x + 7 < 0",
            "∀x ∈ ℝ, x² - x + 7 < 0",
          ],
          answer: 0,
          explain:
            "Kí hiệu ∀ chuyển thành ∃, và dấu '>' phủ định thành '≤'. Vậy đáp án chính xác là: ∃x ∈ ℝ, x² - x + 7 ≤ 0.",
        },
      ],
    },
  ],
  summary: [
    "Mệnh đề là câu khẳng định đúng hoặc sai dứt khoát, không thể vừa đúng vừa sai.",
    "P và P̄ luôn có giá trị chân trị đối nghịch nhau (một cái đúng thì cái kia phải sai).",
    "Mệnh đề kéo theo P ⇒ Q chỉ sai khi 'P Đúng mà Q Sai'. Quy tắc nhớ: Đầu ĐỦ (P), Đuôi CẦN (Q).",
    "Mệnh đề tương đương P ⇔ Q đúng khi cả P và Q có cùng chân trị.",
    "Quy tắc phủ định lượng từ: Phủ định của ∀ là ∃ (kèm phủ định tính chất); Phủ định của ∃ là ∀ (kèm phủ định tính chất).",
  ],
};

export default bai01;
