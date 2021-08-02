class MainPage {
    get searchDocsLink(){
        return $('[href="/docs/gettingstarted"][class="navbar__item navbar__link"]');
    }
}
module.exports = new MainPage();