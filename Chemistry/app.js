const QUESTIONS = [
  {
    text: "Đơn chất là những chất được tạo nên từ bao nhiêu nguyên tố hóa học?",
    options: [
      "Từ 1 nguyên tố.",
      "Từ 2 nguyên tố trở lên.",
      "Từ 3 nguyên tố.",
      "Từ 4 nguyên tố.",
    ],
    correct: 0,
  },
  {
    text: "Cho các chất: than chì (C), muối ăn (NaCl), ozone (O3), iron (Fe), nước đá (H2O), đá vôi (CaCO3). Có bao nhiêu hợp chất?",
    options: ["1", "2", "3", "4"],
    correct: 2,
  },
  {
    text: "Các nguyên tố khí hiếm thuộc nhóm nào trong bảng tuần hoàn?",
    options: ["IA", "IIA", "VIIA", "VIIIA"],
    correct: 3,
  },
  {
    text: "Trong phản ứng với kim loại, nguyên tử phi kim thường có khuynh hướng nào?",
    options: [
      "Nhận thêm electron.",
      "Nhận hay nhường electron phụ thuộc từng phản ứng.",
      "Nhường bớt electron.",
      "Nhận hay nhường electron phụ thuộc từng kim loại.",
    ],
    correct: 0,
  },
  {
    text: "Trong các ion: K+, Mg2+, SO4^2-, Cl-, NH4+, NO3-. Có bao nhiêu ion dương?",
    options: ["3", "4", "5", "6"],
    correct: 0,
  },
  {
    text: "Liên kết được hình thành bởi sự dùng chung electron giữa hai nguyên tử là liên kết nào?",
    options: [
      "Liên kết ion",
      "Liên kết cộng hóa trị",
      "Liên kết hydrogen",
      "Liên kết kim loại",
    ],
    correct: 1,
  },
  {
    text: "Nhóm hợp chất nào sau đây đều là hợp chất ion?",
    options: ["H2S, Na2O", "CH4, CO2", "CaO, KCl", "SO2, NaCl"],
    correct: 2,
  },
  {
    text: "Nguyên tố nào được dùng để chế tạo chip máy tính?",
    options: ["Neon", "Silicon", "Chlorine", "Silver"],
    correct: 1,
  },
  {
    text: "Nguyên tử luôn trung hòa về điện nên:",
    options: [
      "Số proton = số neutron",
      "Số electron = số neutron",
      "Số electron = số proton",
      "Số proton = số electron = số neutron",
    ],
    correct: 2,
  },
  {
    text: "Trong nguyên tử, loại hạt mang điện là:",
    options: ["electron", "proton", "neutron", "proton và electron"],
    correct: 3,
  },
  {
    text: "Số hiệu nguyên tử của một nguyên tố hóa học là:",
    options: [
      "Số proton trong nguyên tử",
      "Số neutron trong nguyên tử",
      "Số electron trong hạt nhân",
      "Số proton và neutron trong hạt nhân",
    ],
    correct: 0,
  },
  {
    text: "Vị trí kim loại kiềm trong bảng tuần hoàn thường:",
    options: ["Ở đầu nhóm", "Ở cuối nhóm", "Ở đầu chu kì", "Ở cuối chu kì"],
    correct: 2,
  },
  {
    text: "Phần lớn các nguyên tố hóa học trong bảng tuần hoàn là:",
    options: ["Kim loại", "Phi kim", "Khí hiếm", "Chất khí"],
    correct: 0,
  },
  {
    text: "Các kim loại kiềm thổ nhóm IIA đều có bao nhiêu electron lớp ngoài cùng?",
    options: ["1", "2", "3", "7"],
    correct: 1,
  },
  {
    text: "Đặc điểm chung của các nguyên tử thuộc cùng một nguyên tố hóa học là có cùng:",
    options: [
      "Số proton",
      "Số neutron",
      "Số lớp electron",
      "Khối lượng nguyên tử",
    ],
    correct: 0,
  },
  {
    text: "Mặt trời chứa 25% helium và 2% các nguyên tố khác. Phần trăm hydrogen là:",
    options: ["27%", "62%", "25%", "73%"],
    correct: 3,
  },
  {
    text: "Những nguyên tố nào thuộc nhóm VIIA (halogen)?",
    options: [
      "Chlorine, bromine, fluorine",
      "Fluorine, carbon, bromine",
      "Beryllium, carbon, oxygen",
      "Neon, helium, argon",
    ],
    correct: 0,
  },
  {
    text: "Kim loại nào có thể cắt bằng dao?",
    options: ["Magnesium", "Iron", "Mercury", "Sodium"],
    correct: 3,
  },
  {
    text: "Nguyên tố kim loại nào tồn tại ở dạng lỏng ở nhiệt độ phòng?",
    options: ["Oxygen", "Bromine", "Mercury", "Argon"],
    correct: 2,
  },
  {
    text: "Từ một nguyên tố hóa học, người ta có thể tạo nên:",
    options: [
      "Chỉ một đơn chất duy nhất",
      "Tối đa hai đơn chất khác nhau",
      "Tối đa ba đơn chất khác nhau",
      "Một hoặc nhiều đơn chất khác nhau",
    ],
    correct: 3,
  },
  {
    text: "Dãy nào chỉ gồm toàn đơn chất?",
    options: [
      "Fe(OH)2, CO, S, C",
      "Na, P, S, H2",
      "CuSO4, N2O, H2O, N2",
      "HCl, K2SO4, Mg, C",
    ],
    correct: 1,
  },
  {
    text: "Trong phản ứng với phi kim, nguyên tử kim loại có khuynh hướng:",
    options: [
      "Nhận thêm electron",
      "Nhận hay nhường electron phụ thuộc từng phản ứng",
      "Cho bớt electron",
      "Nhận hay nhường electron phụ thuộc từng kim loại",
    ],
    correct: 2,
  },
  {
    text: "Liên kết ion được hình thành bởi:",
    options: [
      "Sự cho nhận của cặp electron hóa trị",
      "Sự dùng chung electron giữa hai nguyên tử",
      "Liên kết giữa ion dương và ion âm",
      "Liên kết giữa các ion dương trong phân tử",
    ],
    correct: 2,
  },
  {
    text: "Trong các ion: Na+, SO4^2-, Fe3+, Cl-, NH4+. Có bao nhiêu ion âm?",
    options: ["2", "3", "4", "5"],
    correct: 0,
  },
  {
    text: "Nguyên tố O có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "16, II, 8",
      "16, I, 8",
      "8, II, 16",
      "16, II, 16",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố H có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "1, I, 1",
      "1, II, 1",
      "2, I, 1",
      "1, I, 2",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố C có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "12, IV, 6",
      "12, II, 6",
      "6, IV, 12",
      "12, IV, 12",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố N có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "14, III, 7",
      "14, V, 7",
      "7, III, 14",
      "14, III, 14",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Na có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "23, I, 11",
      "23, II, 11",
      "11, I, 23",
      "23, I, 23",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Mg có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "24, II, 12",
      "24, I, 12",
      "12, II, 24",
      "24, II, 24",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Al có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "27, III, 13",
      "27, II, 13",
      "13, III, 27",
      "27, III, 27",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Si có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "28, IV, 14",
      "28, II, 14",
      "14, IV, 28",
      "28, IV, 28",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố P có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "31, III, 15",
      "31, V, 15",
      "15, III, 31",
      "31, III, 31",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố S có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "32, II, 16",
      "32, IV, 16",
      "16, II, 32",
      "32, II, 32",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Cl có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "35.5, I, 17",
      "35.5, II, 17",
      "17, I, 35.5",
      "35.5, I, 35",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố K có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "39, I, 19",
      "39, II, 19",
      "19, I, 39",
      "39, I, 39",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Ca có nguyên tử khối, hóa trị và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "40, II, 20",
      "40, I, 20",
      "20, II, 40",
      "40, II, 40",
    ],
    correct: 0,
  },
  {
    text: "Nguyên tố Fe có nguyên tử khối, hóa trị thường gặp và số hiệu nguyên tử lần lượt là bao nhiêu?",
    options: [
      "56, II, 26",
      "56, III, 26",
      "26, II, 56",
      "56, II, 56",
    ],
    correct: 0,
  },
];

