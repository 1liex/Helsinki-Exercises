sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note into the text field and clicks the Save button

    Note right of browser: The browser's JavaScript code constructs a POST request with the new note data as JSON

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note left of server: The server receives the JSON payload and saves the note to the database

    server-->>browser: HTTP 201 Created
    Note left of server: The response body contains JSON: {"message":"note created"}
    deactivate server

    Note right of browser: The browser receives the confirmation, updates the UI dynamically (no page reload) and displays the new note in the list
