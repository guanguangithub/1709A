export interface IListItem {
    id: number,
    name: string,
    finish: boolean
}

export enum EType {
    delete = 'delete',
    change = 'change'
}