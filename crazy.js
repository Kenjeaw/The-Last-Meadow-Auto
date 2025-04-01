// LUDICROUS SPEED GRASS CLICKER - COMPLETE SCRIPT
function clickGrassLUDICROUSLYFast() {
    // Cache the grass element selector for better performance
    const GRASS_SELECTOR = ".text-lg\\/bold_cf4812.logoText_cf3f70.override_cf3f70.logoGreen_cf3f70.text__73a39.colorClickerGameBrand__73a39";
    const WEED_CLASS = "weed_fa03d7";
    const UPGRADE_SELECTOR = ".default__9026a.clickerButton_e9638b.upgrade__75ed5.enabled_e9638b";
    
    // Get direct reference to native click function for maximum speed
    const nativeClick = HTMLElement.prototype.click;
    
    // Cache DOM elements and create a click function
    const grassElement = document.querySelector(GRASS_SELECTOR);
    
    if (!grassElement) {
      console.error("Grass element not found. Make sure you're on the correct page.");
      return;
    }
    
    // Ultra-optimized click function
    const ultraClick = nativeClick.bind(grassElement);
    
    // Store all intervals and timeouts for cleanup
    const cleanupFunctions = [];
    
    // === LUDICROUS SPEED CLICKING === //
    
    /* Method 1: RAF loop with massive click burst
    let rafId;
    function clickRafLoop() {
      // Click 500 times per frame - MAXIMUM OVERDRIVE
      for (let i = 0; i < 500; i++) {
        ultraClick();
      }
      rafId = requestAnimationFrame(clickRafLoop);
    }
    clickRafLoop();
    cleanupFunctions.push(() => cancelAnimationFrame(rafId));
    */
    
    // Method 2: Multiple zero-delay intervals - INSANITY MODE
    for (let j = 0; j < 10; j++) { // Create 10 parallel intervals
      const interval = setInterval(() => {
        for (let i = 0; i < 300; i++) { // 300 clicks per interval
          ultraClick();
        }
      }, 0); // Zero delay - absolute maximum speed
      cleanupFunctions.push(() => clearInterval(interval));
    }
    
    // Method 3: Recursive setTimeout for even more clicks - BEYOND REASON
    function clickRecursive() {
      for (let i = 0; i < 200; i++) {
        ultraClick();
      }
      const timeoutId = setTimeout(clickRecursive, 0);
      cleanupFunctions.push(() => clearTimeout(timeoutId));
      return timeoutId;
    }
    const recursiveTimeoutId = clickRecursive();
    
    /* Method 4: Promise-based micro-task clicking - QUANTUM SPEED
    function microTaskClick() {
      Promise.resolve().then(() => {
        for (let i = 0; i < 100; i++) {
          ultraClick();
        }
        microTaskClick(); // Self-perpetuating promise chain
      });
    }
    microTaskClick();
    */
    
    // Secondary goals: Find and click weeds & upgrades
    // Using more efficient direct event dispatching
    function clickElements(selector) {
      const elements = typeof selector === 'string' ? 
        document.querySelectorAll(selector) : 
        document.getElementsByClassName(selector);
      
      for (let i = 0; i < elements.length; i++) {
        elements[i].click();
      }
    }
    
    // Weed clicking - HIGH PRIORITY
    for (let j = 0; j < 3; j++) { // Multiple parallel weed checkers
      const interval = setInterval(() => clickElements(WEED_CLASS), 5);
      cleanupFunctions.push(() => clearInterval(interval));
    }
    
    // Upgrade clicking - LOWER PRIORITY but still fast
    const upgradeInterval = setInterval(() => clickElements(UPGRADE_SELECTOR), 20);
    cleanupFunctions.push(() => clearInterval(upgradeInterval));
    
    // EMERGENCY STOP - Press Escape key
    function emergencyStop() {
      console.log("🛑 EMERGENCY STOP ACTIVATED - HALTING LUDICROUS CLICKING");
      cleanupFunctions.forEach(fn => fn());
      document.removeEventListener('keydown', escapeHandler);
    }
    
    function escapeHandler(event) {
      if (event.key === 'Escape') {
        emergencyStop();
      }
    }
    
    document.addEventListener('keydown', escapeHandler);
    
    // Also add a safety timeout to prevent browser crashes (5 minute auto-stop)
    const safetyTimeout = setTimeout(emergencyStop, 300000);
    cleanupFunctions.push(() => clearTimeout(safetyTimeout));
    
    console.log("🚀🚀🚀 LUDICROUS SPEED ACTIVATED! YOUR BROWSER MAY MELT! 🚀🚀🚀");
    console.log("Press Escape to emergency stop before your computer explodes");
  }
  
  // IMMEDIATELY EXECUTE THE MADNESS
  clickGrassLUDICROUSLYFast();
