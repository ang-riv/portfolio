<<<<<<< HEAD
# Angela Rivera's Portfolio Website

Learn more about me as a Front End Developer!

### Built with:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

- Motion (formerly Framer Motion)
- Icons
  - Iconify

### Deployment

https://ang-riv.github.io/portfolio/

## Introduction

A React app that features all my skills and projects. 

## Features

- **Puzzle Animations:** fun little puzzle animations created with Motion.
- **Project Links:** links to each project's gh-pages page.

## Challenges

- **Problem**: Puzzle Animations placement and correct amount to move in order to join together. Depending on the size of the window and if it's been re-sized, the distance between the puzzle pieces would change. 
  - **Solution**: Added a useWindowSize hook to check if the window has been resized as well as what the initial distance is between the pieces. If it changes, then the distance is recalculated to the correct amount. 
- **Problem**: Changing icons in the About section. The behavior of the icons are different depending on the active tab in the About section. It was difficult to determine what icon needed to be loaded for which section as well as how it was supposed to behave. The first and third tabs have icons that rotate while the second and forth do not. 
  - **Solution**: Kept track of the active tab and used that as the determinant for the icon's animate prop.

## Future Updates

- Updating skills sections and changing the puzzle animation to accomodate new skills
- Make puzzles bigger
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> migrate-to-vite
