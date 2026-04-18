const fillBlankQuestions = [
  {
    title:
      "Câu 1: Nguyên nhân thắng lợi và ý nghĩa lịch sử của 3 lần kháng chiến chống quân Mông Nguyên",
    content: `<div class="question-text">
            <p><strong>Phần I: Nguyên nhân thắng lợi</strong></p>
            <p>1. Đó là kết quả của lòng <input type="text" id="blank-0" class="blank">, sự <input type="text" id="blank-1" class="blank"> <input type="text" id="blank-2" class="blank">, <input type="text" id="blank-3" class="blank"> đánh giặc.</p>
            <p>2. Nhà Trần đề ra <input type="text" id="blank-4" class="blank"> <input type="text" id="blank-5" class="blank">, <input type="text" id="blank-6" class="blank">, phát huy được <input type="text" id="blank-7" class="blank"> đánh giặc của <input type="text" id="blank-8" class="blank">.</p>
            <p>3. Tài <input type="text" id="blank-9" class="blank"> của <input type="text" id="blank-10" class="blank"> và các <input type="text" id="blank-11" class="blank">, đặc biệt là <input type="text" id="blank-12" class="blank">.</p>
            
            <p><strong>Phần II: Ý nghĩa lịch sử</strong></p>
            <p>1. Đập tan tham vọng của quân <input type="text" id="blank-13" class="blank">, bảo vệ được <input type="text" id="blank-14" class="blank"> <input type="text" id="blank-15" class="blank"> dân tộc; góp phần <input type="text" id="blank-16" class="blank"> làn sóng <input type="text" id="blank-17" class="blank">.</p>
            <p>2. Khẳng định <input type="text" id="blank-18" class="blank">, <input type="text" id="blank-19" class="blank"> <input type="text" id="blank-20" class="blank"> của dân tộc.</p>
            <p>3. Để lại <input type="text" id="blank-21" class="blank"> về xây dựng <input type="text" id="blank-22" class="blank"> <input type="text" id="blank-23" class="blank">.</p>
        </div>`,
    answers: {
      "blank-0": "yêu nước",
      "blank-1": "đoàn kết",
      "blank-2": "toàn dân",
      "blank-3": "trên dưới một lòng",
      "blank-4": "kế sách",
      "blank-5": "đúng đắn",
      "blank-6": "sáng tạo",
      "blank-7": "truyền thống",
      "blank-8": "cha ông",
      "blank-9": "thao lược",
      "blank-10": "vua Trần",
      "blank-11": "tướng lĩnh",
      "blank-12": "Trần Quốc Tuấn",
      "blank-13": "Mông-Nguyên",
      "blank-14": "độc lập",
      "blank-15": "chủ quyền",
      "blank-16": "chặn đứng",
      "blank-17": "xâm lược của quân Mông-Nguyên",
      "blank-18": "khí phách",
      "blank-19": "tinh thần",
      "blank-20": "quật cường",
      "blank-21": "bài học quý giá",
      "blank-22": "khối đoàn kết",
      "blank-23": "quân dân",
    },
    hints: [
      "Phần đầu tiên liên quan đến tình yêu nước của nhân dân",
      "Kế sách là chiến lược, tức là các chiến lược quân sự",
      "Vua Trần Quốc Tuấn là vị tướng lĩnh vĩ đại nhất",
      "Tham vọng của đế quốc Mông-Nguyên",
      "Chủ quyền = quyền chủ quyền độc lập",
      "Tinh thần = phẩm chất tâm lý của dân tộc",
      "Đoàn kết quân dân là chìa khóa thắng lợi",
    ],
  },
  {
    title: "Câu 2: Nhà Hồ đã có những cải cách như thế nào",
    content: `<div class="question-text">
            <p><strong>Về chính trị - hành chính:</strong></p>
            <p>1. <input type="text" id="blank-0" class="blank"> một số <input type="text" id="blank-1" class="blank">, đặt chức <input type="text" id="blank-2" class="blank"> để quản lý công việc ở <input type="text" id="blank-3" class="blank">;</p>
            <p>2. Tổ chức <input type="text" id="blank-4" class="blank"> để chọn người <input type="text" id="blank-5" class="blank"> <input type="text" id="blank-6" class="blank">;</p>
            <p>3. <input type="text" id="blank-7" class="blank"> về thành <input type="text" id="blank-8" class="blank"> (<input type="text" id="blank-9" class="blank">).</p>
            
            <p><strong>Về kinh tế - xã hội:</strong></p>
            <p>1. Ban hành <input type="text" id="blank-10" class="blank"> <input type="text" id="blank-11" class="blank">;</p>
            <p>2. Ban hành chính sách <input type="text" id="blank-12" class="blank">, <input type="text" id="blank-13" class="blank">;</p>
            <p>3. Ban hành chính sách <input type="text" id="blank-14" class="blank"> <input type="text" id="blank-15" class="blank">.</p>
            
            <p><strong>Về quân sự - quốc phòng:</strong></p>
            <p>1. <input type="text" id="blank-16" class="blank">, xây dựng các <input type="text" id="blank-17" class="blank">, thành <input type="text" id="blank-18" class="blank">, <input type="text" id="blank-19" class="blank">;</p>
            <p>2. Chế tạo nhiều loại <input type="text" id="blank-20" class="blank"> <input type="text" id="blank-21" class="blank">.</p>
            
            <p><strong>Về văn hóa - giáo dục:</strong></p>
            <p>1. Chấn chỉnh lại <input type="text" id="blank-22" class="blank">: sửa đổi chế độ <input type="text" id="blank-23" class="blank">, <input type="text" id="blank-24" class="blank">;</p>
            <p>2. Khuyến khích sử dụng chữ <input type="text" id="blank-25" class="blank">, dịch sách chữ <input type="text" id="blank-26" class="blank"> sang chữ <input type="text" id="blank-27" class="blank">.</p>
        </div>`,
    answers: {
      "blank-0": "Đổi tên",
      "blank-1": "trấn",
      "blank-2": "An phủ sứ",
      "blank-3": "các lộ",
      "blank-4": "thi cử",
      "blank-5": "bổ nhiệm",
      "blank-6": "làm quan",
      "blank-7": "Dời đô",
      "blank-8": "An Tôn",
      "blank-9": "Thanh Hóa",
      "blank-10": "tiền giấy",
      "blank-11": "Thông bảo hội sao",
      "blank-12": "hạn nô",
      "blank-13": "hạn điền",
      "blank-14": "thuế",
      "blank-15": "mới",
      "blank-16": "Chỉnh đốn quân đội",
      "blank-17": "tuyến phòng thủ",
      "blank-18": "An Tôn",
      "blank-19": "Đa Bang",
      "blank-20": "vũ khí",
      "blank-21": "mới",
      "blank-22": "Phật giáo",
      "blank-23": "thi cử",
      "blank-24": "học tập",
      "blank-25": "Nôm",
      "blank-26": "Hán",
      "blank-27": "Nôm",
    },
    hints: [
      "An phủ sứ là một chức vụ hành chính",
      "Thi cử là hình thức tuyển chọn và bổ nhiệm người tài",
      "An Tôn là tên đô thành mới (ở Thanh Hóa ngày nay)",
      "Thông bảo hội sao là một loại tiền giấy",
      "Hạn nô là chính sách hạn chế nô lệ",
      "Chính sách về thuế hay các chính sách kinh tế",
      "Thành An Tôn là một thành phố được xây dựng",
      "Các loại vũ khí quân sự",
      "Phật giáo là tôn giáo chính ở Việt Nam",
      "Chữ Nôm là chữ Việt được tạo ra để viết tiếng Việt",
    ],
  },
  {
    title:
      "Câu 3: Hoàn cảnh dẫn đến khởi nghĩa Lam Sơn và tình hình những năm đầu",
    content: `<div class="question-text">
            <p><strong>Lê Lợi dựng cờ khởi nghĩa:</strong></p>
            <p>1. Sau khi chiếm được nước ta, nhà <input type="text" id="blank-0" class="blank"> thiết lập <input type="text" id="blank-1" class="blank"> và tăng cường <input type="text" id="blank-2" class="blank">.</p>
            <p>2. Đầu năm <input type="text" id="blank-3" class="blank">, <input type="text" id="blank-4" class="blank"> - một <input type="text" id="blank-5" class="blank"> ở <input type="text" id="blank-6" class="blank"> (<input type="text" id="blank-7" class="blank">) xưng là <input type="text" id="blank-8" class="blank">, kêu gọi <input type="text" id="blank-9" class="blank"> khởi nghĩa.</p>
            
            <p><strong>Những năm đầu khởi nghĩa (1418-1423):</strong></p>
            <p>1. Buổi đầu khởi nghĩa, nghĩa quân gặp rất nhiều <input type="text" id="blank-10" class="blank">, bị <input type="text" id="blank-11" class="blank"> nên Lê Lợi phải <input type="text" id="blank-12" class="blank"> với <input type="text" id="blank-13" class="blank">;</p>
            <p>2. Năm <input type="text" id="blank-14" class="blank">, nghĩa quân trở lại <input type="text" id="blank-15" class="blank">, từng bước <input type="text" id="blank-16" class="blank"> và <input type="text" id="blank-17" class="blank">.</p>
        </div>`,
    answers: {
      "blank-0": "Minh",
      "blank-1": "bộ máy đô hộ",
      "blank-2": "áp bức bóc lột",
      "blank-3": "1418",
      "blank-4": "Lê Lợi",
      "blank-5": "hào trưởng",
      "blank-6": "Lam Sơn",
      "blank-7": "Thanh Hóa",
      "blank-8": "Bình Định Vương",
      "blank-9": "nhân dân",
      "blank-10": "khó khăn",
      "blank-11": "tổn thất lớn",
      "blank-12": "tạm hòa",
      "blank-13": "quân Minh",
      "blank-14": "1423",
      "blank-15": "Lam Sơn",
      "blank-16": "khôi phục",
      "blank-17": "phát triển lực lượng",
    },
    hints: [
      "Nhà Minh là triều đại phong kiến Trung Quốc",
      "Lê Lợi là vị anh hùng dân tộc của Việt Nam",
      "Khối khăn là những thử thách mà nghĩa quân phải đối mặt",
      "Lam Sơn là nơi khởi nghĩa ở tỉnh Thanh Hóa",
    ],
  },
  {
    title: "Câu 4: Thành lập nhà Lê Sơ",
    content: `<div class="question-text">
            <p>1. Sau khi <input type="text" id="blank-0" class="blank"> thắng lợi, năm <input type="text" id="blank-1" class="blank"> <input type="text" id="blank-2" class="blank"> lên ngôi <input type="text" id="blank-3" class="blank">, lập nên <input type="text" id="blank-4" class="blank">;</p>
            <p>2. <input type="text" id="blank-5" class="blank"> được <input type="text" id="blank-6" class="blank">, <input type="text" id="blank-7" class="blank"> nắm hết mọi <input type="text" id="blank-8" class="blank">.</p>
            <p>3. Cả nước có <input type="text" id="blank-9" class="blank"> <input type="text" id="blank-10" class="blank">/thừa tuyên và <input type="text" id="blank-11" class="blank"> phủ <input type="text" id="blank-12" class="blank">, đơn vị nhỏ nhất là <input type="text" id="blank-13" class="blank">.</p>
            <p>4. Thời vua <input type="text" id="blank-14" class="blank"> đã ban hành <input type="text" id="blank-15" class="blank"> (bộ luật <input type="text" id="blank-16" class="blank">), trong đó có nhiều <input type="text" id="blank-17" class="blank">.</p>
            <p>5. Triều Lê sơ chú trọng xây dựng <input type="text" id="blank-18" class="blank">, tiếp tục duy trì chính sách <input type="text" id="blank-19" class="blank">.</p>
        </div>`,
    answers: {
      "blank-0": "khởi nghĩa Lam Sơn",
      "blank-1": "1428",
      "blank-2": "Lê Lợi",
      "blank-3": "hoàng đế",
      "blank-4": "nhà Lê Sơ",
      "blank-5": "Chính quyền phong kiến",
      "blank-6": "hoàn thiện dần",
      "blank-7": "hoàng đế",
      "blank-8": "quyền hành",
      "blank-9": "13",
      "blank-10": "đạo",
      "blank-11": "1",
      "blank-12": "Trung Đô",
      "blank-13": "xã",
      "blank-14": "Lê Thánh Tông",
      "blank-15": "Quốc triều hình luật",
      "blank-16": "Hồng Đức",
      "blank-17": "nội dung tiến bộ",
      "blank-18": "quân đội mạnh",
      "blank-19": "ngụ binh ư nông",
    },
    hints: [
      "Năm lập nhà Lê Sơ: một trăm bốn mươi hai mươi tám",
      "Quyền hành = quyền lực, quyền chính trị",
      "Đạo là đơn vị hành chính ở trung ương",
      "Lê Thánh Tông là vị vua nổi tiếng của nhà Lê Sơ",
      "Luật Hồng Đức là bộ luật nổi tiếng nhất của nhà Lê Sơ",
      "Ngụ binh ư nông = quân đội phải tham gia sản xuất nông nghiệp",
    ],
  },
];

