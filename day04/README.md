📑 Agenda for Day 04 -Introducted to Playwright
🎯 [ Focus: Kickstart Playwright automation with hands-on basics ]
 
🕝 Session Highlights

1️⃣ Recap  
* Key Takeaways from Day 1  

2️⃣ Understanding Playwright Architecture
* Core Components and How They Interact  

3️⃣ Browser, Context, and Page
* Breaking Down the Key Concepts  
* Real-life Use Cases in Automation  

4️⃣ Code Your First Test Script
* Hands-on Activity: Writing and Executing a Basic Script  

# Playwright Architecture

Playwright is a node library that provides a high-level API to control web browsers. It facilitates real-time interaction and automation by communicating with browser instances through WebSocket connections and the Chrome DevTools Protocol (CDP).

## Internal Working with WebSockets

Playwright establishes a WebSocket connection to browser instances, enabling it to send commands and receive events in a non-blocking, asynchronous manner. This WebSocket-based communication is crucial for efficiently automating browser operations such as navigation, input, and rendering.

# Understanding Browser, Context, and Pages

In Playwright, automation is structured around three key objects: Browser, Context, and Pages, each serving distinct roles in the automation workflow.

## Browser

Represents an instance of a web browser. Playwright can control multiple Browser instances simultaneously, with each operating in its isolated environment.

## Context
A Browser Context simulates an incognito session, allowing for parallel tests in a single Browser instance without shared cookies, localStorage, or session data.

## Pages

A Page object represents a single browser tab or window, serving as the primary interface for web content interaction, including navigation and element manipulation.

# Fixtures

Fixtures in Playwright provide a powerful way to setup and tear down resources needed for your tests, helping you manage common objects like browser instances, pages, and custom configurations in a reusable manner.

## What is a Fixture?

A fixture is essentially a piece of code that can run before and after each test, or a suite of tests, to set up the environment in which the tests will run. This can include creating a new browser instance, a new page, logging into an application.

## The Page Fixture

One of the most commonly used fixtures in Playwright tests is the `page` fixture. It provides a fresh browser page for each test, ensuring test isolation and reducing the likelihood of side effects between tests.

### Usage

When using Playwright Test, the `page` fixture is automatically available in each test, and you do not need to explicitly declare it. Here’s how you can use it:

```javascript
import { test, expect } from '@playwright/test';

test("Learning fixtures", async ({page}) =>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "dilipkumar.rajendran@testleaf.com");
    await page.fill("#password", "TestLeaf@2025");
    await page.click("#Login");

});
```

