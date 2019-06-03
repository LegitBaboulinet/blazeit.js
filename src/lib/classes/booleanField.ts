import {Field} from "./field";
import { BOOLEAN } from "sequelize";

export class BooleanField extends Field {
    constructor(
        private _name: string,
        private _required: boolean = false,
        private _isPrimaryKey: boolean = false
    ) {
        super(_name, _required, _isPrimaryKey);
    }

    translateForMongoose(): object {
        return { type: Boolean, required: this.fieldRequired };
    }

    translateForSequelize(): object {
        return { type: BOOLEAN, allowNull: !this.fieldRequired, primaryKey: this.fieldIsPrimaryKey };
    }
}