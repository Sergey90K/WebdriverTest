class ApiPage { 
    get searchApiLink(){
        return $('li [href="/docs/api.html"]');
    }
    get searchContributeLink(){
        return $('li [href="#contribute"]');
    }
}
module.exports = new ApiPage();