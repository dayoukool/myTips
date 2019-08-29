import { Deserializable } from './deserializable.model';


export class Module implements Deserializable {
    public id: string;
    public sujet: string;
    public img: string;
    public level: number;
    public description: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
