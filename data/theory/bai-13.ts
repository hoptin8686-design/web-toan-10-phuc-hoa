import type { LessonTheory } from "@/lib/types";

const bai13: LessonTheory = {
  intro: "Độ phân tán cho biết dữ liệu tập trung hay phân tán. Phương sai và độ lệch chuẩn là hai thước đo quan trọng nhất.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc",
      emoji: "📚",
      heading: "Kiến thức trọng tâm: Số đặc trưng đo độ phân tán",
      blocks: [
        {"kind":"cards","tone":"sea","items":[{"emoji":"📐","title":"Khoảng biến thiên R = xmax - xmin","text":"Khoảng biến thiên R = xmax - xmin"},{"emoji":"📊","title":"Khoảng tứ phân vị ΔQ = Q₃ - Q₁","text":"Khoảng tứ phân vị ΔQ = Q₃ - Q₁"},{"emoji":"🔺","title":"Phương sai S²","text":"Phương sai S²"},{"emoji":"📏","title":"Độ lệch chuẩn S","text":"Độ lệch chuẩn S"}]},
        {"kind":"mathBox","title":"Công thức cốt lõi","formula":"R = xmax - xmin\\nS² = Σ(xᵢ - x̄)²/n\\nS = √S²\\nS nhỏ → dữ liệu tập trung, S lớn → phân tán","note":"Ghi nhớ và áp dụng vào bài tập."},
      ],
    },
  ],
  summary: [
    "R = xmax - xmin",
    "S² = Σ(xᵢ - x̄)²/n",
    "S = √S²",
    "S nhỏ → dữ liệu tập trung, S lớn → phân tán",
  ],
};

export default bai13;
