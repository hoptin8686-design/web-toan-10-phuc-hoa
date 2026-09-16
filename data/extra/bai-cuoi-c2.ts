import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Ôn tập tổng hợp Chương II:",
      statements: [
          { text: "Giao của hai nửa mặt phẳng luôn là một miền đa giác.", answer: false, explain: "Có thể là nửa mặt phẳng, dải, hoặc tập rỗng. SAI." },
          { text: "Nếu F = ax + by đạt GTLN tại 2 đỉnh liên tiếp thì đạt GTLN tại mọi điểm trên cạnh nối.", answer: true, explain: "Đúng, do tính chất tuyến tính." },
          { text: "Miền nghiệm hệ BPT bậc nhất hai ẩn luôn là tập lồi.", answer: true, explain: "Giao của các tập lồi (nửa mặt phẳng) là tập lồi. ĐÚNG." },
          { text: "Bài toán tối ưu luôn có nghiệm duy nhất.", answer: false, explain: "Có thể có vô số nghiệm (trên một cạnh) hoặc không có nghiệm (miền rỗng/không chặn). SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Tìm GTLN và GTNN của F = 3x + 2y trên miền D: x ≥ 0, y ≥ 0, x + y ≤ 5, 2x + y ≤ 8.",
      math: "F = 3x + 2y",
      answer: "Đỉnh: O(0;0)→F=0, A(4;0)→F=12, giao x+y=5 và 2x+y=8: (3;2)→F=13, B(0;5)→F=10.\\nGTLN = 13 tại (3;2). GTNN = 0 tại O.",
    },
    {
      id: "es-02",
      q: "Một xưởng sản xuất ghế loại A (lãi 200k) và ghế loại B (lãi 300k). Mỗi tuần: tối đa 50 ghế, ghế B cần gấp đôi thời gian ghế A, tổng thời gian ≤ 80 (đơn vị ghế A). Tìm số ghế mỗi loại để lãi cao nhất.",
      math: "F = 200x + 300y",
      answer: "Ràng buộc: x+y ≤ 50, x+2y ≤ 80, x ≥ 0, y ≥ 0.\\nĐỉnh: (0;0), (50;0), (20;30), (0;40).\\nF(50;0)=10000, F(20;30)=13000, F(0;40)=12000.\\nGTLN = 13000k khi sản xuất 20 ghế A và 30 ghế B.",
    },
  ],
};
