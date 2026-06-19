# Student Management Dashboard

A professional front-end project for practicing real Git and GitHub workflows.

## Overview

Student Management Dashboard is a simple browser-based application for managing student records.  
It is built with HTML, CSS, and modular JavaScript.

This project is designed to practice:

- Clean project structure
- Git commits
- Branches
- Pull requests
- `.gitignore`
- Tags and releases
- Professional GitHub workflow

## Features

- Add a student
- Display students
- Search students
- Delete students
- Save data in browser localStorage
- Modular JavaScript structure
- Clean responsive UI

## Project Structure

```text
student-management-dashboard/
├── index.html
├── README.md
├── .gitignore
├── docs/
│   └── workflow.md
└── src/
    ├── assets/
    │   ├── css/
    │   │   └── styles.css
    │   └── js/
    │       └── main.js
    ├── data/
    │   └── seedStudents.js
    ├── features/
    │   └── students/
    │       ├── studentController.js
    │       ├── studentModel.js
    │       └── studentView.js
    ├── services/
    │   └── storageService.js
    └── utils/
        └── validators.js