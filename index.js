// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '100%';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "해피뉴이어!" },
  { "number": 2, "message": "곧 징웅넝 생일이네!" },
  { "number": 3, "message": `귤을 좋아하는 징웅넝!\n남은 겨울동안 맛있는 귤 많이 먹어~` },
  { "number": 4, "message": `지우너 생일까지 17일!!!\n아이스크림을 좋아하는 지우너에게` },
  { "number": 5, "message": "구염둥이 징웅넝 생일까지 16일!" },
  { "number": 6, "message": "열심히 일하는 지우넝! 멋있어!!!" },
  { "number": 7, "message": "생일이 다가온다! 돈이 들어 온다!" },
  { "number": 8, "message": "생일 주인공 징웅넝 공주님에게!" },
  { "number": 9, "message": `생일 축하해~ \n가는 곳마다 지우너 최애곡 나와라!!!` },
  { "number": 10, "message": `맛있는 케이크 많이 먹고! \n징웅넝 소원 다~ 이루어져라!!!` },
  { "number": 11, "message": "여행 갈 때 카드 안 챙겨도 신나게 놀 수 있는 징웅넝!" },
  { "number": 12, "message": "좋은 친구들이랑 재밌게 여행 잘 다녀왔네-" },
  { "number": 13, "message": "즐겁게 잘 놀고 와서 다행이야~" },
  { "number": 14, "message": "딸기쟁이 징웅넝🍓" },
  { "number": 15, "message": "선물 많이많이 받아라~" },
  { "number": 16, "message": `빵🧇순🥯이🥞 징🍞웅🥖넝🥐\n생일 축하해!` },
  { "number": 17, "message": "생일날 맛난 술도 마시고~🍸🍹🍷" },
  { "number": 18, "message": "얼마 안 남았다! 징웅넝 생일!" },
  { "number": 19, "message": "좋은 일만 일어나라 얍!!!" },
  { "number": 20, "message": `물병자리♒ 징웅넝!\n생일 축하해~` },
  { "number": 21, "message": `드디어 징웅넝 생일!!! \n 생일 축하해~❤` },
];
