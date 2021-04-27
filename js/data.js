const qnaList = [
  {
    q: '1. 새로 들어간 스터디, 어색한 분위기가 흐르고 있는데...',
    a: [
      { answer: ' 먼저 옆사람에게 말을 건다. ', score: 1 },
      { answer: ' 누군가 말을 걸어줄 때까지 기다린다. ', score: 0 },
    ]
  },
  {
    q: '2. 조별과제를 할 때 어떤 역할을 더 맡고 싶은가?',
    a: [
      { answer: ' 발표 ', score: 1},
      { answer: ' 자료정리 ', score: 0 },
    ]
  },
  {
    q: '3. 친구들과 모임 약속 장소가 아직 정해지지 않았다면?',
    a: [
      { answer: ' 여기 어때? 괜찮아 보이는 곳을 올리며 추진한다. ', score: 1 },
      { answer: ' 누군가가 의견을 제시할 때까지 기다린다. ', score: 0 },
    ]
  },
  {
    q: '4. 친구가 새로운 취미를 배우러 가자고 한다면?',
    a: [
      { answer: ' 재밌겠다! 같이 배우러 갈래! ', score: 1 },
      { answer: ' 이걸 한다고 인생에 도움이 될 것 같지 않아. 안할래 ', score: 0 },
    ]
  },
  {
    q: '5. 낭만적인 로맨스 영화를 보면서 어떤 생각이 들까? ',
    a: [
      { answer: ' 나도 언젠가 저런 낭만적인 연애를 해야지. ', score: 1 },
      { answer: ' 영화는 영화일 뿐. 현실에선 있을 수 없지. ', score: 0 },
    ]
  },
  {
    q: '6. 둘 중 어떤 것을 선택하고 싶은가? ',
    a: [
      { answer: ' 30%의 확률로 얻을 수 있는 10억 ', score: 1 },
      { answer: ' 90%의 확률로 얻을 수 있는 1000만원 ', score: 0 },
    ]
  },
  {
    q: '7. 꽃을 선물할 때 어떻게 고를까? ',
    a: [
      { answer: ' 적당한 가격대에서 보기에 예쁜 걸로 한다. ', score: 1 },
      { answer: ' 꽃말을 찾아보며 의미가 있는 걸로 고른다. ', score: 0 },
    ]
  },
  {
    q: '8. 연인과 다툰 친구가 하소연을 한다면?',
    a: [
      { answer: ' 이야기를 들어보고 친구의 잘못도 있다면 그 부분은 말해준다. ', score: 1 },
      { answer: ' 잘잘못은 중요하지 않다. 친구의 감정에 공감해준다. ', score: 0 },
    ]
  },
  {
    q: '9. 나는 어떤 사람과 일하는 게 더 좋은가?',
    a: [
      { answer: ' 성격이 까칠하지만 일은 잘하는 사람 ', score: 1 },
      { answer: ' 일은 좀 못하지만 성격이 좋은 사람 ', score: 0 },
    ]
  },
  {
    q: '10. 여행을 가기 전 계획을 어떻게 짜는가?',
    a: [
      { answer: ' 미리 일정표를 만들어 세세하게 계획을 짠다. ', score: 1 },
      { answer: ' 계획은 또 바뀔 수 있으니 대충짜고 일단 떠난다. ', score: 0 },
    ]
  },
  {
    q: '11. 휴대폰 아침 알람은 어떻게 설정되어 있는가?',
    a: [
      { answer: ' 일어나야 할 시간에 딱 1~2개의 알람 ', score: 1 },
      { answer: ' 수십개의 알람을 설정해둔다. 한 번 쓴 알람도 삭제하지 않았다. ', score: 0 },
    ]
  },
  {
    q: '12. 카페에 가던 중 새로 생긴 곳을 발견했다면?',
    a: [
      { answer: ' 그래도 원래 가려던 곳으로 간다. ', score: 1 },
      { answer: ' 새로운 곳으로 가본다. ', score: 0 },
    ]
  }
]

