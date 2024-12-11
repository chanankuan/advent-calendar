# CS50 Final Project | Advent Calendar 🎄🎁

## Overview
The Advent Calendar is my final project for CS50x, designed to bring festive joy during the holiday season. This interactive application allows users to create and share custom advent calendars, with each day unlocking a unique message, wish, or surprise. By combining modern web technologies and a polished design, this project offers a seamless and engaging experience for users.

#### [Video Demo](https://youtu.be/6kqYW5qW76k)  
#### [Live Demo](https://cs50-advent.netlify.app)

## Features
- **Interactive Calendar**: Users can open one door per day, revealing custom surprises for each day leading to Christmas.
- **Personalized Calendars**: Users can create their own advent calendars with a title and 24 unique wishes or messages.
- **User Authentication**: Secure registration and login system for managing user accounts.
- **Shareable Calendars**: Share calendar links with friends and family. Viewers can interact with opened days but cannot edit or delete content.
- **Responsive Design**: Optimized for use on desktops, tablets, and mobile devices.
- **Holiday-Themed Effects**: Toggle snow, Christmas lights, and background themes for a festive atmosphere.

## Technologies
- **Frontend**: React, SCSS, TypeScript
- **Backend**: Flask for REST API, Supabase Postgres for data storage
- **Deployment**:  
  - Frontend: Hosted on [Netlify](https://cs50-advent.netlify.app)  
  - Backend: Hosted on [Vercel](https://flask-advent.vercel.app)

## Usage
1. Visit the [live demo](https://cs50-advent.netlify.app) or run the app locally (see installation instructions below).
2. Register by providing your name, username, and password.
3. Log in to access the "Create Calendar" and "View My Calendar" sections.
4. Use the "Create Calendar" form to build a calendar with a title and 24 unique wishes or messages.
5. Share the calendar link with others to let them view and interact with the opened days.
6. As the creator, manage your calendar with the ability to edit or delete it. Viewers will only have access to opened days and cannot make modifications.

## Installation
To run the project locally:
1. Clone this repository:
    ```bash
    git clone https://github.com/chanankuan/advent-calendar
    cd advent-calendar
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## Credits
The design inspiration for this Advent Calendar comes from the talented [Al3 on Figma](https://www.figma.com/community/file/1047967420042964585/advent-calendar). Their beautifully crafted advent calendar design laid the foundation for this project. A big thank you for their creative vision and for making this project visually delightful!

## Future Enhancements
- **Enhanced Animations**: Smooth transitions and animations for a more immersive experience.
- **AI-Generated Content**: Integration of OpenAI APIs for personalized or random holiday-themed messages.
- **Custom Themes**: Adding multiple holiday themes, backgrounds, and effects for greater customization.
- **Notifications**: Introducing reminders for users to open their daily doors.
- **Collaborative Sharing**: Enabling group calendars or family collaborations for shared holiday experiences.

## Contributing
Contributions are welcome! Here’s how you can help:
1. Fork this repository.
2. Create a new branch for your feature or fix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push the branch and submit a pull request:
    ```bash
    git push origin feature-name
    ```

Potential contributions include:
- Adding new features, such as animations or themes.
- Fixing bugs or improving performance.
- Enhancing accessibility and user experience.

---

Thank you for checking out this project! Wishing you a joyful holiday season. 🎄✨
