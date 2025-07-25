[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github)](https://senhle.github.io/Final-Project/secure-banking-app/)


# GlobalOne Secure Banking App

## Overview

This is a student project simulating a secure banking app with a **Danger Password** feature.
It is **not affiliated** with any real bank or financial institution.

---

## How the App Works

* The app starts at the **index.html** page.
* Users see a dashboard with a **Login** button.
* Clicking **Login** opens a PIN entry form.

---

## Using the Remote PIN

When entering your Remote PIN, use one of the following codes:

| PIN  | Mode        | Description                                |
| ---- | ----------- | ------------------------------------------ |
| 1234 | Normal mode | Full access to all account features        |
| 5678 | Danger mode | Limited access with silent alert activated |

If the PIN is invalid, the app will show an alert and ask you to try again.

---

## User Flow

1. Open the app via **index.html**.
2. Click the **Login** button to open the PIN input.
3. Enter the PIN (see table above for valid PINs).
4. On successful login:

   * The app switches to **Normal** or **Danger** mode.
   * Dashboard features adjust based on mode.
5. In **Danger mode**, sensitive features are hidden and a silent alert is triggered (simulated in this project).

---

## Where to Find Instructions in the App

* Instructions about the PINs are displayed directly on the login form inside `index.html`, so users know which PINs to use.
* The login logic and mode setting are handled in the app’s JavaScript (`script.js`).

---

## Development Notes

* The project uses **localStorage** to remember the mode (`normal` or `danger`).
* The UI toggles between dashboard and login views within the same page.
* You can customize PIN codes or add additional features as needed.

---

## Disclaimer

This is for educational purposes only.
**Do not use this app for any real financial transactions.**

---

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Use the instructions on the login form to enter the PIN and navigate the app.

---

Thank you for checking out the project!
Feel free to explore and modify it.

---

*Created by Andile Gracious Dhlamini*
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github)](https://senhle.github.io/Final-Project/secure-banking-app/)
