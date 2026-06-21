# Agenda for Day 10: Windows, File Upload & Download

📌 Multiple Windows/Tabs
📌 File Upload
📌 File Download

---

# 1. Handling Multiple Tabs/Windows

Managing multiple windows is vital for comprehensive testing, particularly for applications that open new tabs or windows.

## Sequential Approach

```ts
// Sequentially handling a new window/tab
const pagePromise = context.waitForEvent('page');
await page.getByText('Open', { exact: true }).click();
const newPage = await pagePromise;
```

### Explanation

* Register the listener before triggering the action.
* Click the element that opens the new window.
* Wait for the new page object to be returned.

---

## Using Promise.all()

```ts
// Recommended approach
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByText('Open', { exact: true }).click()
]);
```

### Why Promise.all()?

```text
1. Start listening for the new page event
2. Click the element
3. New tab/window opens
4. Event is captured successfully
```

This avoids missing the event if the window opens immediately after the click.

---

## Using page.waitForEvent('popup')

```ts
// Handling popup opened from the current page
const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('Open Window').click()
]);
```

### Difference

| Method                       | Use Case                                    |
| ---------------------------- | ------------------------------------------- |
| page.waitForEvent('popup')   | Window opened by the current page           |
| context.waitForEvent('page') | Any new page created in the browser context |

---

# 2. File Upload

File upload allows automation of selecting files without interacting with the operating system dialog.

---

## Direct Upload Using setInputFiles()

```ts
// Upload a file directly
await page.locator('#file-upload')
          .setInputFiles('./test-data/sample.pdf');
```

### Explanation

* Works when the element is an `<input type="file">`.
* No OS file chooser interaction is required.
* Fastest and most reliable approach.

---

## Upload Multiple Files

```ts
await page.locator('#file-upload')
          .setInputFiles([
              './test-data/file1.pdf',
              './test-data/file2.pdf'
          ]);
```

---

## Remove Uploaded Files

```ts
await page.locator('#file-upload')
          .setInputFiles([]);
```

---

# 3. File Upload Using FileChooser Event

Used when the upload control opens the operating system file picker.

## Using waitForEvent()

```ts
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#upload-button').click()
]);

await fileChooser.setFiles('./test-data/sample.pdf');
```

### Execution Flow

```text
1. Register filechooser listener
2. Click upload button
3. File chooser event occurs
4. Upload file using setFiles()
```

---

## Using Event Listener

```ts
page.on('filechooser', async fileChooser => {
    await fileChooser.setFiles('./test-data/sample.pdf');
});

await page.locator('#upload-button').click();
```

### Note

The Promise.all() approach is generally preferred because it creates a one-time listener and keeps the code cleaner.

---

# 4. File Download

Playwright can capture and validate downloaded files.

---

## Handling Download Event

```ts
const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByText('Download').click()
]);
```

---

## Get Downloaded File Name

```ts
console.log(await download.suggestedFilename());
```

---

## Save Downloaded File

```ts
await download.saveAs(
    `downloads/${await download.suggestedFilename()}`
);
```

---

## Get Download Path

```ts
const path = await download.path();
console.log(path);
```

---

# Event Listener vs waitForEvent()

| page.on()                 | page.waitForEvent() |
| ------------------------- | ------------------- |
| Continuous listener       | One-time listener   |
| Executes every occurrence | Executes once       |
| Monitoring and logging    | Synchronization     |
| Callback based            | Promise based       |

---

# Interview Questions

### Q1. What is the difference between page.waitForEvent('popup') and context.waitForEvent('page')?

**Answer:**

* `page.waitForEvent('popup')` listens for a popup opened from the current page.
* `context.waitForEvent('page')` listens for any new page created within the browser context.

---

### Q2. Why do we use Promise.all() while handling windows and file uploads?

**Answer:**

To ensure Playwright starts listening for the event before performing the action that triggers the event, preventing missed events.

---

### Q3. What is the preferred way to upload files in Playwright?

**Answer:**

`setInputFiles()` is preferred when the file upload control is an input element. Use the `filechooser` event only when the application opens an OS file picker.

---

### Q4. How do you handle file downloads in Playwright?

**Answer:**

Use `page.waitForEvent('download')` to capture the download event, then use methods like `suggestedFilename()`, `path()`, and `saveAs()` to validate and save the file.

---

# Quick Revision

```text
Multiple Windows

context.waitForEvent('page')
page.waitForEvent('popup')

Preferred:
Promise.all()

----------------------------

File Upload

setInputFiles()

FileChooser Event:
waitForEvent('filechooser')

Preferred:
Promise.all()

----------------------------

File Download

waitForEvent('download')

Useful Methods:
suggestedFilename()
saveAs()
path()

----------------------------

Rule:

Listen First ➜ Trigger Action ➜ Capture Event
```
