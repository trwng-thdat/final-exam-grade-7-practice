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
  {
    id: 43,
    section: "Signs",
    text: "What does the sign mean?",
    image: "picture/43.png",
    options: [
      "You can only buy our food and enjoy it at home.",
      "You are invited to enjoy our food inside.",
      "We can take our guests away for services.",
      "You can eat here.",
    ],
    correct: 0,
    note: "Biển 'TAKE-OUT ONLY' nghĩa là chỉ bán mang đi, không ăn tại chỗ.",
    confidence: "high",
  },
  {
    id: 44,
    section: "Signs",
    text: "What does the sign mean?",
    image: "picture/44.png",
    options: [
      "There aren't any trucks on this street.",
      "People must drive trucks from 7 a.m. to 7 p.m.",
      "People can drive trucks from 7 a.m. to 7 p.m.",
      "People can't drive trucks from 7 a.m. to 7 p.m.",
    ],
    correct: 3,
    note: "Theo đáp án bạn cung cấp, chọn B. Lưu ý: với nội dung biển báo trong ảnh, đáp án thường gặp là D.",
    confidence: "medium",
  },
  {
    id: 45,
    section: "Signs",
    text: "What does this sign mean?",
    image: "picture/45.png",
    options: [
      "You cannot go this way.",
      "You should step carefully.",
      "You can step fast here.",
      "You should step fast.",
    ],
    correct: 1,
    note: "Biển 'CAUTION - Watch your step' nhắc đi lại cẩn thận, để ý bước chân.",
    confidence: "high",
  },
  {
    id: 46,
    section: "Signs",
    text: "What does this sign mean?",
    image: "picture/46.png",
    options: [
      "We should take patients to the hospital.",
      "Hospitals are permitted to build here.",
      "There is a nearby medical center.",
      "The Red Cross is available.",
    ],
    correct: 2,
    note: "Biển có ký hiệu chữ thập đỏ và giường bệnh báo hiệu gần đó có cơ sở y tế/bệnh viện.",
    confidence: "high",
  },
  {
    id: 47,
    section: "Signs",
    text: "What does the sign mean?",
    image: "picture/47.png",
    options: [
      "You must not take food or drinks out of this room.",
      "You cannot have snacks in this room.",
      "You can buy cheaper food here.",
      "You must eat in this room.",
    ],
    correct: 1,
    note: "Biển 'NO FOOD OR DRINK IN THIS AREA' nghĩa là cấm ăn uống trong khu vực này.",
    confidence: "high",
  },
  {
    id: 48,
    section: "Signs",
    text: "What does the sign mean?",
    image: "picture/48.png",
    options: [
      "You mustn't wear shoes into this place.",
      "You can wear shoes into this place.",
      "You have to take your shoes into this place.",
      "You don't have to wear shoes into this place.",
    ],
    correct: 0,
    note: "Biển 'Please take off your shoes' yêu cầu phải tháo giày trước khi vào.",
    confidence: "high",
  },
  {
    id: 49,
    section: "Word Form",
    type: "fill",
    text: "We should __________ check our tests before submitting. (care)",
    accepted: ["carefully"],
    note: "Sau động từ 'check' cần trạng từ để bổ nghĩa cách kiểm tra, nên dùng 'carefully'.",
    confidence: "high",
  },
  {
    id: 50,
    section: "Word Form",
    type: "fill",
    text: "My friend __________ the story to me, but I didn't understand. (explanation)",
    accepted: ["explained"],
    note: "Câu cần động từ ở quá khứ đơn vì mệnh đề sau dùng 'didn't understand' => 'explained'.",
    confidence: "high",
  },
  {
    id: 51,
    section: "Word Form",
    type: "fill",
    text: "Sugar is not an __________ food because we need it to live. (health)",
    accepted: ["unhealthy"],
    note: "Từ gốc 'health' đổi thành tính từ phủ định 'unhealthy' để khớp nghĩa câu.",
    confidence: "high",
  },
  {
    id: 52,
    section: "Word Form",
    type: "fill",
    text: "Did they make a __________ not to go to Italy for their vacation? (decide)",
    accepted: ["decision"],
    note: "Sau mạo từ 'a' cần danh từ, nên dùng 'decision'.",
    confidence: "high",
  },
  {
    id: 53,
    section: "Word Form",
    type: "fill",
    text: "Catching the common cold is __________ for everybody. (please)",
    accepted: ["unpleasant"],
    note: "Nghĩa câu là 'bị cảm lạnh là điều khó chịu', nên dùng tính từ 'unpleasant'.",
    confidence: "high",
  },
  {
    id: 54,
    section: "Word Form",
    type: "fill",
    text: "He was the fastest runner in the running __________. (compete)",
    accepted: ["competition"],
    note: "Sau cụm 'running' ở đây cần danh từ chỉ sự kiện thi đấu: 'competition'.",
    confidence: "high",
  },
  {
    id: 55,
    section: "Word Form",
    type: "fill",
    text: "People in my village __________ celebrate Tet every year, with special food, family gatherings, and many traditional activities. (TRADITIONAL)",
    accepted: ["traditionally"],
    note: "Cần trạng từ bổ nghĩa cho động từ 'celebrate', nên dùng 'traditionally'.",
    confidence: "high",
  },
  {
    id: 56,
    section: "Word Form",
    type: "fill",
    text: "Our team __________ the opponent yesterday after a very exciting and competitive match. (DEFEAT)",
    accepted: ["defeated"],
    note: "Có mốc thời gian 'yesterday' nên dùng quá khứ đơn: 'defeated'.",
    confidence: "high",
  },
  {
    id: 57,
    section: "Word Form",
    type: "fill",
    text: "My class will visit some __________ places in Hanoi. (HISTORY)",
    accepted: ["historical"],
    note: "Cần tính từ đứng trước danh từ 'places', nên dùng 'historical'.",
    confidence: "high",
  },
  {
    id: 58,
    section: "Word Form",
    type: "fill",
    text: "This app brings great __________ to users by helping them save time and shop more easily online. (CONVENIENT)",
    accepted: ["convenience"],
    note: "Sau tính từ 'great' cần danh từ, nên dùng 'convenience'.",
    confidence: "high",
  },
  {
    id: 59,
    section: "Word Form",
    type: "fill",
    text: "The trip was such an __________ experience. (FORGET)",
    accepted: ["unforgettable"],
    note: "Cụm tự nhiên là 'an unforgettable experience' (một trải nghiệm đáng nhớ).",
    confidence: "high",
  },
  {
    id: 60,
    section: "Word Form",
    type: "fill",
    text: "His __________ to understand English makes it difficult for him to study abroad. (ABLE)",
    accepted: ["ability"],
    note: "Cần danh từ chỉ 'sự không có khả năng', nên dùng 'inability'.",
    confidence: "high",
  },
  {
    id: 61,
    section: "Word Form",
    type: "fill",
    text: "__________, the pollution was so terrible that I had to stay inside the hotel during the day. (UNLUCKY)",
    accepted: ["unluckily"],
    note: "Đầu câu cần trạng từ liên kết toàn câu, nên dùng 'Unluckily'.",
    confidence: "high",
  },
  {
    id: 62,
    section: "Word Form",
    type: "fill",
    text: "In the year 1905, astronauts __________ life on this planet. (DISCOVERY)",
    accepted: ["discovered"],
    note: "Cần động từ quá khứ để diễn tả hành động trong năm 1905: 'discovered'.",
    confidence: "high",
  },
  {
    id: 63,
    section: "Word Form",
    type: "fill",
    text: "A lovely  cat and a __________ dog help him to find his bag. (FRIEND)",
    accepted: ["friendly"],
    note: "Cần tính từ đứng trước danh từ 'dog', nên dùng 'friendly'.",
    confidence: "high",
  },
  {
    id: 64,
    section: "Word Form",
    type: "fill",
    text: "How many __________ are there in the program tonight? (PERFORM)",
    accepted: ["performances", "performers"],
    note: "Sau 'How many' cần danh từ số nhiều chỉ người biểu diễn: 'performers'.",
    confidence: "high",
  },
  {
    id: 65,
    section: "Word Form",
    type: "fill",
    text: "__________ energy uses panels to catch sunlight and convert it into electricity. (SUN)",
    accepted: ["solar"],
    note: "Cụm đúng là 'solar energy' (năng lượng mặt trời).",
    confidence: "high",
  },
  {
    id: 66,
    section: "Word Form",
    type: "fill",
    text: "When I first arrived, I spent half a day going __________ around Vancouver. (SIGHTSEE)",
    accepted: ["sightseeing"],
    note: "Cụm cố định 'go sightseeing' nghĩa là đi tham quan.",
    confidence: "high",
  },
  {
    id: 67,
    section: "Reading - Passage A",
    text: "Eating a variety of foods and drinking plenty of water are important for good health.",
    options: ["True", "False"],
    correct: 0,
    note: "Đoạn văn nói rõ cần ăn đa dạng thực phẩm và nhớ uống nhiều nước.",
    evidence:
      "You should eat a variety of foods... Remember to drink a lot of water.",
    reasoning: "Câu phát biểu lặp lại đúng ý trong bài đọc nên là True.",
    confidence: "high",
  },
  {
    id: 68,
    section: "Reading - Passage A",
    text: "Playing a sport or walking instead of driving can help maintain fitness.",
    options: ["True", "False"],
    correct: 0,
    note: "Bài đọc nêu: chơi thể thao thường xuyên và có thể đi bộ thay vì dùng xe.",
    evidence:
      "You can play a sport three or four times a week. You can even give up your bikes and cars to walk.",
    reasoning:
      "Bài đọc khuyến khích vận động và đi bộ thay phương tiện, nên phát biểu là True.",
    confidence: "high",
  },
  {
    id: 69,
    section: "Reading - Passage A",
    text: "A diet without any sugar or fat is the best way to stay healthy.",
    options: ["True", "False"],
    correct: 1,
    note: "Đoạn văn khẳng định chế độ ăn không có đường hoặc chất béo cũng không tốt.",
    evidence: "A diet without sugar or fat is not good, either.",
    reasoning:
      "Phát biểu nói 'best way' nhưng bài đọc nói kiểu ăn đó 'not good', nên là False.",
    confidence: "high",
  },
  {
    id: 70,
    section: "Reading - Passage A",
    text: "Staying fit is easy and requires no effort or determination.",
    options: ["True", "False"],
    correct: 1,
    note: "Bài đọc nói để khỏe mạnh cần sự quyết tâm, không phải tự nhiên mà dễ.",
    evidence:
      "It is neither difficult nor easy to stay fit. You need to be determined to do good things for your health.",
    reasoning:
      "Bài đọc phủ định ý 'easy' và nhấn mạnh cần quyết tâm, nên phát biểu là False.",
    confidence: "high",
  },
  {
    id: 71,
    section: "Reading - Passage A",
    text: "How many guidelines do we need to follow to be fit and healthy?",
    options: ["two", "three", "four", "one"],
    correct: 1,
    note: "Có 3 gợi ý chính trong đoạn: ăn uống lành mạnh, tập thể dục đều đặn, duy trì nếp sinh hoạt.",
    confidence: "high",
  },
  {
    id: 72,
    section: "Reading - Passage A",
    text: "Being fit and healthy, everyone remembers __________ junk food and soft drink.",
    options: ["eat", "to eat", "to avoid", "to take"],
    correct: 2,
    note: "Theo ngữ cảnh của bài đọc, cần tránh đồ ăn vặt và nước ngọt, nên chọn 'to avoid'.",
    confidence: "high",
  },
  {
    id: 73,
    section: "Reading - Passage B",
    text: "English is spoken as a first or second language in many countries.",
    options: ["True", "False"],
    correct: 0,
    note: "Đoạn văn nêu rõ English is spoken in many countries as a first or second language.",
    evidence: "It is spoken in many countries as a first or second language.",
    reasoning: "Phát biểu trùng khớp trực tiếp với thông tin trong bài đọc.",
    confidence: "high",
  },
  {
    id: 74,
    section: "Reading - Passage B",
    text: "English is mainly used only in education.",
    options: ["True", "False"],
    correct: 1,
    note: "Đoạn văn nhấn mạnh English còn quan trọng trong business, technology, research và giao tiếp quốc tế.",
    evidence:
      "One reason English is so widely used is its importance in business and technology.",
    reasoning: "Không chỉ dùng trong giáo dục nên phát biểu này là sai.",
    confidence: "high",
  },
  {
    id: 75,
    section: "Reading - Passage B",
    text: "Some learners find English pronunciation and grammar difficult.",
    options: ["True", "False"],
    correct: 0,
    note: "Bài đọc nêu trực tiếp khó khăn ở phát âm và ngữ pháp.",
    evidence: "Some learners find its pronunciation and grammar challenging.",
    reasoning: "Phát biểu đúng theo nguyên văn của đoạn.",
    confidence: "high",
  },
  {
    id: 76,
    section: "Reading - Passage B",
    text: "English is unhelpful for international communication.",
    options: ["True", "False"],
    correct: 1,
    note: "Đoạn văn cho biết English plays a key role in international communication.",
    evidence: "It plays a key role in international communication.",
    reasoning: "Trái ngược với nội dung bài đọc nên là False.",
    confidence: "high",
  },
  {
    id: 77,
    section: "Reading - Passage B",
    text: "What is the best title for the passage?",
    options: [
      "learning difficulties",
      "school subject",
      "modern technology",
      "global communication tool",
    ],
    correct: 3,
    note: "Nội dung xoay quanh vai trò toàn cầu của tiếng Anh trong giao tiếp, việc làm và kết nối.",
    confidence: "high",
  },
  {
    id: 78,
    section: "Reading - Passage B",
    text: 'The word "it" in the sentence "because it offers better job opportunities and helps them connect..." refers to:',
    options: [
      "job opportunities",
      "learning English",
      "people",
      "studying abroad",
    ],
    correct: 1,
    note: "Trong ngữ cảnh câu, 'it' thay cho hành động learning English.",
    confidence: "high",
  },
  {
    id: 79,
    section: "Reading - Passage C",
    text: "Population problems are the same all over the world.",
    options: ["True", "False"],
    correct: 1,
    note: "Đoạn văn mở đầu khẳng định vấn đề dân số khác nhau ở các khu vực khác nhau.",
    evidence:
      "Population problems are different in different parts of the world.",
    reasoning:
      "Vì đề bài nói 'the same' nên trái nghĩa với đoạn văn và là False.",
    confidence: "high",
  },
  {
    id: 80,
    section: "Reading - Passage C",
    text: "In Europe, young couples usually have more than two children.",
    options: ["True", "False"],
    correct: 1,
    note: "Đoạn văn cho biết nhiều người trẻ chỉ có một con hoặc không có con.",
    evidence:
      "The birth rate is low because many young people have only one child or none at all.",
    reasoning:
      "Nội dung trái ngược với phát biểu 'more than two children', nên False.",
    confidence: "high",
  },
  {
    id: 81,
    section: "Reading - Passage C",
    text: "The population of Africa has increased rapidly.",
    options: ["True", "False"],
    correct: 0,
    note: "Đoạn văn nêu rõ dân số châu Phi đã tăng nhanh trong 40 năm qua.",
    evidence: "The population has grown rapidly over the last 40 years.",
    reasoning: "Phát biểu khớp nguyên ý trong bài đọc nên là True.",
    confidence: "high",
  },
  {
    id: 82,
    section: "Reading - Passage C",
    text: "Asia has the highest population growth rate in the world.",
    options: ["True", "False"],
    correct: 0,
    note: "Đoạn văn ghi rõ châu Á có tốc độ tăng dân số cao nhất hiện nay.",
    evidence: "It also has the highest population growth rate today.",
    reasoning: "Phát biểu trùng với thông tin đoạn văn nên là True.",
    confidence: "high",
  },
  {
    id: 83,
    section: "Reading - Passage C",
    text: "How do people feel after they retire?",
    options: ["delighted", "lonely", "sad", "awful"],
    correct: 1,
    note: "Đoạn văn nêu: After retirement, they feel lonely.",
    confidence: "high",
  },
  {
    id: 84,
    section: "Reading - Passage C",
    text: "Why do many African families have a lot of children?",
    options: [
      "to go to school",
      "to look after older people",
      "to look after babies",
      "to take after older people",
    ],
    correct: 1,
    note: "Bài đọc nói nhiều gia đình có nhiều con để chăm sóc người lớn tuổi và giúp làm việc trên đất đai.",
    confidence: "high",
  },
  {
    id: 85,
    section: "Reading - Passage D",
    text: "how many suitcases should I take ________ what can I bring in my backpack?",
    options: ["and", "or", "because", "but"],
    correct: 0,
    note: "Liên từ nối hai câu hỏi song song: and.",
    confidence: "high",
  },
  {
    id: 86,
    section: "Reading - Passage D",
    text: "the more ________ you bring, the more expensive the ticket is.",
    options: ["passport", "Boarding pass", "money", "luggage"],
    correct: 3,
    note: "Nghĩa câu là: mang càng nhiều hành lý thì vé càng đắt.",
    confidence: "high",
  },
  {
    id: 87,
    section: "Reading - Passage D",
    text: "not to take ________ items like large batteries or sharp objects.",
    options: ["Larger", "dangerous", "Careful", "many"],
    correct: 1,
    note: "Từ cần đi với 'items' là dangerous.",
    confidence: "high",
  },
  {
    id: 88,
    section: "Reading - Passage D",
    text: "________ I'll have to go through customs.",
    options: ["although", "However", "Because", "so"],
    correct: 2,
    note: "Nguyên nhân được nối bằng because.",
    confidence: "high",
  },
  {
    id: 89,
    section: "Reading - Passage D",
    text: "get ________ the plane.",
    options: ["on", "off", "through", "from"],
    correct: 0,
    note: "Cụm đúng là get on the plane.",
    confidence: "high",
  },
  {
    id: 90,
    section: "Reading - Passage D",
    text: "able to ________ me know more about air traveling.",
    options: ["hope", "handle", "hold", "help"],
    correct: 3,
    note: "Cấu trúc đúng là help me know more.",
    confidence: "high",
  },
  {
    id: 91,
    section: "Reading - Passage E",
    text: "Brazil's Carnival, ________ is considered by many to be 'the greatest show on Earth.'",
    options: ["which", "who", "where", "whose"],
    correct: 0,
    note: "Đại từ quan hệ chỉ sự vật: which.",
    confidence: "high",
  },
  {
    id: 92,
    section: "Reading - Passage E",
    text: "travel to Brazil ________ they want to enjoy this exciting celebration.",
    options: ["but", "so", "because", "although"],
    correct: 2,
    note: "Nêu lý do nên dùng because.",
    confidence: "high",
  },
  {
    id: 93,
    section: "Reading - Passage E",
    text: "The festival is very ________ with live music and dancing in the streets.",
    options: ["boring", "dramatic", "dangerous", "crowded"],
    correct: 3,
    note: "Lễ hội đông đúc: crowded.",
    confidence: "high",
  },
  {
    id: 94,
    section: "Reading - Passage E",
    text: "More than 70 samba schools ________ every year for prizes.",
    options: ["compete", "competes", "competed", "competing"],
    correct: 0,
    note: "Chủ ngữ số nhiều nên dùng động từ nguyên mẫu: compete.",
    confidence: "high",
  },
  {
    id: 95,
    section: "Reading - Passage E",
    text: "take part ________ a parade.",
    options: ["at", "in", "on", "for"],
    correct: 1,
    note: "Cụm cố định: take part in.",
    confidence: "high",
  },
  {
    id: 96,
    section: "Reading - Passage E",
    text: "The festival ________ before the Catholic season of Lent.",
    options: ["begin", "began", "begins", "beginning"],
    correct: 2,
    note: "Sự thật hiển nhiên nên dùng hiện tại đơn: begins.",
    confidence: "high",
  },
  {
    id: 97,
    section: "Reading - Passage F",
    text: "Last spring, I ________ my cousin living in Ho Chi Minh City.",
    options: ["visit", "visits", "visited", "visiting"],
    correct: 2,
    note: "last spring -> quá khứ đơn: visited.",
    confidence: "high",
  },
  {
    id: 98,
    section: "Reading - Passage F",
    text: "I had such a great time, ________ I want to share my personal experience.",
    options: ["so", "and", "but", "or"],
    correct: 1,
    note: "Theo ảnh đáp án là and.",
    confidence: "high",
  },
  {
    id: 99,
    section: "Reading - Passage F",
    text: "Tet is a celebration of the start of ________.",
    options: ["spring", "summer", "autumn", "winter"],
    correct: 0,
    note: "Tết gắn với sự khởi đầu của mùa xuân.",
    confidence: "high",
  },
  {
    id: 100,
    section: "Reading - Passage F",
    text: "The city is ________ of flower vendors.",
    options: ["made", "fond", "full", "proud"],
    correct: 2,
    note: "Cụm đúng: full of.",
    confidence: "high",
  },
  {
    id: 101,
    section: "Reading - Passage F",
    text: "for ________ loved ones who have passed away.",
    options: ["my", "her", "your", "their"],
    correct: 3,
    note: "Nói về loved ones của họ: their.",
    confidence: "high",
  },
  {
    id: 102,
    section: "Reading - Passage F",
    text: "for families to ________ to their hometown to celebrate the New Year.",
    options: ["return", "leave", "replace", "repeat"],
    correct: 0,
    note: "Cụm đúng là return to their hometown.",
    confidence: "high",
  },
  {
    id: 103,
    section: "Sentence Rewrite",
    type: "fill",
    text: "There were wild streets ___ when England won the Cup. (celebration)",
    accepted: ["celebrations"],
    note: "Cụm đúng theo đề là 'street celebrations'.",
    confidence: "high",
  },
  {
    id: 104,
    section: "Sentence Rewrite",
    type: "fill",
    text: "They organized a dinner ____ the year's successes. (celebration)",
    accepted: ["in celebration of"],
    note: "Cụm cố định: in celebration of.",
    confidence: "high",
  },
  {
    id: 105,
    section: "Sentence Rewrite",
    type: "fill",
    text: "The school library informs students about the ___ books and online resources every semester. (availability)",
    accepted: ["availability of"],
    note: "Cụm đúng: availability of books and resources.",
    confidence: "high",
  },
  {
    id: 106,
    section: "Sentence Rewrite",
    type: "fill",
    text: "Tickets for the special cultural tours during the festival ____, so visitors are advised to book early to secure their spots. (availability)",
    accepted: ["subject to availability", "are subject to availability"],
    note: "Cụm đúng theo đề: subject to availability.",
    confidence: "high",
  },
  {
    id: 107,
    section: "Sentence Rewrite",
    type: "fill",
    text: "There is now intense ___ schools to attract students. (competition)",
    accepted: ["competition between"],
    note: "Cụm đúng: competition between schools.",
    confidence: "high",
  },
  {
    id: 108,
    section: "Sentence Rewrite",
    type: "fill",
    text: "She plans to go into ___ her classmates. (competition)",
    accepted: ["competition with"],
    note: "Cụm đúng: go into competition with.",
    confidence: "high",
  },
  {
    id: 110,
    section: "Sentence Rewrite",
    type: "fill",
    text: "My suitcase is medium-sized and old. Its color is dark red.\n-> I have ___.",
    accepted: [
      "a medium-sized old dark red suitcase",
      "a medium-sized old dark red suitcase.",
    ],
    note: "Sắp xếp tính từ theo cụm trong đề mẫu.",
    confidence: "high",
  },
  {
    id: 112,
    section: "Sentence Rewrite",
    type: "fill",
    text: "I had to spend two hours finishing my assignment.\n-> It took ___.",
    accepted: [
      "me two hours to finish my assignment",
      "me two hours to finish my assignment.",
    ],
    note: "Đổi cấu trúc spend time doing -> It took + someone + time + to V.",
    confidence: "high",
  },
  {
    id: 114,
    section: "Sentence Rewrite",
    type: "fill",
    text: "She gave me a grey suitcase. It is large and quite old.\n-> She gave me ___.",
    accepted: [
      "a large quite old grey suitcase",
      "a large quite old grey suitcase.",
    ],
    note: "Sắp xếp cụm tính từ theo đề mẫu.",
    confidence: "high",
  },
  {
    id: 116,
    section: "Sentence Rewrite",
    type: "fill",
    text: "Jimmy spent so much time doing the assignment that the teacher assigned last week.\n-> It took ___.",
    accepted: [
      "Jimmy so much time to do the assignment that the teacher assigned last week",
      "Jimmy so much time to do the assignment that the teacher assigned last week.",
    ],
    note: "Giữ nguyên ý và đổi về mẫu It took.",
    confidence: "high",
  },
  {
    id: 118,
    section: "Sentence Rewrite",
    type: "fill",
    text: "My backpack is big and modern. Its color is light pink.\n-> I have ___.",
    accepted: [
      "a big modern light pink backpack",
      "a big modern light pink backpack.",
    ],
    note: "Gộp mô tả thành cụm danh từ theo đề mẫu.",
    confidence: "high",
  },
  {
    id: 120,
    section: "Sentence Rewrite",
    type: "fill",
    text: "I had to spend 60 minutes finishing my English test.\n-> It took ___.",
    accepted: [
      "me 60 minutes to finish my English test",
      "me 60 minutes to finish my English test.",
    ],
    note: "Đổi cấu trúc tương tự câu 112.",
    confidence: "high",
  },
];

