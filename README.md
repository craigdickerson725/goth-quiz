# [GOTH QUIZ](https://craigdickerson725.github.io/goth-quiz)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/craigdickerson725/goth-quiz)](https://github.com/craigdickerson725/goth-quiz/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/craigdickerson725/goth-quiz)](https://github.com/craigdickerson725/goth-quiz/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/craigdickerson725/goth-quiz)](https://github.com/craigdickerson725/goth-quiz)


*Welcome to A Goth Quiz To Make You Sad!  The goal of this quiz is to give goths and non-goths alike a silly quiz to test your knowledge of goth culture.  The correct answers within the questions aren't exactly informative in and of themselves, but rather the names and songs in the answer options are intended to introduce names of people, albums, and songs that are important to the goth scene as we know it.  So put on your black lipstick and your best skull rings, and dive headfirst into this fun goth quiz!

![screenshot](documentation/responsive_01.png)

![screenshot](documentation/responsive_02.png)

source: [amiresponsive](https://ui.dev/amiresponsive?url=https://craigdickerson725.github.io/goth-quiz)

## UX

The design process was quite simple, actually.  The goal was to create a game with a well-known 'quiz-show' format to give those goth kids out there something to do in the spare time they have between sleeping all day and dancing badly in burned-out goth clubs late at night.  The goal was to display the name of the game above the question area.  The question area itself holds the bulk of the content, and almost all of the interactive features.

### Colour Scheme

The color scheme holds to the goth love of red and black.  The reds, of course, needed to be dark, like a mix between crimson and red wine.  In contrast, white was used to make the background of the question area and stand out like a beacon, cutting through the darkness of a black page.  Text is found sometimes in black, and sometimes in white...representing the duality of man (or something like that).   Actually, the text colors were alternated depending on which color makes them easier to read at any given time.  Also, after the user chooses an answer, the correct answer is given a dark green background, to give off an earthy, witchy-vibe.  If an incorrect answer is chosen, the correct is given a dark green color, and the incorrect a black background color.Here is a rundown of the colors used:

- `#9d062c` used for primary text.
- `#ffffff` used for quiz area background.
- `black` used for page background.
- `white` used for option text.
- `#2f4719` used for correct answer background color.
- `black` used for incorrect answer background color.

### Typography

- [Palanquin Dark](https://fonts.google.com/specimen/Palanquin+Dark) was used for all texts.

- [Font Awesome](https://fontawesome.com) is where the super-scary skull icon used in the header came from.

- [UXWing](https://uxwing.com) was used to get the fancy timer icon.

## User Stories

User Stories for A Goth Quiz To Make You Sad focuses more on the goth quiz users, who are assumed to be new users, as this is a brief quiz game (intended for use within another website, for example) and most likely won't be played more than a couple of times by each user.

### Goth Quiz Users

- As a goth quiz user, I would like to see a clear heading, so that I can understand what the game is about.
- As a goth quiz user, I would like to clearly see the question and options, so that I can quickly read what is being asked and promptly choose one of the answer options.
- As a goth quiz user, I would like to see the correct answer highlighted, so that I can learn the correct answer in the case that my selection was wrong.
- As a goth quiz user, I would like to have a timer, so that I can experience a fun sense of competition and urgency in the game.
- As a goth quiz user, I would like to have a score tracker, so that I can see how many correct vs incorrect answers I have at any point during the game.
-As a goth quiz user, I would like to have a message at the end of the game, so that I feel rewarded for a job well done (or chastised for doing a terrible job).

## Wireframes

To follow best practice, wireframes were developed for mobile and tablet/desktop screens.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Mobile Wireframes

<details>
<summary> Click here to see the Mobile Wireframes </summary>

Begin Screen
  - ![screenshot](documentation/wireframes/begin_screen_mobile_wireframe.png)

Question Screen
  - ![screenshot](documentation/wireframes/question_screen_mobile_wireframe.png)

Score Tally/Final Message Screen
  - ![screenshot](documentation/wireframes/final_screen_mobile_wireframe.png)
</details>

### Desktop and Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

Begin Screen
  - ![screenshot](documentation/wireframes/begin_screen_desktop_wireframe.png)

Question Screen
  - ![screenshot](documentation/wireframes/question_screen_desktop_wireframe.png)

Score Tally/Final Message Screen
  - ![screenshot](documentation/wireframes/final_screen_desktop_wireframe.png)
</details>

## Features

### Existing Features

- **The Begin Button**

    - The begin screen has a welcome message, and the Begin Button is there to start the game when the user is ready.

![screenshot](documentation/features/feature01.png)

- **The Question Area**

    - The main feature of the site would be the questions themselves.  When the begin or next button is clicked, the user is presented with a question.  There are four clickable options...once a choice is made, the correct choice is highlighted in green, and if the user has chosen an incorrect answer, that is given a black background.  When a choice is made, all of the options are disabled until the Next button is clicked and a new question begins.

![screenshot](documentation/features/feature02.png)

- **The Timer**

    - The timer is featured on the top right hand corner of the question area.  The user is given 10 seconds to answer each question.  If the timer runs out, the question is considered incorrect.

![screenshot](documentation/features/feature03.png)

- **The Score Tracker**

    - The score tracker keeps track of how many correct answers versus incorrect answers that the user has at any point during the 10-question quiz. 

![screenshot](documentation/features/feature04.png)

- **The Question Tracker**

    - The question tracker keeps track of which number out of 10 questions the user is on.  This is a way for the user to know how many questions they have already answered, and how many remain.

![screenshot](documentation/features/feature05.png)

- **The Next Button**

    - The next button advances to the next question (or to the end of the game, if all 10 questions have been presented.  If the user does not make an answer selection before clicking the next button, then it is considered an incorrect answer.

![screenshot](documentation/features/feature06.png)

- **The Score Tally/Final Message**

    - When the quiz is finished, the score tally is presented to the user, along with a message which either a) praises the user for their impressive goth knowledge, or b) chastises them for their lack of goth knowledge.  

![screenshot](documentation/features/feature07.png)

- **The Restart Button**

    - When the game is finished, and the user has been presented with their score and final message of encouragement (or discouragement), then a new quiz can be started by clicking the restart button.

![screenshot](documentation/features/feature08.png)
