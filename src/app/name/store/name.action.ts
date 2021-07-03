import { Action } from "@ngrx/store";

export const Sa="sahil"
export const CLEAR="Clear"

export class NameActions implements Action{
    readonly type = Sa;
    constructor(public payload:string[]){}
}

export class ClearNameActions implements Action{
    readonly type = CLEAR;
    constructor(){}
}

export type NameActiontype = NameActions | ClearNameActions