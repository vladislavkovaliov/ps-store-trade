export class CreateGameService {
    public createGame = (data: any): boolean => {
        console.log("CreateGameService::createGame(data: any)", data);
        return true;
    };

    public dispose(): void {}
}
