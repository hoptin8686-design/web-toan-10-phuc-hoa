import type { LessonTheory } from "@/lib/types";

const baiCuoiC5: LessonTheory = {
  intro: "Ôn tập thống kê mô tả: số gần đúng, xu thế trung tâm và độ phân tán.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Bài tập cuối chương V",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Sai số","text":"Sai số"},{"emoji":"📊","title":"Trung bình, trung vị, mốt","text":"Trung bình, trung vị, mốt"},{"emoji":"🔺","title":"Phương sai, độ lệch chuẩn","text":"Phương sai, độ lệch chuẩn"},{"emoji":"📏","title":"Phân tích dữ liệu thực tế","text":"Phân tích dữ liệu thực tế"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"x̄, Me, Mo, S², S\\nQuy tròn số\\nSo sánh độ phân tán hai mẫu","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "x̄, Me, Mo, S², S",
    "Quy tròn số",
    "So sánh độ phân tán hai mẫu",
  ],
};

export default baiCuoiC5;
