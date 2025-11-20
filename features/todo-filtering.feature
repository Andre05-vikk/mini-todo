# language: en
Feature: Todo filtering and validation

  Scenario: Filter only open todos
    Given the list contains a todo "Buy milk"
    And the list contains a todo "Pay bills"
    When I mark "Pay bills" as completed
    And I filter only open todos
    Then the list has 1 item
    And item 1 title is "Buy milk"

  Scenario: Cannot add todo with empty title
    Given an empty list
    When I try to add a todo with empty title
    Then I get error message "Title cannot be empty"
    And the list has 0 items
