# Playwright with TypeScript - Day 4

## Overview

This repository contains the source code, examples, and exercises covered during the Day 4 Playwright with TypeScript training session.

The focus of this session is understanding and implementing:

* Assertions
* Dropdown Handling
* Frame Handling
* Alert Handling

The examples are designed to help learners understand both the implementation and the underlying Playwright architecture.

---

## Session Schedule

| Time                | Topic             |
| ------------------- | ----------------- |
| 09:00 AM - 10:00 AM | Assertions        |
| 10:00 AM - 11:30 AM | Dropdown Handling |
| 11:30 AM - 12:30 PM | Frame Handling    |
| 12:30 PM - 12:50 PM | Alert Handling    |

---

## Learning Objectives

By the end of this session, learners will be able to:

### Assertions

* Understand the purpose of assertions
* Implement validation using Playwright Expect API
* Work with visibility, text, URL, title, value, and state assertions
* Configure assertion timeouts
* Understand Playwright auto-retry mechanism

### Dropdown Handling

* Handle HTML dropdowns using `selectOption()`
* Select values using label, value, and index
* Extract dropdown values
* Verify selected options
* Differentiate between HTML and custom dropdowns

### Frame Handling

* Understand iframe architecture
* Compare Selenium frame handling with Playwright
* Use `frameLocator()`
* Work with `frame()` and `frames()`
* Handle nested frames

### Alert Handling

* Understand browser-native dialogs
* Handle Alert, Confirm, and Prompt dialogs
* Use `page.on('dialog')`
* Use `page.waitForEvent('dialog')`
* Implement dialog assertions

---

## Prerequisites

Before starting this session, learners should be familiar with:

* JavaScript Fundamentals
* TypeScript Basics
* Playwright Locators
* Browser Architecture Fundamentals
* Auto Waiting in Playwright

---

## Key Concepts Covered

### Assertions

Playwright assertions automatically retry until the expected condition is met or the configured timeout expires.

Examples:

* Visibility Validation
* Text Validation
* URL Validation
* Title Validation
* State Validation

---

### Dropdown Handling

The session covers:

* Static HTML Dropdowns
* Dynamic Dropdowns
* Custom UI Dropdowns
* Dropdown Validation Techniques

---

### Frame Handling

Special focus is given to:

* Why Playwright does not use context switching
* Differences between Selenium and Playwright frame handling
* Best practices using `frameLocator()`

---

### Alert Handling

Learners will understand:

* Browser Process vs DOM Elements
* Native Dialog Handling
* Dialog Events
* Accepting and Dismissing Alerts
* Prompt Input Handling

---

## Best Practices

* Follow Action + Assertion pattern
* Prefer Playwright Locators over ElementHandles
* Prefer `frameLocator()` for frame interactions
* Avoid unnecessary hard waits
* Use meaningful assertions after every business action
* Use Playwright's auto-waiting capabilities effectively

---

## Expected Outcome

After completing this repository, learners should be able to independently automate:

* Assertion scenarios
* Dropdown workflows
* Frame interactions
* Browser dialog handling

using Playwright with TypeScript following industry best practices.
