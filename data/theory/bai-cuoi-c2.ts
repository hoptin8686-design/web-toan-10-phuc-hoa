import type { LessonTheory } from "@/lib/types";

const baiCuoiC2: LessonTheory = {
  intro: "Ôn tập tổng hợp Chương II giúp em củng cố kỹ năng biểu diễn miền nghiệm và giải bài toán quy hoạch tuyến tính trên miền đa giác.",
  minutes: 12,
  sections: [
    {
      id: "tom-tat",
      emoji: "📋",
      heading: "1. Tóm tắt kiến thức trọng tâm Chương II",
      blocks: [
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📐",
              title: "BPT bậc nhất hai ẩn",
              text: "ax + by ≤ c. Miền nghiệm là nửa mặt phẳng.",
            },
            {
              emoji: "📊",
              title: "Hệ BPT",
              text: "Giao các nửa mặt phẳng → miền đa giác lồi.",
            },
            {
              emoji: "🎯",
              title: "Tối ưu",
              text: "F = ax + by đạt cực trị tại đỉnh miền đa giác.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "BPT bậc nhất hai ẩn có miền nghiệm là nửa mặt phẳng.",
    "Hệ BPT tạo miền đa giác lồi.",
    "F đạt GTLN, GTNN tại đỉnh.",
  ],
};

export default baiCuoiC2;
