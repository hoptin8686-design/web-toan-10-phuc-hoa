import type { LessonTheory } from "@/lib/types";

const baiCuoiC3: LessonTheory = {
  intro: "Ôn tập tổng hợp Chương III: Hệ thức lượng trong tam giác, giá trị lượng giác, định lí côsin, sin và các công thức tính diện tích.",
  minutes: 12,
  sections: [
    {
      id: "tom-tat-c3",
      emoji: "🔺",
      heading: "Tóm tắt Chương III",
      blocks: [
        {"kind":"cards","tone":"coral","items":[{"emoji":"🔵","title":"GTLG","text":"sin, cos, tan, cot trên nửa đường tròn đơn vị. Góc bù: sin giữ, cos đổi dấu."},{"emoji":"📐","title":"Côsin","text":"a² = b² + c² − 2bc·cos A."},{"emoji":"🔺","title":"Sin","text":"a/sin A = b/sin B = c/sin C = 2R."}]},
      ],
    },
  ],
  summary: [
    "GTLG qua nửa đường tròn đơn vị.",
    "Định lí côsin tổng quát hóa Pythagore.",
    "Định lí sin liên hệ cạnh-góc-bán kính ngoại tiếp.",
  ],
};

export default baiCuoiC3;
