$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProductSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Search Product",
  "description": "As a user of Amazon\nI want to be able to search for product using keywords",
  "id": "search-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProductSearch"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on \"Amazon\" page on URL \"http://www.amazon.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see Search box",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "Product Listing",
  "description": "",
  "id": "search-product;product-listing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I fill in \"Nikon\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I press Search button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get List of \"Nikon\" Products",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on \"Amazon\" page on URL \"http://www.amazon.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see Search box",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Product List Sorting",
  "description": "",
  "id": "search-product;product-list-sorting",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I fill in \"Nikon\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I press Search button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get List of \"Nikon\" Products",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I See Option \"Price: High to Low\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 6,
  "name": "User navigates to Amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on \"Amazon\" page on URL \"http://www.amazon.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see Search box",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Product Details",
  "description": "",
  "id": "search-product;product-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I fill in \"Nikon\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I press Search button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I get List of \"Nikon\" Products",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Option \"Price: High to Low\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Second Product in List",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see Product Title Containing \"Nikon D3X\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});