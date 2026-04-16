const GAME_UNLOCK_CODES = {
  yut: "0301",
  jegi: "0625",
  tuho: "0815",
};

const VOUCHER_CODES = ["236248", "3393412", "43124416", "53155420"];
const UNLOCK_STORAGE_KEY = "waikato-kfestival-unlocks";

const state = {
  lang: "ko",
  section: "overview",
  schoolOrg: "school",
  game: "yut",
  unlockedGames: {
    yut: false,
    jegi: false,
    tuho: false,
  },
  lockMessage: "",
  voucherCode: "",
  voucherDismissed: false,
};

const gameTabLabels = {
  ko: {
    voucher: "경품 교환권",
  },
  en: {
    voucher: "Prize Voucher",
  },
};

const gameLockText = {
  ko: {
    lockHeading: "게임 잠금 해제",
    codePlaceholder: "비밀번호 4자리 입력",
    codeButton: "잠금 해제",
    codeReady: "4자리 숫자를 입력하고 잠금 해제하세요.",
    codeSuccess: "맞습니다! 이 게임의 잠금이 해제되었습니다.",
    codeAlreadyUnlocked: "이미 잠금이 해제된 게임입니다.",
    codeWrong: "비밀번호가 틀렸습니다. 다시 입력해 주세요.",
    allUnlocked: "모든 게임 잠금이 해제되어 '경품 교환권' 탭이 열렸습니다.",
  },
  en: {
    lockHeading: "Unlock Game",
    codePlaceholder: "Enter 4-digit code",
    codeButton: "Unlock",
    codeReady: "Enter the 4-digit code to unlock the game.",
    codeSuccess: "Correct code. This game is unlocked.",
    codeAlreadyUnlocked: "This game is already unlocked.",
    codeWrong: "Wrong code. Please try again.",
    allUnlocked: "All game locks are now open. The voucher tab is available.",
  },
};

const voucherGameData = {
  ko: {
    label: "EVENT BONUS",
    title: "경품 교환권",
    badge: "잠금 해제 완료",
    summary: "모든 전통놀이 체험을 완료한 참가자에게 제공되는 경품 교환권입니다.",
    noticeHeading: "경품 교환 안내",
    noticeText:
      "이 화면은 보는 즉시 사라질 수 있으니, 지금 한국학교 안내 및 경품 교환권 부스로 가서 작은 물품을 교환받으세요. 아니면 아래의 숫자를 외워서 담당자에게 불러주시길 바랍니다.",
    codeLabel: "숫자는 ->",
    codeHint: "담당자 확인용 랜덤 번호입니다.",
    points: [],
  },
  en: {
    label: "EVENT BONUS",
    title: "Prize Voucher",
    badge: "Unlocked",
    summary: "This voucher is available for participants who completed all traditional game activities.",
    noticeHeading: "Prize Exchange Notice",
    noticeText:
      "This screen may disappear at any time, so please go now to the Korean School Information and Prize Voucher booth to exchange for a small gift. Otherwise, memorize the number below and read it aloud to the staff member.",
    codeLabel: "Number ->",
    codeHint: "This is the random number used for staff verification.",
    points: [],
  },
};

