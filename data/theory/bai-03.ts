import type { LessonTheory } from "@/lib/types";

const bai03: LessonTheory = {
  intro:
    "Bất phương trình bậc nhất hai ẩn mở rộng thế giới nghiệm từ một điểm sang cả một miền trên mặt phẳng. Nắm vững cách xác định nửa mặt phẳng nghiệm là chìa khóa giải các bài toán tối ưu thực tế.",
  minutes: 15,
  sections: [
    {
      id: "khai-niem-bpt",
      emoji: "📐",
      heading: "1. Bất phương trình bậc nhất hai ẩn",
      blocks: [
        {
          kind: "mathBox",
          title: "Dạng tổng quát",
          formula: "ax + by ≤ c  (hoặc ax + by < c, ax + by ≥ c, ax + by > c)\nvới a, b không đồng thời bằng 0",
          note: "Nghiệm là cặp (x₀; y₀) thỏa mãn bất phương trình. Tập nghiệm là một nửa mặt phẳng.",
        },
        {
          kind: "steps",
          items: [
            { label: "Bước 1", title: "Vẽ đường thẳng d: ax + by = c", text: "Đường thẳng biên chia mặt phẳng thành hai nửa mặt phẳng." },
            { label: "Bước 2", title: "Chọn điểm thử (thường là O(0; 0))", text: "Thay tọa độ điểm thử vào bất phương trình để kiểm tra." },
            { label: "Bước 3", title: "Xác định nửa mặt phẳng nghiệm", text: "Nếu điểm thử thỏa mãn → tô nửa mặt phẳng chứa điểm đó. Ngược lại tô nửa còn lại." },
          ],
        },
        {
          kind: "warn",
          title: "Lưu ý đường biên",
          text: "Dấu '≤' hoặc '≥' → vẽ đường nét liền (lấy biên). Dấu '<' hoặc '>' → vẽ đường nét đứt (không lấy biên).",
        },
        {
          kind: "check",
          q: "Miền nghiệm của bất phương trình x + y ≤ 3 chứa điểm nào sau đây?",
          options: ["(0; 0)", "(2; 2)", "(3; 1)", "(4; 0)"],
          answer: 0,
          explain: "Thay (0; 0): 0 + 0 = 0 ≤ 3 (đúng). Thay (2; 2): 4 > 3 (sai). Thay (3; 1): 4 > 3 (sai). Thay (4; 0): 4 > 3 (sai).",
        },
      ],
    },
    {
      id: "bieu-dien-mien-nghiem",
      emoji: "🎨",
      heading: "2. Biểu diễn miền nghiệm trên mặt phẳng tọa độ",
      blocks: [
        {
          kind: "example",
          title: "Ví dụ biểu diễn miền nghiệm",
          text: "Biểu diễn miền nghiệm của bất phương trình 2x - y < 4.",
          solution: "Bước 1: Vẽ d: 2x - y = 4 (nét đứt vì dấu '<').\nBước 2: Thử O(0; 0): 2(0) - 0 = 0 < 4 (đúng).\nBước 3: Miền nghiệm là nửa mặt phẳng chứa O, không bao gồm đường d.",
        },
      ],
    },
  ],
  summary: [
    "Bất phương trình bậc nhất hai ẩn có dạng ax + by ≤ c (hoặc <, ≥, >).",
    "Tập nghiệm là một nửa mặt phẳng bờ là đường thẳng ax + by = c.",
    "Chọn điểm thử (thường O) để xác định nửa mặt phẳng nghiệm.",
    "Dấu '≤', '≥' → đường nét liền. Dấu '<', '>' → đường nét đứt.",
  ],
};

export default bai03;