const infoList = [
  {
    id: 0,
    name: '한국무용',
    comment: '<b>차분하고 온화한 성격의 당신은 한국무용이 잘 어울립니다.</b>',
    desc: '-책임감이 강하고 헌신적이며, 인내심이 강해요.<br><br>-조용하고 내향적이면서도 인간관계를 중요하게 생각해 주변에 사람이 많아요. <br>그만큼 인간관계에 대한 스트레스도 많습니다.<br><br>-계획적인 걸 좋아해요. 대책없는 건 딱 싫어요.<br><br>-관심을 받으면 티는 안 내지만 은근히 좋아합니다.<br><br>-누군가가 싫어도 대놓고 싫은 티를 내지는 못해요. <br>-그래도 기억력이 좋고 뒤끝이 있어 서운하게 만든 사람은 잊지 않습니다.<br><br>-친구들에게 상담 요청을 많이 받아요. <br>이야기를 잘 들어주고 공감도 잘 해줍니다.'
  },
  {
    id: 1,
    name: '발레',
    comment: '<b>우아하고 올곧은 성격의 당신은 발레가 잘 어울립니다.</b>',
    desc: '-질서를 중시하고 규칙을 잘 따릅니다.<br><br>-다른 사람들이 느끼기에 다가가기 어려워요.<br><br>-누군가에게 의지하기보다는 혼자서 해결해보려고 노력합니다.<br><br>-모든 일에 계획을 먼저 세우는 게 마음이 편해요.<br><br>-객관적이고 현실감각이 뛰어나 일을 잘한다고 인정받아요.<br><br>-누군가가 고민상담을 하면 공감보다는 해결해주려 해요.<br><br>-어중간한 거 안 좋아해요. 뭐가 됐든 확실하게 정해요. <br><br>-뒷담화를 싫어해요. <br>불만이 있으면 앞에서 말하지 호박씨는 까지않아요.'
  },
  {
    id: 2,
    name: '현대무용',
    comment: '<b>아이디어가 샘솟는 당신은 현대무용이 잘 어울립니다.</b>',
    desc: '-아이디어가 샘솟고 재능이 많으며 똑똑합니다. <br><br>-새로운 것을 시도하는 걸 즐거워합니다.도전하는 건 두렵지 않아요.<br><br>-내가 알고 있는 맛집 리스트며 좋은 정보들을 남들에게 다 공유해줍니다.<br><br>-호기심이 많아 신메뉴를 보면 꼭 먹어봐요.<br><br>-자기주관이 뚜렷하며 호불호가 강합니다.<br><br>-효율적인 걸 좋아해요. 연락에 있어서도 마찬가지예요. <br>굳이 필요한 일이 아니면 연락을 자주 하지 않아요.'
  },
  {
    id: 3,
    name: '스윙댄스',
    comment: '<b>상대방를 생각하는 배려심 깊은 당신은 스윙댄스와 잘 어울립니다.</b>',
    desc: '-기본적으로 성격이 좋아 항상 사람들에게 인기가 많아요. <br>때론 피곤하게 느껴지기도 하지만 그래도 막상 모임에 가면 분위기메이커입니다.<br><br>-부탁을 잘 거절하지 못하고 싫은 소리를 잘 못해요. <br><br>-양보하고 배려하는 게 몸에 베어 있어요.<br><br>-누군가에게 부탁했다가 거절당하면 마음에 상처를 입어요.<br><br>-리액션이 좋고 고민상담을 잘 해줘요. <br><br>-호기심이 많고 창의적이예요. 좋은 아이디어들이 많아요. <br>다만 그것을 실행하기까지가 힘들어요.'
  },
  {
    id: 4,
    name: '폴댄스',
    comment: '<b>현실감각이 있고 집중력이 좋은 당신은 폴댄스와 잘 어울립니다.</b>',
    desc: '-항상 자신감이 넘치고 자존감이 강한 성격이예요.<br><br>-남에게 잘 보이려고 굳이 노력하지 않아요.<br><br>-똑똑하고 독립적인 성향이 강해서 누군가의 도움을 받기보다 혼자 모든 걸 해결하려 해요.<br><br>-가십거리에 관심이 없어요. <br>다만 내가 좋아하는 것에는 집중합니다.<br><br>-감정에 흔들리지 않아요. <br>맺고 끊음이 확실하고 미련이 없어요.<br><br>-자기만의 시간이 중요해요. <br>혼자 생각하는 시간이 많으며 그 속에서 스스로 답을 찾는 편이예요.'
  },
  {
    id: 5,
    name: '라인댄스',
    comment: '<b>총명하며 인기많은 당신은 라인댄스와 잘 어울립니다.</b>',
    desc: '-리더십이 뛰어나 사업가, 리더들이 가장 많이 나와요. <br><br>-책임감이 강해 무슨 일이든 믿고 맡길 수 있어요.<br><br>-상황 판단력이 뛰어나요. <br>일이 어떻게 진행되는 지 어디에서 문제가 있는지 파악이 빠르고 정확해요.<br><br>-성취를 이루는 것을 좋아해요. <br>안되는 건 없다! 는 마인드가 기본적으로 깔려있어요.<br><br>-하지만 답이 없어 보이는 일에는 발도 들이고 싶지 않고, <br>어쩔 수 없이 들이더라도 나서려고 하지 않아요.<br><br>-자존감이 높고 능력이 뛰어나다 보니 자칫 거만해보일 수 있어요.<br>겸손을 잊지 마세요.'
  },
  {
    id: 6,
    name: '째즈댄스',
    comment: '<b>열정과 감성으로 똘똘 뭉친 당신은 째즈댄스와 잘 어울립니다.</b>',
    desc: '-순수해요. 재고 따지지 않아요.<br><br>-따뜻하고 인간적이예요.<br>불의의 사건사고들을 보면 자신의 일처럼 화가 나요.<br><br>-주변 사람들에게 상냥하게 굴지만 항상 어느정도 지켜지는 선이 있어요.<br><br>-처음 보는 사람들에게 낯가림이 심해요.<br><br>-주변 사람들이 티는 안내지만 알고 보면 홀로 스트레스를 많이 받아요.<br><br>-예술, 철학, 인문학 등 원론적이고 추상적으로 생각할 수 있는 것들에 관심이 많아요.'
  },
  {
    id: 7,
    name: '스트릿댄스',
    comment: '<b>자유롭고 편견없이 모두에게 관대한 당신은 스트릿댄스와 잘 어울립니다.</b>',
    desc: '-기본적으로 사람을 좋아하고 오지랖이 넓은 성격이예요. <br>다른 사람의 일에 관심도 많고 다 해결해 주려해요.<br><br>-스릴을 즐겨요. 뭘 하던 내기를 걸면 더 재밌어요.<br><br>-선입견이 없어요. 누구든 오픈마인드로 바라봐요.<br><br>-다른 사람의 행동에 편견이 없는 만큼 자신도 하고싶은 대로 하는 편이예요.<br><br>-연애할 때 상대방에게 완전 헌신하는 타입이예요.<br><br>-누가 어떤 말을 하면 그 말의 의도를 궁금해해요.<br><br>-의미를 부여하는 걸 좋아해요.'
  },
  {
    id: 8,
    name: 'K-POP 댄스',
    comment: '<b>트랜드를 잘 읽는 멋진 당신은 K-POP댄스와 잘 어울립니다.</b>',
    desc: '-사람들에게 관심받는 걸 좋아해요.연예인으로 가장 잘 어울리는 타입이예요.<br><br>-요즘 유행하는 것들이나 가십거리는 모르는 게 없어요.<br><br>-사람들과 대화하다가 조용해지면 견디지 못해요. <br>어떤 주제든 이야기를 꺼내요.<br><br>-천부적인 사교성으로 누구와도 금세 친해집니다.<br><br>-감각이 뛰어나며 새로운 것도 잘 받아들이는 편이예요.<br>다만 어려운 문제에 직면하게 되면 그것을 마주하기보다 그냥 피해버려요.'
  },
  {
    id: 9,
    name: '아프리카 댄스',
    comment: '<b>독특한 자신만의 세상을 갖고 있는 당신은 아프리카댄스와 잘 어울립니다.</b>',
    desc: '-자신만의 확고한 논리가 있어요.<br><br>-잘하는 일보다는 재미있는 일을 더 좋아해요. <br>단순 반복업무보다는 새로운 걸 찾고 발전시키는 일이 더 잘 맞아요.<br><br>-느긋하고 개방적인 성격이지만 호불호는 명확해요.<br><br>-어디 가서 자신의 주장을 펼치는 게 두렵지 않아요. 환불 잘해요.<br><br>-솔직하고 직설적인 편이예요. <br>그래서 때론 주변 사람이 상처받을 수도 있어요.<br><br>-말보다 행동을 먼저 하는 타입 이예요. 해야겠다 싶으면 일단 합니다. <br><br>-추진력이 있고 상황판단을 잘해요.'
  }
]