import { QuestionBase } from './question-base';

export class StarratedQuestion extends QuestionBase<number> {
  controlType = 'starrating';
  options: {key: string, value: string}[] = [];
  max: number;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.max = options['max'] || 0;
  }
}