const multipleChoiceQuestions = [
  {
    section: "Kháng chiến Mông - Nguyên",
    question:
      "Nguyên nhân quan trọng hàng đầu giúp Đại Việt thắng 3 lần kháng chiến chống Mông - Nguyên là gì?",
    options: [
      "Vũ khí vượt trội",
      "Lòng yêu nước và đoàn kết toàn dân",
      "Địa hình hoàn toàn thuận lợi",
      "Được nước ngoài viện trợ",
    ],
    correct: 1,
    note: "Lòng yêu nước và khối đoàn kết toàn dân là cốt lõi của thắng lợi.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question: "Nhà Trần đã phát huy truyền thống gì của cha ông?",
    options: [
      "Truyền thống buôn bán",
      "Truyền thống đánh giặc",
      "Truyền thống đi biển",
      "Truyền thống ngoại giao",
    ],
    correct: 1,
    note: "Nhà Trần kế thừa truyền thống đánh giặc giữ nước của dân tộc.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question:
      "Nhân vật được nhấn mạnh về tài thao lược trong kháng chiến chống Mông - Nguyên là ai?",
    options: ["Trần Nhân Tông", "Trần Quốc Tuấn", "Trần Thánh Tông", "Lê Lợi"],
    correct: 1,
    note: "Trần Quốc Tuấn là danh tướng tiêu biểu của thời Trần.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question:
      "Ý nghĩa lịch sử quan trọng của thắng lợi trước quân Mông - Nguyên là gì?",
    options: [
      "Mở rộng lãnh thổ về phía bắc",
      "Bảo vệ độc lập chủ quyền dân tộc",
      "Thiết lập triều đại mới",
      "Đổi đô ra nước ngoài",
    ],
    correct: 1,
    note: "Chiến thắng bảo vệ vững chắc độc lập và chủ quyền quốc gia.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question: "Chiến thắng chống Mông - Nguyên góp phần gì đối với khu vực?",
    options: [
      "Thúc đẩy thương mại đường biển",
      "Chặn làn sóng xâm lược của Mông - Nguyên",
      "Hình thành liên minh quân sự Đông Nam Á",
      "Thành lập đế chế Đại Việt",
    ],
    correct: 1,
    note: "Đại Việt góp phần ngăn chặn đà bành trướng của Mông - Nguyên.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question:
      "Bài học lớn để lại sau 3 lần kháng chiến chống Mông - Nguyên là gì?",
    options: [
      "Tăng thuế để nuôi quân",
      "Xây thành càng nhiều càng tốt",
      "Xây dựng khối đoàn kết quân dân",
      "Chỉ dựa vào tướng giỏi",
    ],
    correct: 2,
    note: "Đoàn kết quân dân là bài học có giá trị bền vững.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question: "Cụm từ mô tả tinh thần toàn dân chống giặc thời Trần là gì?",
    options: [
      "Mạnh ai nấy đánh",
      "Trên dưới một lòng",
      "Lấy công làm lãi",
      "Đánh nhanh rút gọn",
    ],
    correct: 1,
    note: "Sự đồng lòng giữa triều đình và nhân dân là yếu tố quyết định.",
  },
  {
    section: "Kháng chiến Mông - Nguyên",
    question:
      "Chiến thắng trước Mông - Nguyên đã khẳng định phẩm chất nào của dân tộc Việt Nam?",
    options: [
      "Tinh thần quật cường",
      "Khả năng thương mại",
      "Trình độ công nghiệp",
      "Sức mạnh hải quân",
    ],
    correct: 0,
    note: "Tinh thần quật cường là ý nghĩa tinh thần nổi bật của thắng lợi.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ đặt chức vụ nào để quản lý công việc ở các lộ?",
    options: ["Tổng trấn", "An phủ sứ", "Đô thống", "Tri phủ"],
    correct: 1,
    note: "An phủ sứ là chức vụ hành chính mới ở cấp lộ.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ tổ chức thi cử với mục đích chính là gì?",
    options: [
      "Tuyển người bổ nhiệm làm quan",
      "Tăng nguồn thu",
      "Xây dựng quân đội",
      "Mở rộng lãnh thổ",
    ],
    correct: 0,
    note: "Thi cử nhằm tuyển chọn nhân sự cho bộ máy quan lại.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ dời đô về đâu?",
    options: ["Thăng Long", "An Tôn", "Tây Đô", "Đa Bang"],
    correct: 1,
    note: "Đô thành mới là An Tôn (thuộc Thanh Hóa).",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Loại tiền giấy do nhà Hồ ban hành là gì?",
    options: [
      "Thông bảo hội sao",
      "Hồng Đức bảo sao",
      "Nguyên Phong thông bảo",
      "An Tôn tiền",
    ],
    correct: 0,
    note: "Thông bảo hội sao là chính sách kinh tế nổi bật thời Hồ.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Chính sách hạn nô, hạn điền của nhà Hồ thuộc lĩnh vực nào?",
    options: ["Chính trị", "Kinh tế - xã hội", "Ngoại giao", "Văn hóa"],
    correct: 1,
    note: "Đây là các chính sách điều tiết kinh tế và xã hội.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ ban hành chính sách nào sau đây?",
    options: [
      "Thuế mới",
      "Bỏ thuế",
      "Thuế thống nhất 0%",
      "Thuế chỉ áp dụng cho quý tộc",
    ],
    correct: 0,
    note: "Nguồn sử liệu nêu rõ nhà Hồ ban hành chính sách thuế mới.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Trong quốc phòng, nhà Hồ đã làm gì?",
    options: [
      "Giải tán quân đội",
      "Chỉnh đốn quân đội, xây phòng tuyến và thành",
      "Chỉ tập trung ngoại giao",
      "Chỉ mua vũ khí từ bên ngoài",
    ],
    correct: 1,
    note: "Nhà Hồ tăng cường quốc phòng bằng cả tổ chức quân đội và công sự.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Cặp thành lũy được nhắc đến trong cải cách quân sự nhà Hồ là?",
    options: [
      "Thăng Long - Cổ Loa",
      "An Tôn - Đa Bang",
      "Lam Sơn - Đông Quan",
      "Hoa Lư - Tây Đô",
    ],
    correct: 1,
    note: "An Tôn và Đa Bang là hai cứ điểm phòng thủ tiêu biểu.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Về quân sự, nhà Hồ còn chú trọng biện pháp nào?",
    options: [
      "Cấm sử dụng vũ khí",
      "Chế tạo nhiều loại vũ khí mới",
      "Giảm quân số tối đa",
      "Dừng huấn luyện",
    ],
    correct: 1,
    note: "Nhà Hồ quan tâm đổi mới trang bị quân sự.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ chấn chỉnh tôn giáo nào?",
    options: ["Phật giáo", "Nho giáo", "Đạo giáo", "Thiên Chúa giáo"],
    correct: 0,
    note: "Nguồn nêu rõ nhà Hồ chấn chỉnh lại Phật giáo.",
  },
  {
    section: "Cải cách nhà Hồ",
    question: "Nhà Hồ khuyến khích sử dụng loại chữ nào?",
    options: ["Chữ Hán", "Chữ Phạn", "Chữ Nôm", "Chữ Quốc ngữ"],
    correct: 2,
    note: "Khuyến khích chữ Nôm và dịch sách Hán sang Nôm.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question:
      "Sau khi chiếm nước ta, triều đại nào thiết lập bộ máy đô hộ và tăng cường bóc lột?",
    options: ["Nhà Nguyên", "Nhà Minh", "Nhà Thanh", "Nhà Tống"],
    correct: 1,
    note: "Bối cảnh trực tiếp dẫn tới khởi nghĩa Lam Sơn là ách đô hộ nhà Minh.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Đầu năm 1418, ai dựng cờ khởi nghĩa Lam Sơn?",
    options: ["Nguyễn Trãi", "Lê Lai", "Lê Lợi", "Trần Ngỗi"],
    correct: 2,
    note: "Lê Lợi là lãnh tụ khởi nghĩa Lam Sơn.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Lê Lợi xưng hiệu gì khi phát động khởi nghĩa?",
    options: [
      "Bình Nam Vương",
      "Bình Định Vương",
      "Đại Định Vương",
      "Hưng Đạo Vương",
    ],
    correct: 1,
    note: "Ông xưng là Bình Định Vương để tập hợp lực lượng.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question:
      "Những năm đầu (1418-1423), nghĩa quân Lam Sơn ở vào tình thế nào?",
    options: [
      "Thuận lợi hoàn toàn",
      "Gặp rất nhiều khó khăn, tổn thất lớn",
      "Được nhà Minh ủng hộ",
      "Đã kiểm soát cả nước",
    ],
    correct: 1,
    note: "Buổi đầu khởi nghĩa đầy gian nan, phải tạm hòa để bảo toàn lực lượng.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Vì tổn thất lớn, Lê Lợi đã chọn giải pháp nào một thời gian?",
    options: [
      "Rút sang nước ngoài",
      "Tạm hòa với quân Minh",
      "Giải tán nghĩa quân",
      "Đầu hàng hoàn toàn",
    ],
    correct: 1,
    note: "Đây là sách lược tạm thời để củng cố lực lượng.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Năm 1423, nghĩa quân trở lại đâu để phục hồi lực lượng?",
    options: ["Tây Đô", "Lam Sơn", "Đông Quan", "Thăng Long"],
    correct: 1,
    note: "Lam Sơn là căn cứ địa quan trọng của cuộc khởi nghĩa.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Mục tiêu trực tiếp của khởi nghĩa Lam Sơn là gì?",
    options: [
      "Lật đổ nhà Trần",
      "Đánh đuổi ách đô hộ nhà Minh",
      "Mở rộng bờ cõi",
      "Dời đô",
    ],
    correct: 1,
    note: "Khởi nghĩa nhằm giải phóng dân tộc khỏi ách cai trị nhà Minh.",
  },
  {
    section: "Khởi nghĩa Lam Sơn",
    question: "Lê Lợi xuất thân là gì trước khi khởi nghĩa?",
    options: [
      "Một thương nhân",
      "Một hào trưởng ở Lam Sơn",
      "Một quan nhà Minh",
      "Một tăng sĩ",
    ],
    correct: 1,
    note: "Nguồn nêu rõ ông là hào trưởng ở Lam Sơn (Thanh Hóa).",
  },
  {
    section: "Nhà Lê sơ",
    question: "Nhà Lê sơ được thành lập vào năm nào?",
    options: ["1418", "1423", "1428", "1433"],
    correct: 2,
    note: "Năm 1428, Lê Lợi lên ngôi hoàng đế, mở đầu triều Lê sơ.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Ai là người lên ngôi hoàng đế lập ra nhà Lê sơ?",
    options: ["Lê Thánh Tông", "Lê Lợi", "Lê Lai", "Nguyễn Trãi"],
    correct: 1,
    note: "Lê Lợi sáng lập triều Lê sơ sau thắng lợi Lam Sơn.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Đặc điểm quyền lực của chính quyền Lê sơ là gì?",
    options: [
      "Quyền lực phân tán",
      "Hoàng đế nắm hết mọi quyền hành",
      "Hội đồng quý tộc cai trị",
      "Địa phương tự trị",
    ],
    correct: 1,
    note: "Bộ máy phong kiến tập quyền được hoàn thiện dần dưới thời Lê sơ.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Thời Lê sơ, cả nước có bao nhiêu đạo/thừa tuyên?",
    options: ["10", "12", "13", "15"],
    correct: 2,
    note: "Cả nước được chia thành 13 đạo/thừa tuyên.",
  },
  {
    section: "Nhà Lê sơ",
    question:
      "Đơn vị hành chính nhỏ nhất trong tổ chức hành chính Lê sơ là gì?",
    options: ["Phủ", "Lộ", "Xã", "Huyện"],
    correct: 2,
    note: "Xã là đơn vị cơ sở nhỏ nhất.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Thời vua nào ban hành Quốc triều hình luật?",
    options: ["Lê Lợi", "Lê Thánh Tông", "Lê Thái Tổ", "Lê Nhân Tông"],
    correct: 1,
    note: "Bộ luật Hồng Đức gắn với thời Lê Thánh Tông.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Tên gọi phổ biến của Quốc triều hình luật là gì?",
    options: ["Luật Gia Long", "Luật Hồng Đức", "Hình thư", "Luật Minh Mệnh"],
    correct: 1,
    note: "Quốc triều hình luật còn gọi là bộ luật Hồng Đức.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Nhận định đúng về bộ luật Hồng Đức là gì?",
    options: [
      "Không có điểm mới",
      "Có nhiều nội dung tiến bộ",
      "Chỉ áp dụng cho quý tộc",
      "Chỉ nói về quân sự",
    ],
    correct: 1,
    note: "Nguồn học nêu rõ bộ luật có nhiều nội dung tiến bộ.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Triều Lê sơ tiếp tục duy trì chính sách quân sự nào?",
    options: [
      "Vườn không nhà trống",
      "Ngụ binh ư nông",
      "Đóng cửa biên giới",
      "Xa luân chiến",
    ],
    correct: 1,
    note: "Ngụ binh ư nông giúp kết hợp sản xuất với quốc phòng.",
  },
  {
    section: "Nhà Lê sơ",
    question: "Mục tiêu của chính sách ngụ binh ư nông là gì?",
    options: [
      "Quân đội chỉ làm nông",
      "Kết hợp nghĩa vụ quân sự với sản xuất nông nghiệp",
      "Giảm hoàn toàn quân số",
      "Bỏ huấn luyện quân sự",
    ],
    correct: 1,
    note: "Đây là cách tổ chức quân đội gắn với nền kinh tế nông nghiệp.",
  },
  {
    section: "Tổng hợp",
    question: "Nội dung nào sau đây KHÔNG thuộc cải cách của nhà Hồ?",
    options: [
      "Ban hành tiền giấy",
      "Khuyến khích chữ Nôm",
      "Ban hành bộ luật Hồng Đức",
      "Đặt chức An phủ sứ",
    ],
    correct: 2,
    note: "Luật Hồng Đức thuộc thời Lê sơ, không phải cải cách nhà Hồ.",
  },
  {
    section: "Tổng hợp",
    question:
      "Nội dung nào thuộc bối cảnh trực tiếp dẫn tới khởi nghĩa Lam Sơn?",
    options: [
      "Nhà Trần suy yếu",
      "Nhà Minh tăng cường áp bức bóc lột",
      "Mông - Nguyên xâm lược",
      "Nhà Hồ phát hành tiền giấy",
    ],
    correct: 1,
    note: "Ách đô hộ hà khắc của nhà Minh là nguyên nhân trực tiếp.",
  },
  {
    section: "Tổng hợp",
    question: "Nhận định nào đúng về vai trò của Lê Lợi trong lịch sử?",
    options: [
      "Lãnh đạo kháng chiến chống Mông - Nguyên",
      "Lãnh đạo khởi nghĩa Lam Sơn và lập nhà Lê sơ",
      "Đề ra hạn nô hạn điền",
      "Ban hành luật Hồng Đức",
    ],
    correct: 1,
    note: "Lê Lợi là lãnh tụ Lam Sơn và là người sáng lập triều Lê sơ.",
  },
];

