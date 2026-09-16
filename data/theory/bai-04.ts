import type { LessonTheory } from "@/lib/types";

const bai04: LessonTheory = {
  intro: "Hệ bất phương trình bậc nhất hai ẩn giúp mô hình hóa các bài toán tối ưu thực tế. Miền nghiệm là giao của các nửa mặt phẳng, tạo thành miền đa giác lồi — nền tảng của quy hoạch tuyến tính.",
  minutes: 15,
  sections: [
    {
      id: "mien-nghiem-he",
      emoji: "📊",
      heading: "1. Miền nghiệm của hệ bất phương trình",
      blocks: [
        {
          kind: "mathBox",
          title: "Phương pháp",
          formula: "Bước 1: Biểu diễn miền nghiệm từng BPT\\nBước 2: Lấy giao (phần chung) tất cả các miền\\nKết quả: Một miền đa giác lồi (hoặc rỗng)",
          note: "Miền nghiệm chung có thể là tam giác, tứ giác, ngũ giác... hoặc miền không bị chặn.",
        },
        {
          kind: "check",
          q: "Hệ x ≥ 0, y ≥ 0, x + y ≤ 5 có miền nghiệm là:",
          options: ["Tam giác OAB với A(5;0), B(0;5)","Nửa mặt phẳng","Toàn bộ mặt phẳng","Đoạn thẳng"],
          answer: 0,
          explain: "3 ràng buộc tạo tam giác vuông có 3 đỉnh O(0;0), A(5;0), B(0;5).",
        },
      ],
    },
    {
      id: "bai-toan-toi-uu",
      emoji: "🎯",
      heading: "2. Bài toán tìm GTLN, GTNN trên miền đa giác",
      blocks: [
        {
          kind: "steps",
          items: [
            { label: "Bước 1", title: "Xác định miền nghiệm D", text: "Vẽ miền đa giác lồi từ hệ bất phương trình." },
            { label: "Bước 2", title: "Tìm tọa độ các đỉnh", text: "Giải hệ phương trình từng cặp đường biên để tìm các đỉnh đa giác." },
            { label: "Bước 3", title: "Tính F tại mỗi đỉnh", text: "Thay tọa độ từng đỉnh vào F = ax + by. GTLN và GTNN của F đạt tại các đỉnh." },
          ],
        },
        {
          kind: "warn",
          title: "Định lí quan trọng",
          text: "Nếu F = ax + by đạt GTLN hoặc GTNN trên miền đa giác lồi D thì giá trị đó đạt tại ít nhất một đỉnh của D.",
        },
      ],
    },
  ],
  summary: [
    "Miền nghiệm của hệ BPT bậc nhất hai ẩn là giao các nửa mặt phẳng.",
    "Miền đa giác lồi có thể là tam giác, tứ giác hoặc ngũ giác.",
    "F = ax + by đạt GTLN, GTNN tại đỉnh của miền đa giác.",
    "Tìm tọa độ đỉnh bằng cách giải hệ hai đường biên.",
  ],
};

export default bai04;
