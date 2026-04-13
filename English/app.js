const ALL_QUESTIONS = [
  {
    id: 1,
    section: "Listening",
    text: "Where are Jenny and Fred now?",
    options: ["at home", "at the bus station", "at the airport", "at the mall"],
    correct: 2,
    note: "Đáp án tham khảo theo ngữ cảnh bài nghe mẫu phổ biến.",
    confidence: "low",
  },
  {
    id: 2,
    section: "Listening",
    text: "What are they going to do?",
    options: ["go on holiday", "go on business", "go camping", "study abroad"],
    correct: 0,
    note: "Đáp án tham khảo theo ngữ cảnh bài nghe mẫu phổ biến.",
    confidence: "low",
  },
  {
    id: 3,
    section: "Listening",
    text: "Lisa and Jake are in the _________.",
    options: ["waiting room", "baggage claim", "bedroom", "bathroom"],
    correct: 0,
    note: "Đáp án tham khảo, cần đối chiếu audio để xác nhận chính xác.",
    confidence: "low",
  },
  {
    id: 4,
    section: "Listening",
    text: "Jake has a new ___________ suitcase.",
    options: ["purple", "orange", "green", "blue"],
    correct: 0,
    note: "Đáp án tham khảo, phần nghe có thể khác theo đề gốc.",
    confidence: "low",
  },
  {
    id: 5,
    section: "Listening",
    text: "Where did Janet go on holiday last week?",
    options: ["New York", "Paris", "Sydney", "London"],
    correct: 0,
    note: "Đáp án tham khảo theo cụm câu hỏi đi cùng New York.",
    confidence: "low",
  },
  {
    id: 6,
    section: "Listening",
    text: "What problem did Janet have on the rest day during her trip?",
    options: ["lost phone", "got sick", "lost wallet", "missed flight"],
    correct: 1,
    note: "Đáp án tham khảo; nên nghe audio để chốt đáp án cuối cùng.",
    confidence: "low",
  },
  {
    id: 7,
    section: "Listening",
    text: "Peter visited the _________ and the Empire State Building.",
    options: ["Central Park", "Statue of Liberty", "Times Square", "Brooklyn"],
    correct: 1,
    note: "Đáp án tham khảo theo mạch nội dung câu 8.",
    confidence: "low",
  },
  {
    id: 8,
    section: "Listening",
    text: "After visiting some famous places, Peter said that _________ was really beautiful.",
    options: [
      "the Statue of Liberty",
      "the Empire State Building",
      "Central Park",
      "New York City",
    ],
    correct: 3,
    note: "Đáp án tham khảo theo ý tổng quát của đoạn kể chuyến đi.",
    confidence: "low",
  },
  {
    id: 9,
    section: "Listening",
    text: "What do adults drive?",
    options: [
      "bikes or motorcycles",
      "cars or motorcycles",
      "bus or train",
      "bikes or cars",
    ],
    correct: 1,
    note: "Đáp án tham khảo.",
    confidence: "low",
  },
  {
    id: 10,
    section: "Listening",
    text: "What does the Hover Go have to ride at night?",
    options: ["two wheels", "cool fan", "cool lights", "beautiful colors"],
    correct: 2,
    note: "Đáp án tham khảo.",
    confidence: "low",
  },
  {
    id: 11,
    section: "Listening",
    text: "We can ride the One Wheeler on ________ and it’s safe.",
    options: ["sand", "ground", "road", "street"],
    correct: 2,
    note: "Đáp án tham khảo.",
    confidence: "low",
  },
  {
    id: 12,
    section: "Listening",
    text: "The Hover Go and the One Wheeler are both great kinds of _________ for children.",
    options: ["bike", "car", "motorbike", "transportation"],
    correct: 3,
    note: "Đáp án tham khảo.",
    confidence: "low",
  },
  {
    id: 13,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["Laughed", "looked", "moved", "watched"],
    optionHtml: [
      "Laugh<u>ed</u>",
      "look<u>ed</u>",
      "mov<u>ed</u>",
      "watch<u>ed</u>",
    ],
    correct: 2,
    note: "'moved' có đuôi -ed đọc /d/, còn lại đọc /t/.",
    confidence: "high",
  },
  {
    id: 14,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["secondary", "reliable", "experience", "delighted"],
    optionHtml: [
      "s<u>e</u>condary",
      "r<u>e</u>liable",
      "exp<u>e</u>rience",
      "d<u>e</u>lighted",
    ],
    correct: 0,
    note: "Đáp án tham khảo: âm nguyên âm nhấn khác nhóm còn lại.",
    confidence: "medium",
  },
  {
    id: 15,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["planned", "charged", "enjoyed", "introduced"],
    optionHtml: [
      "plann<u>ed</u>",
      "charg<u>ed</u>",
      "enjoy<u>ed</u>",
      "introduc<u>ed</u>",
    ],
    correct: 3,
    note: "'introduced' thường có đuôi -ed đọc /ɪd/, các từ còn lại đọc /d/.",
    confidence: "high",
  },
  {
    id: 16,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["project", "central", "develop", "department"],
    optionHtml: [
      "proj<u>e</u>ct",
      "c<u>e</u>ntral",
      "dev<u>e</u>lop",
      "departm<u>e</u>nt",
    ],
    correct: 3,
    note: "Đáp án tham khảo theo cách đọc âm đầu/phần gạch chân.",
    confidence: "medium",
  },
  {
    id: 17,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["tested", "disappointed", "annoyed", "delighted"],
    optionHtml: [
      "test<u>ed</u>",
      "disappoint<u>ed</u>",
      "annoy<u>ed</u>",
      "delight<u>ed</u>",
    ],
    correct: 2,
    note: "'annoyed' có đuôi -ed đọc /d/, các từ còn lại đọc /ɪd/.",
    confidence: "high",
  },
  {
    id: 18,
    section: "Pronunciation",
    text: "Choose the word with different pronunciation.",
    options: ["fight", "midnight", "bonfire", "festival"],
    optionHtml: [
      "f<u>i</u>ght",
      "midn<u>i</u>ght",
      "bonf<u>i</u>re",
      "fest<u>i</u>val",
    ],
    correct: 3,
    note: "Ba từ đầu có âm /ai/ nổi bật, 'festival' khác.",
    confidence: "high",
  },
  {
    id: 19,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["Expensive", "dangerous", "traditional", "upset"],
    correct: 1,
    note: "'dangerous' nhấn âm 1, các từ còn lại thường nhấn âm 2.",
    confidence: "high",
  },
  {
    id: 20,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["comfortable", "eco-friendly", "different", "careful"],
    correct: 1,
    note: "'eco-friendly' có trọng âm chính rơi khác nhóm từ còn lại.",
    confidence: "medium",
  },
  {
    id: 21,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["photo", "souvenir", "postcard", "bonfire"],
    correct: 1,
    note: "'souvenir' nhấn âm cuối, các từ còn lại nhấn âm đầu.",
    confidence: "high",
  },
  {
    id: 22,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["sightseeing", "historic", "exchange", "convenient"],
    correct: 0,
    note: "'sightseeing' nhấn âm 1, các từ còn lại thường nhấn âm 2.",
    confidence: "high",
  },
  {
    id: 23,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["ticket", "music", "concert", "exchange"],
    correct: 3,
    note: "'exchange' nhấn âm 2, các từ còn lại nhấn âm 1.",
    confidence: "high",
  },
  {
    id: 24,
    section: "Stress",
    text: "Choose the word with different stress pattern.",
    options: ["vacation", "holiday", "restaurant", "stadium"],
    correct: 0,
    note: "'vacation' thường nhấn âm 2, các từ còn lại nhấn âm 1.",
    confidence: "medium",
  },
  {
    id: 25,
    section: "Grammar & Vocabulary",
    text: "Lan: What are you planning for your holiday? Mai: We are going to the seaside. My sister loves going to the __________. She can spend a whole day watching marine creatures there!",
    options: ["aquarium", "museum", "stadium", "food court"],
    correct: 0,
    note: "Marine creatures -> aquarium.",
    confidence: "high",
  },
  {
    id: 26,
    section: "Grammar & Vocabulary",
    text: "Nick: What did you buy at the store yesterday? Annie: I __________ shopping in the mall, and I __________ a bunch of bananas and a bag of rice.",
    options: ["go/ buy", "went/ bought", "going/ buying", "goes/ buys"],
    correct: 1,
    note: "Mốc thời gian yesterday -> thì quá khứ đơn: went/bought.",
    confidence: "high",
  },
  {
    id: 27,
    section: "Grammar & Vocabulary",
    text: "Passenger A: Excuse me, where can I collect my luggage? Passenger B: You can collect it at the __________ area, right after exit customs.",
    options: ["passport", "Boarding pass", "Baggage claim", "ticket"],
    correct: 2,
    note: "Thu hành lý ở khu baggage claim.",
    confidence: "high",
  },
  {
    id: 28,
    section: "Grammar & Vocabulary",
    text: "Agent: ____________________ – Micheal: Sure, here you are.",
    options: [
      "It's my pleasure",
      "Have you got any luggage?",
      "What are you checking in?",
      "Can I see your passport?",
    ],
    correct: 3,
    note: "Câu trả lời 'Sure, here you are' phù hợp khi được yêu cầu đưa giấy tờ.",
    confidence: "high",
  },
  {
    id: 29,
    section: "Grammar & Vocabulary",
    text: "Student A: These tablets look the same. Are they __________? Student B: Yes, they belong to us.",
    options: ["we", "Our", "ours", "theirs"],
    correct: 2,
    note: "Sau 'are' cần đại từ sở hữu: ours.",
    confidence: "high",
  },
  {
    id: 30,
    section: "Grammar & Vocabulary",
    text: "She has always dreamed of becoming __________ astronaut and exploring __________ space.",
    options: ["a/ an", "An / the", "The/ an", "a/ the"],
    correct: 1,
    note: "Theo đáp án trong bộ đề gốc: An / the.",
    confidence: "high",
  },
  {
    id: 31,
    section: "Grammar & Vocabulary",
    text: "May: I want to learn about life abroad and practice my English regularly. Sue: The best way is to have a __________.",
    options: ["stranger", "colleague", "penpal", "classmate"],
    correct: 2,
    note: "Muốn luyện tiếng Anh và hiểu đời sống nước ngoài -> penpal.",
    confidence: "high",
  },
  {
    id: 32,
    section: "Grammar & Vocabulary",
    text: "Alex: How was your trip to the mountains last weekend? Lily: It was amazing! We __________ early on Saturday and returned late on Sunday.",
    options: ["leave", "left", "leaves", "leaving"],
    correct: 1,
    note: "Quá khứ đơn đồng nhất với 'returned'.",
    confidence: "high",
  },
  {
    id: 33,
    section: "Grammar & Vocabulary",
    text: "Tom: Hi, Mary! Are you ready for our hiking trip tomorrow? Mary: Yes! I packed some snacks and water in my ___________.",
    options: ["suitcase", "wallet", "backpack", "luggage"],
    correct: 2,
    note: "Đi hiking thường dùng backpack.",
    confidence: "high",
  },
  {
    id: 34,
    section: "Grammar & Vocabulary",
    text: 'Mark: "Dad! I\'ve got 10 on the Biology test" - Dad: "______________"',
    options: ["Good way!", "You are right", "Oh, hard luck!", "Good job!"],
    correct: 3,
    note: "Khen điểm cao -> Good job!",
    confidence: "high",
  },
  {
    id: 35,
    section: "Grammar & Vocabulary",
    text: 'Student A: "Whose suitcase is this?" Student B: "It has Braun and Breeze\'s names on it, so it must be ______."',
    options: ["their", "they", "them", "theirs"],
    correct: 3,
    note: "Đứng độc lập cuối câu -> đại từ sở hữu 'theirs'.",
    confidence: "high",
  },
  {
    id: 36,
    section: "Grammar & Vocabulary",
    text: "Tom: Yesterday, I saw __________ amazing painting at the art gallery. Sara: Really? Was it __________ one you told me about last week?",
    options: ["a/an", "an/the", "the/the", "an/ Ø"],
    correct: 1,
    note: "an amazing painting; the one (xác định cụ thể).",
    confidence: "high",
  },
  {
    id: 37,
    section: "Grammar & Vocabulary",
    text: "Aya: You can see __________people in many places in big cities. Hayate: They have no place to live.",
    options: ["homeless", "old", "poor", "wealthy"],
    correct: 0,
    note: "Không có nơi ở -> homeless people.",
    confidence: "high",
  },
  {
    id: 38,
    section: "Grammar & Vocabulary",
    text: "Tulen: __________they hold the festival in Ha Noi last year? Toro: Yes, they did.",
    options: ["Does", "Do", "Will", "Did"],
    correct: 3,
    note: "last year -> trợ động từ quá khứ 'Did'.",
    confidence: "high",
  },
  {
    id: 39,
    section: "Grammar & Vocabulary",
    text: "Max: What are they doing? Yue: They are going to install solar __________ on the roofs to provide power for their house.",
    options: ["turbines", "plants", "station", "panels"],
    correct: 3,
    note: "Cụm đúng: solar panels.",
    confidence: "high",
  },
  {
    id: 40,
    section: "Grammar & Vocabulary",
    text: "Krixi: How often do you get a traffic jam? Veera: _____________",
    options: [
      "I go to school by bike.",
      "Yes, of course.",
      "Good idea! I'll do it.",
      "Once or twice a week.",
    ],
    correct: 3,
    note: "How often -> trả lời tần suất.",
    confidence: "high",
  },
  {
    id: 41,
    section: "Grammar & Vocabulary",
    text: "Keera: My cat is adorable. Butterfly: __________ is adorable, too.",
    options: ["Mine", "Your", "My", "You"],
    correct: 0,
    note: "Cần đại từ sở hữu thay cho 'my cat': mine.",
    confidence: "high",
  },
  {
    id: 42,
    section: "Grammar & Vocabulary",
    text: "Gildur: __________ youngest boy has just started going to __________ school. Arum: I see.",
    options: ["The - Ø", "A - Ø", "Ø - the", "An - Ø"],
    correct: 0,
    note: "So sánh nhất dùng 'the'; cụm go to school thường không dùng mạo từ.",
    confidence: "high",
  },
];