const QUESTIONS = ALL_QUESTIONS.filter((question) => question.id >= 13);

const SECTION_DEFINITIONS = [
  {
    key: "multiple-choice",
    title: "Trắc nghiệm",
    range: "Câu 13-48",
    description:
      "Câu 13-48: Pronunciation, Stress, Grammar & Vocabulary, Signs.",
    startId: 13,
    endId: 48,
  },
  {
    key: "word-form",
    title: "Word form",
    range: "Câu 49-66",
    description: "Câu 49-66: Word form.",
    startId: 49,
    endId: 66,
  },
  {
    key: "reading",
    title: "Bài đọc",
    range: "Câu 67-102",
    description:
      "Câu 67-102: Reading passages, comprehension questions, and cloze passages.",
    startId: 67,
    endId: 102,
  },
  {
    key: "sentence-rewrite",
    title: "Viết lại câu",
    range: "Câu 103-120",
    description: "Câu 103-120: Viết lại câu, điền đúng phần đáp án yêu cầu.",
    startId: 103,
    endId: 120,
  },
];

const state = {
  questions: [...QUESTIONS],
  currentSection: SECTION_DEFINITIONS[0].key,
  answers: Object.fromEntries(QUESTIONS.map((question) => [question.id, null])),
  submitted: false,
};

