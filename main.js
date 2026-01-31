class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    text-align: center;
                    padding: 2rem;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .ball-container {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 20px;
                    flex-wrap: wrap;
                }

                .ball {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 1.2rem;
                    font-weight: bold;
                    animation: bounce 0.5s ease;
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    font-size: 1rem;
                    cursor: pointer;
                    border: none;
                    background-color: #4CAF50;
                    color: white;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                button:hover {
                    background-color: #45a049;
                }

                @media (max-width: 600px) {
                    .ball {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }

                    :host {
                        padding: 1.5rem;
                    }
                }
            </style>
            <h1>로또 번호 추첨기</h1>
            <div class="ball-container"></div>
            <button>번호 생성</button>
        `;

        this.ballContainer = this.shadowRoot.querySelector('.ball-container');
        this.generateButton = this.shadowRoot.querySelector('button');

        this.generateButton.addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        this.ballContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            ball.textContent = number;
            ball.style.backgroundColor = this.getRandomColor();
            this.ballContainer.appendChild(ball);
        });
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

customElements.define('lotto-generator', LottoGenerator);
