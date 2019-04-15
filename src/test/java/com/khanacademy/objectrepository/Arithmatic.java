package com.khanacademy.objectrepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.khanacademy.resources.FunctionalLibrary;

public class Arithmatic {
	public Arithmatic() {
		PageFactory.initElements(FunctionalLibrary.driver, this);
	}
	@FindBy(xpath = "//div[contains(@class,'default_olfzxm')]//div//a//span[@class='text_12zg6rl-o_O-LabelLarge_np83x5']")
	private List<WebElement> lbl_arithmaticCourseList;
	public List<WebElement> getLbl_arithmaticCourseList() {
		return lbl_arithmaticCourseList;
	}


}
