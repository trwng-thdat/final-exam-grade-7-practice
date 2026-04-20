const RAW_QUESTIONS = [
  {
    text: "Vai trò của ngành chăn nuôi đối với nền kinh tế Việt Nam là",
    options: [
      "Cung cấp thực phẩm cho con người",
      "Cung cấp nguyên liệu cho ngành công nghiệp nhẹ",
      "Cung cấp sức kéo phục vụ tham quan, du lịch",
      "Tất cả các đáp án trên*",
    ],
  },
  {
    text: "Đâu không phải sản phẩm của ngành chăn nuôi?",
    options: ["Thịt gà", "Thịt bò", "Trứng vịt", "Sữa đậu nành*"],
  },
  {
    text: "Chăn nuôi là 1 phần thuộc lĩnh vực nào dưới đây?",
    options: ["Công nghiệp", "Nông nghiệp*", "Thương mại", "Dịch vụ"],
  },
  {
    text: "Theo em, chăn nuôi và trồng trọt có mối quan hệ như thế nào?",
    options: [
      "Trồng trọt cung cấp thức ăn cho chăn nuôi",
      "Chăn nuôi cung cấp sức kéo, phân bón cho trồng trọt",
      "Cả A và B*",
      "Không có mối quan hệ riêng biệt.",
    ],
  },
  {
    text: "Các loại gia cầm, lợn được tập trung nuôi nhiều nhất ở đâu?",
    options: [
      "Đồng bằng sông Hồng, sông cửu long*",
      "Trung du và miền núi Bắc Bộ, Bắc Trung Bộ",
      "Duyên Hải Nam Trung Bộ, Tây Nguyên",
      "Vùng núi và trung du",
    ],
  },
  {
    text: "Những loài vật nuôi nào phù hợp với phương thức chăn nuôi chăn thả?",
    options: ["Trâu, bò*", "Lợn", "Tằm", "Thỏ"],
  },
  {
    text: "Các phương thức chăn nuôi chủ yếu ở nước ta là?",
    options: [
      "Chăn thả, chăn nuôi truyền thống, bán chăn thả",
      "Chăn thả, nuôi nhốt, bán chăn thả*",
      "Chăn thả, nuôi nhốt, chăn nuôi truyền thống",
      "Chăn nuôi nông hộ, nuôi nhốt, bán chăn thả",
    ],
  },
  {
    text: "Để phân biệt các giống gia cầm, ta dựa vào đặc điểm nào?",
    options: [
      "Khả năng đề kháng dịch bệnh của gia cầm",
      "Khả năng sinh trưởng và phát triển",
      "Khả năng sinh sản",
      "Đặc điểm ngoại hình, tầm vóc, màu lông.*",
    ],
  },
  {
    text: "Trong các sản phẩm chăn nuôi sau đây, sản phẩm nào không phải của bò?",
    options: ["Trứng*", "Thịt", "Sữa", "Da"],
  },
  {
    text: "Những loài vật nuôi nào phù hợp với phương thức chăn nuôi bán chăn thả?",
    options: ["Gia súc ăn cỏ*", "Lợn", "Gia cầm", "Thỏ"],
  },
  {
    text: "Vật nuôi non có những đặc điểm sinh lí nào?",
    options: [
      "Sự điều tiết thân nhiệt chưa hoàn chỉnh",
      "Chức năng của hệ tiêu hóa chưa hoàn chỉnh",
      "Chức năng miễn dịch chưa tốt, sức đề kháng kém so với vật nuôi trưởng thành.",
      "Cả 3 đáp án trên*",
    ],
  },
  {
    text: "Việc chăn nuôi vật nuôi được chia làm mấy loại?",
    options: ["1", "2", "3*", "4"],
  },
  {
    text: "Chăn nuôi vật nuôi được chia theo loại nào?",
    options: [
      "Chăn nuôi vật nuôi non",
      "Chăn nuôi vật nuôi đực giống",
      "Chăn nuôi vật nuôi cái sinh sản",
      "Cả 3 đáp án trên*",
    ],
  },
  {
    text: "Tại sao phải nuôi dưỡng và chăm sóc vật nuôi non?",
    options: [
      "Để vật nuôi non khỏe mạnh",
      "Để vật nuôi non phát triển tốt",
      "Để vật nuôi non kháng bệnh tốt",
      "Cả 3 đáp án trên*",
    ],
  },
  {
    text: "Nuôi dưỡng vật nuôi non cần lưu ý gì?",
    options: [
      "Cho bú sữa đầu có đủ chất dinh dưỡng, nhiều kháng thể giúp vật nuôi chống lại bệnh tật.",
      "Tập cho ăn sớm để cung cấp chất dinh dưỡng và giúp hệ tiêu hóa phát triển hoàn thiện.",
      "Cả A và B đều đúng*",
      "Cả A và B đều sai.",
    ],
  },
  {
    text: "Đâu không phải triển vọng của ngành chăn nuôi ở Việt Nam?",
    options: [
      "Chăn nuôi hữu cơ",
      "Phát triển chăn nuôi nông hộ*",
      "Phát triển chăn nuôi trang trại",
      "Liên kết giữa các khâu chăn nuôi, giết mổ và phân phối",
    ],
  },
  {
    text: "Đặc điểm khác nhau giữa lợn Landrace và lợn Yorkshire là?",
    options: ["Thân", "Màu da, màu lông", "Tai*", "Tỉ lệ nạc"],
  },
  {
    text: "Đâu không phải gia súc ăn cỏ được nuôi phổ biến ở Việt Nam?",
    options: ["Bò vàng Việt Nam", "Trâu Việt Nam", "Lợn ỉ*", "Bò lai Sind"],
  },
  {
    text: "Những loài vật nuôi nào phù hợp với phương thức nuôi công nghiệp?",
    options: ["Gà, vịt, lợn*", "Trâu, bò", "Ong", "Cừu, dê"],
  },
];

const QUESTIONS = RAW_QUESTIONS.map((question) => {
  const correct = question.options.findIndex((option) => option.endsWith("*"));
  if (correct === -1) {
    throw new Error(`Câu hỏi thiếu đáp án đánh dấu *: ${question.text}`);
  }

  return {
    text: question.text,
    options: question.options.map((option) =>
      option.endsWith("*") ? option.slice(0, -1) : option,
    ),
    correct,
  };
});

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
  return state.answers.filter((value) => value !== null).length;
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