const state = {
  questions: [...QUESTIONS],
  answers: new Array(QUESTIONS.length).fill(null),
  submitted: false,
};

const quizContainer = document.getElementById("quizContainer");
const template = document.getElementById("questionTemplate");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resultBanner = document.getElementById("resultBanner");

function shuffleQuestions() {
  for (let i = state.questions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.questions[i], state.questions[j]] = [
      state.questions[j],
      state.questions[i],
    ];
  }
}

function countAnswered() {
  return state.answers.filter((v) => v !== null).length;
}

function calculateScore() {
  return state.questions.reduce((acc, question, index) => {
    return acc + Number(state.answers[index] === question.correct);
  }, 0);
}

function updateStatus() {
  const answered = countAnswered();
  const score = state.submitted ? calculateScore() : 0;
  progressText.textContent = `${answered} / ${state.questions.length}`;
  scoreText.textContent = `${score}`;
  progressFill.style.width = `${(answered / state.questions.length) * 100}%`;
}

function renderQuiz() {
  quizContainer.innerHTML = "";

  state.questions.forEach((question, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".question-card");
    const indexEl = node.querySelector(".question-index");
    const titleEl = node.querySelector(".question-title");
    const optionsEl = node.querySelector(".options");
    const feedbackEl = node.querySelector(".feedback");

    card.style.animationDelay = `${index * 20}ms`;
    indexEl.textContent = `Câu ${index + 1}`;
    titleEl.textContent = question.text;

    question.options.forEach((optionText, optionIndex) => {
      const id = `q${index}-o${optionIndex}`;
      const label = document.createElement("label");
      label.className = "option";
      label.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.id = id;
      input.name = `question-${index}`;
      input.value = String(optionIndex);
      input.checked = state.answers[index] === optionIndex;
      input.disabled = state.submitted;

      input.addEventListener("change", () => {
        state.answers[index] = optionIndex;
        updateStatus();
        if (!state.submitted) {
          renderQuiz();
        }
      });

      const text = document.createElement("span");
      text.textContent = `${String.fromCharCode(65 + optionIndex)}. ${optionText}`;

      if (state.answers[index] === optionIndex) {
        label.classList.add("selected");
      }

      if (state.submitted && optionIndex === question.correct) {
        label.classList.add("correct");
      }

      if (
        state.submitted &&
        state.answers[index] === optionIndex &&
        optionIndex !== question.correct
      ) {
        label.classList.add("wrong");
      }

      label.append(input, text);
      optionsEl.append(label);
    });

    if (state.submitted) {
      const userAnswer = state.answers[index];
      const isCorrect = userAnswer === question.correct;
      if (isCorrect) {
        feedbackEl.textContent = "Đúng";
        feedbackEl.classList.add("ok");
      } else {
        const correctText = question.options[question.correct];
        feedbackEl.textContent = `Sai. Đáp án đúng: ${String.fromCharCode(65 + question.correct)}. ${correctText}`;
        feedbackEl.classList.add("bad");
      }
    }

    quizContainer.append(node);
  });

  updateStatus();
}

submitBtn.addEventListener("click", () => {
  if (countAnswered() < state.questions.length) {
    resultBanner.textContent =
      "Bạn chưa trả lời hết. Vui lòng hoàn thành toàn bộ câu hỏi.";
    resultBanner.classList.add("show");
    return;
  }

  state.submitted = true;
  renderQuiz();
  const score = calculateScore();
  const ratio = score / state.questions.length;
  const message =
    ratio >= 0.85
      ? "Xuất sắc! Bạn nắm bài rất tốt."
      : ratio >= 0.6
        ? "Khá tốt! Tiếp tục luyện thêm để tăng độ chính xác."
        : "Đừng nản, luyện lại một lượt nữa là ổn hơn nhiều.";

  resultBanner.textContent = `Kết quả: ${score}/${state.questions.length} điểm. ${message}`;
  resultBanner.classList.add("show");
});

resetBtn.addEventListener("click", () => {
  state.answers = new Array(state.questions.length).fill(null);
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  renderQuiz();
});

shuffleBtn.addEventListener("click", () => {
  state.questions = [...QUESTIONS];
  shuffleQuestions();
  state.answers = new Array(state.questions.length).fill(null);
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  renderQuiz();
});

renderQuiz();
