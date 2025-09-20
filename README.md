# Group Maker

A simple website to generate random groups in class. It was remade to use React instead of Vanilla JavaScript.

## About the Project

### Preview

<div align='center'>
    <img src='./docs/project-preview.jpg'>
</div>

### Live

<a href='https://erreurdesyntaxe.github.io/group-maker/'>Group Maker</a>

### Objective

The goal of the project is to build a quick and easy way to make random groups
in class for presentations or teamwork.

### Notable Features

- Select a class (7AA, 7CB, 8DA, 8FB...)
- Select group size
- Visually group the students together
- Remove/Re-add student to the group making pool

## Built With

<img src='./docs/html-logo.svg' style='width:40px; height: 40px' >
<img src='./docs/css-logo.svg' style='width:40px; height: 40px' >
<img src='./docs/js-logo.svg' style='width:40px; height: 40px' >
<img src='./docs/react-logo.svg' style='width:40px; height: 40px' >

## To-Do

- [x] Understand the objectives
- [x] Plan
  - [x] User stories
  - [x] Features
  - [x] Flowchart
  - [x] Architecture
  - [x] UI Design
  - [x] Responsive Design
- [x] Development
  - [x] Basic HTML
  - [x] Name Lists
    - [x] Teachers
    - [x] Teachers' Classes
  - [x] Console-Based Logic
  - [x] Remove Inidividual Students
  - [x] UI Features
    - [x] UI Sketch
    - [x] Overall Layout
    - [x] Individual Section Layout
  - [x] Responsive Design

## User Stories

- As a teacher, I want to find the class I teach
- As a teacher, I want to choose the group size (from 1 to 4)
- As a teacher, I want a visual representation of the groups
- As a teacher, I want to temporarily remove absentees from the process
- As a teacher, I want the absentee list to be reset at every lesson
- As a teacher, I want to go back if I missclicked

## Features

- Teachers can remove individual students from the group-making process
- Teachers can re-add students to the process
- Teachers can request a new shuffling of students

## Flowchart

Page Loads -> "Which class are you teaching?" ->
Possibility of removing/re-adding students -> Shuffle Button Pressed ->
Groups are randomly generated and displayed on screen

## Architecture

(Vanilla JS)
class Group {
-constructor(number, nameList) {
--this.number = number;
--this.nameList = nameList;
-}
}

class Teacher {
-constructor(name, groups) {
--this.name = name;
--this.groups = groups;
-}
}

class App {  
-constructor() {  
--this.init();  
-}  
-init() {
-}  
}

## Lessons & Difficulties

Pushing to GitHub is very useful, but with Vite, it has become more complicated. The steps are more numerous, and I keep forgetting them.
