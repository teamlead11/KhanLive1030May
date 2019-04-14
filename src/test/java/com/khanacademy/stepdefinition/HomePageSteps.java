package com.khanacademy.stepdefinition;

import com.khanacademy.objectrepository.HomePage;
import com.khanacademy.resources.FunctionalLibrary;

import cucumber.api.java.en.Given;

public class HomePageSteps extends FunctionalLibrary {
	@Given("The user navigates to early math page")
	public void the_user_navigates_to_early_math_page() {
		HomePage home = new HomePage();
		click(home.getLnk_courses());
		click(home.getLnk_earlyMath());
	}

	@Given("The user navigates to math page")
	public void the_user_navigates_to_math_page() {
		HomePage home = new HomePage();
		click(home.getLnk_courses());
		click(home.getLnk_headerMath());
	}
}
