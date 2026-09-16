import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Cho hệ x ≥ 0, y ≥ 0, x + y ≤ 6, x + 2y ≤ 8. Xét tính Đúng / Sai:",
      statements: [
          { text: "Miền nghiệm là tứ giác.", answer: true, explain: "4 đỉnh: (0;0), (6;0), (4;2), (0;4). Đúng." },
          { text: "Điểm (3; 3) thuộc miền nghiệm.", answer: false, explain: "x+y=6≤6 ✓ nhưng x+2y=9>8 ✗. SAI." },
          { text: "F = x + y đạt GTLN bằng 6 trên miền nghiệm.", answer: true, explain: "F(6;0)=6, F(4;2)=6, F(0;4)=4. GTLN=6." },
          { text: "GTNN của F = x + y trên miền nghiệm bằng 0.", answer: true, explain: "GTNN tại O(0;0): F=0." },
      ],
    },
    {
      id: "tf-02",
      context: "Xét các khẳng định về bài toán tối ưu trên miền đa giác:",
      statements: [
          { text: "F = ax + by luôn đạt GTLN, GTNN tại đỉnh của miền đa giác lồi.", answer: true, explain: "Đây là định lí cơ bản của quy hoạch tuyến tính." },
          { text: "Miền nghiệm của hệ BPT bậc nhất hai ẩn luôn bị chặn.", answer: false, explain: "Có thể không bị chặn nếu thiếu ràng buộc. SAI." },
          { text: "Nếu miền nghiệm là tập rỗng thì F không có GTLN, GTNN.", answer: true, explain: "Không có điểm nào thỏa mãn nên F không xác định trên miền." },
          { text: "Có thể có nhiều đỉnh cho cùng giá trị GTLN của F.", answer: true, explain: "Khi đường F = const song song với một cạnh, GTLN đạt tại 2 đỉnh liên tiếp." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Tìm GTLN và GTNN của F = 2x + 3y trên miền D xác định bởi: x ≥ 0, y ≥ 0, x + y ≤ 6, x + 2y ≤ 8.",
      math: "F = 2x + 3y",
      answer: "Các đỉnh:\\n• O(0; 0): F = 0\\n• A(6; 0): F = 12\\n• Giao x+y=6 và x+2y=8: (4; 2): F = 14\\n• B(0; 4): F = 12\\n\\nGTLN = 14 tại (4; 2). GTNN = 0 tại O(0; 0).",
    },
    {
      id: "es-02",
      q: "Một cửa hàng bán hai loại bánh: Bánh A lãi 10k/cái, bánh B lãi 15k/cái. Mỗi ngày làm tối đa 100 cái, nguyên liệu đủ cho tối đa 60 bánh B. Hỏi cần sản xuất bao nhiêu cái mỗi loại để lãi lớn nhất?",
      math: "F = 10x + 15y",
      answer: "Ràng buộc: x ≥ 0, y ≥ 0, x + y ≤ 100, y ≤ 60.\\nĐỉnh: (0;0)→F=0, (100;0)→F=1000, (40;60)→F=1300, (0;60)→F=900.\\n\\nGTLN F = 1300 nghìn đồng khi sản xuất 40 bánh A và 60 bánh B.",
    },
  ],
};
