package com.khanacademy.stepdefinition;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.khanacademy.resources.FunctionalLibrary;

import cucumber.api.java.en.Then;
import io.cucumber.datatable.DataTable;

public class MathSteps extends FunctionalLibrary {
	@Then("The user should see the list of courses")
	public void the_user_should_see_the_list_of_courses(DataTable courseList) {
		
	}

}
