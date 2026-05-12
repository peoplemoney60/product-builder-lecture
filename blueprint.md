# Lotto Number Picker Blueprint

## Overview

This document outlines the design and implementation of a simple, visually appealing Lotto Number Picker application. The application will generate and display a set of 6 unique random numbers, simulating a lottery draw.

## Project Outline

### 1. **Visual Design & Style**

*   **Layout:** A clean, centered, and responsive layout that works well on both desktop and mobile devices.
*   **Color Palette:** A modern and vibrant color scheme. The background will be a dark gradient with a subtle noise texture. The lottery balls will have distinct, bright colors.
*   **Typography:** Clear and readable fonts. A large, bold font for the main title and slightly smaller fonts for other text.
*   **Components:**
    *   **Header:** Contains the main title of the application.
    *   **Main Section:**
        *   A "Generate Numbers" button with a glowing effect on hover.
        *   A container to display the generated lottery numbers.
    *   **Lottery Balls:** The generated numbers will be displayed inside circular elements ("balls") with unique background colors and a subtle shadow to give them a "lifted" look.

### 2. **Features**

*   **Number Generation:**
    *   Clicking the "Generate Numbers" button will trigger the generation of 6 unique random numbers.
    *   The numbers will be within the range of 1 to 45.
*   **Display:**
    *   The generated numbers will be displayed in the designated area.
    *   Each number will be shown inside a colored "ball".
*   **Animation:** A simple fade-in animation will be applied to the numbers as they are displayed.

### 3. **File Structure**

*   `index.html`: The main HTML file containing the structure of the application.
*   `style.css`: The CSS file for styling the application.
*   `main.js`: The JavaScript file containing the logic for number generation and UI updates.
*   `blueprint.md`: This file.

## Current Plan

*   **Step 1:** Update `index.html` with the new structure for the Lotto Number Picker.
*   **Step 2:** Create the visual style in `style.css`, including the layout, colors, and component styles.
*   **Step 3:** Implement the number generation and display logic in `main.js`.
