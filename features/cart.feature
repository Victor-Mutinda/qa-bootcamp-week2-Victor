
Feature: Add products to the shopping cart

  Background:
    Given the shopper is logged in
    And the shopper is on the Toolshop home page

  Scenario: Add four Pliers to the shopping cart
    Given the shopper has opened the Pliers product page
    When the shopper enters a quantity of 4
    And the shopper clicks the "Add to cart" button
    Then the cart should contain 4 Pliers
