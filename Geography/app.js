const fillBlankQuestions = [
  {
    title: "Câu 1: Đặc điểm rừng Amazon và vấn đề khai thác, sử dụng, bảo vệ",
    content: `<div class="question-text">
            <p><strong>Phần I: Đặc điểm rừng Amazon</strong></p>
            <p>1. Amazon là khu rừng <input type="text" id="blank-0" class="blank"> lớn nhất thế giới, diện tích <input type="text" id="blank-1" class="blank"> triệu km2, <input type="text" id="blank-2" class="blank"> thuộc về Brazil.</p>
            <p>2. Rừng Amazon có mức độ <input type="text" id="blank-3" class="blank"> rất cao: rừng có nhiều <input type="text" id="blank-4" class="blank"> rậm rạp, có hàng triệu loài <input type="text" id="blank-5" class="blank">, hàng nghìn loài <input type="text" id="blank-6" class="blank"> và hàng chục nghìn loài <input type="text" id="blank-7" class="blank">.</p>
            <p>3. Rừng Amazon là nguồn cung cấp <input type="text" id="blank-8" class="blank">, có tác dụng <input type="text" id="blank-9" class="blank"> và là nguồn <input type="text" id="blank-10" class="blank"> quý giá cho toàn thế giới.</p>

            <p><strong>Phần II: Khai thác, sử dụng và bảo vệ</strong></p>
            <p>1. Hiện trạng sử dụng: trồng trọt, <input type="text" id="blank-11" class="blank">, khai thác <input type="text" id="blank-12" class="blank">, lấy gỗ, làm <input type="text" id="blank-13" class="blank">, thủy điện.</p>
            <p>2. Thách thức: diện tích rừng mất đi nhanh chóng gây <input type="text" id="blank-14" class="blank">, <input type="text" id="blank-15" class="blank">; các vụ <input type="text" id="blank-16" class="blank"> đe dọa các loài động thực vật.</p>
            <p>3. Giải pháp: Các nước liên quan đã ký kết <input type="text" id="blank-17" class="blank"> bảo vệ rừng Amazon, với các nội dung chính: hạn chế <input type="text" id="blank-18" class="blank">, <input type="text" id="blank-19" class="blank">, phát huy vai trò cộng đồng người bản địa và <input type="text" id="blank-20" class="blank"> cho sáng kiến bảo vệ rừng.</p>
        </div>`,
    answers: {
      "blank-0": "nhiệt đới",
      "blank-1": "lớn hơn 5,5",
      "blank-2": "60%",
      "blank-3": "đa dạng sinh học",
      "blank-4": "tầng",
      "blank-5": "côn trùng",
      "blank-6": "chim-thú-bò sát",
      "blank-7": "thực vật",
      "blank-8": "oxy",
      "blank-9": "điều hòa khí hậu",
      "blank-10": "dự trữ sinh học",
      "blank-11": "chăn nuôi",
      "blank-12": "khoáng sản",
      "blank-13": "đường giao thông",
      "blank-14": "ô nhiễm môi trường",
      "blank-15": "biến đổi khí hậu",
      "blank-16": "cháy rừng",
      "blank-17": "Hiệp ước",
      "blank-18": "khai thác gỗ",
      "blank-19": "trồng lại rừng",
      "blank-20": "hỗ trợ tài chính",
    },
    hints: [
      "Rừng Amazon là rừng nhiệt đới lớn nhất thế giới",
      "60% diện tích rừng Amazon thuộc về Brazil",
      "Rừng có đa dạng sinh học rất cao",
      "Rừng Amazon giúp điều hòa khí hậu",
      "Thách thức lớn là ô nhiễm môi trường và biến đổi khí hậu",
      "Giải pháp có Hiệp ước bảo vệ rừng Amazon",
    ],
  },
];