const content = {
  ko: {
    documentTitle: "2026 Waikato K-festival",
    brand: "2026 Waikato K-festival",
    nav: {
      overview: "행사소개",
      movie: "영화 소개",
      school: "후원단체 소개",
      games: "전통놀이 체험",
    },
    hero: {
      eyebrow: "Korean Traditional Play",
      titlePrefix: "한국영화와 전통놀이와 함께 하는",
      title: "2026년 Waikato K-festival",
      description:
        "뉴질랜드 와이카토 해밀턴의 따뜻한 지역 커뮤니티와 함께, 한국의 영화와 전통놀이를 통해 서로의 문화를 나누는 날입니다.",
      locationMessage:
        "와이카토 해밀턴에서 이 행사를 개최하는 것은 뉴질랜드 지역사회와 한국 문화가 가까이 만나는 뜻깊은 기회로, 서로의 문화 이해를 넓히기에 좋은 이유입니다.",
      sponsorLabel: "협찬",
      sponsorLogoAlt: "협찬사 로고",
      highlights: [
        {
          title: "11:00 시작",
          text: "오프닝과 함께 행사가 시작됩니다.",
        },
        {
          title: "음식 판매",
          text: "11:30부터 1:30까지 한국 음식을 즐길 수 있습니다.",
        },
        {
          title: "영화 상영",
          text: "1:30부터 3:30까지 '왕과사는 남자'를 상영합니다.",
        },
      ],
    },
    schedule: {
      eyebrow: "Timetable",
      title: "행사 타임테이블",
      items: [
        {
          time: "11:00",
          title: "행사 시작 · 오프닝",
          description: "참가자 환영과 함께 행사의 문을 엽니다.",
        },
        {
          time: "11:30 - 1:30",
          title: "음식 판매",
          description: "부담 없이 먹고 즐길 수 있는 음식 판매 시간입니다.",
        },
        {
          time: "1:30 - 3:30",
          title: "영화 상영",
          description: "'왕과사는 남자'를 함께 관람합니다.",
        },
        {
          time: "3:30 이후",
          title: "폐회식",
          description: "영화 관람 이후 행사 마무리 시간을 갖습니다.",
        },
      ],
    },
    movie: {
      eyebrow: "Film Introduction",
      title: "영화 소개 | 왕과사는 남자",
      description:
        "이 영화는 대한민국의 실화를 바탕으로 그려진 실제 역사 스토리입니다.",
      posterAlt: "영화 왕과사는 남자 포스터",
      posterCaption:
        "상영작 포스터입니다.",
      meta: ["한국 영화", "사극 드라마", "감독: 장항준", "상영 시간 1:30 - 3:30"],
      storyHeading: "영화 줄거리",
      storyText:
        "2026년 개봉한 영화 '왕과 사는 남자'는 계유정난으로 왕위를 잃은 후 강원도 영월 청령포로 유배 온 17세 단종(박지훈 분)과 그를 지키는 마을 촌장 엄흥도(유해진 분)의 묵직한 의리와 우정을 다룬 사극 드라마입니다. 가난한 마을을 유배지로 만들어 뒷돈을 챙기려던 촌장과 비극적인 삶을 사는 단종은 서로 마주보며 교감하고, 그 속에서 함께 성장합니다.",
      etiquetteHeading: "영화 관람 에티켓",
      etiquette: [
        "미리 예매해둔 티켓을 입장 전에 보여주세요.",
        "입장 후에는 휴대전화 소리와 진동을 꺼 주세요.",
        "영화 상영 중 사진 촬영과 영상 촬영은 하지 않습니다.",
        "대화, 큰 소리, 주변 좌석을 차는 행동은 삼가 주세요.",
        "늦게 입장하거나 이동할 때는 다른 관람객의 시야를 가리지 않게 조용히 움직여 주세요.",
        "음식물은 냄새가 강하지 않게 조심하고, 쓰레기는 끝나고 꼭 정리해 주세요.",
      ],
    },
    school: {
      pageEyebrow: "Supporting Organizations",
      pageTitle: "후원단체 소개",
      pageDescription:
        "이 페이지에서는 한국학교, 와이카토 한인회, TANI를 소개합니다.",
      orgTabs: {
        school: "한국학교 소개",
        association: "와이카토 한인회 소개",
        tani: "TANI 소개",
      },
      organizations: {
        school: {
          eyebrow: "Waikato Korean School",
          title: "한국학교 소개",
          description:
            "1995년부터 와이카토 지역 학생들과 가족을 위한 한국어, 한국 역사, 문화 교육을 이어오고 있습니다.",
          images: [
            {
              src: "assets/images/korean_school.jpg",
              alt: "와이카토 한국학교 단체사진",
              caption: "단체사진 | Waikato Korean School",
            },
            {
              src: "assets/images/korean_school2.jpg",
              alt: "와이카토 한국학교 활동사진",
              caption: "단체사진 2 | Waikato Korean School",
            },
          ],
          highlights: ["1995년부터 운영", "수업 9:30 - 1:00", "와이카토 해밀턴"],
          introHeading: "학교 소개",
          introParagraphs: [
            "저희 한국학교에서는 1995년부터 와이카토 지역에 사는 학생들에게 한국어와 한국 역사, 문화를 가르치고 있습니다.",
            "교민 자녀들에게는 한국인으로서의 정체성과 한국어의 중요성을 고양시키며 타민족 학생에게는 한국어 습득 및 한국 문화 이해의 기회를 제공합니다.",
          ],
          detailOneHeading: "반 편성",
          detailOneItems: [
            "발해반 - 3-5세",
            "부여반 - 5-6세 | Year 1",
            "신라반 - 6-8세 | Year 2",
            "백제반 - 8-10세 | Year 3/4",
            "고구려반 - 9-11세 | Year 5/6",
            "고려반 - 11세 이상 | Year 7-10",
            "조선 어학당 - 외국인",
          ],
          detailTwoHeading: "학비 및 수업 안내",
          detailTwoItems: [
            "발해반, 부여반 - 텀당 NZD $130(재료값 $10)",
            "조선 어학당 - 텀당 NZD $130",
            "신라반, 백제반, 고구려반, 고려반 - 텀당 NZD $120",
          ],
          detailTwoNote: "수업시간: 오전 9:30 - 오후 1:00",
          detailThreeHeading: "입학 및 교육상담",
          detailThreeItems: ["교장: 김용주", "교감: 권진헌", "이메일 문의: waikatoks@gmail.com"],
        },
        association: {
          eyebrow: "Community Organization",
          title: "와이카토 한인회 소개",
          description:
            "와이카토 지역 한인사회의 소통과 교류를 돕는 지역 공동체 단체입니다.",
          images: [],
          highlights: ["지역 교류", "행사 협력", "커뮤니티 지원"],
          introHeading: "단체 소개",
          introParagraphs: [
            "와이카토 한인회는 와이카토 지역에 거주하는 한인들이 서로 연결되고 소통할 수 있도록 돕는 지역 공동체 단체입니다.",
            "문화 행사, 생활 정보 공유, 교민 간 협력을 통해 한인사회와 지역사회가 함께 어울릴 수 있는 기반을 만들어 갑니다.",
          ],
          detailOneHeading: "주요 역할",
          detailOneItems: [
            "한인사회 네트워크와 소통 지원",
            "지역 문화행사와 커뮤니티 활동 협력",
            "교민 정착과 생활 정보 공유",
          ],
          detailTwoHeading: "행사 연계",
          detailTwoItems: [
            "K-festival 등 지역 행사 협력",
            "가족 단위 참여 프로그램 지원",
            "다양한 지역 단체와의 교류 추진",
          ],
          detailTwoNote: "상세 소개 자료와 추가 정보는 추후 더 보완할 수 있습니다.",
          detailThreeHeading: "안내",
          detailThreeItems: [
            "행사 현장에서 운영진을 통해 관련 안내를 받을 수 있습니다.",
            "필요한 단체 소개 내용은 이 페이지에 계속 추가할 수 있습니다.",
          ],
        },
        tani: {
          eyebrow: "Partner Organization",
          title: "TANI 소개",
          description:
            "지역사회 연결과 다문화 교류를 지원하는 협력 단체입니다.",
          images: [],
          highlights: ["다문화 협력", "지역 네트워크", "행사 파트너"],
          introHeading: "단체 소개",
          introParagraphs: [
            "TANI는 지역사회 안에서 사람과 사람을 연결하고, 다양한 문화가 자연스럽게 만나도록 돕는 협력 단체입니다.",
            "행사와 커뮤니티 활동을 통해 참여자들이 서로를 이해하고 교류할 수 있는 기회를 넓히는 데 함께하고 있습니다.",
          ],
          detailOneHeading: "협력 분야",
          detailOneItems: [
            "다문화 교류와 지역사회 연결 지원",
            "커뮤니티 프로그램과 행사 협력",
            "참여자 중심의 네트워크 형성 지원",
          ],
          detailTwoHeading: "행사 연계",
          detailTwoItems: [
            "지역 파트너와의 협업 지원",
            "문화행사 참여와 교류 확대",
            "커뮤니티 기반 프로그램 연계",
          ],
          detailTwoNote: "세부 단체 소개는 필요에 따라 계속 업데이트할 수 있습니다.",
          detailThreeHeading: "안내",
          detailThreeItems: [
            "행사 현장에서 TANI 관련 안내를 받을 수 있습니다.",
            "추가 자료나 소개 문구는 후원단체 소개 페이지에 이어서 반영할 수 있습니다.",
          ],
        },
      },
    },
    games: {
      eyebrow: "Hands-on Program",
      title: "전통놀이 체험",
      description:
        "제기차기와 투호놀이를 간단히 소개하고 관련 영상을 바로 찾아볼 수 있게 구성했습니다.",
      infoHeading: "간단 규칙",
      videoHeading: "영상",
      videoButton: "YouTube에서 보기",
    },
    gameTabs: {
      yut: "윷놀이",
      jegi: "제기차기",
      tuho: "투호놀이",
    },
    gameData: {
      yut: {
        label: "TEAM PLAY",
        title: "윷놀이",
        badge: "가족 · 단체 놀이",
        summary:
          "윷놀이는 네 개의 윷가락을 던져 나온 결과에 따라 말을 움직이며 겨루는 한국의 대표 전통놀이입니다. 간단해 보여도 길 선택, 업기, 잡기 같은 전략이 살아 있는 게임입니다.",
        points: [
          "윷가락 4개를 던져 나온 결과만큼 말을 움직입니다.",
          "각 팀은 보통 말 4개를 사용하고, 네 말을 먼저 모두 내보내면 이깁니다.",
          "윷 또는 모가 나오면 한 번 더 던질 수 있습니다.",
          "내 말끼리 같은 칸에 모아 업고 함께 이동할 수 있습니다.",
          "상대 말이 있는 칸에 도착하면 잡고, 잡으면 한 번 더 던집니다.",
        ],
        videoText:
          "지금은 관련 영상을 바로 찾을 수 있도록 YouTube 검색 결과로 연결해 두었습니다.",
        videoLink: "https://www.youtube.com/results?search_query=%EC%9C%B7%EB%86%80%EC%9D%B4+%EC%84%A4%EB%AA%85",
        detail: {
          rulesHeading: "윷놀이 자세한 규칙",
          rulesIntro:
            "이 페이지는 행사장에서 처음 보는 사람도 쉽게 이해할 수 있도록 가장 널리 알려진 기본 규칙 기준으로 설명합니다.",
          rules: [
            "준비물은 윷가락 4개, 윷판 1개, 그리고 팀마다 말 4개입니다.",
            "차례가 오면 윷가락 네 개를 함께 던지고, 나온 결과만큼 말 하나를 움직입니다.",
            "말은 바깥길만 따라가도 되지만, 중앙 대각선 길을 잘 타면 더 빨리 들어올 수 있어 전략이 중요합니다.",
            "내 말이 이미 있는 칸에 다른 내 말이 도착하면 업고 함께 움직일 수 있어 속도를 낼 수 있습니다.",
            "상대 팀 말이 있는 칸에 정확히 도착하면 그 말을 잡아 출발로 돌려보내고, 잡은 팀은 보너스로 한 번 더 던집니다.",
            "윷과 모는 각각 4칸, 5칸 이동이며 추가로 한 번 더 던질 수 있습니다.",
            "집이나 지역에 따라 빽도 같은 변형 규칙을 쓰기도 있지만, 아래 설명은 가장 기본적인 윷놀이를 기준으로 합니다.",
          ],
          outcomesHeading: "도 · 개 · 걸 · 윷 · 모 설명",
          outcomesDescription:
            "여기서는 평평한 면이 위로 보인 개수를 기준으로 설명합니다. 아래 그림은 이해를 돕기 위한 간단한 윷가락 도식입니다.",
          cultureHeading: "이름의 뜻과 동물 상징",
          cultureText:
            "한국민족문화대백과사전은 도·개·걸·윷·모를 본래 가축 이름에서 온 말로 풀이합니다. 보통 도는 돼지, 개는 개, 걸은 양, 윷은 소, 모는 말을 가리킨다고 설명합니다. 그래서 윷놀이는 단순한 칸 수 놀이를 넘어서 옛 생활 문화와 언어의 흔적도 함께 담고 있는 전통놀이로 소개할 수 있습니다.",
          outcomes: [
            {
              name: "도",
              animal: "돼지",
              move: "1칸 이동",
              sticks: ["flat", "round", "round", "round"],
              caption: "평평한 면 1개",
              description:
                "윷가락 네 개 중 평평한 면이 하나만 위로 보이면 도입니다. 가장 작은 수이지만 출발 직후 말 위치를 조절할 때 중요합니다.",
            },
            {
              name: "개",
              animal: "개",
              move: "2칸 이동",
              sticks: ["flat", "flat", "round", "round"],
              caption: "평평한 면 2개",
              description:
                "평평한 면이 두 개 보이면 개입니다. 가장 자주 체감되는 결과라 초반과 중반 운영에 많이 등장합니다.",
            },
            {
              name: "걸",
              animal: "양",
              move: "3칸 이동",
              sticks: ["flat", "flat", "flat", "round"],
              caption: "평평한 면 3개",
              description:
                "평평한 면이 세 개 보이면 걸입니다. 중앙 길 진입이나 상대 말 추격에 유리한 수가 될 때가 많습니다.",
            },
            {
              name: "윷",
              animal: "소",
              move: "4칸 이동 + 한 번 더",
              sticks: ["flat", "flat", "flat", "flat"],
              caption: "평평한 면 4개",
              description:
                "네 개가 모두 평평한 면이면 윷입니다. 많이 전진할 뿐 아니라 한 번 더 던질 수 있어 흐름을 크게 바꿉니다.",
            },
            {
              name: "모",
              animal: "말",
              move: "5칸 이동 + 한 번 더",
              sticks: ["round", "round", "round", "round"],
              caption: "평평한 면 0개",
              description:
                "평평한 면이 하나도 없고 둥근 면만 보이면 모입니다. 가장 긴 5칸 이동에 추가 기회까지 있어 매우 강한 결과입니다.",
            },
          ],
        },
      },
      jegi: {
        label: "BALANCE PLAY",
        title: "제기차기",
        badge: "개인 · 도전 놀이",
        summary:
          "제기차기는 발로 제기를 떨어뜨리지 않고 여러 번 차며 균형감각과 리듬을 즐기는 놀이입니다.",
        points: [
          "한 발 또는 양발을 번갈아 사용하며 제기를 오래 띄우는 것이 핵심입니다.",
          "몸의 균형과 순발력을 자연스럽게 체험할 수 있습니다.",
          "차다가 손으로 제기를 잡아버리면 현재까지 성공한 모든 카운트는 0으로 다시 시작합니다.",
          "짧은 시간 안에도 참여와 관람의 재미가 모두 살아나는 놀이입니다.",
        ],
        videoText:
          "제기차기 동작을 참고할 수 있도록 YouTube Shorts 링크로 연결해 두었습니다.",
        videoLink: "https://youtube.com/shorts/X-xumxOKsNs?si=6LM6m4p7m1paXEWF",
      },
      tuho: {
        label: "TARGET PLAY",
        title: "투호놀이",
        badge: "집중 · 예절 놀이",
        summary:
          "투호(投壺)놀이는 삼국시대 중국에서 전래되어 고려 및 조선시대까지 왕실과 양반가에서 즐기던 전통 놀이입니다. 항아리에 화살을 던져 넣는 예법과 집중력을 중시하는 수양 방식이었으며, 주로 명절이나 연회 때 승부를 겨루며 즐겼습니다. 화살 모양 막대를 일정 거리에서 통에 던져 넣는 방식으로, 집중력과 차분함을 기르는 전통 놀이입니다.",
        points: [
          "멀리서 던져 통 안에 넣는 단순한 방식이라 누구나 쉽게 도전할 수 있습니다.",
          "차례를 지키며 진행해 어린이와 어른이 함께 즐기기 좋습니다.",
        ],
        videoText:
          "투호놀이 진행 방식을 빠르게 볼 수 있도록 관련 영상 검색 결과를 열어 둡니다.",
        videoLink: "https://www.youtube.com/results?search_query=%ED%88%AC%ED%98%B8%EB%86%80%EC%9D%B4+%EC%84%A4%EB%AA%85",
      },
    },
  },
  en: {
    documentTitle: "2026 Waikato K-festival",
    brand: "2026 Waikato K-festival",
    nav: {
      overview: "Festival Overview",
      movie: "Film",
      school: "Supporting Organizations",
      games: "Traditional Games",
    },
    hero: {
      eyebrow: "Korean Film & Traditional Play",
      titlePrefix: "A Celebration of Korean Film and Traditional Games",
      title: "2026 Waikato K-festival",
      description:
        "A welcoming festival in Hamilton, Waikato, New Zealand, where we share Korean culture through film, food, and traditional games with the local community.",
      locationMessage:
        "Holding this festival in Hamilton, Waikato is especially meaningful because it creates a warm space where Korean culture and the local New Zealand community can meet, connect, and learn from one another.",
      sponsorLabel: "Sponsor",
      sponsorLogoAlt: "Sponsor logo",
      highlights: [
        {
          title: "11:00 Opening",
          text: "The festival begins with an opening welcome.",
        },
        {
          title: "Food Sales",
          text: "Korean food will be available from 11:30 AM to 1:30 PM.",
        },
        {
          title: "Film Screening",
          text: "The film 'The Man Who Lives with the King' will be screened from 1:30 PM to 3:30 PM.",
        },
      ],
    },
    schedule: {
      eyebrow: "Timetable",
      title: "Festival Timetable",
      items: [
        {
          time: "11:00",
          title: "Festival Opening",
          description: "We welcome guests and begin the festival with the opening program.",
        },
        {
          time: "11:30 AM - 1:30 PM",
          title: "Food Sales",
          description: "Visitors can enjoy Korean food during this time.",
        },
        {
          time: "1:30 PM - 3:30 PM",
          title: "Film Screening",
          description: "We will watch 'The Man Who Lives with the King' together.",
        },
        {
          time: "After 3:30 PM",
          title: "Closing Ceremony",
          description: "The festival concludes after the film screening.",
        },
      ],
    },
    movie: {
      eyebrow: "Film Introduction",
      title: "Film | The Man Who Lives with the King",
      description:
        "This film tells a real historical story inspired by actual events in Korean history.",
      posterAlt: "Poster for The Man Who Lives with the King",
      posterCaption:
        "Screening poster.",
      meta: ["Korean Film", "Historical Drama", "Directed by Jang Hang-jun", "Screening Time: 1:30 PM - 3:30 PM"],
      storyHeading: "Film Synopsis",
      storyText:
        "Released in 2026, 'The Man Who Lives with the King' is a historical drama about 17-year-old King Danjong (Park Jihoon), who is exiled to Cheongnyeongpo in Yeongwol, Gangwon Province after losing the throne in the aftermath of the Gyeyu Coup, and Eom Heung-do (Yoo Hae-jin), the village chief who protects him with deep loyalty and friendship. The story follows the village chief, who once hoped to profit by turning a poor village into an exile site, and the tragic young king as they come to understand one another and grow through their shared hardship.",
      etiquetteHeading: "Basic Movie Etiquette",
      etiquette: [
        "Please show your pre-booked ticket before entering.",
        "Please silence your phone before the screening begins.",
        "Do not take photos or record video during the film.",
        "Keep conversation and noise to a minimum while others are watching.",
        "If you enter late or need to move, do so quietly without blocking the screen.",
        "Please keep the area tidy and be mindful of food smells and trash.",
      ],
    },
    school: {
      pageEyebrow: "Supporting Organizations",
      pageTitle: "Supporting Organizations",
      pageDescription:
        "This page introduces Waikato Korean School, the Waikato Korean Association, and TANI.",
      orgTabs: {
        school: "Korean School",
        association: "Waikato Korean Association",
        tani: "TANI",
      },
      organizations: {
        school: {
          eyebrow: "Waikato Korean School",
          title: "About the Korean School",
          description:
            "Since 1995, the school has continued to offer Korean language, Korean history, and cultural education for students and families in the Waikato region.",
          images: [
            {
              src: "assets/images/korean_school.jpg",
              alt: "Group photo of Waikato Korean School",
              caption: "Group Photo | Waikato Korean School",
            },
            {
              src: "assets/images/korean_school2.jpg",
              alt: "Activity photo of Waikato Korean School",
              caption: "Group Photo 2 | Waikato Korean School",
            },
          ],
          highlights: ["Since 1995", "Class Hours 9:30 AM - 1:00 PM", "Hamilton, Waikato"],
          introHeading: "About the School",
          introParagraphs: [
            "Since 1995, our Korean school has taught Korean language, Korean history, and Korean culture to students living in the Waikato region.",
            "For children from Korean families, we help strengthen Korean identity and highlight the importance of the Korean language. For students from other backgrounds, we provide opportunities to learn Korean and to better understand Korean culture.",
          ],
          detailOneHeading: "Class Levels",
          detailOneItems: [
            "Balhae Class - Ages 3-5",
            "Buyeo Class - Ages 5-6 | Year 1",
            "Silla Class - Ages 6-8 | Year 2",
            "Baekje Class - Ages 8-10 | Year 3/4",
            "Goguryeo Class - Ages 9-11 | Year 5/6",
            "Goryeo Class - Ages 11 and above | Year 7-10",
            "Joseon Language Program - Foreign Learners",
          ],
          detailTwoHeading: "Tuition and Schedule",
          detailTwoItems: [
            "Balhae and Buyeo Classes - NZD $130 per term (including a NZD $10 materials fee)",
            "Joseon Language Program - NZD $130 per term",
            "Silla, Baekje, Goguryeo, and Goryeo Classes - NZD $120 per term",
          ],
          detailTwoNote: "Class hours: 9:30 AM - 1:00 PM",
          detailThreeHeading: "Admissions and Education Consultation",
          detailThreeItems: ["Principal: Kim Yongju", "Vice Principal: Kwon Jinheon", "Email: waikatoks@gmail.com"],
        },
        association: {
          eyebrow: "Community Organization",
          title: "About the Waikato Korean Association",
          description:
            "A community organization that supports connection and exchange within the Korean community in the Waikato region.",
          images: [],
          highlights: ["Community Exchange", "Festival Support", "Community Care"],
          introHeading: "About the Organization",
          introParagraphs: [
            "The Waikato Korean Association helps Korean residents in the Waikato region stay connected, communicate, and work together as a local community.",
            "Through cultural events, practical information sharing, and community cooperation, the association helps build stronger ties both within the Korean community and with the wider local community.",
          ],
          detailOneHeading: "Key Roles",
          detailOneItems: [
            "Supporting communication and networking within the Korean community",
            "Working with local cultural events and community activities",
            "Sharing practical information for community life and settlement",
          ],
          detailTwoHeading: "Festival Partnership",
          detailTwoItems: [
            "Supporting local events such as the K-festival",
            "Helping family-friendly participation programs",
            "Building exchanges with other local organizations",
          ],
          detailTwoNote: "More detailed organization information can be added here later.",
          detailThreeHeading: "Information",
          detailThreeItems: [
            "Visitors can ask festival staff for related information on site.",
            "Additional organization details can continue to be added to this page.",
          ],
        },
        tani: {
          eyebrow: "Partner Organization",
          title: "About TANI",
          description:
            "A partner organization that supports community connection and multicultural exchange.",
          images: [],
          highlights: ["Multicultural Links", "Community Network", "Festival Partner"],
          introHeading: "About the Organization",
          introParagraphs: [
            "TANI is a partner organization that helps connect people in the local community and encourages different cultures to meet naturally and respectfully.",
            "By working alongside events and community programs, TANI helps create more opportunities for people to understand one another and build meaningful connections.",
          ],
          detailOneHeading: "Areas of Support",
          detailOneItems: [
            "Supporting multicultural exchange and community connection",
            "Partnering with community programs and public events",
            "Helping participant-centered network building",
          ],
          detailTwoHeading: "Festival Partnership",
          detailTwoItems: [
            "Supporting collaboration with local partners",
            "Expanding cultural exchange through event participation",
            "Connecting community-based programs and activities",
          ],
          detailTwoNote: "Detailed organization information can be updated whenever needed.",
          detailThreeHeading: "Information",
          detailThreeItems: [
            "Visitors can receive TANI-related guidance during the event.",
            "Additional materials and introduction text can be added to the supporting organizations page later.",
          ],
        },
      },
    },
    games: {
      eyebrow: "Hands-on Program",
      title: "Traditional Games Experience",
      description:
        "This section introduces Korean traditional games. Yutnori includes a full guide, while Jegichagi and Tuho include concise explanations and video links.",
      infoHeading: "Quick Guide",
      videoHeading: "Video",
      videoButton: "Watch on YouTube",
    },
    gameTabs: {
      yut: "Yutnori",
      jegi: "Jegichagi",
      tuho: "Tuho",
    },
    gameData: {
      yut: {
        label: "TEAM PLAY",
        title: "Yutnori",
        badge: "Family · Group Game",
        summary:
          "Yutnori is one of Korea's best-known traditional games. Players throw four wooden yut sticks and move their tokens according to the result. It may look simple at first, but route choices, stacking, and capturing create a lively game full of strategy.",
        points: [
          "Throw four yut sticks and move a token by the result shown.",
          "Each team usually uses four tokens, and the first team to bring all four home wins.",
          "If you get Yut or Mo, you may throw again.",
          "Your own tokens can stack on the same space and move together.",
          "If you land on an opponent's token, you capture it and earn an extra throw.",
        ],
        videoText:
          "This button opens YouTube search results so visitors can quickly find related Yutnori videos.",
        videoLink: "https://www.youtube.com/results?search_query=Yutnori+how+to+play",
        detail: {
          rulesHeading: "Detailed Yutnori Rules",
          rulesIntro:
            "This guide explains the most widely known basic version so that even first-time visitors at the festival can understand and enjoy Yutnori.",
          rules: [
            "You need four yut sticks, a yut board, and usually four tokens for each team.",
            "On each turn, a team throws all four sticks together and moves one token by the result.",
            "You may stay on the outer path, but using the central shortcut routes well can bring your tokens home faster, so strategy matters.",
            "If one of your tokens lands on another of your own tokens, they can stack and move together to gain speed.",
            "If you land exactly on an opponent's token, you capture it, send it back to the start, and earn one extra throw.",
            "Yut and Mo move 4 and 5 spaces respectively, and both also give an extra throw.",
            "Some families or regions use variations such as back-do, but this page explains the basic standard form of the game.",
          ],
          outcomesHeading: "Do, Gae, Geol, Yut, and Mo",
          outcomesDescription:
            "Here the results are explained by counting how many flat sides face upward. The simple stick drawings below are visual guides to help visitors understand each result.",
          cultureHeading: "Origins of the Names and Animal Meanings",
          cultureText:
            "The Encyclopedia of Korean Culture explains Do, Gae, Geol, Yut, and Mo as words that originally came from the names of domestic animals. They are commonly understood as Do = pig, Gae = dog, Geol = sheep, Yut = cow, and Mo = horse. For that reason, Yutnori is introduced not only as a board game, but also as a traditional game that preserves traces of older language and everyday life.",
          outcomes: [
            {
              name: "Do",
              animal: "Pig",
              move: "Move 1 space",
              sticks: ["flat", "round", "round", "round"],
              caption: "1 flat side up",
              description:
                "Do means one flat side is facing upward. It is the smallest move, but it can be very important for early positioning and for setting up later strategy.",
            },
            {
              name: "Gae",
              animal: "Dog",
              move: "Move 2 spaces",
              sticks: ["flat", "flat", "round", "round"],
              caption: "2 flat sides up",
              description:
                "Gae means two flat sides are facing upward. It is one of the most common and useful results during regular play.",
            },
            {
              name: "Geol",
              animal: "Sheep",
              move: "Move 3 spaces",
              sticks: ["flat", "flat", "flat", "round"],
              caption: "3 flat sides up",
              description:
                "Geol means three flat sides are facing upward. It is often a strong result for entering shortcut paths or chasing an opponent's token.",
            },
            {
              name: "Yut",
              animal: "Cow",
              move: "Move 4 spaces + throw again",
              sticks: ["flat", "flat", "flat", "flat"],
              caption: "4 flat sides up",
              description:
                "Yut means all four flat sides are facing upward. It gives a long move and an extra throw, which can quickly change the flow of the game.",
            },
            {
              name: "Mo",
              animal: "Horse",
              move: "Move 5 spaces + throw again",
              sticks: ["round", "round", "round", "round"],
              caption: "0 flat sides up",
              description:
                "Mo means no flat sides are facing upward, so only the rounded sides show. It is the strongest basic result because it moves five spaces and gives another throw.",
            },
          ],
        },
      },
      jegi: {
        label: "BALANCE PLAY",
        title: "Jegichagi",
        badge: "Solo · Challenge Game",
        summary:
          "Jegichagi is a traditional kicking game in which players keep a jegi in the air without letting it fall, enjoying balance, rhythm, and coordination.",
        points: [
          "The key is to keep the jegi in the air for as long as possible using one foot or alternating feet.",
          "It is a fun way to experience body balance, quick reactions, and rhythm.",
          "If you catch the jegi with your hand while playing, your current count resets to zero.",
          "It is easy to watch, easy to try, and works well in short festival sessions.",
        ],
        videoText:
          "This button opens a YouTube Shorts clip so visitors can quickly watch a Jegichagi example.",
        videoLink: "https://youtube.com/shorts/X-xumxOKsNs?si=6LM6m4p7m1paXEWF",
      },
      tuho: {
        label: "TARGET PLAY",
        title: "Tuho",
        badge: "Focus · Courtesy",
        summary:
          "Tuho (投壺) is a traditional game that was introduced from China during the Three Kingdoms period and enjoyed by royalty and noble families through the Goryeo and Joseon dynasties. Players throw arrow-like sticks into a jar from a set distance, and the game values concentration, calmness, and courtesy.",
        points: [
          "Because the rules are simple, anyone can try it by aiming from a distance and throwing into the container.",
          "Taking turns properly makes it a great traditional activity for children and adults to enjoy together.",
        ],
        videoText:
          "This button opens related Tuho videos on YouTube so visitors can quickly see how the game is played.",
        videoLink: "https://www.youtube.com/results?search_query=Tuho+Korean+traditional+game",
      },
    },
  },
};

