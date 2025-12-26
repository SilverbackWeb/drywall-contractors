/* ==========================================
   CONTRACTOR TEMPLATE - MAIN JS
   Loads config and populates all content
   with marquee animations
   ========================================== */

document.addEventListener('DOMContentLoaded', async () => {
    const config = await loadConfig();
    if (!config) return;

    // Populate all sections
    populateSEO(config.seo);
    populateNavbar(config.business, config.logo, config.logoOptions);
    populateHero(config.hero, config.business);
    populateServices(config.services);
    populateGallery(config.gallery);
    populateReviews(config.reviews);
    populateProcess(config.process, config.contact);
    populateServiceArea(config.serviceArea);
    populateContact(config.contact, config.business, config.services);
    populateFooter(config.footer, config.business);

    // Initialize interactions
    initNavbar();
    initForm();
    initButtons();
});

/* ==========================================
   CONFIG LOADER
   ========================================== */

async function loadConfig() {
    try {
        const response = await fetch('site-config.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading config:', error);
        return null;
    }
}

/* ==========================================
   POPULATORS
   ========================================== */

function populateSEO(seo) {
    document.getElementById('page-title').textContent = seo.title;
    document.getElementById('meta-description').setAttribute('content', seo.description);
    document.getElementById('meta-keywords').setAttribute('content', seo.keywords);
}

function populateNavbar(business, logo, logoOptions) {
    const navLogo = document.getElementById('nav-logo');
    // If logo has a 'type' field, use logoOptions; otherwise use direct path
    const logoPath = logo.type ? logoOptions[logo.type] : logo.path;
    navLogo.src = logoPath;
    navLogo.alt = logo.alt;
    document.getElementById('nav-business-name').textContent = business.name;
}

function populateHero(hero, business) {
    document.getElementById('hero-label').textContent = hero.label || 'Professional Services';
    document.getElementById('hero-headline').textContent = hero.headline;
    document.getElementById('hero-subheadline').textContent = hero.subheadline;
    document.getElementById('hero-cta').textContent = hero.ctaText;

    // Phone button
    const phoneBtn = document.getElementById('hero-phone');
    phoneBtn.href = `tel:${business.phone.replace(/[^0-9]/g, '')}`;
    phoneBtn.querySelector('span').textContent = business.phone;

    // Background image (responsive)
    if (hero.backgroundImage) {
        const isMobile = window.innerWidth < 768;
        const imageSrc = isMobile && hero.backgroundImageMobile ? hero.backgroundImageMobile : hero.backgroundImage;
        document.getElementById('hero').style.backgroundImage = `url(${imageSrc})`;
    }
}

function populateServices(services) {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = '';

    const icons = {
        drill: '⚙️',
        paint: '🎨',
        hammer: '🔨',
        wrench: '🔧',
        shovel: '🛠️',
        truck: '🚚',
        cog: '⚙️',
        bolt: '⚡'
    };

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${icons[service.icon] || '✓'}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        grid.appendChild(card);
    });
}

function populateGallery(gallery) {
    const marquee = document.getElementById('gallery-marquee');
    marquee.innerHTML = '';

    // Get screen size for responsive images
    const isMobile = window.innerWidth < 768;

    // Create items and duplicate for seamless loop
    const items = gallery.images.map((image, index) => {
        const item = document.createElement('div');
        item.className = 'marquee-item';

        // Use mobile version if available and on mobile, otherwise desktop
        const imageSrc = isMobile && image.srcMobile ? image.srcMobile : image.src;

        item.innerHTML = `
            <img src="${imageSrc}" alt="${image.alt}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\"display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:#111827;\\">Image ${index + 1}</span>';">
        `;
        return item;
    });

    // Add items twice for seamless loop
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
}

function populateReviews(reviews) {
    const marquee = document.getElementById('reviews-marquee');
    marquee.innerHTML = '';

    // Create items and duplicate for seamless loop
    const items = reviews.map(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-stars">${'★'.repeat(review.rating)}</div>
            <p class="review-quote">"${review.quote}"</p>
            <p class="review-name">${review.name}</p>
        `;
        return card;
    });

    // Add items twice for seamless loop
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
}

function populateProcess(steps, contact) {
    const container = document.getElementById('process-steps');
    container.innerHTML = '';

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'process-step';
        stepDiv.innerHTML = `
            <div class="process-number">${index + 1}</div>
            <div class="process-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;
        container.appendChild(stepDiv);
    });

    // Set footer content
    document.getElementById('process-footer-text').textContent = contact.processFooterText || 'This process ensures strength, longevity, and a clean final result — not rushed work that leads to problems later.';
    document.getElementById('process-cta').textContent = contact.processCtaText || 'Schedule Your Project';
}

function populateServiceArea(serviceArea) {
    document.getElementById('service-area-map').src = serviceArea.mapImage;

    const headline = document.getElementById('service-area-headline');
    headline.innerHTML = serviceArea.headline.replace(
        serviceArea.highlightText,
        `<span>${serviceArea.highlightText}</span>`
    );

    document.getElementById('service-area-description').textContent = serviceArea.description;

    const benefitsContainer = document.getElementById('service-area-benefits');
    benefitsContainer.innerHTML = '';

    serviceArea.benefits.forEach(benefit => {
        const benefitDiv = document.createElement('div');
        benefitDiv.className = 'benefit-item';
        benefitDiv.innerHTML = `
            <div class="benefit-dot"></div>
            <div>
                <h4>${benefit.title}</h4>
                <p>${benefit.description}</p>
            </div>
        `;
        benefitsContainer.appendChild(benefitDiv);
    });
}

function populateContact(contact, business, services) {
    document.getElementById('contact-headline').textContent = contact.headline;
    document.getElementById('contact-subheadline').textContent = contact.subheadline;

    const phoneLink = document.getElementById('contact-phone');
    phoneLink.href = `tel:${business.phone.replace(/[^0-9]/g, '')}`;
    phoneLink.textContent = business.phone;

    const emailLink = document.getElementById('contact-email');
    emailLink.href = `mailto:${business.email}`;
    emailLink.textContent = business.email;

    document.getElementById('contact-address').textContent =
        `${business.address}, ${business.city}, ${business.state} ${business.zip}`;

    // Populate service dropdown
    const serviceSelect = document.getElementById('service');
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.title;
        option.textContent = service.title;
        serviceSelect.appendChild(option);
    });
}

function populateFooter(footer, business) {
    document.getElementById('footer-business-name').textContent = business.name;
    document.getElementById('footer-tagline').textContent = business.tagline;
    document.getElementById('footer-phone').textContent = business.phone;
    document.getElementById('footer-email').textContent = business.email;
    document.getElementById('footer-year').textContent = footer.year;
    document.getElementById('footer-copyright-name').textContent = footer.copyright;
}

/* ==========================================
   INTERACTIONS
   ========================================== */

function initNavbar() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Mobile menu toggle
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

function initForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Placeholder - replace with JotForm or actual submission
        alert('Form submitted! (This is a placeholder. Replace with JotForm embed for production.)');
        form.reset();
    });
}

function initButtons() {
    // Hero button to contact section
    document.getElementById('hero-cta').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Service area buttons
    document.getElementById('service-area-btn2').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Process CTA
    document.getElementById('process-cta').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}
