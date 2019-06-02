// src/app/shared/models/deserializable.model.ts

export interface Deserializable {
    deserialize(input: any): this;
}