content.ko.hero.highlights[0].emoji = "🎉";
content.ko.hero.highlights[1].emoji = "🍜";
content.ko.hero.highlights[2].emoji = "🎬";
content.en.hero.highlights[0].emoji = "🎉";
content.en.hero.highlights[1].emoji = "🍜";
content.en.hero.highlights[2].emoji = "🎬";

const brand = document.querySelector("#brand");
const navTabs = [...document.querySelectorAll(".nav-tab")];
const panels = [...document.querySelectorAll(".panel")];
const langButtons = [...document.querySelectorAll(".lang-button")];
const gameTabs = [...document.querySelectorAll(".game-tab")];
const gameInfoSection = document.querySelector("#game-info-section");
const gameCodeInput = document.querySelector("#game-code-input");
const gameCodeButton = document.querySelector("#game-code-button");
const gameLockBlock = document.querySelector("#game-lock-block");
const gameLockHeading = document.querySelector("#game-lock-heading");
const gameLockStatus = document.querySelector("#game-lock-status");
const gameVideoSection = document.querySelector("#game-video-section");
const gameVideoLink = document.querySelector("#game-video-link");
const voucherPanel = document.querySelector("#voucher-panel");
const voucherHeading = document.querySelector("#voucher-heading");
const voucherText = document.querySelector("#voucher-text");
const voucherHint = document.querySelector("#voucher-hint");
const voucherCodeLabel = document.querySelector("#voucher-code-label");
const voucherCodeValue = document.querySelector("#voucher-code-value");
const voucherHideButton = document.querySelector("#voucher-hide-button");
const yutDetailSection = document.querySelector("#yut-detail-section");
const yutRulesHeading = document.querySelector("#yut-rules-heading");
const yutRulesIntro = document.querySelector("#yut-rules-intro");
const yutRulesList = document.querySelector("#yut-rules-list");
const yutCultureHeading = document.querySelector("#yut-culture-heading");
const yutCultureText = document.querySelector("#yut-culture-text");
const yutOutcomesHeading = document.querySelector("#yut-outcomes-heading");
const yutOutcomesDescription = document.querySelector("#yut-outcomes-description");
const yutOutcomesGrid = document.querySelector("#yut-outcomes-grid");
const schoolPageEyebrow = document.querySelector("#school-page-eyebrow");
const schoolPageTitle = document.querySelector("#school-page-title");
const schoolPageDescription = document.querySelector("#school-page-description");
const schoolOrgTabs = [...document.querySelectorAll(".school-subtab")];
const schoolHero = document.querySelector(".school-hero");
const schoolPhotoWrap = document.querySelector(".school-photo-wrap");
const schoolImage = document.querySelector("#school-image");
const schoolImage2 = document.querySelector("#school-image-2");
const schoolPhotoCaption = document.querySelector("#school-photo-caption");
const schoolPhotoCaption2 = document.querySelector("#school-photo-caption-2");

