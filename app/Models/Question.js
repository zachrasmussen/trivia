export class Question {
    constructor({ question, answer }) {
        this.question = question
        this.answer = answer
    }

    get Template() {
        return `
    <div class="card bg-dark mb-3 elevation-2 p-3 text-white">
        <h4>${this.question}</h4>
        <h5>${this.answer}</h5>
    </div>
    `
    }
}