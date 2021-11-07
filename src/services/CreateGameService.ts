export class CreateGameService {
    public createGame = async (data: FormData) => {
        try {
            await fetch("http://localhost:8000/files", {
                method: "post",
                body: data,
            });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    };

    public dispose(): void {}
}
