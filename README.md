#Adventurandom!
This project was built by Chatchawan L Suwaratana for Thinkful a solo capstone project.

This is the client for the adventurandom client
It accepts user input and randomises an adventure story. Everytime you play it should be different! 

#Live app:
https://adventurandom.vercel.app/

#Screenshots:
[Main](https://i.imgur.com/yzzYsZh.png)

[Form](https://i.imgur.com/U0UUopz.png)

#My tech stack:
React
PostgresQL
javaScript

#React components:
src/components/About/About.js
-Shows about information, acknowledgements and links to my GitHub and Twitter.
src/components/App/App.js
-Main app housing all other components.
src/components/Encounter/Encounter.js
-Repeated component depending on how many encounters the user chooses.
src/components/Header/Header.js
-Header component appearing above all other components, contains logo that links to Main page.
src/components/Header/Main.js
-Home screen with links to begin app functions and instructions on how to play. Also has link to About page.
src/components/Story/Story.js
-Result of the app function. Big block of text listing all the Encounters taking place.
src/components/StoryForm/StoryForm.js
-Where the user enters their input. Takes Location, Number of encounters, Character name and Character class.