function areAllGamesUnlocked() {
  return Object.values(state.unlockedGames).every(Boolean);
}

function canShowVoucherTab() {
  return areAllGamesUnlocked() && !state.voucherDismissed;
}

function loadUnlockState() {
  try {
    const raw = window.localStorage.getItem(UNLOCK_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const saved = JSON.parse(raw);
    if (saved?.unlockedGames) {
      state.unlockedGames = {
        ...state.unlockedGames,
        ...saved.unlockedGames,
      };
    }

    if (saved?.voucherCode) {
      state.voucherCode = saved.voucherCode;
    }

    if (saved?.voucherDismissed === true) {
      state.voucherDismissed = true;
    }
  } catch (error) {
    // Ignore storage errors and continue with in-memory state.
  }
}

function saveUnlockState() {
  try {
    window.localStorage.setItem(
      UNLOCK_STORAGE_KEY,
      JSON.stringify({
        unlockedGames: state.unlockedGames,
        voucherCode: state.voucherCode,
        voucherDismissed: state.voucherDismissed,
      }),
    );
  } catch (error) {
    // Ignore storage errors and continue with in-memory state.
  }
}

function getVoucherCode() {
  if (!state.voucherCode) {
    const randomIndex = Math.floor(Math.random() * VOUCHER_CODES.length);
    state.voucherCode = VOUCHER_CODES[randomIndex];
    saveUnlockState();
  }

  return state.voucherCode;
}

function hideVoucherTab() {
  state.voucherDismissed = true;
  if (state.game === "voucher") {
    state.game = "yut";
  }
  saveUnlockState();
  renderPage();
}

function renderYutDetails(currentGame) {
  const detail = currentGame.detail;
  const isYutGame = state.game === "yut" && detail;

  yutDetailSection.hidden = !isYutGame;

  if (!isYutGame) {
    yutRulesList.innerHTML = "";
    yutOutcomesGrid.innerHTML = "";
    return;
  }

  yutRulesHeading.textContent = detail.rulesHeading;
  yutRulesIntro.textContent = detail.rulesIntro;
  yutCultureHeading.textContent = detail.cultureHeading;
  yutCultureText.textContent = detail.cultureText;
  yutOutcomesHeading.textContent = detail.outcomesHeading;
  yutOutcomesDescription.textContent = detail.outcomesDescription;

  yutRulesList.innerHTML = detail.rules.map((item) => `<li>${item}</li>`).join("");

  yutOutcomesGrid.innerHTML = detail.outcomes
    .map(
      (item) => `
        <article class="result-card">
          <div class="result-head">
            <div>
              <h5>${item.name}</h5>
              <p class="result-move">${item.move}</p>
            </div>
            <span class="animal-chip">${item.animal}</span>
          </div>
          <div class="stick-row" aria-label="${item.name}">
            ${item.sticks.map((stick) => `<span class="yut-stick ${stick}"></span>`).join("")}
          </div>
          <p class="stick-caption">${item.caption}</p>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function getGameData(gameKey, copy) {
  if (gameKey === "voucher") {
    return voucherGameData[state.lang] || voucherGameData.ko;
  }
  return copy.gameData[gameKey];
}

function getGameTabLabel(gameKey, copy) {
  if (gameKey === "voucher") {
    return gameTabLabels[state.lang]?.voucher || gameTabLabels.ko.voucher;
  }
  return copy.gameTabs[gameKey];
}

function getGameLockText(copy) {
  return gameLockText[state.lang] || gameLockText.ko;
}

function ensureActiveGameIsAvailable(copy) {
  if (state.game === "voucher" && !canShowVoucherTab()) {
    state.game = "yut";
  }

  const availableGame = getGameData(state.game, copy);
  if (!availableGame) {
    state.game = "yut";
  }
}

function renderGameLock(copy) {
  const isVoucherGame = state.game === "voucher";
  const lockText = getGameLockText(copy);
  gameLockBlock.hidden = isVoucherGame;

  if (isVoucherGame) {
    return;
  }

  gameCodeInput.placeholder = lockText.codePlaceholder;
  gameCodeButton.textContent = lockText.codeButton;
  gameLockHeading.textContent = lockText.lockHeading;

  if (state.lockMessage) {
    gameLockStatus.textContent = state.lockMessage;
    state.lockMessage = "";
    return;
  }

  if (state.unlockedGames[state.game]) {
    gameLockStatus.textContent = lockText.codeAlreadyUnlocked;
  } else {
    gameLockStatus.textContent = lockText.codeReady;
  }
}

function tryUnlockCurrentGame() {
  const copy = content[state.lang];
  const lockText = getGameLockText(copy);
  const currentCode = GAME_UNLOCK_CODES[state.game];

  if (!currentCode) {
    return;
  }

  if (state.unlockedGames[state.game]) {
    gameLockStatus.textContent = lockText.codeAlreadyUnlocked;
    return;
  }

  const enteredCode = (gameCodeInput.value || "").trim();
  if (!/^\d{4}$/.test(enteredCode)) {
    gameLockStatus.textContent = lockText.codeWrong;
    return;
  }

  if (enteredCode === currentCode) {
    state.unlockedGames[state.game] = true;
    const isAllUnlocked = areAllGamesUnlocked();
    gameCodeInput.value = "";
    state.lockMessage = isAllUnlocked ? lockText.allUnlocked : lockText.codeSuccess;
    if (isAllUnlocked) {
      state.voucherDismissed = false;
      state.game = "voucher";
    }
    saveUnlockState();
    renderPage();
    return;
  }

  gameLockStatus.textContent = lockText.codeWrong;
}

function renderOverview(copy) {
  document.querySelector("#hero-eyebrow").textContent = copy.hero.eyebrow;
  document.querySelector("#hero-title-prefix").textContent = copy.hero.titlePrefix || "";
  document.querySelector("#hero-title").textContent = copy.hero.title;
  document.querySelector("#hero-description").textContent = copy.hero.description;
  document.querySelector("#hero-location-message").textContent = copy.hero.locationMessage;
  document.querySelector("#hero-sponsor-label").textContent = copy.hero.sponsorLabel;
  document.querySelector("#hero-sponsor-logo").alt = copy.hero.sponsorLogoAlt;
  document.querySelector("#schedule-eyebrow").textContent = copy.schedule.eyebrow;
  document.querySelector("#schedule-title").textContent = copy.schedule.title;

  const highlightRow = document.querySelector("#overview-highlights");
  highlightRow.innerHTML = copy.hero.highlights
    .map(
      (item) => `
        <article class="highlight-card">
          <div class="highlight-head">
            <span class="highlight-emoji" aria-hidden="true">${item.emoji || ""}</span>
            <strong>${item.title}</strong>
          </div>
          <p class="highlight-copy">${item.text}</p>
        </article>
      `,
    )
    .join("");

  const timeline = document.querySelector("#timeline");
  timeline.innerHTML = copy.schedule.items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-copy">
            <strong>${item.title}</strong>
            <span>${item.description}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMovie(copy) {
  document.querySelector("#movie-eyebrow").textContent = copy.movie.eyebrow;
  document.querySelector("#movie-title").textContent = copy.movie.title;
  document.querySelector("#movie-description").textContent = copy.movie.description;
  document.querySelector("#movie-story-heading").textContent = copy.movie.storyHeading;
  document.querySelector("#movie-story-text").textContent = copy.movie.storyText;
  document.querySelector("#movie-etiquette-heading").textContent = copy.movie.etiquetteHeading;
  document.querySelector("#movie-poster-caption").textContent = copy.movie.posterCaption;
  document.querySelector("#movie-poster-image").alt = copy.movie.posterAlt;

  document.querySelector("#movie-meta").innerHTML = copy.movie.meta
    .map((item) => `<span class="meta-pill">${item}</span>`)
    .join("");

  document.querySelector("#movie-etiquette-list").innerHTML = copy.movie.etiquette
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderSchool(copy) {
  const school = copy.school;
  const org = school.organizations[state.schoolOrg] || school.organizations.school;
  const images = org.images || [];
  const firstImage = images[0];
  const secondImage = images[1];

  schoolPageEyebrow.textContent = school.pageEyebrow;
  schoolPageTitle.textContent = school.pageTitle;
  schoolPageDescription.textContent = school.pageDescription;

  schoolOrgTabs.forEach((tab) => {
    const orgKey = tab.dataset.schoolOrg;
    tab.textContent = school.orgTabs[orgKey];
    tab.classList.toggle("is-active", orgKey === state.schoolOrg);
  });

  document.querySelector("#school-eyebrow").textContent = org.eyebrow;
  document.querySelector("#school-title").textContent = org.title;
  document.querySelector("#school-description").textContent = org.description;
  document.querySelector("#school-intro-heading").textContent = org.introHeading;
  document.querySelector("#school-classes-heading").textContent = org.detailOneHeading;
  document.querySelector("#school-tuition-heading").textContent = org.detailTwoHeading;
  document.querySelector("#school-hours").textContent = org.detailTwoNote || "";
  document.querySelector("#school-contact-heading").textContent = org.detailThreeHeading;

  schoolPhotoWrap.hidden = images.length === 0;
  schoolHero.classList.toggle("is-text-only", images.length === 0);

  if (firstImage) {
    schoolImage.parentElement.hidden = false;
    schoolImage.src = firstImage.src;
    schoolImage.alt = firstImage.alt;
    schoolPhotoCaption.textContent = firstImage.caption;
  } else {
    schoolImage.parentElement.hidden = true;
  }

  if (secondImage) {
    schoolImage2.parentElement.hidden = false;
    schoolImage2.src = secondImage.src;
    schoolImage2.alt = secondImage.alt;
    schoolPhotoCaption2.textContent = secondImage.caption;
  } else {
    schoolImage2.parentElement.hidden = true;
  }

  document.querySelector("#school-highlights").innerHTML = org.highlights
    .map((item) => `<span class="meta-pill school-pill">${item}</span>`)
    .join("");

  document.querySelector("#school-intro-text").innerHTML = org.introParagraphs
    .map((item) => `<p>${item}</p>`)
    .join("");

  document.querySelector("#school-classes-list").innerHTML = org.detailOneItems
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.querySelector("#school-tuition-list").innerHTML = org.detailTwoItems
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.querySelector("#school-contact-list").innerHTML = org.detailThreeItems
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderGames(copy) {
  ensureActiveGameIsAvailable(copy);

  document.querySelector("#games-eyebrow").textContent = copy.games.eyebrow;
  document.querySelector("#games-title").textContent = copy.games.title;
  document.querySelector("#games-description").textContent = copy.games.description;

  const currentGame = getGameData(state.game, copy) || copy.gameData.yut;
  document.querySelector("#game-label").textContent = currentGame.label;
  document.querySelector("#game-title").textContent = currentGame.title;
  document.querySelector("#game-badge").textContent = currentGame.badge;
  document.querySelector("#game-summary").textContent = currentGame.summary;
  document.querySelector("#game-info-heading").textContent = copy.games.infoHeading;
  gameLockStatus.textContent = "";

  const gamePoints = document.querySelector("#game-points");
  gamePoints.innerHTML = (currentGame.points || []).map((point) => `<li>${point}</li>`).join("");
  const isVoucherGame = state.game === "voucher";

  gameInfoSection.hidden = isVoucherGame;
  voucherPanel.hidden = !isVoucherGame;

  if (isVoucherGame) {
    voucherHeading.textContent = currentGame.noticeHeading;
    voucherText.textContent = currentGame.noticeText;
    voucherHint.textContent = currentGame.codeHint;
    voucherCodeLabel.textContent = currentGame.codeLabel;
    voucherCodeValue.textContent = getVoucherCode();
  }

  renderYutDetails(currentGame);

  if (currentGame.videoLink) {
    gameVideoSection.hidden = false;
    document.querySelector("#game-video-heading").textContent = copy.games.videoHeading;
    gameVideoLink.href = currentGame.videoLink;
    gameVideoLink.textContent = copy.games.videoButton;
  } else {
    gameVideoSection.hidden = true;
  }

  renderGameLock(copy);
}

function renderNavigation(copy) {
  brand.textContent = copy.brand;
  document.title = copy.documentTitle;
  document.documentElement.lang = state.lang;

  navTabs.forEach((tab) => {
    const section = tab.dataset.section;
    tab.textContent = copy.nav[section];
    tab.classList.toggle("is-active", state.section === section);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === state.section);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  gameTabs.forEach((tab) => {
    const tabGame = tab.dataset.game;
    const isVoucher = tabGame === "voucher";
    const canShowVoucher = canShowVoucherTab();

    if (isVoucher) {
      tab.hidden = !canShowVoucher;
      if (!canShowVoucher) {
        tab.classList.remove("is-active");
        return;
      }
    } else {
      tab.hidden = false;
    }

    tab.textContent = getGameTabLabel(tabGame, copy);
    tab.classList.toggle("is-active", tabGame === state.game);
  });

  voucherHideButton.hidden = !canShowVoucherTab();
}

function renderPage() {
  const copy = content[state.lang];
  ensureActiveGameIsAvailable(copy);
  renderNavigation(copy);
  renderOverview(copy);
  renderMovie(copy);
  renderSchool(copy);
  renderGames(copy);
}

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.section = tab.dataset.section;
    renderPage();
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    renderPage();
  });
});

schoolOrgTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.schoolOrg = tab.dataset.schoolOrg;
    renderPage();
  });
});

gameCodeInput.addEventListener("input", () => {
  gameLockStatus.textContent = "";
});

gameCodeInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  event.preventDefault();
  tryUnlockCurrentGame();
});

gameCodeButton.addEventListener("click", tryUnlockCurrentGame);
voucherHideButton.addEventListener("click", hideVoucherTab);

gameTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.game = tab.dataset.game;
    gameCodeInput.value = "";
    state.lockMessage = "";
    gameLockStatus.textContent = "";
    renderPage();
  });
});

loadUnlockState();
renderPage();