const quiz = document.getElementById("quiz");
const template = document.getElementById("questionTemplate");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");
const resultBanner = document.getElementById("resultBanner");
const sectionTabs = document.getElementById("sectionTabs");
const sectionHint = document.getElementById("sectionHint");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const PASSAGE_A = {
  heading:
    "Passage A - Nothing is as precious as good health. Following some guidelines to be fit and healthy:",
  bullets: [
    {
      title: "Eat a healthful diet",
      body: "You should eat a variety of foods. You should not eat too much sugar or fat. A diet without sugar or fat is not good, either. Eat a lot of vegetables. Avoid junk food and soft drinks. Remember to drink a lot of water.",
    },
    {
      title: "Exercise regularly",
      body: "You can play a sport three or four times a week. You can even give up your bikes and cars to walk.",
    },
    {
      title: "Maintain a daily routine",
      body: "This routine should balance between life and work. Being under great stress can destroy your health very quickly.",
    },
  ],
  closing:
    "Good health is what everyone wishes for. It is neither difficult nor easy to stay fit. You need to be determined to do good things for your health.",
};

const PASSAGE_B = {
  heading: "Passage B",
  paragraphs: [
    "English is one of the most important languages in the world. It is spoken in many countries as a first or second language, so it plays a key role in international communication.",
    "One reason English is so widely used is its importance in business and technology. Many international companies use English as their main working language. In addition, most scientific research and online content are written in English.",
    "However, learning English is not always easy. Some learners find its pronunciation and grammar challenging. Despite these difficulties, many people continue to study English because it offers better job opportunities and helps them connect with people from different cultures.",
    "For these reasons, English is considered a global language and is widely used around the world today.",
  ],
};

