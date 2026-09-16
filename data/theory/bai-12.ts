import type { LessonTheory } from "@/lib/types";

const bai12: LessonTheory = {
  intro: "Các số đặc trưng đo xu thế trung tâm (trung bình, trung vị, mốt) giúp tóm tắt một tập dữ liệu bằng một giá trị đại diện.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Số đặc trưng đo xu thế trung tâm",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Số trung bình cộng","text":"Số trung bình cộng"},{"emoji":"📊","title":"Trung vị (Me)","text":"Trung vị (Me)"},{"emoji":"🔺","title":"Tứ phân vị (Q₁, Q₂, Q₃)","text":"Tứ phân vị (Q₁, Q₂, Q₃)"},{"emoji":"📏","title":"Mốt (Mo)","text":"Mốt (Mo)"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"x̄ = (x₁+x₂+...+xₙ)/n\\nTrung vị Me: giá trị giữa khi sắp xếp\\nMốt Mo: giá trị xuất hiện nhiều nhất","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "x̄ = (x₁+x₂+...+xₙ)/n",
    "Trung vị Me: giá trị giữa khi sắp xếp",
    "Mốt Mo: giá trị xuất hiện nhiều nhất",
  ],
};

export default bai12;
