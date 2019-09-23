import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { DropdownQuestion } from './question-dropdown';
import { StarratedQuestion } from './question-starrated';


@Injectable()
export class QuestionService {



  questionFactory(questionAnswerInput, globalQuestionType, globalAnswerList, globalDefaultValue, keyOrder): QuestionBase<any> {
    let question: QuestionBase<any>;
    let questionType = (globalQuestionType) ? globalQuestionType : questionAnswerInput.questionType;
    let answerList = (globalAnswerList) ? globalAnswerList : questionAnswerInput.answerList;
    let questionKey = (keyOrder) ? keyOrder : questionAnswerInput.key;
    let questionOrder = (keyOrder) ? keyOrder : questionAnswerInput.order;
    let value = (globalDefaultValue) ? globalDefaultValue : questionAnswerInput.value;
    console.log('answerList', answerList);
    switch (questionType) {
      case "starScored":
        return new StarratedQuestion({
          keyOrder: questionKey,
          label: questionAnswerInput.label,
          value: value,
          required: questionAnswerInput.required,
          order: questionOrder,
          max: answerList.length,
          options: answerList
        })
    }
  }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions(modulData) {
    let questions: QuestionBase<any>[] = [];
    console.log(modulData);

    let globalQuestionType = modulData.sessionEval.questionAnswers.globalQuestionType;
    let globalAnswerList = modulData.sessionEval.questionAnswers.globalAnswerList;
    let globalDefaultValue = modulData.sessionEval.questionAnswers.globalDefaultValue;
    modulData.sessionEval.questionAnswers.questionList.forEach((quest, key) => {
      questions.push(this.questionFactory(quest, globalQuestionType, globalAnswerList, globalDefaultValue, key));
      console.log(this.questionFactory(quest, globalQuestionType, globalAnswerList, globalDefaultValue, key));
    });
    // new DropdownQuestion({
    //   key: 'brave',
    //   label: 'Bravery Rating',
    //   options: [
    //     {key: 'solid',  value: 'Solid'},
    //     {key: 'great',  value: 'Great'},
    //     {key: 'good',   value: 'Good'},
    //     {key: 'unproven', value: 'Unproven'}
    //   ],
    //   order: 3
    // }),
    //   new StarratedQuestion({
    //     key: 'question1',
    //     label: 'Avez vous déja utilisé Jira?',
    //     value: 1,
    //     required: true,
    //     order: 3,
    //     max:4,
    //     options: [
    //           'jamais',
    //           'deux trois fois',
    //           'tous les jours',
    //           'je suis Jira'
    //         ]
    //   }),

    //   new TextboxQuestion({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),

    //   new TextboxQuestion({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   })
    // ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
