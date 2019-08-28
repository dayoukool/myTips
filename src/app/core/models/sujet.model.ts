import { Deserializable } from './deserializable.model';


export class Sujet implements Deserializable {
    public id: string;
    public sujet: string;
    public img: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
