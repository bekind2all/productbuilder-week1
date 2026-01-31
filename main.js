const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const winnerSection = document.getElementById('winner-section');

function generateNumbers() {
    // 기존 번호 삭제
    lottoNumbersContainer.innerHTML = '';

    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });

    // 당첨 축하 이미지 표시
    if (winnerSection) {
        winnerSection.classList.remove('hidden');
    }
}

generateBtn.addEventListener('click', generateNumbers);

// 페이지 로드 시 초기 번호 생성
generateNumbers();