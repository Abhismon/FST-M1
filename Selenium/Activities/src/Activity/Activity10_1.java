package Activity;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Activity10_1 {

	public static void main(String[] args) throws InterruptedException 
	{
		//Setting system properties of ChromeDriver
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\AbhishekMondal\\Desktop\\IBM_FST\\chromedriver.exe");

		WebDriver driver = new ChromeDriver();
		Actions actions = new Actions(driver);

		driver.get("https://www.training-support.net/selenium/input-events");
		WebElement cube = driver.findElement(By.id("wrapD3Cube"));
		
		System.out.println("Page title : " + driver.getTitle());

		//Left click
		actions.click(cube);
		WebElement cubeVal = driver.findElement(By.className("active"));
		System.out.println("Left Click: " + cubeVal.getText());

		//Double click
		actions.doubleClick(cube).perform();
		cubeVal = driver.findElement(By.className("active"));
		System.out.println("Double Click: " + cubeVal.getText());

		//Right click        
		actions.contextClick(cube).perform();
		cubeVal = driver.findElement(By.className("active"));
		System.out.println("Right Click: " + cubeVal.getText());
		
		driver.close();
	}
}