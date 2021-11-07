import { observer, useLocalObservable } from "mobx-react";
import { useCallback } from "react";
import { Form } from "./CreateGameStore";
import { Button, ImageUpload, Input, Label } from "../../components";
import { useService } from "../../hooks";

export function getForm(): Array<{
    label: string;
    name: string;
    type?: string;
}> {
    return [
        { label: "Названия игры", name: "title" },
        { label: "Озвучка", name: "sound" },
        { label: "Цена", name: "price" },
        { label: "Город", name: "city" },
    ];
}

export function CreateGameModule() {
    const createGameService = useService("CreateGameService");
    const form = useLocalObservable(() => new Form(createGameService));

    const handleChange = useCallback(
        (event) => {
            const target = event.target;
            const { name, value } = target;

            switch (name) {
                case "title": {
                    form.setTitle(value);
                    break;
                }
                case "sound": {
                    form.setSound(value);
                    break;
                }
                case "price": {
                    form.setPrice(value);
                    break;
                }
                case "city": {
                    form.setCity(value);
                    break;
                }
            }
        },
        [form]
    );

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();

            form.submit();
        },
        [form]
    );

    const handleUpload = useCallback(
        async (file: File) => {
            const buffer = await file.arrayBuffer();
            const chunks = new Uint8Array(buffer);
            const blob = new Blob([chunks], { type: file.type });

            form.setFile(blob);
        },
        [form]
    );

    return (
        <div className="container py-4 flex mx-auto space-x-2">
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="flex space-x-3">
                    <ImageUpload onUploaded={handleUpload} />
                    <div className="space-y-3">
                        {getForm().map(({ label, name, type }) => (
                            <div
                                className="flex flex-col"
                                key={label + name + type}
                            >
                                <Label text={label} htmlFor={name} />
                                <Input id={name} name={name} />
                            </div>
                        ))}
                        <Button type="submit" text="Кнопка" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export const CreateGame = observer(CreateGameModule);