const multipleChoiceQuestions = [
  {
    section: "Tổng quan",
    question: "Rừng Amazon được xem là khu rừng nào trên thế giới?",
    options: [
      "Khu rừng ôn hàn lớn nhất",
      "Khu rừng nhiệt đới lớn nhất",
      "Khu rừng lá kim lớn nhất",
      "Khu rừng ngập mặn lớn nhất",
    ],
    correct: 1,
    note: "Amazon là rừng nhiệt đới lớn nhất thế giới.",
  },
  {
    section: "Tổng quan",
    question: "Diện tích rừng Amazon xấp xỉ bao nhiêu?",
    options: [
      "Hơn 2 triệu km2",
      "Hơn 3,5 triệu km2",
      "Hơn 5,5 triệu km2",
      "Hơn 8 triệu km2",
    ],
    correct: 2,
    note: "Nội dung đề bài nêu diện tích lớn hơn 5,5 triệu km2.",
  },
  {
    section: "Tổng quan",
    question: "Tỉ lệ rừng Amazon thuộc về Brazil là:",
    options: ["40%", "50%", "60%", "70%"],
    correct: 2,
    note: "Khoảng 60% rừng Amazon nằm trong lãnh thổ Brazil.",
  },
  {
    section: "Sinh học",
    question: "Nhận định đúng về đa dạng sinh học của rừng Amazon là gì?",
    options: [
      "Đa dạng thấp, ít loài",
      "Đa dạng cao, nhiều tầng rừng và nhiều loài sinh vật",
      "Chỉ đa dạng về thực vật",
      "Chỉ đa dạng về động vật có vú",
    ],
    correct: 1,
    note: "Amazon nổi bật bởi đa dạng sinh học rất cao.",
  },
  {
    section: "Sinh học",
    question:
      "Trong rừng Amazon có rất nhiều loài côn trùng, chim-thú-bò sát và:",
    options: ["Rong biển", "Thực vật", "Vi khuẩn", "Nấm biển"],
    correct: 1,
    note: "Ngoài động vật, Amazon có hàng chục nghìn loài thực vật.",
  },
  {
    section: "Vai trò",
    question: "Rừng Amazon đóng vai trò nào sau đây?",
    options: [
      "Chỉ cung cấp gỗ",
      "Chỉ là nơi du lịch",
      "Cung cấp oxy và điều hòa khí hậu",
      "Chỉ là nơi chăn nuôi",
    ],
    correct: 2,
    note: "Vai trò môi trường của Amazon rất lớn ở quy mô toàn cầu.",
  },
  {
    section: "Vai trò",
    question: "Rừng Amazon được coi là nguồn dự trữ nào quý giá cho thế giới?",
    options: [
      "Dự trữ dầu mỏ",
      "Dự trữ sinh học",
      "Dự trữ than đá",
      "Dự trữ nước ngầm",
    ],
    correct: 1,
    note: "Amazon là nguồn dự trữ sinh học quan trọng.",
  },
  {
    section: "Khai thác",
    question: "Hoạt động nào đã diễn ra từ lâu ở rừng Amazon?",
    options: [
      "Khai thác băng tuyết",
      "Trồng trọt và chăn nuôi",
      "Xây nhà cao tầng",
      "Sản xuất chip điện tử",
    ],
    correct: 1,
    note: "Rừng Amazon đã được khai thác phục vụ trồng trọt và chăn nuôi.",
  },
  {
    section: "Khai thác",
    question: "Ngoài trồng trọt, còn có hoạt động nào trong rừng Amazon?",
    options: [
      "Khai thác khoáng sản",
      "Nuôi cá lồng",
      "Đắp cát lấn biển",
      "Trồng lúa nước",
    ],
    correct: 0,
    note: "Khai thác khoáng sản là một trong các hoạt động kinh tế ở Amazon.",
  },
  {
    section: "Khai thác",
    question:
      "Mục đích làm đường giao thông và thủy điện trong rừng Amazon là gì?",
    options: [
      "Phục vụ khai thác và phát triển kinh tế",
      "Tăng đa dạng sinh học",
      "Giảm biến đổi khí hậu",
      "Bảo tồn rừng nguyên sinh",
    ],
    correct: 0,
    note: "Hạ tầng thường đi kèm khai thác tài nguyên.",
  },
  {
    section: "Thách thức",
    question: "Thách thức nổi bật khi diện tích rừng Amazon mất nhanh là:",
    options: [
      "Tăng năng suất nông nghiệp",
      "Giảm ô nhiễm",
      "Gây ô nhiễm môi trường",
      "Tăng đa dạng sinh học",
    ],
    correct: 2,
    note: "Mất rừng gây ra nhiều hệ lụy môi trường.",
  },
  {
    section: "Thách thức",
    question: "Mất rừng Amazon có liên quan chặt chẽ đến vấn đề nào?",
    options: ["Biến đổi khí hậu", "Dịch bệnh cây lúa", "Động đất", "Sóng thần"],
    correct: 0,
    note: "Phá rừng góp phần làm trầm trọng biến đổi khí hậu.",
  },
  {
    section: "Thách thức",
    question:
      "Hiện tượng nào đe dọa trực tiếp các loài động vật, thực vật Amazon?",
    options: ["Mưa đá", "Cháy rừng", "Bão tuyết", "Lũ quét"],
    correct: 1,
    note: "Cháy rừng là nguy cơ lớn đối với hệ sinh thái Amazon.",
  },
  {
    section: "Giải pháp",
    question: "Các nước liên quan đã ký kết văn kiện nào để bảo vệ Amazon?",
    options: [
      "Hiệp định Kyoto",
      "Hiệp ước bảo vệ rừng Amazon",
      "Thỏa thuận Paris",
      "Công ước CITES",
    ],
    correct: 1,
    note: "Đề bài nêu rõ Hiệp ước bảo vệ rừng Amazon.",
  },
  {
    section: "Giải pháp",
    question: "Nội dung nào thuộc giải pháp bảo vệ rừng Amazon?",
    options: [
      "Tăng tốc khai thác gỗ",
      "Hạn chế khai thác gỗ",
      "Mở rộng mỏ khoáng",
      "Đốt rừng có kiểm soát",
    ],
    correct: 1,
    note: "Hạn chế khai thác gỗ là giải pháp cốt lõi.",
  },
  {
    section: "Giải pháp",
    question: "Biện pháp quan trọng để phục hồi hệ sinh thái Amazon là:",
    options: [
      "Trồng lại rừng",
      "Nâng cấp đường cao tốc",
      "Mở rộng chăn nuôi",
      "Tăng công suất thủy điện",
    ],
    correct: 0,
    note: "Trồng lại rừng giúp phục hồi độ che phủ và đa dạng sinh học.",
  },
  {
    section: "Giải pháp",
    question:
      "Vai trò của cộng đồng người bản địa trong bảo vệ rừng Amazon là gì?",
    options: [
      "Không quan trọng",
      "Là đối tượng phải di dời bắt buộc",
      "Cần được phát huy",
      "Chỉ tham gia du lịch",
    ],
    correct: 2,
    note: "Cộng đồng bản địa có tri thức và vai trò lớn trong bảo tồn rừng.",
  },
  {
    section: "Giải pháp",
    question: "Giải pháp tài chính trong bảo vệ Amazon là gì?",
    options: [
      "Tăng thuế gỗ",
      "Hỗ trợ tài chính cho sáng kiến bảo vệ",
      "Giảm ngân sách bảo tồn",
      "Ngừng đầu tư môi trường",
    ],
    correct: 1,
    note: "Cần nguồn lực tài chính để duy trì các chương trình bảo tồn.",
  },
  {
    section: "Tổng hợp",
    question: "Cặp nội dung nào đúng với Amazon?",
    options: [
      "Đa dạng thấp - vai trò nhỏ",
      "Đa dạng cao - vai trò toàn cầu",
      "Chỉ quan trọng với Brazil",
      "Không liên quan khí hậu",
    ],
    correct: 1,
    note: "Amazon vừa đa dạng sinh học cao vừa có vai trò toàn cầu.",
  },
  {
    section: "Tổng hợp",
    question: "Mục tiêu tổng quát của việc bảo vệ rừng Amazon là gì?",
    options: [
      "Chỉ tăng khai thác tài nguyên",
      "Cân bằng giữa sử dụng và bảo tồn bền vững",
      "Ngừng mọi hoạt động kinh tế",
      "Chỉ phát triển giao thông",
    ],
    correct: 1,
    note: "Định hướng là sử dụng hợp lý đi kèm bảo vệ bền vững.",
  },
];

