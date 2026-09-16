import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Cho bất phương trình 2x - y ≤ 6 và đường biên d: 2x - y = 6. Xét tính Đúng / Sai:",
      statements: [
        { text: "Điểm O(0; 0) thuộc miền nghiệm.", answer: true, explain: "2(0) - 0 = 0 ≤ 6 (đúng). O thuộc miền nghiệm." },
        { text: "Điểm A(4; 1) thuộc miền nghiệm.", answer: false, explain: "2(4) - 1 = 7 > 6. Không thỏa mãn. SAI." },
        { text: "Đường biên d được vẽ bằng nét liền.", answer: true, explain: "Dấu '≤' có dấu bằng nên đường biên thuộc miền nghiệm → nét liền." },
        { text: "Miền nghiệm nằm phía trên đường d.", answer: true, explain: "Vì O(0;0) thỏa mãn và O nằm phía trên d (y > 2x - 6 tại x=0)." },
      ],
    },
    {
      id: "tf-02",
      context: "Xét các khẳng định sau về bất phương trình bậc nhất hai ẩn:",
      statements: [
        { text: "Miền nghiệm của bất phương trình bậc nhất hai ẩn luôn là một nửa mặt phẳng.", answer: true, explain: "Đúng, đường biên chia mặt phẳng thành 2 nửa, nghiệm là 1 trong 2 nửa." },
        { text: "Bất phương trình 0x + 0y < -1 có miền nghiệm là tập rỗng.", answer: true, explain: "0 < -1 luôn sai, không có cặp (x;y) nào thỏa mãn. Tập nghiệm = ∅." },
        { text: "Hai bất phương trình x + y ≤ 3 và -x - y ≥ -3 có cùng miền nghiệm.", answer: true, explain: "Nhân hai vế -x-y ≥ -3 với -1 (đổi dấu): x+y ≤ 3. Hoàn toàn tương đương." },
        { text: "Điểm nằm trên đường biên luôn thuộc miền nghiệm.", answer: false, explain: "Chỉ đúng khi dấu '≤' hoặc '≥'. Nếu dấu '<' hoặc '>' thì điểm trên biên không thuộc miền nghiệm." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Biểu diễn miền nghiệm của hệ bất phương trình:\nx + y ≤ 5\nx ≥ 0\ny ≥ 1",
      math: "x + y \\le 5,\\; x \\ge 0,\\; y \\ge 1",
      answer: "Bước 1: Vẽ đường x + y = 5 (nét liền), trục Oy (x = 0, nét liền), đường y = 1 (nét liền).\nBước 2: Miền x + y ≤ 5 chứa O → phía dưới đường. Miền x ≥ 0 → bên phải Oy. Miền y ≥ 1 → phía trên y = 1.\nBước 3: Giao 3 miền tạo thành hình tam giác có 3 đỉnh: (0; 1), (4; 1), (0; 5).",
    },
    {
      id: "es-02",
      q: "Xác định tất cả các giá trị nguyên dương của x và y thỏa mãn đồng thời: 2x + 3y ≤ 12 và x ≥ 1.",
      math: "2x + 3y \\le 12,\\; x \\ge 1",
      answer: "Với x = 1: 3y ≤ 10 → y ≤ 3.33 → y ∈ {1; 2; 3}: 3 cặp.\nVới x = 2: 3y ≤ 8 → y ≤ 2.67 → y ∈ {1; 2}: 2 cặp.\nVới x = 3: 3y ≤ 6 → y ≤ 2 → y ∈ {1; 2}: 2 cặp.\nVới x = 4: 3y ≤ 4 → y ≤ 1.33 → y ∈ {1}: 1 cặp.\nVới x = 5: 3y ≤ 2 → y ≤ 0.67 → không có y nguyên dương.\nTổng: 3 + 2 + 2 + 1 = 8 cặp nghiệm nguyên dương.",
    },
  ],
};
