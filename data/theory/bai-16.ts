import type { LessonTheory } from "@/lib/types";

const bai16: LessonTheory = {
  intro: "Hàm số bậc hai y = ax² + bx + c (a ≠ 0) có đồ thị là parabol — đường cong xuất hiện khắp nơi trong tự nhiên và kỹ thuật.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Hàm số bậc hai",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Đỉnh I(-b/2a; -Δ/4a)","text":"Đỉnh I(-b/2a; -Δ/4a)"},{"emoji":"📊","title":"Trục đối xứng x = -b/2a","text":"Trục đối xứng x = -b/2a"},{"emoji":"🔺","title":"Bảng biến thiên","text":"Bảng biến thiên"},{"emoji":"📏","title":"Đồ thị parabol","text":"Đồ thị parabol"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"Đỉnh I(-b/2a; -Δ/4a)\\na > 0: bề lõm quay lên, GTNN = -Δ/4a\\na < 0: bề lõm quay xuống, GTLN = -Δ/4a","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "Đỉnh I(-b/2a; -Δ/4a)",
    "a > 0: bề lõm quay lên, GTNN = -Δ/4a",
    "a < 0: bề lõm quay xuống, GTLN = -Δ/4a",
  ],
};

export default bai16;