let currentQuestion = 0;
const completedQuestions = [false];
let currentMode = "fillblank";

const mcqState = {
  questions: [...multipleChoiceQuestions],
  answers: new Array(multipleChoiceQuestions.length).fill(null),
  submitted: false,
};

const mcqContainer = document.getElementById("mcqContainer");
const mcqTemplate = document.getElementById("mcqQuestionTemplate");
const mcqProgressText = document.getElementById("mcqProgressText");
const mcqScoreText = document.getElementById("mcqScoreText");
const mcqProgressFill = document.getElementById("mcqProgressFill");
const mcqSubmitBtn = document.getElementById("mcqSubmitBtn");
const mcqResetBtn = document.getElementById("mcqResetBtn");
const mcqShuffleBtn = document.getElementById("mcqShuffleBtn");
const mcqResultBanner = document.getElementById("mcqResultBanner");

function switchMode(mode) {
  currentMode = mode;

  document
    .getElementById("tab-fillblank")
    .classList.toggle("active", mode === "fillblank");
  document
    .getElementById("tab-multiple")
    .classList.toggle("active", mode === "multiple");

  document
    .getElementById("fillblank-mode")
    .classList.toggle("active", mode === "fillblank");
  document
    .getElementById("multiple-mode")
    .classList.toggle("active", mode === "multiple");

  if (mode === "multiple") {
    renderMcqQuiz();
  }

  if (mode === "fillblank") {
    loadQuestion();
  }

  if (mode === "fillblank") {
    document.querySelector(".status-panel").style.display = "grid";
    updateProgress();
  } else {
    document.querySelector(".status-panel").style.display = "none";
  }
}

