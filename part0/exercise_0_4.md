sequenceDiagram
participant browser
participant server

    Note right of browser: User writes a note and clicks the Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: The server saves the new note to the database
    server-->>browser: HTTP 302 (Redirect to /exampleapp/notes)
    deactivate server

    Note right of browser: The browser reloads the Notes page as instructed by the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JS code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "test", "date": "2026-01-11T17:24:08.285Z"}, {"content": "test", "date": "2026-01-11T17:24:51.273Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