const QUESTIONS = ALL_QUESTIONS.filter((question) => question.id >= 13);

const state = {
  questions: [...QUESTIONS],
  answers: new Array(QUESTIONS.length).fill(null),
  submitted: false,
};

const quiz = document.getElementById("quiz");
const template = document.getElementById("questionTemplate");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");
const resultBanner = document.getElementById("resultBanner");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function answeredCount() {
  return state.answers.filter((x) => x !== null).length;
}

function score() {
  return state.questions.reduce(
    (sum, q, i) => sum + Number(state.answers[i] === q.correct),
    0,
  );
}

function updateStatus() {
  const done = answeredCount();
  progressText.textContent = `${done} / ${state.questions.length}`;
  scoreText.textContent = `${state.submitted ? score() : 0}`;
  progressFill.style.width = `${(done / state.questions.length) * 100}%`;
}

function confidenceLabel(value) {
  if (value === "high") return "Độ tin cậy: cao";
  if (value === "medium") return "Độ tin cậy: trung bình";
  return "Độ tin cậy: thấp (nên đối chiếu đề gốc/audio)";
}

function formatDialogueText(text) {
  const speakerLabel = /([A-Z][A-Za-z]*(?:\s[A-Z][A-Za-z]*)*):/g;
  let match;
  let seen = 0;
  let result = text;

  while ((match = speakerLabel.exec(text)) !== null) {
    seen += 1;
    if (seen === 2) {
      result =
        text.slice(0, match.index).trimEnd() + "\n" + text.slice(match.index);
      break;
    }
  }

  return result;
}

