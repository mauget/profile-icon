Feature: Profile Icon

  I want to sign-in, click a profile icon, see the profile, and click the sign-out button

  @focus
  Scenario: User can sign in, click the profile icon, see the profile, and click the sign-out button
    Given I open the app
    And I click sign-in
    And I click the profile icon
    Then it displays the user profile
    When I click the sign-out button
    Then "signed out" should be visible

