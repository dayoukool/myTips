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

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
