# pbi-session-maintainer

A JavaScript automation tool (UserScript) developed to ensure 24/7 availability of PowerBI reports on warehouse operational displays.

## Overview
This script addresses the issue of session timeouts and browser tab suspension on unattended warehouse terminals. In an operational environment, manual re-authentication is inefficient, this tool automates the login process and keeps the reporting dashboard active 24/7.

## Features
- **Anti-Sleep Heartbeat:** Prevents browser-level tab suspension (Energy Saver mode) on stationary warehouse monitors by simulating periodic micro-interactions.
- **Auto-Login Automation:** Detects Microsoft Online authentication prompts and automatically executes the login flow.
- **Native Event Simulation:** Uses `MouseEvent` dispatching to ensure compatibility with modern browser security policies regarding automated clicks.
- **Operational Reliability:** Designed for unattended terminals where continuous data visibility is critical for warehouse workflow.

## Technical Details
- **Engine:** Vanilla JavaScript (ES6)
- **Deployment:** Optimized for **Tampermonkey** extensions.
- **Target Domains:** `microsoftonline.com`, `powerbi.com`.

## Setup
1. Install the **Tampermonkey** browser extension.
2. Create a new script in the Tampermonkey dashboard.
3. Paste the content of `pbi_maintainer.user.js` into the editor.
4. The script activates automatically when a login prompt or PowerBI report is detected.
