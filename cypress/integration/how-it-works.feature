Feature: How It Works

  Scenario: Admin Settings Group Level
    Given User is at the login page
    When User enters username as 'Admin' and password as 'admin123'
    And User clicks on login button
    Then User is able to successfully login to the Website
