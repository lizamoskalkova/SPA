import Page from '../../core/templates/page';

class SettingsPage extends Page{

    static TextObject = {
        MainTile: 'Settings Page',
    };

    constructor(id: string) {
        super(id); //вызывает конструктор родительского класса
    }
    
    render () {
        const title = this.createHeaderTitle(SettingsPage.TextObject.MainTile);
        this.container.append(title); //добавляет HTML элемент в конец родителя
        return this.container;
    }
}

export default SettingsPage;