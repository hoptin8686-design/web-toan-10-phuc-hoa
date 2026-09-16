import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "q01-01",
    q: "Trong các câu dưới đây, câu nào là một mệnh đề toán học?",
    options: [
      "Số 17 là một số nguyên tố.",
      "Bạn có thích học môn Toán không?",
      "Trời hôm nay nhiều mây và đẹp quá!",
      "Hãy làm bài tập về nhà trước khi đến lớp!",
    ],
    answer: 0,
    explain:
      "Mệnh đề là một câu khẳng định có tính đúng hoặc sai rõ ràng. 'Số 17 là một số nguyên tố' là khẳng định đúng, do đó là mệnh đề toán học. Các câu còn lại là câu hỏi, câu cảm thán hoặc mệnh lệnh.",
  },
  {
    id: "q01-02",
    q: "Cho mệnh đề chứa biến P(n): 'n là số tự nhiên chia hết cho 5'. Mệnh đề nào sau đây là mệnh đề ĐÚNG?",
    options: [
      "P(12) là mệnh đề đúng.",
      "P(25) là mệnh đề đúng.",
      "P(31) là mệnh đề đúng.",
      "P(44) là mệnh đề đúng.",
    ],
    answer: 1,
    explain:
      "Với n = 25, ta có 25 chia hết cho 5, do đó khẳng định P(25) nhận giá trị Đúng. Các giá trị n = 12, 31, 44 đều không chia hết cho 5.",
  },
  {
    id: "q01-03",
    q: "Cho mệnh đề P: 'Tam giác ABC có một góc tù'. Mệnh đề phủ định P̄ của P là:",
    options: [
      "Tam giác ABC không có góc tù nào.",
      "Tam giác ABC có cả ba góc nhọn.",
      "Tam giác ABC có một góc vuông.",
      "Tam giác ABC có hai góc nhọn.",
    ],
    answer: 0,
    explain:
      "Phủ định của khẳng định 'có một góc tù' là 'không có góc tù nào' (nghĩa là số góc tù bằng 0). Không thể kết luận là có cả 3 góc nhọn vì tam giác vẫn có thể là tam giác vuông.",
  },
  {
    id: "q01-04",
    q: "Mệnh đề kéo theo P ⇒ Q chỉ nhận giá trị SAI trong trường hợp nào sau đây?",
    options: [
      "P nhận giá trị Đúng và Q nhận giá trị Đúng.",
      "P nhận giá trị Sai và Q nhận giá trị Đúng.",
      "P nhận giá trị Đúng và Q nhận giá trị Sai.",
      "P nhận giá trị Sai và Q nhận giá trị Sai.",
    ],
    answer: 2,
    explain:
      "Theo định nghĩa bảng chân trị của phép kéo theo, P ⇒ Q chỉ sai duy nhất khi giả thiết P Đúng mà kết luận Q lại Sai.",
  },
  {
    id: "q01-05",
    q: "Cho định lí: 'Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau'. Khẳng định nào sau đây diễn đạt đúng về 'điều kiện đủ'?",
    options: [
      "Hai tam giác có diện tích bằng nhau là điều kiện đủ để chúng bằng nhau.",
      "Hai tam giác bằng nhau là điều kiện đủ để diện tích của chúng bằng nhau.",
      "Diện tích bằng nhau là điều kiện cần và đủ để hai tam giác bằng nhau.",
      "Hai tam giác bằng nhau là điều kiện cần để diện tích của chúng bằng nhau.",
    ],
    answer: 1,
    explain:
      "Trong mệnh đề P ⇒ Q: 'P là điều kiện đủ để có Q'. Ở đây P là 'hai tam giác bằng nhau', nên hai tam giác bằng nhau là điều kiện đủ để có diện tích bằng nhau.",
  },
  {
    id: "q01-06",
    q: "Cho định lí: 'Nếu số tự nhiên a chia hết cho 6 thì a chia hết cho 2'. Khẳng định nào sau đây diễn đạt đúng về 'điều kiện cần'?",
    options: [
      "Số tự nhiên a chia hết cho 6 là điều kiện cần để a chia hết cho 2.",
      "Số tự nhiên a chia hết cho 2 là điều kiện cần để a chia hết cho 6.",
      "Số tự nhiên a chia hết cho 2 là điều kiện đủ để a chia hết cho 6.",
      "Số tự nhiên a chia hết cho 6 là điều kiện cần và đủ để a chia hết cho 2.",
    ],
    answer: 1,
    explain:
      "Trong mệnh đề P ⇒ Q: 'Q là điều kiện cần để có P'. Ở đây kết luận Q là 'a chia hết cho 2', nên 'a chia hết cho 2' là điều kiện cần để a chia hết cho 6.",
  },
  {
    id: "q01-07",
    q: "Cho mệnh đề kéo theo: 'Nếu tứ giác ABCD là hình thoi thì tứ giác ABCD có hai đường chéo vuông góc'. Mệnh đề đảo của mệnh đề này là:",
    options: [
      "Nếu tứ giác ABCD có hai đường chéo vuông góc thì ABCD là hình thoi.",
      "Nếu tứ giác ABCD không phải hình thoi thì ABCD không có hai đường chéo vuông góc.",
      "Nếu tứ giác ABCD không có hai đường chéo vuông góc thì ABCD không là hình thoi.",
      "Tứ giác ABCD là hình thoi khi và chỉ khi ABCD có hai đường chéo vuông góc.",
    ],
    answer: 0,
    explain:
      "Mệnh đề đảo của P ⇒ Q là Q ⇒ P. Do đó ta đổi chỗ hai vế: 'Nếu tứ giác ABCD có hai đường chéo vuông góc thì ABCD là hình thoi' (lưu ý: mệnh đề đảo này sai nếu ABCD chưa là hình bình hành).",
  },
  {
    id: "q01-08",
    q: "Mệnh đề tương đương P ⇔ Q nhận giá trị ĐÚNG khi nào?",
    options: [
      "Khi mệnh đề P nhận giá trị Đúng và mệnh đề Q nhận giá trị Sai.",
      "Khi mệnh đề P nhận giá trị Sai và mệnh đề Q nhận giá trị Đúng.",
      "Khi cả hai mệnh đề P và Q đều có cùng giá trị chân trị (cùng Đ hoặc cùng S).",
      "Chỉ khi cả hai mệnh đề P và Q đều nhận giá trị Đúng.",
    ],
    answer: 2,
    explain:
      "P ⇔ Q đúng khi cả hai mệnh đề thành phần có cùng chân trị (hoặc cùng Đúng, hoặc cùng Sai). Khi cả hai cùng Sai thì tương đương vẫn mang giá trị Đúng.",
  },
  {
    id: "q01-09",
    q: "Mệnh đề phủ định của mệnh đề '∀x ∈ ℝ, x² - 2x + 3 > 0' là mệnh đề nào sau đây?",
    options: [
      "∃x ∈ ℝ, x² - 2x + 3 ≤ 0",
      "∀x ∈ ℝ, x² - 2x + 3 ≤ 0",
      "∃x ∈ ℝ, x² - 2x + 3 < 0",
      "∀x ∈ ℝ, x² - 2x + 3 < 0",
    ],
    answer: 0,
    explain:
      "Quy tắc phủ định: Lượng từ '∀' chuyển thành '∃', và tính chất '>' chuyển thành phủ định của nó là '≤'. Vậy đáp án là ∃x ∈ ℝ, x² - 2x + 3 ≤ 0.",
  },
  {
    id: "q01-10",
    q: "Mệnh đề phủ định của mệnh đề '∃n ∈ ℕ, n² + 1 chia hết cho 4' là mệnh đề nào?",
    options: [
      "∀n ∈ ℕ, n² + 1 không chia hết cho 4",
      "∃n ∈ ℕ, n² + 1 không chia hết cho 4",
      "∀n ∈ ℕ, n² + 1 chia hết cho 4",
      "∃n ∉ ℕ, n² + 1 không chia hết cho 4",
    ],
    answer: 0,
    explain:
      "Phủ định của lượng từ '∃' là '∀', và cụm từ 'chia hết cho 4' đổi thành 'không chia hết cho 4'. Tập số ℕ được giữ nguyên.",
  },
  {
    id: "q01-11",
    q: "Trong các mệnh đề sau, mệnh đề nào là một mệnh đề ĐÚNG?",
    options: [
      "∀x ∈ ℝ, x² > 0",
      "∀x ∈ ℝ, x² + 2x + 3 > 0",
      "∀n ∈ ℕ, 2n + 1 là số nguyên tố",
      "∀x ∈ ℝ, x > 1/x",
    ],
    answer: 1,
    explain:
      "Ta có x² + 2x + 3 = (x + 1)² + 2 ≥ 2 > 0 với mọi x ∈ ℝ. Mệnh đề A sai vì x = 0 thì x² = 0 không lớn hơn 0; mệnh đề C sai với n = 4 (2*4+1 = 9 là hợp số); mệnh đề D sai với x = -1.",
  },
  {
    id: "q01-12",
    q: "Trong các mệnh đề sau, mệnh đề nào nhận giá trị SAI?",
    options: [
      "∃x ∈ ℝ, x² = 2",
      "∃n ∈ ℕ, n² + 1 chia hết cho 5",
      "∃x ∈ ℚ, x² = 3",
      "∃n ∈ ℤ, n² = n",
    ],
    answer: 2,
    explain:
      "Phương trình x² = 3 chỉ có hai nghiệm x = √3 và x = -√3, cả hai đều là số vô tỉ (không thuộc ℚ). Do đó không tồn tại số hữu tỉ nào có bình phương bằng 3. Mệnh đề C là SAI.",
  },
  {
    id: "q01-13",
    q: "Cho mệnh đề: 'Tứ giác ABCD có 4 cạnh bằng nhau khi và chỉ khi ABCD là hình vuông'. Nhận xét nào sau đây là chính xác nhất?",
    options: [
      "Đây là một mệnh đề đúng.",
      "Đây là một mệnh đề sai vì hình có 4 cạnh bằng nhau là hình thoi, chưa chắc đã là hình vuông.",
      "Đây là một mệnh đề sai vì hình vuông không có 4 cạnh bằng nhau.",
      "Đây không phải là một mệnh đề toán học.",
    ],
    answer: 1,
    explain:
      "Tứ giác có 4 cạnh bằng nhau là hình thoi. Để là hình vuông thì cần thêm điều kiện có một góc vuông (hoặc hai đường chéo bằng nhau). Do đó chiều suy ra từ '4 cạnh bằng nhau' sang 'hình vuông' là sai, khiến mệnh đề tương đương bị SAI.",
  },
  {
    id: "q01-14",
    q: "Cho hai mệnh đề P: 'Tam giác ABC có AB = AC' và Q: 'Tam giác ABC là tam giác cân tại A'. Phát biểu nào sau đây đúng?",
    options: [
      "P là điều kiện cần để tam giác ABC cân tại A.",
      "P là điều kiện đủ để tam giác ABC cân tại A.",
      "P là điều kiện cần và đủ để tam giác ABC cân tại A.",
      "Q là điều kiện cần nhưng không đủ để AB = AC.",
    ],
    answer: 2,
    explain:
      "Theo định nghĩa tam giác cân, tam giác ABC cân tại A khi và chỉ khi AB = AC (hai cạnh bên bằng nhau). Do cả hai chiều suy ra đều đúng nên P là điều kiện cần và đủ để có Q.",
  },
  {
    id: "q01-15",
    q: "Để bác bỏ mệnh đề 'Mọi số nguyên tố đều là số lẻ' (tức chứng minh mệnh đề này SAI), ta chỉ cần chỉ ra phản ví dụ nào?",
    options: [
      "Chỉ ra số 2 là số nguyên tố nhưng là số chẵn.",
      "Chỉ ra số 9 là số lẻ nhưng không phải số nguyên tố.",
      "Chỉ ra số 1 không phải là số nguyên tố.",
      "Chỉ ra số 0 là số chẵn và không phải số nguyên tố.",
    ],
    answer: 0,
    explain:
      "Mệnh đề có dạng '∀x ∈ P, x lẻ'. Để chứng minh mệnh đề chứa lượng từ 'với mọi' là sai, ta chỉ cần chỉ ra một trường hợp tồn tại (phản ví dụ): Số 2 là số nguyên tố nhưng lại là số chẵn.",
  },
];
