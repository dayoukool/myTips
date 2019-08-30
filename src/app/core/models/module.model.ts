import { Deserializable } from './deserializable.model';
import { Session } from 'protractor';



export class Module implements Deserializable {
  public id: number;
  public titre: string;
  public sujet: string;
  public img: string;
  public level: number;
  public description: string;
  public sessions: Session[];
  public modulEval: ModulEval;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
export class ModulEval implements Deserializable {
  public id: string;
  public questionAnswers: QuestionAnswer[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export class QuestionAnswer implements Deserializable {
  public id: string;
  public question: string;
  public answers: Answer[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
export class Answer implements Deserializable {
  public id: string;
  public answerType: string;
  public answerLabel: string;
  public answerScore: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}


export enum AnswerType {
  "goodOrBad",
  "scored"
}
