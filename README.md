# chow-down

## About Chow Down
Chow Down helps UW students narrow down their restaurant search by allowing a tight-knit community to share reviews, opinions, and favorites of all local restaurants and eateries. We started working on our project over Summer 2022 as a way for to learn the ins and outs of mobile development. 

## Developers
- Johnathan Busoso
- Minyoung Cho
- Steven Cui
- Kevin Wang
- Kevin Xu

## Configuration Instructions
1. Clone the repository and open in an IDE
2. Type 'npm install' in the terminal (make sure you're in the chow-down directory)
    - This installs all the required dependencies required to run this application.
3. Run 'expo start' in the terminal!ex
    - Because our app opens in a mobile app simulator, you need either XCode or Android Studio downloaded on your computer to run our app.

## File Organization
- Navigators which support React Navigation are nested below the 'navigators' folder.
- Most of the individual pages can be found under the components folder
  - custom-buttons stores props that are frequently reused
  - home-stack stores pages within the Home Navigator
  - profile-drawer stores pages within the Profile Drawer
  - search-bar stores pages related to the search function, including our dataset of restaurants


