import { makeAutoObservable } from "mobx";
import { CreateGameService } from "../../services";

export class Form {
    private title: string = "";
    private sound: string = "";
    private price: string = "";
    private city: string = "";
    private file: Blob | string = "";

    private formData = new FormData();

    private readonly createGameService: CreateGameService;

    constructor(createGameService: CreateGameService) {
        makeAutoObservable(this);

        this.createGameService = createGameService;

        this.formData.append("title", this.title);
        this.formData.append("sound", this.sound);
        this.formData.append("price", this.price);
        this.formData.append("city", this.city);
        this.formData.append("file", this.file);
    }

    public setTitle = (text: string) => {
        this.formData.set("title", text);
        this.title = text;
    };

    public setPrice = (price: string) => {
        this.formData.set("price", price);
        this.price = price;
    };

    public setSound = (sound: string) => {
        this.formData.set("sound", sound);
        this.sound = sound;
    };

    public setCity = (city: string) => {
        this.formData.set("city", city);
        this.city = city;
    };

    public setFile = (blob: Blob) => {
        this.formData.set("file", blob);
        this.file = blob;
    };

    public submit = () => {
        // @ts-ignore
        this.createGameService.createGame([...this.formData.entries()]);
    };
}