function getMcqScore() {
  return mcqState.answers.reduce((score, selected, index) => {
    if (selected === null) return score;
    return selected === mcqState.questions[index].correct ? score + 1 : score;
  }, 0);
}

function updateMcqStatus() {
  const total = mcqState.questions.length;
  const answered = mcqState.answers.filter((answer) => answer !== null).length;
  const score = getMcqScore();

  mcqProgressText.textContent = `${answered} / ${total}`;
  mcqScoreText.textContent = mcqState.submitted
    ? `${score} / ${total}`
    : `${score}`;
  mcqProgressFill.style.width = `${(answered / total) * 100}%`;
}

function showMcqBanner(message, isSuccess) {
  mcqResultBanner.textContent = message;
  mcqResultBanner.classList.add("show");
  mcqResultBanner.classList.remove("success", "partial");
  mcqResultBanner.classList.add(isSuccess ? "success" : "partial");
}

function renderMcqQuiz() {
  mcqContainer.innerHTML = "";

  mcqState.questions.forEach((question, questionIndex) => {
    const node = mcqTemplate.content.firstElementChild.cloneNode(true);
    const indexEl = node.querySelector(".question-index");
    const titleEl = node.querySelector(".question-title");
    const optionsEl = node.querySelector(".options");
    const feedbackEl = node.querySelector(".feedback");

    indexEl.textContent = `Câu ${questionIndex + 1} • ${question.section}`;
    titleEl.textContent = question.question;

    question.options.forEach((optionText, optionIndex) => {
      const optionLabel = document.createElement("label");
      optionLabel.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `mcq-q-${questionIndex}`;
      input.value = String(optionIndex);
      input.checked = mcqState.answers[questionIndex] === optionIndex;
      input.disabled = mcqState.submitted;

      input.addEventListener("change", () => {
        mcqState.answers[questionIndex] = optionIndex;
        updateMcqStatus();
        renderMcqQuiz();
      });

      const text = document.createElement("span");
      text.textContent = optionText;

      optionLabel.appendChild(input);
      optionLabel.appendChild(text);

      if (mcqState.answers[questionIndex] === optionIndex) {
        optionLabel.classList.add("selected");
      }

      if (mcqState.submitted) {
        const isCorrect = optionIndex === question.correct;
        const isPicked = mcqState.answers[questionIndex] === optionIndex;

        if (isCorrect) {
          optionLabel.classList.add("correct");
        } else if (isPicked && !isCorrect) {
          optionLabel.classList.add("wrong");
        }
      }

      optionsEl.appendChild(optionLabel);
    });

    if (mcqState.submitted) {
      const selected = mcqState.answers[questionIndex];
      const isRight = selected === question.correct;
      feedbackEl.classList.add(isRight ? "ok" : "bad");
      feedbackEl.textContent = isRight
        ? "Đúng"
        : `Sai. Đáp án đúng: ${question.options[question.correct]}. ${question.note}`;
    } else {
      feedbackEl.textContent = "";
      feedbackEl.classList.remove("ok", "bad");
    }

    mcqContainer.appendChild(node);
  });
}

function submitMcqQuiz() {
  const total = mcqState.questions.length;
  const answered = mcqState.answers.filter((answer) => answer !== null).length;

  if (answered < total) {
    showMcqBanner(
      `Bạn mới trả lời ${answered}/${total} câu. Hãy làm hết trước khi nộp bài.`,
      false,
    );
    return;
  }

  mcqState.submitted = true;
  const score = getMcqScore();
  const percent = Math.round((score / total) * 100);

  showMcqBanner(
    `Bạn đạt ${score}/${total} (${percent}%).`,
    score >= total * 0.7,
  );
  updateMcqStatus();
  renderMcqQuiz();
}

