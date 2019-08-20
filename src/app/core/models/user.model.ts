import { Deserializable } from './deserializable.model';


export class Tipser implements Deserializable {
    public id: string;
    public avatar: string;
    public firstName: string;
    public lastName: string;
    public popularity: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}
export class User implements Deserializable {
  public id: string;
  public avatar: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public popularity: number;

  deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }

}
export class Follower implements Deserializable {
    public id: string;
    public firstName: string;
    public lastName: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