// State variables
let currentQuestion = 0;
let completedCount = 0;
const completedQuestions = [false, false, false, false];
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

  // Update tab styles
  document
    .getElementById("tab-fillblank")
    .classList.toggle("active", mode === "fillblank");
  document
    .getElementById("tab-multiple")
    .classList.toggle("active", mode === "multiple");

  // Toggle content visibility
  document
    .getElementById("fillblank-mode")
    .classList.toggle("active", mode === "fillblank");
  document
    .getElementById("multiple-mode")
    .classList.toggle("active", mode === "multiple");

  if (mode === "multiple") {
    renderMcqQuiz();
  }

  // Load fillblank if switching to fillblank
  if (mode === "fillblank") {
    loadQuestion();
  }

  // Update progress panel
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

// Fill-in-the-blank functions
function loadQuestion() {
  currentQuestion = parseInt(document.getElementById("question-select").value);
  const question = fillBlankQuestions[currentQuestion];
  document.getElementById("question-content").innerHTML = question.content;
  clearInlineAnswers();

  document
    .querySelectorAll("#question-content .blank")
    .forEach((input, index) => {
      // Prevent browser input history/autofill suggestions for dictation blanks.
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("spellcheck", "false");
      input.setAttribute("name", `dict-${currentQuestion}-${index}`);

      input.addEventListener("input", () => autoSizeBlank(input));
      autoSizeBlank(input);
    });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.classList.remove("show");

  const hintDiv = document.getElementById("hint");
  hintDiv.innerHTML = "";
  hintDiv.classList.remove("show");

  updateProgress();
}

