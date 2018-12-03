export class Tarea{

    private _id: number;
    private _titulo: string;
    private _terminado: boolean;

    constructor(){
        this._id = -1;
        this._titulo = 'Todavia no lo se';
        this._terminado = false;
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get terminado(): boolean {
        return this._terminado;
    }
    public set terminado(value: boolean) {
        this._terminado = value;
    }

}