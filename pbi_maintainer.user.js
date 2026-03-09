// ==UserScript==
// @name         PowerBI Session Maintainer
// @version      1.0
// @description  Automates session persistence for warehouse operational displays
// @author       Kacper Jaworski
// @match        https://login.microsoftonline.com/*
// @match        https://app.powerbi.com/*
// @grant        none
// ==UserScript==

/**
 * PowerBI Session Maintenance via Browser Automation
 * Author: Kacper Jaworski
 */

(function() {
    'use strict';

    // Configuration
    const LOGIN_BTN = '#idSIButton9';
    const HEARTBEAT_INTERVAL = 30000;
    const WATCHDOG_INTERVAL = 2000;

    /**
     * Prevents browser tab suspension (Energy Saver) 
     * by simulating periodic micro-interactions.
     */
    function sendHeartbeat() {
        if (!document.hidden) {
            window.scrollBy(0, 1);
            setTimeout(() => window.scrollBy(0, -1), 50);
            console.log("[PBI-Maintainer] Heartbeat: Tab activity refreshed.");
        }
    }

    /**
     * Detects and triggers the Microsoft login flow 
     * using native DOM event simulation.
     */
    function triggerLogin() {
        const target = document.querySelector(LOGIN_BTN);
        if (target) {
            console.log("[PBI-Maintainer] Login prompt detected.");
          
            // Wake up DOM engine
            document.body.click();
          
            // Execute click with native MouseEvent dispatch
            setTimeout(() => {
                const event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                target.dispatchEvent(event);
                console.log("[PBI-Maintainer] Action: Login button clicked.");
            }, 500);
        }
    }
  
    // Initialize monitoring services
    setInterval(sendHeartbeat, HEARTBEAT_INTERVAL);
    setInterval(triggerLogin, WATCHDOG_INTERVAL);

    console.log("[PBI-Maintainer] Automation service started.");
})();