function updateProgress() {
  const completed = completedQuestions.filter((q) => q).length;
  document.getElementById("completed").textContent = completed;
  document.getElementById("progressText").textContent = `${completed} / 4`;
}

function autoSizeBlank(input) {
  const minCh = 14;
  const currentLength = Math.max(input.value.trim().length + 2, minCh);
  input.style.width = `${currentLength}ch`;
}

function clearInlineAnswers() {
  document.querySelectorAll(".inline-answer").forEach((el) => el.remove());
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
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = answers[blankId].toLowerCase();
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
    resultDiv.innerHTML = `<div class="success">✅ Chính xác! Bạn trả lời đúng tất cả ${totalBlanks} ô trống.</div>`;
    if (!completedQuestions[currentQuestion]) {
      completedQuestions[currentQuestion] = true;
      updateProgress();
    }
  } else {
    resultDiv.innerHTML = `<div class="partial">⚠️ Bạn trả lời đúng ${correctCount}/${totalBlanks} ô trống.</div>`;
  }

  resultDiv.classList.add("show");
}

function showHint() {
  const question = fillBlankQuestions[currentQuestion];
  const hintDiv = document.getElementById("hint");

  if (question.hints.length > 0) {
    const randomIndex = Math.floor(Math.random() * question.hints.length);
    hintDiv.innerHTML = `💡 Gợi ý: ${question.hints[randomIndex]}`;
    hintDiv.classList.add("show");
  }
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

  const hintDiv = document.getElementById("hint");
  hintDiv.innerHTML = "";
  hintDiv.classList.remove("show");
}

// Load first question on page load
document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();

  updateMcqStatus();
  renderMcqQuiz();

  mcqSubmitBtn.addEventListener("click", submitMcqQuiz);
  mcqResetBtn.addEventListener("click", resetMcqQuiz);
  mcqShuffleBtn.addEventListener("click", shuffleMcqQuiz);
});
