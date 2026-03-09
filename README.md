# PowerBI-Session-Maintainer

A JavaScript automation tool (UserScript) developed to ensure 24/7 uptime for PowerBI monitoring dashboards on NOC/SOC display walls.

## Overview
This script solves the critical problem of session timeouts and browser tab "sleeping" in unattended monitoring environments. It automates the re-authentication process and prevents the browser from suspending the tab during long periods of inactivity, ensuring real-time data visibility.

## Features
- **Anti-Sleep Heartbeat:** Periodically triggers micro-interactions (window scrolls) to reset the browser's energy-saving timers and prevent tab suspension.
- **Session Persistence:** Detects Microsoft Online login prompts and automatically executes re-authentication sequences.
- **Native Event Dispatching:** Uses `MouseEvent` simulation to bypass modern browser security restrictions on automated interactions.
- **Zero-Touch Design:** Optimized for persistent video wall displays without requiring manual intervention.

## Technical Details
- **Engine:** Vanilla JavaScript (ES6)
- **Deployment:** Designed for **Tampermonkey** / Greasemonkey browser extensions.
- **Target Domains:** `microsoftonline.com`, `powerbi.com`.

## Setup
1. Install the **Tampermonkey** browser extension.
2. Create a new script in the Tampermonkey dashboard.
3. Paste the content of `pbi_maintainer.user.js` into the editor.
4. The script will activate automatically upon detecting a login prompt or an active PowerBI session.
