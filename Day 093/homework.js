
document.addEventListener("DOMContentLoaded", () => {
    let cookies = 0;
    let gold = 0;
    let cookiesPerClick = 1;
    let goldPerClick = 0;
    let autoCookies = 0;
  
    const cookieElement = document.getElementById("cookie");
    const cookiesDisplay = document.getElementById("cookies");
    const goldDisplay = document.getElementById("gold");
  
    const gadget1 = document.getElementById("gadget1");
    const gadget2 = document.getElementById("gadget2");
    const gadget3 = document.getElementById("gadget3");
  
    // Update stats display
    const updateDisplay = () => {
      cookiesDisplay.textContent = cookies;
      goldDisplay.textContent = gold;
  
      // Enable or disable gadgets based on gold
      gadget1.disabled = gold < parseInt(gadget1.dataset.cost);
      gadget2.disabled = gold < parseInt(gadget2.dataset.cost);
      gadget3.disabled = gold < parseInt(gadget3.dataset.cost);
    };
  
    // Cookie click logic
    cookieElement.addEventListener("click", () => {
      cookies += cookiesPerClick;
      gold += goldPerClick;
      updateDisplay();
    });
  
    // Gadget 1: +1 cookie per click
    gadget1.addEventListener("click", () => {
      if (gold >= parseInt(gadget1.dataset.cost)) {
        gold -= parseInt(gadget1.dataset.cost);
        cookiesPerClick += 1;
        updateDisplay();
      }
    });
  
    // Gadget 2: +1 gold per click
    gadget2.addEventListener("click", () => {
      if (gold >= parseInt(gadget2.dataset.cost)) {
        gold -= parseInt(gadget2.dataset.cost);
        goldPerClick += 1;
        updateDisplay();
      }
    });
  
    // Gadget 3: +1 cookie per second
    gadget3.addEventListener("click", () => {
      if (gold >= parseInt(gadget3.dataset.cost)) {
        gold -= parseInt(gadget3.dataset.cost);
        autoCookies += 1;
  
        // Add auto cookie generation
        setInterval(() => {
          cookies += autoCookies;
          updateDisplay();
        }, 1000);
  
        updateDisplay();
      }
    });
  
    updateDisplay();
  });