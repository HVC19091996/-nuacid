NUACID - Professional Static Website (Multilingual)
--------------------------------------------------
This package is a full static website (HTML/CSS/JS) in Vietnamese / English / Chinese.
Language switching is site-wide and persists between pages via localStorage.

Structure:
 - index.html (home)
 - about.html
 - products.html
 - news.html
 - contact.html (includes Google Maps iframe placeholder)
 - assets/css/style.css
 - assets/js/language.js
 - assets/images/* (placeholder images)

HOW TO REPLACE IMAGES (take from web):
 - Replace files in assets/images/ with your real photos.
 - Maintain the same filenames (banner1.jpg, banner2.jpg, banner3.jpg, factory.jpg, product1.jpg, product2.jpg, partner1.jpg)
 - If you want to download images from web, right-click -> Save image as -> place into assets/images/

EMBED GOOGLE MAP:
 - Open https://www.google.com/maps, search your address, click Share -> Embed a map -> copy iframe code
 - Edit contact.html and replace the iframe placeholder (div id="map-placeholder") with that iframe snippet

DEPLOY:
 - Upload all files to your hosting or GitHub Pages (put files at repo root)
 - For GitHub Pages: push to repo and enable Pages (branch: main, folder: root)
 - After deploy, browse to your site and set language using the buttons in header

NEED HELP?
 - If you want I can (1) fetch free images and replace them into the package, or (2) deploy to your GitHub repo directly if you give permission.
