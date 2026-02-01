// ============================================
// VYNEX INTERIORS - MAIN JAVASCRIPT
// Midnight Navy + Copper Editorial Luxury Theme
// ============================================

"use strict";

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const header = document.querySelector(".header");
const navToggle = document.getElementById("navToggle");

if (navToggle && header) {
  // Toggle navigation on button click
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("nav-open");
  });

  // Close nav when clicking outside
  document.addEventListener("click", (e) => {
    if (
      header.classList.contains("nav-open") &&
      !header.contains(e.target)
    ) {
      header.classList.remove("nav-open");
    }
  });

  // Close nav when clicking any navigation link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
    });
  });

  // Close nav on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
    }
  });
}

// ============================================
// ACCORDION FUNCTIONALITY (FAQ)
// ============================================

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains("active");

    // Close all accordions first
    accordionHeaders.forEach((header) => {
      header.classList.remove("active");
      const accordionBody = header.nextElementSibling;
      if (accordionBody) {
        accordionBody.style.maxHeight = null;
      }
    });

    // Re-open the clicked accordion if it was closed
    if (!isOpen && body) {
      btn.classList.add("active");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Skip if it's just "#" or empty
    if (!href || href === "#") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      // Close mobile nav if open
      if (header && header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
      }

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    }
  });
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================

const leadForms = document.querySelectorAll(".lead-form");

leadForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const city = formData.get("city");

    // Basic validation
    if (!name || !phone || !city) {
      showNotification("Please fill in all fields", "error");
      return;
    }

    // Name validation (at least 2 characters)
    if (name.trim().length < 2) {
      showNotification("Please enter a valid name", "error");
      return;
    }

    // Phone validation (Indian format: 10 digits starting with 6-9)
    const cleanPhone = phone.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(cleanPhone)) {
      showNotification(
        "Please enter a valid 10-digit phone number",
        "error"
      );
      return;
    }

    // City validation
    if (city.trim().length < 2) {
      showNotification("Please enter a valid city name", "error");
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
      // Success feedback
      showNotification(
        `Thank you, ${name}! We'll contact you shortly at ${cleanPhone} regarding your ${city} project.`,
        "success"
      );

      // Reset form
      form.reset();

      // Restore button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;

      // TODO: Replace with actual API call
      /*
      fetch('/api/consultation', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: name.trim(), 
          phone: cleanPhone, 
          city: city.trim(),
          timestamp: new Date().toISOString()
        })
      })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        showNotification('Success! We will contact you soon.', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      })
      .catch(error => {
        console.error('Error:', error);
        showNotification('Something went wrong. Please try again.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
      */
    }, 1500);
  });
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = "info") {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    font-size: 0.95rem;
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
  `;

  // Add animation styles
  if (!document.querySelector("#notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Append to body
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const scrollThreshold = 50;

window.addEventListener(
  "scroll",
  debounce(() => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (currentScroll > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, 10)
);

// Add scrolled class styles dynamically
if (!document.querySelector("#header-scroll-styles")) {
  const style = document.createElement("style");
  style.id = "header-scroll-styles";
  style.textContent = `
    .header.scrolled {
      box-shadow: 0 4px 24px rgba(10, 14, 20, 0.1);
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// INTERSECTION OBSERVER (FADE IN ON SCROLL)
// ============================================

const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -80px 0px",
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll(
  ".showcase-card, .card, .process-steps li, .service-item, .trust-item, .city-item, .blog-card"
);

animateElements.forEach((el) => {
  fadeInObserver.observe(el);
});

// ============================================
// LAZY LOAD BACKGROUND IMAGES
// ============================================

if ("IntersectionObserver" in window) {
  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;

        if (lazyImage.dataset.bg) {
          lazyImage.style.backgroundImage = `url(${lazyImage.dataset.bg})`;
          lazyImage.classList.add("loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      }
    });
  });

  // Observe elements with data-bg attribute
  const lazyBackgrounds = document.querySelectorAll("[data-bg]");
  lazyBackgrounds.forEach((bg) => lazyImageObserver.observe(bg));
}

// ============================================
// DEBOUNCE UTILITY FUNCTION
// ============================================

function debounce(func, wait = 10, immediate = false) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// ============================================
// CTA BUTTON CLICK HANDLERS
// ============================================

// Handle all "Get Estimate" buttons
const estimateButtons = document.querySelectorAll(
  '.btn-copper:not([type="submit"]), .btn-copper-primary'
);

estimateButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // If it's not a form submit button, scroll to hero form
    if (btn.getAttribute("type") !== "submit") {
      e.preventDefault();
      const heroForm = document.querySelector(".hero-form-card");
      if (heroForm) {
        heroForm.scrollIntoView({ behavior: "smooth", block: "center" });

        // Focus on first input after scroll
        setTimeout(() => {
          const firstInput = heroForm.querySelector("input");
          if (firstInput) firstInput.focus();
        }, 800);
      }
    }
  });
});

// ============================================
// REFERRAL BUTTON HANDLER
// ============================================

const referralButtons = document.querySelectorAll(
  '.referral button, a[href*="refer"]'
);

referralButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showNotification(
      "Referral program coming soon! Stay tuned for exclusive rewards.",
      "info"
    );
    // TODO: Replace with actual referral page/modal
  });
});

// ============================================
// CONSOLE BRANDING
// ============================================

console.log(
  "%cVynex Interiors",
  "color: #B87350; font-size: 28px; font-weight: bold; font-family: 'Playfair Display', serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);"
);
console.log(
  "%cLuxury Home Interiors • Midnight Navy + Copper Edition",
  "color: #1B2838; font-size: 13px; font-weight: 600;"
);
console.log(
  "%cBuilt with precision and care",
  "color: #6B6B6B; font-size: 11px; font-style: italic;"
);

