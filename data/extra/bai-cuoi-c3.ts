import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Ôn tập Chương III:",
      statements: [
          { text: "sin 90° = 1.", answer: true, explain: "Đúng." },
          { text: "cos 180° = 1.", answer: false, explain: "cos 180° = -1. SAI." },
          { text: "Tam giác có 3 cạnh 5, 12, 13 là tam giác vuông.", answer: true, explain: "5²+12²=13². ĐÚNG." },
          { text: "Diện tích tam giác đều cạnh a bằng a²√3/2.", answer: false, explain: "S = a²√3/4. SAI." },
      ],
    },
  ],
  essay: [
    {
      id: "es-01",
      q: "Cho tam giác ABC có b=10, c=6, A=120°. Tính a và diện tích S.",
      math: "b=10, c=6, A=120°",
      answer: "a² = 100+36-2(10)(6)cos120° = 136+60 = 196. a=14.\\nS = (1/2)(10)(6)sin120° = 30(√3/2) = 15√3.",
    },
    {
      id: "es-02",
      q: "Hai tòa nhà cách nhau khoảng cách cần tính. Từ điểm C nhìn hai chân tòa nhà A, B dưới góc 50°, CA=100m, CB=80m. Tính AB.",
      math: "CA=100, CB=80, C=50°",
      answer: "AB² = 100²+80²-2(100)(80)cos50° = 10000+6400-16000(0.643) = 16400-10288 = 6112.\\nAB ≈ 78.2 m.",
    },
  ],
};
