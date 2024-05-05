package pkg5;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MusicPlayerTest {
    public static void main(String[] args) {
        // Set ChromeDriver path
        

        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Test Case 1: Verify page title
            driver.get("http://127.0.0.1:5500/index.html");
            String pageTitle = driver.getTitle();
            assert pageTitle.contains("Music Player") : "Page title doesn't contain 'Music Player'";

            // Test Case 2: Play a song
            WebElement playButton = driver.findElement(By.id("masterplay"));
            playButton.click();
            // Add explicit wait for song to start playing if necessary

            // Test Case 3: Verify progress bar updates
            WebElement progressBar = driver.findElement(By.id("MyProgressBar"));
            String progressValue = progressBar.getAttribute("value");
            assert Integer.parseInt(progressValue) > 0 : "Progress bar value is not greater than 0";

            // Add more test cases for other functionalities
        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
        } finally {
            // Close the browser
            //driver.quit();
        }
    }
}

