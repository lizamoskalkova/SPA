import Page from '../../core/templates/page'

class MainPage extends Page{

    static TextObject = {
        MainTile: 'Main page 123',
    };
    

    constructor(id: string) {
        super(id); //вызывает конструктор родительского класса
    }
    
    render () {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTile);
        this.container.append(title); //добавляет HTML элемент в конец родителя
        return this.container;
    }
}

export default MainPage;