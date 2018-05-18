module.exports = {
    beforeEach : browser => {
        let page = browser.page.pageObjects()
        page.navigate()
    
    },
    after : browser => {
        browser.end()
    },
    'Evens and Odds' : browser => {
        let page = browser.page.pageObjects()
        page
            .setValue('@evenOddInput', '1,2,3,4,5,6,7')
            .expect.element('@evenOddInput').value.to.equal('1,2,3,4,5,6,7')
        page
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.equal('Evens: [2,4,6]')
        page
            .expect.element('@oddResults').text.to.equal('Odds: [1,3,5,7]')
    },
    'Filter Objects' : browser => {
        let page = browser.page.pageObjects()
        page
            .setValue('@objectsFilterInput', 'name')
            .expect.element('@objectsFilterInput').value.to.equal('name')
        page
            .click('@objectsFilterButton')
            .expect.element('@objectsFilterResults').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    },
    'Filter String' : browser => {
        let page = browser.page.pageObjects()
    page
        .setValue('@stringFilterInput', 'e')
        .expect.element('@stringFilterInput').value.to.equal('e')
    page
        .click('@stringFilterButton')
        .expect.element('@stringFilterResults').text.to.equal('Filtered Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer" ]')
    },
    'Palindrome' : browser => {
        let page = browser.page.pageObjects()
    page
        .setValue('@palindromeInput', 'anna')
        .expect.element('@palindromeInput').value.to.equal('anna')
    page
        .click('@palindromeButton')
        .expect.element('@palindromeResults').text.to.equal('Palindrome: true')
    },
    'Sum' : browser => {
        let page = browser.page.pageObjects()
    page
        .setValue('@sumInput1', '14000')
        .expect.element('@sumInput1').value.to.equal('14000')
    page
        .setValue('@sumInput2', '5781')
        .expect.element('@sumInput2').value.to.equal('5781')
    page
        .click('@sumButton')
        .expect.element('@sumResults').text.to.equal('Sum: 19781')
    }
}