function render() {
  quiz.innerHTML = "";

  state.questions.forEach((q, i) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".card");
    const index = node.querySelector(".q-index");
    const text = node.querySelector(".q-text");
    const opts = node.querySelector(".opts");
    const analysis = node.querySelector(".analysis");

    card.style.animationDelay = `${i * 16}ms`;
    index.textContent = `Câu ${q.id} - ${q.section}`;
    text.textContent = formatDialogueText(q.text);

    q.options.forEach((opt, j) => {
      const id = `q${i}o${j}`;
      const label = document.createElement("label");
      label.className = "opt";
      label.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.id = id;
      input.name = `question-${i}`;
      input.checked = state.answers[i] === j;
      input.disabled = state.submitted;

      input.addEventListener("change", () => {
        state.answers[i] = j;
        render();
      });

      const span = document.createElement("span");
      const optionPrefix = `${String.fromCharCode(65 + j)}. `;
      if (q.optionHtml && q.optionHtml[j]) {
        span.innerHTML = `${optionPrefix}${q.optionHtml[j]}`;
      } else {
        span.textContent = `${optionPrefix}${opt}`;
      }

      if (state.answers[i] === j) label.classList.add("selected");
      if (state.submitted && j === q.correct) label.classList.add("correct");
      if (state.submitted && state.answers[i] === j && j !== q.correct)
        label.classList.add("wrong");

      label.append(input, span);
      opts.append(label);
    });

    if (state.submitted) {
      const isCorrect = state.answers[i] === q.correct;
      const rightText = `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`;
      analysis.textContent = isCorrect
        ? `Đúng. ${q.note} (${confidenceLabel(q.confidence)})`
        : `Sai. Đáp án đúng: ${rightText}. ${q.note} (${confidenceLabel(q.confidence)})`;
      analysis.classList.add(isCorrect ? "ok" : "bad");
    }

    quiz.append(node);
  });

  updateStatus();
}

submitBtn.addEventListener("click", () => {
  state.submitted = true;
  render();

  const s = score();
  const ratio = s / state.questions.length;
  const summary =
    ratio >= 0.85
      ? "Rất tốt!"
      : ratio >= 0.65
        ? "Khá ổn, cố gắng thêm một chút nữa."
        : "Bạn nên ôn lại phần ngữ pháp và trọng âm.";

  resultBanner.textContent = `Kết quả: ${s}/${state.questions.length}. ${summary} (Các câu chưa chọn sẽ được tính là sai.)`;
  resultBanner.classList.add("show");
});

resetBtn.addEventListener("click", () => {
  state.answers = new Array(state.questions.length).fill(null);
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  render();
});

shuffleBtn.addEventListener("click", () => {
  state.questions = [...QUESTIONS];
  shuffle(state.questions);
  state.answers = new Array(state.questions.length).fill(null);
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  render();
});

render();
