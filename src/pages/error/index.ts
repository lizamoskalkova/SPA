import Page from "../../core/templates/page";

class ErrorPage extends Page {

    private errorType: string;

    static TextObject: {[prop: string] : string} = {
       '404': 'Page not found',
    };
    constructor(id: string, errorType: string) {
        super(id),
        this.errorType = errorType;
    }
    render () {
        const tile = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
        this.container.append(tile);
        return this.container;
    }
}

export default ErrorPage;