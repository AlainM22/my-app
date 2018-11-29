export class Fruta {

    private _nombre: string;
    private _precio: number;
    private _calorias: number;
    private _color: string[];
    private _oferta: boolean;
    private _descuento: number;
    private _imagen: string;

    constructor(){
        this._nombre = "";
        this._precio = -1;
        this._calorias = -1;
        this._color = [];
        this._oferta = false;
        this._descuento = 0;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get calorias(): number {
        return this._calorias;
    }
    public set calorias(value: number) {
        this._calorias = value;
    }

    public get color(): string[] {
        return this._color;
    }
    public set color(value: string[]) {
        this._color = value;
    }

    public get oferta(): boolean {
        return this._oferta;
    }
    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
}