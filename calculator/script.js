class Calculator {
    constructor() {
        this.previousOperandElement = document.querySelector('.previous');
        this.currentOperandElement = document.querySelector('.current');
        this.clear();
        this.bindEvents();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') this.currentOperand = '0';
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand = this.currentOperand.toString() + number;
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandElement.textContent = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandElement.textContent =
                `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }

    bindEvents() {
        document.querySelectorAll('[data-number]').forEach(button => {
            button.addEventListener('click', () => {
                this.appendNumber(button.textContent);
                this.updateDisplay();
            });
        });

        document.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', () => {
                const action = button.dataset.action;
                switch (action) {
                    case 'clear':
                        this.clear();
                        break;
                    case 'delete':
                        this.delete();
                        break;
                    case 'equals':
                        this.compute();
                        break;
                    default:
                        this.chooseOperation(button.textContent);
                }
                this.updateDisplay();
            });
        });
    }
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    new Calculator();
}); 