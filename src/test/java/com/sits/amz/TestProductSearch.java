package com.sits.amz;

/*
public class TestProductSearch extends TestNgTestBase {

    private final static String productKeyWord = "Nikon";
    private final static String expectedProductTitle = "Nikon D3X";

  @Test
  public void testProductSearchByKeyWord() {
      driver.get(baseUrl);
      HomePage homePage = PageFactory.initElements(driver, HomePage.class);
      ProductListPage productListPage = homePage.search_product(productKeyWord);
      productListPage.sortByPrice();
      ProductDetailsPage productDetailsPage = productListPage.openProductDetailsPage();
      String productTitle = productDetailsPage.getProductTitle();
      Assert.assertTrue(productTitle.contains(expectedProductTitle));
  }
}
*/

import org.testng.annotations.Test;

/**
 * Created by Mrudul Pendharkar on 7/3/2017.
 */

public class TestProductSearch extends TestNgCucumberTestBase {

    private final static String productKeyWord = "Nikon";
    private final static String expectedProductTitle = "Nikon D3X";

    @Test
    public void testProductSearchByKeyWord() {

    }
}
