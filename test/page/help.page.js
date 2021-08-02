class HelpPage {  
    get searchHelpLink(){
        return $('[href="/help.html"][target="_self"]');
    }
    get searchBrowseDocsText(){
        return $('//*[contains(text(),"Browse Docs")]');
    }
}
module.exports = new HelpPage();