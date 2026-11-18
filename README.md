# Folk Song Adventure (Firebase + static hosting)

## Files
index.html (student game), admin.html (teacher dashboard), songs.js (all songs and questions),
firebase.js, firebase-config.js, firestore.rules, style.css

## Setup
1. Firebase Console: create a project, then add a Web app and copy its config into firebase-config.js.
2. Authentication > Sign-in method > enable Email/Password.
3. Firestore Database > Create database (production mode), then Rules tab > paste firestore.rules > Publish.
4. Open the site and register an account (for example username "admin"). Then in Authentication > Users copy that account's UID.
5. Firestore > Start collection "admins" > Document ID = that UID > add any field (for example role = admin). That account can now open admin.html.
6. Authentication > Settings > Authorized domains: add your hosting domain.

## Test locally
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000
(localhost is already an authorized domain). Opening index.html by double-click will not work.

## Deploy free
Cloudflare Pages or GitHub Pages: upload this folder as is. No build command, publish directory is the root.

## Forgotten password
Students have no email, so there is no reset link. In Authentication > Users delete that student,
delete their document in the scores collection, and let them register again with the same username.

## Editing questions
Everything is in songs.js. `o` + `a` is multiple choice (a = index of the correct choice, starting at 0).
`j` is a type-from-jumbled-letters question (the answer word, lowercase).