const PASSAGE_C = {
  heading: "Passage C",
  paragraphs: [
    "Population problems are different in different parts of the world. For example, in many European countries, the population is getting older. The birth rate is low because many young people have only one child or none at all. After retirement, they feel lonely and often very poor because they don't save enough money.",
    "In Africa, the population problems are very different. The population has grown rapidly over the last 40 years, and it has a relatively young population. Many families continue to have large numbers of children to look after older people and to help on the land.",
    "Asia is the largest and most populous of Earth's continents. It also has the highest population growth rate today, and its population almost quadrupled during the 20th century. The Asian population will continue to grow, increasing pressure on the region's natural resources.",
  ],
};

const CLOZE_INTRO =
  "V. Choose the word (A, B, C or D) that best fits the blank space in the following passage. (1.5 pts)";

const CLOZE_PASSAGES = [
  {
    key: "passage-d",
    title: "Passage A",
    startId: 85,
    endId: 90,
    paragraphs: [
      "Last summer, I was planning on taking an airplane for the first time, but there were many things I didn't know. For example, how many suitcases should I take (85) ________ what can I bring in my backpack? So, I asked my mom for help, and she told me that the more (86) ________ you bring, the more expensive the ticket is.",
      "So, she suggested bringing only the things I needed. She also told me not to take (87) ________ items like large batteries or sharp objects (88) ________ I'll have to go through customs. My mom also said not to lose my boarding pass or passport because I'd need them to get (89) ________ the plane.",
      "Finally, she told me I needed to find the baggage claim after the airplane landed to pick up my suitcases. I'm happy my mom was able to (90) ________ me know more about air traveling because it made the experience better.",
    ],
  },
  {
    key: "passage-e",
    title: "Passage B",
    startId: 91,
    endId: 96,
    paragraphs: [
      "The largest festival in the world is Brazil's Carnival, (91) ________ is considered by many to be 'the greatest show on Earth.' Every year, more than 5 million people travel to Brazil (92) ________ they want to enjoy this exciting celebration. The festival is very (93) ________ with live music and dancing in the streets.",
      "More than 70 samba schools (94) ________ every year for prizes. Dancers wear colorful costumes, and they form a long line to take part (95) ________ a parade. The festival (96) ________ before the Catholic season of Lent. It is also a time when people forget their daily worries and enjoy life.",
    ],
  },
  {
    key: "passage-f",
    title: "Passage C",
    startId: 97,
    endId: 102,
    paragraphs: [
      "Last spring, I (97) ________ my cousin living in Ho Chi Minh City. She suggested the best time to visit the city was during the Tet festival. I had such a great time, (98) ________ I want to share my personal experience and what I learned about the Vietnam Lunar New Year. First, Tet is a celebration of the start of (99) ________.",
      "The city is (100) ________ of flower vendors, and all the trees are in bloom. Second, it's about paying respect to your ancestors. I saw many people burning incense and families putting out food and fruit for (101) ________ loved ones who have passed away. Finally, Tet is about spending time with your family. I was surprised at how empty the city was.",
      "My cousin told me it's a tradition for families to (102) ________ to their hometown to celebrate the New Year.",
    ],
  },
];

