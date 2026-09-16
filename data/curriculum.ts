import type { Topic, Lesson, LessonCounts } from "@/lib/types";

export const CURRICULUM: Topic[] = [
  {
    id: "chuong-01",
    name: "Chương I: Mệnh đề và tập hợp",
    emoji: "📐",
    volume: 1,
    lessons: [
      {
        id: "bai-01",
        title: "Bài 1. Mệnh đề",
        available: true,
        bookPages: "Trang 5 - 11",
        highlight: "Mệnh đề logic, phủ định, kéo theo, tương đương, kí hiệu ∀ và ∃",
      },
      {
        id: "bai-02",
        title: "Bài 2. Tập hợp và các phép toán trên tập hợp",
        available: true,
        bookPages: "Trang 12 - 19",
        highlight: "Tập hợp con, giao, hợp, hiệu, phần bù và biểu đồ Ven",
      },
      {
        id: "bai-cuoi-c1",
        title: "Bài tập cuối chương I",
        available: false,
        bookPages: "Trang 20 - 21",
        highlight: "Ôn tập tổng hợp mệnh đề và tập hợp",
      },
    ],
  },
  {
    id: "chuong-02",
    name: "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
    emoji: "📊",
    volume: 1,
    lessons: [
      {
        id: "bai-03",
        title: "Bài 3. Bất phương trình bậc nhất hai ẩn",
        available: false,
        bookPages: "Trang 22 - 27",
        highlight: "Nghiệm và biểu diễn miền nghiệm trên mặt phẳng toạ độ",
      },
      {
        id: "bai-04",
        title: "Bài 4. Hệ bất phương trình bậc nhất hai ẩn",
        available: false,
        bookPages: "Trang 28 - 34",
        highlight: "Miền nghiệm đa giác và bài toán quy hoạch tối ưu thực tế",
      },
      {
        id: "bai-cuoi-c2",
        title: "Bài tập cuối chương II",
        available: false,
        bookPages: "Trang 35 - 36",
        highlight: "Tổng kết bài toán tìm cực trị trên miền đa giác",
      },
    ],
  },
  {
    id: "chuong-03",
    name: "Chương III: Hệ thức lượng trong tam giác",
    emoji: "🔺",
    volume: 1,
    lessons: [
      {
        id: "bai-05",
        title: "Bài 5. Giá trị lượng giác của một góc từ 0° đến 180°",
        available: false,
        bookPages: "Trang 37 - 42",
        highlight: "Nửa đường tròn đơn vị, sin, cos, tan, cot của góc tù và góc nhọn",
      },
      {
        id: "bai-06",
        title: "Bài 6. Hệ thức lượng trong tam giác",
        available: false,
        bookPages: "Trang 43 - 51",
        highlight: "Định lí côsin, định lí sin, các công thức tính diện tích tam giác",
      },
      {
        id: "bai-cuoi-c3",
        title: "Bài tập cuối chương III",
        available: false,
        bookPages: "Trang 52 - 53",
        highlight: "Giải tam giác và ứng dụng đo đạc thực địa",
      },
    ],
  },
  {
    id: "chuong-04",
    name: "Chương IV: Vectơ",
    emoji: "➡️",
    volume: 1,
    lessons: [
      {
        id: "bai-07",
        title: "Bài 7. Các khái niệm mở đầu",
        available: false,
        bookPages: "Trang 54 - 58",
        highlight: "Phương, hướng, độ dài, vectơ-không, hai vectơ bằng nhau",
      },
      {
        id: "bai-08",
        title: "Bài 8. Tổng và hiệu của hai vectơ",
        available: false,
        bookPages: "Trang 59 - 66",
        highlight: "Quy tắc 3 điểm, quy tắc hình bình hành, vectơ đối",
      },
      {
        id: "bai-09",
        title: "Bài 9. Tích của một vectơ với một số",
        available: false,
        bookPages: "Trang 67 - 73",
        highlight: "Điều kiện hai vectơ cùng phương, phân tích một vectơ",
      },
      {
        id: "bai-10",
        title: "Bài 10. Tích vô hướng của hai vectơ",
        available: false,
        bookPages: "Trang 74 - 80",
        highlight: "Góc giữa hai vectơ, công thức tích vô hướng và ứng dụng vuông góc",
      },
      {
        id: "bai-cuoi-c4",
        title: "Bài tập cuối chương IV",
        available: false,
        bookPages: "Trang 81 - 82",
        highlight: "Ôn tập phép toán vectơ và hình học phẳng",
      },
    ],
  },
  {
    id: "chuong-05",
    name: "Chương V: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm",
    emoji: "📈",
    volume: 1,
    lessons: [
      {
        id: "bai-11",
        title: "Bài 11. Số gần đúng và sai số",
        available: false,
        bookPages: "Trang 83 - 87",
        highlight: "Sai số tuyệt đối, sai số tương đối, số quy tròn",
      },
      {
        id: "bai-12",
        title: "Bài 12. Số đặc trưng đo xu thế trung tâm",
        available: false,
        bookPages: "Trang 88 - 95",
        highlight: "Số trung bình, trung vị, tứ phân vị, mốt",
      },
      {
        id: "bai-13",
        title: "Bài 13. Số đặc trưng đo độ phân tán",
        available: false,
        bookPages: "Trang 96 - 102",
        highlight: "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn",
      },
      {
        id: "bai-cuoi-c5",
        title: "Bài tập cuối chương V",
        available: false,
        bookPages: "Trang 103 - 104",
        highlight: "Đọc phân tích dữ liệu thống kê ứng dụng đời sống",
      },
    ],
  },
  {
    id: "chuong-06",
    name: "Chương VI: Hàm số, đồ thị và ứng dụng",
    emoji: "📉",
    volume: 2,
    lessons: [
      {
        id: "bai-15",
        title: "Bài 15. Hàm số",
        available: false,
        bookPages: "Tập 2: Trang 5 - 12",
        highlight: "Tập xác định, tập giá trị, tính đồng biến, nghịch biến và đồ thị",
      },
      {
        id: "bai-16",
        title: "Bài 16. Hàm số bậc hai",
        available: false,
        bookPages: "Tập 2: Trang 13 - 19",
        highlight: "Đỉnh parabol, trục đối xứng, bảng biến thiên và đồ thị parabol",
      },
      {
        id: "bai-17",
        title: "Bài 17. Dấu của tam thức bậc hai",
        available: false,
        bookPages: "Tập 2: Trang 20 - 25",
        highlight: "Định lí về dấu, xét dấu biệt thức Δ, giải bất phương trình bậc hai",
      },
      {
        id: "bai-18",
        title: "Bài 18. Phương trình quy về phương trình bậc hai",
        available: false,
        bookPages: "Tập 2: Trang 26 - 30",
        highlight: "Phương trình căn thức √(ax² + bx + c) = dx + e",
      },
      {
        id: "bai-cuoi-c6",
        title: "Bài tập cuối chương VI",
        available: false,
        bookPages: "Tập 2: Trang 31 - 32",
        highlight: "Tổng hợp bài toán chuyển động, quỹ đạo parabol",
      },
    ],
  },
  {
    id: "chuong-07",
    name: "Chương VII: Phương pháp toạ độ trong mặt phẳng",
    emoji: "🎯",
    volume: 2,
    lessons: [
      {
        id: "bai-19",
        title: "Bài 19. Phương trình đường thẳng",
        available: false,
        bookPages: "Tập 2: Trang 33 - 42",
        highlight: "Vectơ chỉ phương, vectơ pháp tuyến, PT tham số, PT tổng quát",
      },
      {
        id: "bai-20",
        title: "Bài 20. Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
        available: false,
        bookPages: "Tập 2: Trang 43 - 49",
        highlight: "Cắt nhau, song song, trùng nhau, vuông góc và khoảng cách từ 1 điểm",
      },
      {
        id: "bai-21",
        title: "Bài 21. Đường tròn trong mặt phẳng toạ độ",
        available: false,
        bookPages: "Tập 2: Trang 50 - 56",
        highlight: "Tâm, bán kính, phương trình tiếp tuyến của đường tròn",
      },
      {
        id: "bai-22",
        title: "Bài 22. Ba đường conic trong mặt phẳng toạ độ",
        available: false,
        bookPages: "Tập 2: Trang 57 - 65",
        highlight: "Elip, Hypebol, Parabol: tiêu điểm, tiêu cự, phương trình chính tắc",
      },
      {
        id: "bai-cuoi-c7",
        title: "Bài tập cuối chương VII",
        available: false,
        bookPages: "Tập 2: Trang 66 - 67",
        highlight: "Hình học giải tích Oxy tổng quát",
      },
    ],
  },
  {
    id: "chuong-08",
    name: "Chương VIII: Đại số tổ hợp",
    emoji: "🎲",
    volume: 2,
    lessons: [
      {
        id: "bai-23",
        title: "Bài 23. Quy tắc đếm",
        available: false,
        bookPages: "Tập 2: Trang 68 - 74",
        highlight: "Quy tắc cộng, quy tắc nhân, sơ đồ hình cây",
      },
      {
        id: "bai-24",
        title: "Bài 24. Hoán vị, chỉnh hợp và tổ hợp",
        available: false,
        bookPages: "Tập 2: Trang 75 - 82",
        highlight: "P_n, A_n^k, C_n^k, phân biệt sắp xếp thứ tự và chọn nhóm",
      },
      {
        id: "bai-25",
        title: "Bài 25. Nhị thức Newton",
        available: false,
        bookPages: "Tập 2: Trang 83 - 88",
        highlight: "Khai triển (a + b)⁴, (a + b)⁵ và tam giác Pascal",
      },
      {
        id: "bai-cuoi-c8",
        title: "Bài tập cuối chương VIII",
        available: false,
        bookPages: "Tập 2: Trang 89 - 90",
        highlight: "Bài toán đếm và chọn mẫu thực tế",
      },
    ],
  },
  {
    id: "chuong-09",
    name: "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    emoji: "🪙",
    volume: 2,
    lessons: [
      {
        id: "bai-26",
        title: "Bài 26. Biến cố và định nghĩa cổ điển của xác suất",
        available: false,
        bookPages: "Tập 2: Trang 91 - 98",
        highlight: "Không gian mẫu Ω, biến cố thuận lợi, công thức P(A) = n(A)/n(Ω)",
      },
      {
        id: "bai-27",
        title: "Bài 27. Thực hành tính xác suất theo định nghĩa cổ điển",
        available: false,
        bookPages: "Tập 2: Trang 99 - 105",
        highlight: "Kết hợp tổ hợp để tính xác suất trong trò chơi xúc xắc, bài, rút thăm",
      },
      {
        id: "bai-cuoi-c9",
        title: "Bài tập cuối chương IX",
        available: false,
        bookPages: "Tập 2: Trang 106 - 108",
        highlight: "Tổng ôn toàn bộ xác suất và ứng dụng dự báo",
      },
    ],
  },
];

export function getAllLessons(): Lesson[] {
  return CURRICULUM.flatMap((topic) => topic.lessons);
}

export function getLessonById(id: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === id);
    if (lesson) return { lesson, topic };
  }
  return null;
}

export function getLessonCounts(lessonId: string): LessonCounts {
  return {
    mcq: 15,
    tf: 2,
    essay: 2,
    theory: true,
  };
}
