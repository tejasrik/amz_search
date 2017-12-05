package com.sits.amz.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by Mrudul Pendharkar.
 */
public class StepDefinitions {
    @Given("^I am on \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void i_am_on_page_on_URL(String websiteName, String websiteAddress) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("\n === \nWe are Going to " + websiteName + " whose Address is " + websiteAddress);
    }

    @Then("^I should see Search box$")
    public void i_should_see_Search_box() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I should see SearchBox \n --- \n");
    }

    @When("^I fill in \"([^\"]*)\"$")
    public void i_fill_in(String productKeyword) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Product Keyword is " + productKeyword + "\n");
    }

    @When("^I press Search button$")
    public void i_press_Search_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Press Search Button\n");
    }

    @Then("^I get List of \"([^\"]*)\" Products$")
    public void i_get_List_of_Products(String productKeyword) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I get List of " + productKeyword + " Products\n");
    }

    @Then("^I See Option \"([^\"]*)\"$")
    public void i_See_Option(String option) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I see option ::" + option);
    }

    @When("^I Select Option \"([^\"]*)\"$")
    public void i_Select_Option(String option) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I select option ::" + option + "\n");
    }

    @When("^I Select Second Product in List$")
    public void i_Select_Second_Product_in_List() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("I select second product \n");
    }

    @Then("^I can see Product Title Containing \"([^\"]*)\"$")
    public void i_can_see_Product_Title_Containing(String productName) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Product Title Containing::" + productName + "\n");
    }
}
