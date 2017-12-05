package com.sits.amz.stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by Mrudul Pendharkar.
 */
public class ServiceHooks {
    @Before
    public void initializeTest(){
        // Code to setup initial configurations
        System.out.println("Opening Browser:: MOCK");
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        System.out.println("Closing Browser:: MOCK");
        if (scenario.isFailed()) {
            try {
                // Code to capture and embed images in test reports (if scenario fails)
                System.out.println("Scenario Failed::" + scenario.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
