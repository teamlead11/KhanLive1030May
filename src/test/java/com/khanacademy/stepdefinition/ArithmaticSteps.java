package com.khanacademy.stepdefinition;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.khanacademy.objectrepository.Arithmatic;
import com.khanacademy.resources.FunctionalLibrary;

import cucumber.api.java.en.Then;
import io.cucumber.datatable.DataTable;

public class ArithmaticSteps extends FunctionalLibrary {
	@Then("The user should see the list of courses of arithmetic")
	public void the_user_should_see_the_list_of_courses_of_arithmetic(DataTable ArithmaticcourseList) {
		List<String> ExpectedArithmaticcourseList = ArithmaticcourseList.asList(String.class);
		Arithmatic arth = new Arithmatic();
		List<WebElement> actualArithmaticcourseList = arth.getLbl_arithmaticCourseList();
		List<String> actualArithmaticCourseListText = new ArrayList<String>();

for (WebElement arithlist : actualArithmaticcourseList) {
	actualArithmaticCourseListText.add(arithlist.getText());
}

for (String s : ExpectedArithmaticcourseList) {
	//Assert.assertEquals(s, actualArithmaticCourseListText);
	Assert.assertTrue(actualArithmaticCourseListText.contains(s));
	
	
}
	}

}
