document.addEventListener("DOMContentLoaded", function () {
    // Load Font Awesome
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
    document.head.appendChild(fontAwesome);

    // Create Header
    const header = document.createElement("div");
    header.className = "navbar";
    header.innerHTML = `
        <div class="logo">
            <a href="index.html">
                <img src="src/Images/logonextHire.png" alt="NextHire Logo">
                nextHire
            </a>
        </div>
        <div class="nav-links" id="navLinks">
        <a href="src/about.html">About us</a>  
        <a href="src/jobs.html">Find a Job</a>
        <a href="src/hire.html">Find CV</a>
        <a href="src/post_Job.html">Post a Job</a>  
        <a href="src/signin.html">Sign In | Sign Up</a>
            <a href="src/resource.html">Resources</a>
        </div>
        <div class="hamburger-menu" onclick="toggleMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    `;

    // Insert header at the top of the body
    document.body.insertBefore(header, document.body.firstChild);

    // Fix navigation issue by manually handling click events
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Prevent default navigation
            window.location.href = this.href;  // Manually navigate
        });
    });

    // Create horizontal line before footer
    const hr = document.createElement("hr");
    hr.style.margin = "20px 0"; // Adds spacing
    document.body.appendChild(hr);

    // Create Footer
    const footer = document.createElement("div");
    footer.className = "footer";
    footer.innerHTML = `
        <div class="footer-left">
            <h1>We're here to help</h1>
            <p>Visit our Help Center for answers to common questions or contact us directly.</p>
            <button onclick="location.href='src/help.html'">Help Center</button>
            <button onclick="location.href='src/contact.html'">Contact Support</button>
        </div>
        
        <div class="footer-sections">
            <div class="footer-mid">
                <h1>nextHire</h1>
                <a href="src/about.html">About nextHire</a>
                <a href="index.html">Security</a>  
                <a href="index.html">Terms</a>
                <a href="index.html">Privacy Center and Ad Choices</a>
                <a href="index.html">Work at nextHire</a>
                <a href="index.html">Sitemap</a>
            </div>

            <div class="footer-mid">
                <h1>Employers</h1>
                <a href="src/post_Job.html">Post a Job</a>
                <a href="index.html">Products</a>  
                <a href="index.html">Pricing</a>
                <a href="index.html">nextHire Insights</a>
                <a href="index.html">FAQ</a>
            </div>

            <div class="footer-mid">
                <h1>Resources</h1>
                <a href="src/hiring-guide.html">How to Hire Employees</a>
                <a href="src/job-description.html">How to Write Job Descriptions</a>  
                <a href="src/nextHire-guide.html">Guide to Hiring with nextHire</a>
                <a href="src/interview-questions.html">Interview Question Guide</a>
                <a href="src/events.html">nextHire Events</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 NextHire. All Rights Reserved.</p>

            <div class="footer-bottomright">
                <a href="https://github.com/yourprofile" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="mailto:your@email.com" title="Email">
                    <i class="fas fa-envelope"></i> Email
                </a>
                <a href="tel:+123456789" title="Phone">
                    <i class="fas fa-phone"></i> Phone
                </a>
            </div>
        </div>
    `;

    // Append footer to the bottom of the body
    document.body.appendChild(footer);

    // Toggle menu function with smooth transition
    window.toggleMenu = function () {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    };
});
