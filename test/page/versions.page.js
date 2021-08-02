class VersionsPage { 
    get searchVersionsLink(){
        return $('[href="/docs/versions.html"]');
    }
    get searchPastVersionLink (){
        return $('li [href="#past-versions"]');
    }
    get searchDocumentationLinc(){
        return $('[href="https://v5.webdriver.io/"]');
    }
}
module.exports = new VersionsPage();