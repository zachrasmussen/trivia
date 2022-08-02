import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuestions() {
    let template = ''

    ProxyState.questions.forEach(q => template += q.Template)

    document.getElementById('questions').innerHTML = `
        <div>
            ${template}
        </div>
    `
}

export class QuestionsController {
    contructor() {
        console.log('test questions');

        ProxyState.on('questions', _drawQuestions)
    }

    async goGetQuestions() {
        try {
            await triviaService.getQuestions()
        } catch (error) {
            console.error('[Get Question]', error)
            Pop.error(error)
        }
    }
}