const fillBlankQuestions = [
  {
    title: "Câu 5: Đặc điểm rừng Amazon và vấn đề khai thác, sử dụng, bảo vệ",
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
      {
        section: "Dân cư",
        question:
          "Người lai ở Trung và Nam Mỹ là kết quả của sự hòa huyết giữa những nhóm nào?",
        options: [
          "Gốc Âu, gốc Phi và Indian bản địa",
          "Gốc Á, gốc Âu và gốc Mỹ",
          "Chỉ giữa người Âu và người Á",
          "Chỉ giữa người Phi và người Á",
        ],
        correct: 0,
        note: "Người lai hình thành từ sự hòa huyết giữa người Âu, Phi và Indian bản địa.",
      },
      {
        section: "Dân cư",
        question: "Chủng tộc của người Indian bản địa ở Trung và Nam Mỹ là gì?",
        options: ["Negroid", "Mongoloid", "Australoid", "Caucasoid"],
        correct: 1,
        note: "Người Indian bản địa thuộc chủng Mongoloid.",
      },
      {
        section: "Dân số",
        question:
          "Tại sao tỉ suất gia tăng dân số tự nhiên ở Trung và Nam Mỹ thấp?",
        options: [
          "Do sinh ít và đang giảm dần",
          "Do di cư hoàn toàn ra nước ngoài",
          "Do không có đô thị",
          "Do dân số bằng 0",
        ],
        correct: 0,
        note: "Tỉ suất gia tăng tự nhiên thấp và đang giảm dần.",
      },
      {
        section: "Phân bố",
        question:
          "Khu vực nào sau đây KHÔNG phải là nơi dân cư tập trung đông ở Trung và Nam Mỹ?",
        options: [
          "Đồng bằng ven biển",
          "Các đô thị lớn",
          "Vùng rừng Amazon",
          "Các trung tâm kinh tế",
        ],
        correct: 2,
        note: "Vùng rừng Amazon có dân cư rất thưa thớt.",
      },
      {
        section: "Đô thị hóa",
        question:
          "Làn sóng di dân nào làm đô thị hóa Trung và Nam Mỹ mang tính tự phát?",
        options: [
          "Từ nông thôn ra đô thị",
          "Từ đô thị về nông thôn",
          "Từ châu Âu sang châu Á",
          "Từ hải đảo vào sa mạc",
        ],
        correct: 0,
        note: "Đô thị hóa tự phát do dân di cư mạnh từ nông thôn ra đô thị.",
      },
      {
        section: "Đô thị hóa",
        question:
          "Đô thị hóa cao ở Trung và Nam Mỹ gây áp lực lớn lên lĩnh vực nào?",
        options: [
          "Kinh tế - xã hội và môi trường",
          "Chỉ thể thao",
          "Chỉ du lịch",
          "Chỉ giáo dục",
        ],
        correct: 0,
        note: "Áp lực đè nặng lên kinh tế - xã hội và môi trường.",
      },
      {
        section: "Đô thị hóa",
        question: "Sao Paolo và Rio de Janeiro thuộc loại đô thị nào?",
        options: [
          "Đô thị dưới 1 triệu dân",
          "Đô thị ven biển nhỏ",
          "Đô thị trên 10 triệu dân",
          "Đô thị du lịch mùa vụ",
        ],
        correct: 2,
        note: "Đây đều là các đô thị rất lớn của khu vực.",
      },
      {
        section: "Tổng hợp",
        question: "Đặc điểm nào đúng nhất về dân cư Trung và Nam Mỹ?",
        options: [
          "Thuần nhất về nguồn gốc",
          "Chủ yếu là người châu Phi",
          "Đa dạng nguồn gốc và phân bố không đều",
          "Chỉ tập trung ở vùng núi",
        ],
        correct: 2,
        note: "Khu vực có nguồn gốc dân cư đa dạng và phân bố rất không đều.",
      },
      {
        section: "Tổng hợp",
        question: "Đâu là nhận xét đúng về Trung và Nam Mỹ năm 2020?",
        options: [
          "Dân số ít và đô thị hóa thấp",
          "Dân số 654 triệu người, đô thị hóa 80%",
          "Dân số 80 triệu người, đô thị hóa 654%",
          "Không có thành phố lớn",
        ],
        correct: 1,
        note: "Dân số 654 triệu người và 80% dân số sống ở đô thị.",
      },
      "Giải pháp có Hiệp ước bảo vệ rừng Amazon",
    ],
  },
  {
    title: "Câu 6: Đặc điểm dân số và đô thị hóa của khu vực Trung & Nam Mỹ",
    content: `<div class="question-text">
            <p><strong>Phần I: Nguồn gốc dân cư</strong></p>
            <p>1. Dân cư Trung và Nam Mỹ gồm nhiều nguồn gốc khác nhau: người bản địa chủ yếu là người <input type="text" id="blank-21" class="blank">, thuộc chủng tộc <input type="text" id="blank-22" class="blank">.</p>
            <p>2. Người nhập cư chủ yếu là người châu Âu gốc <input type="text" id="blank-23" class="blank">, <input type="text" id="blank-24" class="blank"> và người da đen gốc <input type="text" id="blank-25" class="blank">.</p>
            <p>3. Người lai là kết quả của sự <input type="text" id="blank-26" class="blank"> giữa người gốc <input type="text" id="blank-27" class="blank">, người gốc <input type="text" id="blank-28" class="blank"> và người <input type="text" id="blank-29" class="blank"> bản địa.</p>

            <p><strong>Phần II: Dân số</strong></p>
            <p>1. Năm 2020, Trung và Nam Mỹ có <input type="text" id="blank-30" class="blank"> triệu người; tỉ suất gia tăng dân số tự nhiên thấp và đang <input type="text" id="blank-31" class="blank"> dần.</p>
            <p>2. Phân bố dân cư không đồng đều: đa số dân cư tập trung ở khu vực <input type="text" id="blank-32" class="blank"> ven biển; những nơi sâu trong nội địa, đặc biệt là vùng rừng <input type="text" id="blank-33" class="blank">, dân cư rất <input type="text" id="blank-34" class="blank">.</p>

            <p><strong>Phần III: Đô thị hóa</strong></p>
            <p>1. Trung và Nam Mỹ có tốc độ đô thị hóa <input type="text" id="blank-35" class="blank">, năm 2020 có <input type="text" id="blank-36" class="blank">% dân số sống trong các đô thị.</p>
            <p>2. Đô thị hóa mang tính <input type="text" id="blank-37" class="blank"> do làn sóng di dân từ nông thôn ra đô thị; tạo ra sức ép to lớn cho kinh tế - xã hội và <input type="text" id="blank-38" class="blank">.</p>
            <p>3. Khu vực có nhiều đô thị trên 10 triệu dân như: <input type="text" id="blank-39" class="blank">, <input type="text" id="blank-40" class="blank">, <input type="text" id="blank-41" class="blank">...</p>
        </div>`,
    answers: {
      "blank-21": "Indian",
      "blank-22": "Mongoloid",
      "blank-23": "Tây Ban Nha",
      "blank-24": "Bồ Đào Nha",
      "blank-25": "châu Phi",
      "blank-26": "hòa huyết",
      "blank-27": "Âu",
      "blank-28": "Phi",
      "blank-29": "Indian",
      "blank-30": "654",
      "blank-31": "giảm",
      "blank-32": "đồng bằng",
      "blank-33": "Amazon",
      "blank-34": "thưa thớt",
      "blank-35": "cao",
      "blank-36": "80",
      "blank-37": "tự phát",
      "blank-38": "môi trường",
      "blank-39": "Mexico City",
      "blank-40": "Sao Paolo",
      "blank-41": "Rio de Janeiro",
    },
    hints: [
      "Dân cư gồm người bản địa, người nhập cư và người lai",
      "Người bản địa chủ yếu là người Indian thuộc chủng Mongoloid",
      "Năm 2020 dân số Trung và Nam Mỹ là 654 triệu người",
      "Dân cư tập trung ở đồng bằng ven biển, thưa thớt trong rừng Amazon",
      "Đô thị hóa cao, 80% dân số sống ở đô thị",
      "Có nhiều đô thị trên 10 triệu dân như Mexico City, Sao Paolo, Rio de Janeiro",
    ],
  },
  {
    title:
      "Câu 8: Tính chất đa dạng và độc đáo của các loài sinh vật trên lục địa Australia",
    content: `<div class="question-text">
            <p><strong>Phần I: Đặc điểm sinh vật Australia</strong></p>
            <p>1. Australia có hệ <input type="text" id="blank-42" class="blank"> rất <input type="text" id="blank-43" class="blank"> và <input type="text" id="blank-44" class="blank">; có tới <input type="text" id="blank-45" class="blank">% các loài <input type="text" id="blank-46" class="blank"> chỉ có ở Australia.</p>
            <p>2. Động vật tiêu biểu gồm gấu túi <input type="text" id="blank-47" class="blank">, chuột <input type="text" id="blank-48" class="blank">, <input type="text" id="blank-49" class="blank"> và thú <input type="text" id="blank-50" class="blank"> vịt.</p>
            <p>3. Thực vật bản địa có <input type="text" id="blank-51" class="blank">, keo hoa vàng, <input type="text" id="blank-52" class="blank">.</p>
        </div>`,
    answers: {
      "blank-42": "động thực vật",
      "blank-43": "phong phú",
      "blank-44": "độc đáo",
      "blank-45": "75",
      "blank-46": "sinh vật",
      "blank-47": "Koala",
      "blank-48": "Quokka",
      "blank-49": "Kanguru",
      "blank-50": "mỏ",
      "blank-51": "bạch đàn",
      "blank-52": "dương xỉ khổng lồ",
    },
    hints: [
      "Australia có hệ động thực vật rất phong phú và độc đáo",
      "75% các loài sinh vật chỉ có ở Australia",
      "Động vật tiêu biểu: Koala, Quokka, Kanguru, thú mỏ vịt",
      "Thực vật bản địa: bạch đàn, keo hoa vàng, dương xỉ khổng lồ",
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
  {
    section: "Dân cư",
    question: "Dân cư Trung và Nam Mỹ gồm những nhóm nào?",
    options: [
      "Chỉ người bản địa",
      "Người bản địa, người nhập cư và người lai",
      "Chỉ người nhập cư châu Âu",
      "Chỉ người da đen gốc châu Phi",
    ],
    correct: 1,
    note: "Khu vực có ba nhóm chính: bản địa, nhập cư và người lai.",
  },
  {
    section: "Dân cư",
    question: "Người bản địa ở Trung và Nam Mỹ chủ yếu là:",
    options: ["Người Indian", "Người Eskimo", "Người Slav", "Người Hán"],
    correct: 0,
    note: "Người bản địa chủ yếu là người Indian.",
  },
  {
    section: "Dân cư",
    question: "Người nhập cư chủ yếu ở Trung và Nam Mỹ đến từ đâu?",
    options: [
      "Châu Á và châu Úc",
      "Châu Âu gốc Tây Ban Nha, Bồ Đào Nha và châu Phi",
      "Bắc Cực và Nam Cực",
      "Chỉ từ Bắc Mỹ",
    ],
    correct: 1,
    note: "Dân nhập cư chủ yếu có nguồn gốc từ châu Âu và châu Phi.",
  },
  {
    section: "Dân số",
    question: "Năm 2020, dân số Trung và Nam Mỹ là bao nhiêu?",
    options: [
      "654 triệu người",
      "754 triệu người",
      "854 triệu người",
      "954 triệu người",
    ],
    correct: 0,
    note: "Dân số năm 2020 là 654 triệu người.",
  },
  {
    section: "Dân số",
    question:
      "Tỉ suất gia tăng dân số tự nhiên của Trung và Nam Mỹ hiện nay như thế nào?",
    options: [
      "Cao và tăng nhanh",
      "Thấp và đang giảm dần",
      "Ổn định ở mức rất cao",
      "Bằng 0 tuyệt đối",
    ],
    correct: 1,
    note: "Khu vực có mức gia tăng tự nhiên thấp và giảm dần.",
  },
  {
    section: "Phân bố",
    question: "Dân cư Trung và Nam Mỹ tập trung nhiều nhất ở đâu?",
    options: [
      "Khu vực đồng bằng ven biển",
      "Vùng núi rất cao",
      "Khu rừng Amazon",
      "Các đảo xa bờ",
    ],
    correct: 0,
    note: "Dân cư chủ yếu tập trung ở đồng bằng ven biển.",
  },
  {
    section: "Phân bố",
    question: "Khu vực nào ở Trung và Nam Mỹ dân cư rất thưa thớt?",
    options: [
      "Đồng bằng ven biển",
      "Vùng rừng Amazon",
      "Các đô thị lớn",
      "Khu công nghiệp",
    ],
    correct: 1,
    note: "Vùng sâu trong nội địa, đặc biệt là Amazon, dân cư rất thưa thớt.",
  },
  {
    section: "Đô thị hóa",
    question:
      "Năm 2020, tỉ lệ dân số sống trong các đô thị của Trung và Nam Mỹ là bao nhiêu?",
    options: ["60%", "70%", "80%", "90%"],
    correct: 2,
    note: "Tỉ lệ đô thị hóa năm 2020 là 80%.",
  },
  {
    section: "Đô thị hóa",
    question: "Đô thị hóa ở Trung và Nam Mỹ mang tính chất nào?",
    options: [
      "Tự phát",
      "Hoàn toàn có kế hoạch",
      "Không diễn ra",
      "Chỉ ở nông thôn",
    ],
    correct: 0,
    note: "Đô thị hóa mang tính tự phát do dòng di cư từ nông thôn ra đô thị.",
  },
  {
    section: "Đô thị hóa",
    question:
      "Thành phố nào sau đây là đô thị trên 10 triệu dân ở Trung và Nam Mỹ?",
    options: ["Mexico City", "Bangkok", "Seoul", "Paris"],
    correct: 0,
    note: "Mexico City là một siêu đô thị tiêu biểu của khu vực.",
  },
  {
    section: "Australia",
    question: "Australia nổi bật bởi điều gì về sinh vật?",
    options: [
      "Có ít loài đặc hữu",
      "Đa dạng và độc đáo, nhiều loài chỉ có ở Australia",
      "Chỉ có động vật biển",
      "Không có thực vật bản địa",
    ],
    correct: 1,
    note: "Australia có hệ động thực vật rất phong phú và độc đáo.",
  },
  {
    section: "Australia",
    question: "Tỉ lệ các loài chỉ có ở Australia là bao nhiêu?",
    options: ["25%", "50%", "75%", "90%"],
    correct: 2,
    note: "Khoảng 75% các loài chỉ có ở Australia.",
  },
  {
    section: "Australia",
    question: "Koala thuộc nhóm nào sau đây?",
    options: [
      "Động vật tiêu biểu của Australia",
      "Loài bò sát sa mạc",
      "Chim di cư",
      "Cá nước ngọt",
    ],
    correct: 0,
    note: "Koala là một loài động vật biểu tượng của Australia.",
  },
  {
    section: "Australia",
    question: "Quokka được xếp vào nhóm nào?",
    options: ["Thú có túi", "Cá heo", "Lưỡng cư", "Thực vật bản địa"],
    correct: 0,
    note: "Quokka là một loài thú có túi đặc trưng của Australia.",
  },
  {
    section: "Australia",
    question: "Kanguru là loài nào?",
    options: ["Thú có túi", "Chim không bay", "Bò sát", "Côn trùng"],
    correct: 0,
    note: "Kanguru là loài thú có túi nổi tiếng ở Australia.",
  },
  {
    section: "Australia",
    question: "Thú mỏ vịt là loài có đặc điểm nào sau đây?",
    options: [
      "Là loài động vật bản địa độc đáo của Australia",
      "Chỉ sống ở Bắc Cực",
      "Là loài thực vật có hoa",
      "Là loài cá biển sâu",
    ],
    correct: 0,
    note: "Thú mỏ vịt là loài đặc hữu rất độc đáo.",
  },
  {
    section: "Australia",
    question: "Loài thực vật nào là bản địa của Australia?",
    options: ["Bạch đàn", "Lúa mì", "Cây dừa", "Xương rồng"],
    correct: 0,
    note: "Bạch đàn là loài thực vật bản địa tiêu biểu.",
  },
  {
    section: "Australia",
    question: "Keo hoa vàng là gì?",
    options: [
      "Một loài thực vật bản địa của Australia",
      "Một loài cá nước ngọt",
      "Một loài chim di cư",
      "Một loài thú có túi",
    ],
    correct: 0,
    note: "Keo hoa vàng là loài thực vật bản địa.",
  },
  {
    section: "Australia",
    question: "Dương xỉ khổng lồ thuộc nhóm nào?",
    options: ["Thực vật bản địa", "Động vật bản địa", "Khoáng sản", "Rêu biển"],
    correct: 0,
    note: "Dương xỉ khổng lồ là một loài thực vật bản địa.",
  },
  {
    section: "Australia",
    question: "Điểm nào sau đây phù hợp nhất với hệ sinh vật Australia?",
    options: [
      "Đơn điệu và nghèo nàn",
      "Đa dạng, độc đáo và nhiều loài đặc hữu",
      "Chỉ có loài nhập cư",
      "Không có loài bản địa",
    ],
    correct: 1,
    note: "Australia có nhiều loài đặc hữu và tính độc đáo cao.",
  },
  {
    section: "Australia",
    question: "Cặp nào sau đây đều là động vật tiêu biểu của Australia?",
    options: [
      "Koala và Kanguru",
      "Sư tử và hổ",
      "Cá voi và cá ngựa",
      "Gấu Bắc cực và hải cẩu",
    ],
    correct: 0,
    note: "Koala và Kanguru đều là biểu tượng của Australia.",
  },
];

let currentQuestion = 0;
const completedQuestions = Array.from(
  { length: fillBlankQuestions.length },
  () => false,
);
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
  document.getElementById("progressText").textContent =
    `${completed} / ${fillBlankQuestions.length}`;
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