function getClozePassage(questionId) {
  return (
    CLOZE_PASSAGES.find(
      (passage) => questionId >= passage.startId && questionId <= passage.endId,
    ) || null
  );
}

function isClozePassageStart(questionId) {
  return CLOZE_PASSAGES.some((passage) => passage.startId === questionId);
}

function buildClozeIntroBlock() {
  const wrapper = document.createElement("section");
  wrapper.className = "reading-passage cloze-passage";

  const title = document.createElement("h4");
  title.className = "reading-title";
  title.textContent = CLOZE_INTRO;
  wrapper.append(title);

  return wrapper;
}

function buildClozePassageBlock(passage) {
  const wrapper = document.createElement("section");
  wrapper.className = "reading-passage cloze-passage";

  const title = document.createElement("h4");
  title.className = "reading-title";
  title.textContent = passage.title;
  wrapper.append(title);

  passage.paragraphs.forEach((paragraph) => {
    const item = document.createElement("p");
    item.className = "reading-item";
    item.textContent = paragraph;
    wrapper.append(item);
  });

  return wrapper;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function normalizeText(value) {
  return String(value).trim().toLowerCase().replace(/\s+/g, "");
}

function getSectionDefinition(sectionKey) {
  return (
    SECTION_DEFINITIONS.find((section) => section.key === sectionKey) ||
    SECTION_DEFINITIONS[0]
  );
}

function getQuestionsForSection(sectionKey) {
  const section = getSectionDefinition(sectionKey);
  return state.questions.filter(
    (question) =>
      question.id >= section.startId && question.id <= section.endId,
  );
}

function getCurrentQuestions() {
  return getQuestionsForSection(state.currentSection);
}

function getAnswer(questionId) {
  return state.answers[questionId];
}

function setAnswer(questionId, value) {
  state.answers[questionId] = value;
}

function answeredCount(questions) {
  return questions.reduce((count, question) => {
    const answer = getAnswer(question.id);
    if (question.type === "fill") {
      return count + Number(typeof answer === "string" && answer.trim() !== "");
    }
    return count + Number(answer !== null);
  }, 0);
}

function isAnswerCorrect(question, answer) {
  if (question.type === "fill") {
    if (typeof answer !== "string") return false;
    const normalized = normalizeText(answer);
    return question.accepted.some((item) => normalizeText(item) === normalized);
  }
  return answer === question.correct;
}

function score() {
  return state.questions.reduce((sum, question) => {
    return sum + Number(isAnswerCorrect(question, getAnswer(question.id)));
  }, 0);
}

function updateStatus() {
  const currentQuestions = getCurrentQuestions();
  const done = answeredCount(currentQuestions);
  const section = getSectionDefinition(state.currentSection);
  progressText.textContent = `${done} / ${currentQuestions.length}`;
  sectionHint.textContent = `${section.description} Bạn có thể chuyển phần bất cứ lúc nào, đáp án đã nhập sẽ được giữ lại.`;
  scoreText.textContent = `${state.submitted ? score() : 0}`;
  progressFill.style.width = currentQuestions.length
    ? `${(done / currentQuestions.length) * 100}%`
    : "0%";
}

function confidenceLabel(value) {
  if (value === "high") return "Độ tin cậy: cao";
  if (value === "medium") return "Độ tin cậy: trung bình";
  return "Độ tin cậy: thấp (nên đối chiếu đề gốc/audio)";
}

function isTrueFalseQuestion(question) {
  if (!Array.isArray(question.options) || question.options.length !== 2) {
    return false;
  }
  return (
    normalizeText(question.options[0]) === "true" &&
    normalizeText(question.options[1]) === "false"
  );
}

function buildEvidenceNote(question) {
  if (!isTrueFalseQuestion(question)) return "";
  const parts = [];
  if (question.evidence) {
    parts.push(`Trích đoạn: "${question.evidence}".`);
  }
  if (question.reasoning) {
    parts.push(`Lý do: ${question.reasoning}`);
  }
  return parts.length > 0 ? ` ${parts.join(" ")}` : "";
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

function isReadingPassageAQuestion(question) {
  return question.id >= 67 && question.id <= 70;
}

function isReadingPassageBQuestion(question) {
  return question.id >= 73 && question.id <= 78;
}

function isReadingPassageCQuestion(question) {
  return question.id >= 79 && question.id <= 84;
}

function buildPassageABlock() {
  const wrapper = document.createElement("section");
  wrapper.className = "reading-passage";

  const title = document.createElement("h4");
  title.className = "reading-title";
  title.textContent = PASSAGE_A.heading;
  wrapper.append(title);

  const list = document.createElement("div");
  list.className = "reading-list";

  PASSAGE_A.bullets.forEach((item) => {
    const row = document.createElement("p");
    row.className = "reading-item";
    row.innerHTML = `<strong>+ ${item.title}.</strong> ${item.body}`;
    list.append(row);
  });

  wrapper.append(list);

  const closing = document.createElement("p");
  closing.className = "reading-closing";
  closing.textContent = PASSAGE_A.closing;
  wrapper.append(closing);

  return wrapper;
}

function buildPassageBBlock() {
  const wrapper = document.createElement("section");
  wrapper.className = "reading-passage";

  const title = document.createElement("h4");
  title.className = "reading-title";
  title.textContent = PASSAGE_B.heading;
  wrapper.append(title);

  PASSAGE_B.paragraphs.forEach((paragraph) => {
    const item = document.createElement("p");
    item.className = "reading-item";
    item.textContent = paragraph;
    wrapper.append(item);
  });

  return wrapper;
}

function buildPassageCBlock() {
  const wrapper = document.createElement("section");
  wrapper.className = "reading-passage";

  const title = document.createElement("h4");
  title.className = "reading-title";
  title.textContent = PASSAGE_C.heading;
  wrapper.append(title);

  PASSAGE_C.paragraphs.forEach((paragraph) => {
    const item = document.createElement("p");
    item.className = "reading-item";
    item.textContent = paragraph;
    wrapper.append(item);
  });

  return wrapper;
}

function renderSectionTabs() {
  sectionTabs.innerHTML = "";

  SECTION_DEFINITIONS.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-tab";
    button.setAttribute("role", "tab");
    button.setAttribute(
      "aria-selected",
      String(section.key === state.currentSection),
    );
    button.setAttribute("aria-label", `${section.title} ${section.range}`);

    if (section.key === state.currentSection) {
      button.classList.add("active");
    }

    button.innerHTML = `
      <span class="section-tab-title">${section.title}</span>
      <span class="section-tab-meta">${section.range}</span>
    `;

    button.addEventListener("click", () => {
      if (state.currentSection === section.key) return;
      state.currentSection = section.key;
      render();
    });

    sectionTabs.append(button);
  });
}