function resetMcqQuiz() {
  mcqState.answers = new Array(mcqState.questions.length).fill(null);
  mcqState.submitted = false;
  mcqResultBanner.textContent = "";
  mcqResultBanner.classList.remove("show", "success", "partial");
  updateMcqStatus();
  renderMcqQuiz();
}

function shuffleMcqQuiz() {
  for (let i = mcqState.questions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [mcqState.questions[i], mcqState.questions[j]] = [
      mcqState.questions[j],
      mcqState.questions[i],
    ];
  }

  mcqState.answers = new Array(mcqState.questions.length).fill(null);
  mcqState.submitted = false;
  mcqResultBanner.textContent = "";
  mcqResultBanner.classList.remove("show", "success", "partial");
  updateMcqStatus();
  renderMcqQuiz();
}

function loadQuestion() {
  currentQuestion = parseInt(document.getElementById("question-select").value);
  const question = fillBlankQuestions[currentQuestion];
  document.getElementById("question-content").innerHTML = question.content;
  clearInlineAnswers();

  document
    .querySelectorAll("#question-content .blank")
    .forEach((input, index) => {
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("spellcheck", "false");
      input.setAttribute("name", `geo-dict-${currentQuestion}-${index}`);

      input.addEventListener("input", () => autoSizeBlank(input));
      autoSizeBlank(input);
    });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.classList.remove("show");

  updateProgress();
}

function updateProgress() {
  const completed = completedQuestions.filter((q) => q).length;
  document.getElementById("completed").textContent = completed;
  document.getElementById("progressText").textContent = `${completed} / 1`;
}

function autoSizeBlank(input) {
  const minCh = 14;
  const currentLength = Math.max(input.value.trim().length + 2, minCh);
  input.style.width = `${currentLength}ch`;
}

function clearInlineAnswers() {
  document.querySelectorAll(".inline-answer").forEach((el) => el.remove());
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .trim()
    .toLowerCase();
}

function showInlineAnswer(input, answerText, isCorrect) {
  const answerNode = document.createElement("span");
  answerNode.className = `inline-answer ${isCorrect ? "ok" : "bad"}`;
  answerNode.textContent = `Đáp án: ${answerText}`;
  input.insertAdjacentElement("afterend", answerNode);
}

function checkAnswer() {
  const question = fillBlankQuestions[currentQuestion];
  const answers = question.answers;
  let allCorrect = true;
  let correctCount = 0;
  const totalBlanks = Object.keys(answers).length;
  clearInlineAnswers();

  for (let blankId in answers) {
    const input = document.getElementById(blankId);
    const userAnswer = normalizeText(input.value);
    const correctAnswer = normalizeText(answers[blankId]);
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      input.classList.remove("incorrect");
      input.classList.add("correct");
      correctCount++;
    } else {
      input.classList.remove("correct");
      input.classList.add("incorrect");
      allCorrect = false;
    }

    showInlineAnswer(input, answers[blankId], isCorrect);
    autoSizeBlank(input);
  }

  const resultDiv = document.getElementById("result");

  if (allCorrect) {
    resultDiv.innerHTML = `<div class="success">Chính xác! Bạn trả lời đúng tất cả ${totalBlanks} ô trống.</div>`;
    if (!completedQuestions[currentQuestion]) {
      completedQuestions[currentQuestion] = true;
      updateProgress();
    }
  } else {
    resultDiv.innerHTML = `<div class="partial">Bạn trả lời đúng ${correctCount}/${totalBlanks} ô trống.</div>`;
  }

  resultDiv.classList.add("show");
}

function resetQuestion() {
  const question = fillBlankQuestions[currentQuestion];
  clearInlineAnswers();

  for (let blankId in question.answers) {
    const input = document.getElementById(blankId);
    input.value = "";
    input.style.width = "";
    input.classList.remove("correct", "incorrect");
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();
  updateMcqStatus();
  renderMcqQuiz();

  mcqSubmitBtn.addEventListener("click", submitMcqQuiz);
  mcqResetBtn.addEventListener("click", resetMcqQuiz);
  mcqShuffleBtn.addEventListener("click", shuffleMcqQuiz);
});
