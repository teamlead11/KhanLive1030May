package com.khanacademy.stepdefinition;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.khanacademy.objectrepository.MathPage;
import com.khanacademy.resources.FunctionalLibrary;

import cucumber.api.java.en.Then;
import io.cucumber.datatable.DataTable;

public class MathSteps extends FunctionalLibrary {
	@Then("The user should see the list of courses")
	public void the_user_should_see_the_list_of_courses(DataTable courseList) {
		List<String> ExpectedcourseList = courseList.asList(String.class);
		MathPage math = new MathPage();
		List<WebElement> actualCourseListElements = math.getLbl_mathCourseList();
		List<String> actualCourseListText = new ArrayList<String>();
		Assert.assertEquals(actualCourseListElements.size(), 57);
		System.out.println(actualCourseListElements.size());

		for (WebElement list : actualCourseListElements) {
			actualCourseListText.add(list.getText());
		}

		for (String expected : ExpectedcourseList) {
			System.out.println(expected +"expected");
			System.out.println(actualCourseListText +"actual");
			Assert.assertTrue(actualCourseListText.contains(expected));

		}
	}

}