function render() {
  quiz.innerHTML = "";
  renderSectionTabs();

  const visibleQuestions = getCurrentQuestions();

  visibleQuestions.forEach((q, i) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".card");
    const index = node.querySelector(".q-index");
    const text = node.querySelector(".q-text");
    const media = node.querySelector(".q-media");
    const opts = node.querySelector(".opts");
    const analysis = node.querySelector(".analysis");

    card.style.animationDelay = `${i * 16}ms`;
    index.textContent = `Câu ${q.id} - ${q.section}`;
    text.textContent = formatDialogueText(q.text);

    if (isReadingPassageAQuestion(q)) {
      card.classList.add("reading-card");
      media.append(buildPassageABlock());
    }

    if (isReadingPassageBQuestion(q)) {
      card.classList.add("reading-card");
      media.append(buildPassageBBlock());
    }

    if (isReadingPassageCQuestion(q)) {
      card.classList.add("reading-card");
      media.append(buildPassageCBlock());
    }

    if (q.id === 85) {
      card.classList.add("reading-card");
      media.append(buildClozeIntroBlock());
    }

    const clozePassage = getClozePassage(q.id);
    if (clozePassage && isClozePassageStart(q.id)) {
      card.classList.add("reading-card");
      media.append(buildClozePassageBlock(clozePassage));
    }

    if (q.image) {
      const image = document.createElement("img");
      image.src = q.image;
      image.alt = `Biển báo cho câu ${q.id}`;
      image.loading = "lazy";
      image.className = "q-image";
      media.append(image);
    }

    if (q.type === "fill") {
      const fillWrap = document.createElement("div");
      fillWrap.className = "fill-wrap";

      const fillLabel = document.createElement("label");
      fillLabel.className = "fill-label";
      fillLabel.setAttribute("for", `q${q.id}fill`);
      fillLabel.textContent = "Điền từ vào chỗ trống:";

      const fillInput = document.createElement("input");
      fillInput.type = "text";
      fillInput.id = `q${q.id}fill`;
      fillInput.className = "fill-input";
      fillInput.value =
        typeof getAnswer(q.id) === "string" ? getAnswer(q.id) : "";
      fillInput.placeholder = "Nhập đáp án...";
      fillInput.disabled = state.submitted;

      fillInput.addEventListener("input", (event) => {
        setAnswer(q.id, event.target.value);
        updateStatus();
      });

      fillWrap.append(fillLabel, fillInput);
      opts.append(fillWrap);
    } else {
      q.options.forEach((opt, j) => {
        const id = `q${q.id}o${j}`;
        const label = document.createElement("label");
        label.className = "opt";
        label.setAttribute("for", id);

        const input = document.createElement("input");
        input.type = "radio";
        input.id = id;
        input.name = `question-${q.id}`;
        input.checked = getAnswer(q.id) === j;
        input.disabled = state.submitted;

        input.addEventListener("change", () => {
          setAnswer(q.id, j);
          render();
        });

        const span = document.createElement("span");
        const optionPrefix = `${String.fromCharCode(65 + j)}. `;
        if (q.optionHtml && q.optionHtml[j]) {
          span.innerHTML = `${optionPrefix}${q.optionHtml[j]}`;
        } else {
          span.textContent = `${optionPrefix}${opt}`;
        }

        if (getAnswer(q.id) === j) label.classList.add("selected");
        if (state.submitted && j === q.correct) label.classList.add("correct");
        if (state.submitted && getAnswer(q.id) === j && j !== q.correct)
          label.classList.add("wrong");

        label.append(input, span);
        opts.append(label);
      });
    }

    if (state.submitted) {
      const answer = getAnswer(q.id);
      const isCorrect = isAnswerCorrect(q, answer);
      if (q.type === "fill") {
        const userText =
          typeof answer === "string" && answer.trim() !== ""
            ? answer.trim()
            : "(chưa điền)";
        const rightText = q.accepted[0];
        analysis.textContent = isCorrect
          ? `Đúng. ${q.note} (${confidenceLabel(q.confidence)})`
          : `Sai. Bạn điền: ${userText}. Đáp án đúng: ${rightText}. ${q.note} (${confidenceLabel(q.confidence)})`;
      } else {
        const rightText = `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`;
        const evidenceText = buildEvidenceNote(q);
        analysis.textContent = isCorrect
          ? `Đúng. ${q.note}${evidenceText} (${confidenceLabel(q.confidence)})`
          : `Sai. Đáp án đúng: ${rightText}. ${q.note}${evidenceText} (${confidenceLabel(q.confidence)})`;
      }
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
        : "Bạn nên ôn lại phần ngữ pháp, trọng âm và word form.";

  resultBanner.textContent = `Kết quả: ${s}/${state.questions.length}. ${summary} (Các câu chưa chọn sẽ được tính là sai.)`;
  resultBanner.classList.add("show");
});

resetBtn.addEventListener("click", () => {
  state.answers = Object.fromEntries(
    state.questions.map((question) => [question.id, null]),
  );
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  render();
});

shuffleBtn.addEventListener("click", () => {
  state.questions = [...QUESTIONS];
  shuffle(state.questions);
  state.answers = Object.fromEntries(
    state.questions.map((question) => [question.id, null]),
  );
  state.submitted = false;
  resultBanner.classList.remove("show");
  resultBanner.textContent = "";
  render();
});

render();
