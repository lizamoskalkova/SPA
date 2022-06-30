import MainPage from '../main';
import Page from '../../core/templates/page';
import SettingsPage from '../settings';
import StatisticsPage from '../statistics';
import Header from '../../core/components/header';
import ErrorPage from '../error';

export const enum PageIds {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticsPage = 'statistics-page',
  }


  class App {
   
    

    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;
    
 

        static renderNewPage (idPage: string) {
            const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
            if (currentPageHTML) {
                currentPageHTML.remove();
              }
              if (defaultPageId)
              {def.animate([
                  { // from
                    opacity: 0,
                    color: "#fff"
                  },
                  { // to
                    opacity: 1,
                    color: "#000"
                  }
                ], 2000);}
            
           // App.container.innerHTML = '';
            let page: Page | null = null; //тип данных либо Page либо null, итоговая страница кот мы отрендерим
            
            if(idPage === PageIds.MainPage) {
                page = new MainPage(idPage);
            } else if (idPage === PageIds.SettingsPage) {
                page = new SettingsPage(idPage);
            } else if (idPage === PageIds.StatisticsPage) {
                page = new StatisticsPage(idPage);
            } else {
                page = new ErrorPage(idPage, '404');
            }
            if (page) {
                const pageHTML = page.render();
                pageHTML.id = this.defaultPageId;
                App.container.append(pageHTML);
                App.container.style.color = 'green';
                App.container.bezierCurveTo();
                console.log(this.container);
            }
        
        }
        private enableRouteChange () {
            window.addEventListener('hashchange', () => {
                const hash = window.location.hash.slice(1);
                App.renderNewPage(hash);
            });
        }
    constructor () {
     //   App.container; 
        this.header = new Header('header','header-container');
    }
    run () {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}

export default App;