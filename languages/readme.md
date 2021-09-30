- Create a localization file for the required language 
using the program https://poedit.net/download or another. 
File name example: jet-form-builder-ru_RU.po
- Open the file and make a translation

Then you need to create a .json file in the format you need, this can be done through a third-party program (see method 1), or programmatically (see method 2)

### Method 1 (manual)
- Go to the website https://localise.biz/free/converter/po-to-json 
and convert the file po to json. 
The settings are shown in the screenshot 
https://gyazo.com/1ac5f605f5d8844cae7bb9b4a545731d
- Download, open and modify the file as shown in the screenshot 
https://gyazo.com/8bb7be428821530b33011768baaaaa43
- Make copies of the modified file and set them names.
    - jet-form-builder-LOCALE-jet-form-builder-editor-package.json
    - jet-form-builder-LOCALE-jfb-settings.json
    - jet-form-builder-LOCALE-jfb-addons.json
Where locale is your localization. Example: jet-form-builder-ru_RU-jfb-settings.json

### Method 2 (programmatic)
> **Only for advanced users.**
> To work you need 
>[nodejs](https://nodejs.org/en/download/), 
>[npm](https://docs.npmjs.com/) and 
>[gulp](https://gulpjs.com/docs/en/getting-started/quick-start)

- Open a terminal and go to the `jetformbuilder/assets` directory
- Run `npm install`
- After that you can run `gulp jfb-i18n` or `gulp jfb-i18n-watch`





