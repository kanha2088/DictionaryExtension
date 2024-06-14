# Dictionary Search Chrome Extension

## Overview
Dictionary Search is a Chrome extension that allows users to search for word definitions, phonetics, and examples directly from their browser.  Copy the word in a webpage, users can quickly access detailed information about the word.

## Features
- Search for word definitions, phonetics, and examples
- Easy-to-use interface

## Installation
1. Clone the repository or download the ZIP file:
    ```sh
    git clone https://github.com/yourusername/dictionary-search-extension.git
    ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click on the **Load unpacked** button and select the directory where you cloned or unzipped the repository.

## Usage
1. Enter a word in the search input field and click the **Search** button to fetch definitions, phonetics, and examples.
2. Click on the audio icon to play the pronunciation of the word.

## File Structure
- `popup.html` - The HTML file for the extension popup.
- `popup.js` - The JavaScript file handling the logic for fetching and displaying word information.
- `popup.css` - The CSS file for styling the extension popup.
- `manifest.json` - The manifest file containing extension metadata.

## Development
To contribute to the development of this extension:
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```sh
    git commit -m "Description of your changes"
    ```
5. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
6. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Dictionary API](https://dictionaryapi.dev/) for providing the word definitions and phonetics.

## Contact
For any inquiries, please contact [yourname@example.com](mailto:yourname@example.com).
