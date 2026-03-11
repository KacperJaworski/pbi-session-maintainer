# pbi-session-maintainer

## Overview
This project provides a "Self-Healing" mechanism for PowerBI dashboards running on Ubuntu 24.04 LTS terminals. It addresses the issue of Chrome's background process management "freezing" inactive tabs during 24h cycles. The solution uses a dual-layer approach: a system-level interaction tool (e.g., xclicker) to prevent thread suspension and a custom JavaScript UserScript to manage session persistence and automated re-authentication.

## Features
- **Anti-Idle Heartbeat:** Triggers periodic micro-scrolls (30s interval) to keep the PowerBI rendering engine active and prevent internal view freezing.
- **Automated Re-authentication:** Monitors the DOM for Microsoft Online authentication prompts (`#idSIButton9`) and executes a secure login sequence.
- **Event Simulation:** Uses native `MouseEvent` dispatching to bypass modern browser security policies regarding automated clicks in inactive tabs.
- **Deployment Scale:** Successfully rolled out across multiple logistics hubs to support 24/7 warehouse operations.

## Tech Stack
- JavaScript (ES6+)
- Tampermonkey (UserScript)
- Ubuntu 24.04.3 LTS / Google Chrome
- Xclicker (HID Simulation)
- DOM Manipulation, MouseEvent Dispatching

## Usage
1. **System Prep:** Install and activate `xclicker` on the Ubuntu terminal to prevent OS-level thread suspension.
2. **Browser Setup:** Install the **Tampermonkey** extension in Google Chrome.
3. **Script Deployment:** Create a new script in Tampermonkey and paste the contents of `pbi_maintainer.user.js`.
4. **Activation:** Ensure the script is enabled. It will automatically trigger upon detecting `powerbi.com` or `microsoftonline.com` domains.