// ============================================
// PERFORMANCE MONITORING (OPTIONAL)
// ============================================

if ("performance" in window) {
  window.addEventListener("load", () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(
      `%cPage Load Time: ${pageLoadTime}ms`,
      "color: #10b981; font-weight: 600;"
    );

    // Log if page load is slow
    if (pageLoadTime > 3000) {
      console.warn("Page load time is above 3 seconds. Consider optimization.");
    }
  });
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c✓ Vynex website loaded successfully", "color: #10b981; font-weight: 600;");

  // Add loaded class to body for CSS transitions
  document.body.classList.add("loaded");

  // Set current year in footer (if dynamic year element exists)
  const yearElement = document.querySelector(".current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Initialize all animations
  initializeAnimations();

  // Log active sections count
  const sections = document.querySelectorAll("section");
  console.log(`%c${sections.length} sections initialized`, "color: #6B6B6B;");
});

// ============================================
// INITIALIZE ANIMATIONS
// ============================================

function initializeAnimations() {
  // Add stagger delay to showcase cards
  const showcaseCards = document.querySelectorAll(".showcase-card");
  showcaseCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Add stagger delay to service items
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
  });

  // Add stagger delay to trust items
  const trustItems = document.querySelectorAll(".trust-item");
  trustItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
  });
}

// ============================================
// FORM INPUT ENHANCEMENTS
// ============================================

// Phone number formatting (Indian format)
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // Remove non-numeric characters
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    // Format as: XXXXX XXXXX
    if (value.length > 5) {
      value = value.slice(0, 5) + " " + value.slice(5);
    }

    e.target.value = value;
  });

  // Prevent non-numeric input
  input.addEventListener("keypress", (e) => {
    if (!/\d/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  });
});

// Name input: Capitalize first letter
const nameInputs = document.querySelectorAll('input[name="name"]');

nameInputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    const value = e.target.value.trim();
    if (value) {
      // Capitalize first letter of each word
      e.target.value = value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    }
  });
});

// City input: Capitalize first letter
const cityInputs = document.querySelectorAll('input[name="city"]');

cityInputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    const value = e.target.value.trim();
    if (value) {
      e.target.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  });
});

// ============================================
// TRACK SCROLL PROGRESS (OPTIONAL)
// ============================================

function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;

  // You can use this to show a progress bar
  // Example: document.querySelector('.progress-bar').style.width = progress + '%';

  return progress;
}

window.addEventListener("scroll", debounce(updateScrollProgress, 50));

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Skip to main content (for keyboard navigation)
const skipLink = document.createElement("a");
skipLink.href = "#hero";
skipLink.className = "skip-link";
skipLink.textContent = "Skip to main content";
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--vynex-copper);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  transition: top 0.2s;
`;

skipLink.addEventListener("focus", () => {
  skipLink.style.top = "0";
});

skipLink.addEventListener("blur", () => {
  skipLink.style.top = "-40px";
});

document.body.prepend(skipLink);

// ============================================
// TRACK USER INTERACTIONS (ANALYTICS)
// ============================================

// Track button clicks (for analytics)
function trackEvent(category, action, label) {
  // TODO: Replace with your analytics solution (Google Analytics, Mixpanel, etc.)
  console.log(`Event Tracked: ${category} - ${action} - ${label}`);

  // Example Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': category,
  //     'event_label': label
  //   });
  // }
}

// Track CTA button clicks
document.querySelectorAll(".btn-copper, .btn-copper-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonText = btn.textContent.trim();
    trackEvent("CTA", "click", buttonText);
  });
});

// Track navigation clicks
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    const linkText = link.textContent.trim();
    trackEvent("Navigation", "click", linkText);
  });
});

// Track form submissions
document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", () => {
    trackEvent("Form", "submit", "Consultation Form");
  });
});

// ============================================
// DETECT USER PREFERENCES
// ============================================

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty("--transition-fast", "0s");
  document.documentElement.style.setProperty("--transition-med", "0s");
  console.log("Reduced motion detected - animations disabled");
}

// ============================================
// ERROR BOUNDARY (GLOBAL ERROR HANDLER)
// ============================================

window.addEventListener("error", (e) => {
  console.error("Global error caught:", e.error);
  // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  // TODO: Send to error tracking service
});

// ============================================
// VIEWPORT HEIGHT FIX (FOR MOBILE)
// ============================================

// Fix for mobile viewport height (100vh issue on mobile browsers)
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setViewportHeight();
window.addEventListener("resize", debounce(setViewportHeight, 100));

// ============================================
// PREVENT FORM RESUBMISSION ON REFRESH
// ============================================

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// ============================================
// EASTER EGG (OPTIONAL - KONAMI CODE)
// ============================================

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  console.log("%c🎉 KONAMI CODE ACTIVATED!", "font-size: 24px; color: #B87350;");
  showNotification("🎉 You found the secret! Enjoy 10% off your consultation!", "success");
  // Add special styling or unlock features
  document.body.style.animation = "rainbow 3s linear";
}

// ============================================
// EXPORT FUNCTIONS (IF USING MODULES)
// ============================================

// If you're using ES6 modules, export functions you need elsewhere
// export { showNotification, trackEvent, debounce };

// ============================================
// END OF MAIN.JS
// ============================================

console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color: #B87350;");
console.log("%cVynex Interiors • All systems operational", "color: #10b981; font-weight: 600;");
console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color: #B87350;");
