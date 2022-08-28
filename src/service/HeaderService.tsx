export class HeaderService {

    private static INSTANCE: HeaderService;

    public findAllMenu = (): Array<string> => ['Electronics', 'Books', 'Music', 'Contact'];

    public static getInstance = (): HeaderService => {

        if (!HeaderService.INSTANCE) {
            HeaderService.INSTANCE = new HeaderService();
        }

        return HeaderService.INSTANCE;
    }
}