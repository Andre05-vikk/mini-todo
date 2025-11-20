# language: en
Feature: Todo management

  Scenario: Added todo is visible
    Given an empty list
    When I add a todo "Buy milk"
    Then the list has 1 item
    And item 1 title is "Buy milk"
    And item 1 status is "open"
