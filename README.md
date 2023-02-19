# PWA-Text-Editor
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://pwa-text-editor-heidi.herokuapp.com/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
This is a text editor that runs in the brower, it is also a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.


## Table of Contents
* [Deployed Application](#deployed-application)
* [Usage](#usage)
* [Built With](#built-with)
* [Screenshot](#screenshot)
* [License](#license) 

## Deployed Application

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://pwa-text-editor-heidi.herokuapp.com/)

Here is the link [https://pwa-text-editor-heidi.herokuapp.com/](https://pwa-text-editor-heidi.herokuapp.com/) for the deployed application.

## Usage
- When you visit the website, you will see the editor initially loaded with a header. Feel free to input content in the editor.
- When you click off of the editor window and then come back, the content persists. It is achieved by storing the data in indexedDB.
- when you close the editor and then reopen it, the content persist. It is also achieved by storing the data in indexedDB.
- When you click on the Install button, the application is downloaded as an icon on your desktop.
- The application is still functioning offline, as service working is registered to cache static assets.


## Built With

- Front-End:
    - *HTML*
    - *CSS*
    - *JavaScript*
    - *webpack*
    - *workbox*
    - *babel*
    - *workpack-pwa-manifest*
- Back-End:
    - *Node.js*
    - *Express.js*
- Deployment
    - *Heroku*
    

## Screenshot

Inital loading in browser:

![Initial Loading](./assets/images/text_editor_initial_loading.png)

With Content:

![With Content](./assets/images/text_editor_with_content.png)

Intall Prompt (appear after the Install button is clicked):

![Install Prompt](./assets/images/text_editor_install_prompt.png)

Installed Application:

![Installed Application](./assets/images/text_editor_installed_app.png)

App Icon in Lauchpad:

![App Icon in Lauchpad](./assets/images/text_editor_app_icon.png)


## License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

This project is licensed under the terms of the MIT license.