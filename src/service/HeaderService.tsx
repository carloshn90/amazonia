export class HeaderService {

    private static INSTANCE: HeaderService;

    public findAllMenu = (): Array<string> => ['Electronics', 'Books', 'Music', 'Contact'];
            // .map((name: string, index: number) => ({
            //     key: index + 1,
            //     label: name
            // }));

    public static getInstance = (): HeaderService => {

        if (!HeaderService.INSTANCE) {
            HeaderService.INSTANCE = new HeaderService();
        }

        return HeaderService.INSTANCE;
    }
}