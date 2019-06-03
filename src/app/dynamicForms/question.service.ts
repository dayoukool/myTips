import { Injectable }       from '@angular/core';
 
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { DropdownQuestion } from './question-dropdown';
import { StarratedQuestion } from './question-starrated';

@Injectable()
export class QuestionService {
 
  questionFactory(questionInput) : QuestionBase<any> {
    let question : QuestionBase<any>;
    switch(questionInput.questionType){
      case "starScored":
          return new StarratedQuestion({
            key: questionInput.key,
            label: questionInput.label,
            value: questionInput.value,
            required:  questionInput.required,
            order:  questionInput.order,
            max:questionInput.max,
            options: questionInput.options
          })
    }
  }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
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
      new StarratedQuestion({
        key: 'question1',
        label: 'Avez vous déja utilisé Jira?',
        value: 1,
        required: true,
        order: 3,
        max:4,
        options: [
              'jamais',
              'deux trois fois',
              'tous les jours',
              'je suis Jira'
            ]
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}