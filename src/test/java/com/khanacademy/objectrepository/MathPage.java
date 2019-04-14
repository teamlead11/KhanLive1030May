package com.khanacademy.objectrepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.khanacademy.resources.FunctionalLibrary;

public class MathPage {
	public MathPage() {
		PageFactory.initElements(FunctionalLibrary.driver, this);
	}

	@FindBy(xpath = "//div[contains(@class,'moduleList')]//div//h2[@class='title_vlezec']/a")
	private List<WebElement> lbl_mathCourseList;

	public List<WebElement> getLbl_mathCourseList() {
		return lbl_mathCourseList;
	}

}
