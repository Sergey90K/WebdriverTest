const { Console } = require("console");
const mainPage = require('../page/main.page.js');
const apiPage = require('../page/api.page.js');
const helpPage = require('../page/help.page.js');
const versionsPage = require('../page/versions.page.js');




describe('My DZ ', () => {
    xit('ol step of first dz', async () => {
        await browser.url('https://v5.webdriver.io/'); // open
       const apiButt = $("li a[href='/docs/api.html']"); //go tu URL
        (await apiButt).click();                         //click to API
        let myUrl = await browser.getUrl();                //reciv URL
        console.log(myUrl);                                  //print to console
        let valueDocs = $(".postHeaderTitle");              //find API Docs
        console.log((await valueDocs).getText());           // print rezalt
        let jsonWp = $("//*[text()='JSONWire protocol']");
        let rezaltJWp = (await jsonWp).getAttribute('href');
        console.log(rezaltJWp);
        const  input = $('#search_input_react');            //create variable vith locator
        (await input).addValue('test is ');                 //add text
        (await input).addValue('DONE!');                    //add text
        (await browser).pause(5000);                          //pause 5 second
    });
    xit ("ol step of second dz",async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html'); // open
       // await browser.newWindow('https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol');
       let lincOfNewWindow = await $('//*[text()="JSONWire protocol"]');
        await browser.pause(5000);
        let onlyLinc = await lincOfNewWindow.getAttribute('href');
        await browser.newWindow(onlyLinc);
        await browser.pause(5000); 
        await browser.switchWindow('https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol');
        const selectorForHom = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
        console.log(( await selectorForHom).isDisplayed());
        await browser.switchWindow('https://v5.webdriver.io/docs/api.html');
        const apiDocsText = $(".postHeaderTitle");
        (await apiDocsText).waitUntil(function() {
            return this.getText() ==='API Docs'
        }, {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        (await apiDocsText).saveScreenshot('./elemScreenshot.png');
        const lincTwiter = $('[href="https://twitter.com/webdriverio"]');
        console.log(( await lincTwiter).isDisplayed());
        console.log(( await lincTwiter).isDisplayedInViewport());
        (await lincTwiter).scrollIntoView();
        console.log(( await lincTwiter).isDisplayed());
        console.log(( await lincTwiter).isDisplayedInViewport());
        const lincBlog = $('[href="/blog/"]');
        console.log(( await lincBlog).isFocused());
        (await lincBlog).click(); // https://v5.webdriver.io/blog/ this part does not work due to problems with site version
        console.log(( await lincBlog).isFocused());
        await browser.pause(10000);  
        //console.log(apiDocsRezalt);
    })
    xit ("ol step of third dz",async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html'); //open
        const lincGuide = $('[href="/docs/gettingstarted.html"][target]');//css
        const lincGuideX = $('//*[contains(text(),"Guide")]');//xpas
        const lincHelp = $('[href="/help.html"][target]');//css
        const lincHelpX = $('//li/a[contains(text(),"Help")]');//xpas
        const lincOfBlog = $('[href="/blog/"][target]');//css
        const lincOfBlogX = $('//li/a[contains(text(),"Blog")]');//xpas
        const lincEdit = $('[href="https://github.com/webdriverio/webdriverio/edit/master/docs/API.md"]');//css
        const lincEditX = $('//*[contains(text(),"Edit")]');//xpas
        const lincContribute = $('li [href="#contribute"]');//css
        const lincContributeX = $('//a[contains(text(),"Contribute")]');//xpas
        const lincV4Webdriwer = $('[href="http://v4.webdriver.io"]');//css
        const lincV4WebdriwerX = $('//a[contains(text(),"v4.webdriver.io")]');//xpas
        const lincTextX = $('//*[contains(text(),"Each command ")]'); //xpas
        const lincApiDocs = $('[href="/docs/api.html"][class="navItem"]');//css
        const lincApiDocsX = $('//a[contains(text(),"API Docs")]');//xpas
        const lincWebdriverProtocol = $('[href="/docs/api/webdriver.html"][class="navItem"]');//css
        const lincWebdriverProtocolX = $('//a[contains(text(),"Webdriver Protocol")]');//xpas
        const lincAppium = $('[href="/docs/api/appium.html"]');//css
        const lincAppiumX = $('//a[contains(text(),"Appium")]'); //xpas
        const linJsonwp = $('[href="/docs/api/jsonwp.html"]'); //css
        const linJsonwpX = $('//ul/li[3]/a[contains(text(),"JSON Wire Protocol")]');//xpas
        const lincMobileJSONWireProtocol = $('[href="/docs/api/mjsonwp.html"]');//css
        const lincMobileJSONWireProtocolX = $('//ul/li/a[contains(text(),"Mobile JSON Wire Protocol")]');//xpas
        const lincChromium = $('[href="/docs/api/chromium.html"]');//css
        const lincChromiumX = $('//ul/li/a[contains(text(),"Chromium")]');//xpas
        const lincSauceLabs = $('[href="/docs/api/saucelabs.html"]');//css
        const lincSauceLabsX = $('//ul/li/a[contains(text(),"Sauce Labs")]');//xpas
        const lincSeleniumStandalone = $('[href="/docs/api/selenium.html"]'); //css
        const lincSeleniumStandaloneX = $('//ul/li/a[contains(text(),"Selenium Standalone")]'); //xpas
        const lincGettingStarted = $('footer div a[href="/docs/gettingstarted.html"]'); //css
        const lincGettingStartedX = $('//a[contains(text(),"Getting Started")]'); //xpas
        const lincAPIReference = $('footer div a[href="/docs/api.html"]');//css
        const lincAPIReferenceX = $('//a[contains(text(),"API Reference")]');//xpas
        const lincHelpFoter = $('footer div a[href="/help.html"]')//css
        const lincHelpFoterX = $('//div/a[contains(text(),"Help")]//div/a[contains(text(),"Help")]')//xpas
        const lincStackOverflow = $('[href="https://stackoverflow.com/questions/tagged/webdriver-io"]'); //css
        const lincStackOverflowX = $('//*[contains(text(),"Stack Overflow")]'); //xpas
        const lincSupportChat = $('[href="https://gitter.im/webdriverio/webdriverio"]'); //css
        const lincSupportChatX = $('//*[contains(text(),"Support Chat")]'); //xpas
        const lincTwitter = $('[href="https://twitter.com/webdriverio"]');//css
        const lincTwitterX = $('//*[contains(text(),"Twitter")and @target]');//xpas
        const lincBlog = $('[href="/blog"]');//css
        const lincBlogX = $('//div/a[contains(text(),"Blog")]');//xpas
        const lincGitHub = $('footer div a[href="https://github.com/webdriverio/webdriverio"]');//css
        const lincGitHubX = $('//div/a[contains(text(),"GitHub")]');//xpas

});
});
describe('My TestCase ', () => {
    xit('test Case 1', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(2000); 
        const linkSignIn = $('div a[href="/login"]');
        await browser.pause(2000);
        (await linkSignIn).click();
        await browser.pause(2000);
        const linkCreateAccount = $('//*[contains(text(),"Create an account")]');
        (await linkCreateAccount).click();
        await browser.pause(5000);  
        const inputFild = $('[id="email"]');
        (await inputFild).addValue('myMail');
        await browser.pause(5000);  
        let mesage = $('//*[@id="email-err"]/p');
        (await mesage).waitUntil(function() {
            return this.getText() ==='Email is invalid or already taken'

        }, {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
    }) 
    xit('test Case 2', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(2000); 
        const linkPricing = $('/html/body/footer/div[1]/div/div[2]/ul/li[7]/a');
        (await linkPricing).scrollIntoView();
        await browser.pause(2000); 
        (await linkPricing).click();
        await browser.pause(1000);
        let myUrl = await browser.getUrl();
        if(myUrl == 'https://github.com/pricing'){
            console.log('oll OK'); 
        }else {
            console.log('problem'); 
        }
    }) 
    xit('test Case 3', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(2000); 
        const linkPricing = $('/html/body/footer/div[1]/div/div[2]/ul/li[7]/a');
        (await linkPricing).scrollIntoView();
        await browser.pause(2000); 
        (await linkPricing).click();
        await browser.pause(1000);
        const linkLernMoreGitHubPlans = $('//*[@id="faq"]/div/div/div/div/div[5]/p[2]/a');
        (await linkLernMoreGitHubPlans).click();
        await browser.pause(1000);
        const linkTextGitPlan = $('//h1[contains(text(),"How does upgrading or downgrading affect the billing process?")]');
        if(await browser.getUrl() ==='https://docs.github.com/en/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process'){
        console.log('www ok');
        (await linkTextGitPlan).waitUntil(function() {
            return this.getText() ==='How does upgrading or downgrading affect the billing process?'

        }, {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        }else{
            console.log('problems');
        }
        
    }) 
    xit('test Case 4', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(2000); 
        const linkShop = $('/html/body/footer/div[1]/div/div[5]/ul/li[7]/a'); 
        (await linkShop).scrollIntoView();
        await browser.pause(2000); 
        (await linkShop).click();
        await browser.pause(1000);
        const linkViewAll = $('[href="/collections/best-sellers"]');
        await browser.pause(2000); 
        (await linkViewAll).click();
        await browser.pause(1000);
        let myUrlShop = await browser.getUrl();
        if(myUrlShop == 'https://thegithubshop.com/collections/best-sellers'){
            console.log('oll OK'); 
        }else {
            console.log('problem'); 
        }

    }) 
    xit('test Case 5', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(2000); 
        const linkAtom = $('[href="https://atom.io"]');
        (await linkAtom).click();
        await browser.pause(2000); 
        const linkDocumentation = $('[href="/docs"]');
        (await linkDocumentation).click();
        await browser.pause(1000);
        if(await browser.getUrl() === 'https://atom.io/docs'){
            const linkAtomDokText = $('//*[contains(text(),"Atom Documentation")]');
            (await linkAtomDokText).waitUntil(function() {
                return this.getText() ==='Atom Documentation'
    
            }, {
                timeout:5000,
                timeoutMsg: 'expected text to be different after 5s'
            });
        }else{
            console.log('problems');
        }
    }) 
})
describe('My DZ  patern', () => {
    xit('page Object', async () =>{
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://webdriver.io/');
        await browser.pause(2000); 
        (await mainPage.searchDocsLink).click();
        await browser.pause(5000); 
    })
    xit('ALL page Object', async () =>{
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://v6.webdriver.io/');
        await browser.pause(2000); 
        (await apiPage.searchApiLink).click();
        await browser.pause(2000); 
        (await apiPage.searchContributeLink).click();
        await browser.pause(2000); 
        (await helpPage.searchHelpLink).click();
        await browser.pause(2000); 
        console.log(( await helpPage.searchBrowseDocsText).isDisplayed());
       (await versionsPage.searchVersionsLink).click();
       await browser.pause(2000); 
       (await versionsPage.searchPastVersionLink).click();
       await browser.pause(2000); 
       (await versionsPage.searchDocumentationLinc).click();
       await browser.pause(2000); 
    })
})