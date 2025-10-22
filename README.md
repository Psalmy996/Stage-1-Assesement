# PsalmyHNG – Frontend Stage 1 Assessment 🚀

This project is part of the **HNG Frontend Internship (Stage 1)** task.  
It demonstrates the use of **semantic HTML**, **CSS responsiveness**, **accessibility**, and **basic form validation** using **JavaScript**.


## Project Overview

The project includes **three pages**:

1. **Home Page (`index.html`)**
   - Introduction to the project.
   - Navigation links to the About and Contact pages.
   - Clean and centered layout for easy accessibility.

2. **About Page (`about.html`)**
   - Contains personal reflections and sections required by the task:
     - Bio
     - Goals in this program
     - Areas of low confidence
     - Note to future self
     - Extra thoughts
   - Uses semantic HTML tags (`<main>`, `<section>`, `<h2>`, `<p>`) and `data-testid` attributes.

3. **Contact Page (`contact.html`)**
   - A contact form with proper **labels**, **validation**, and **ARIA** support.
   - Includes the following required fields:
     - Full Name — `data-testid="test-contact-name"`
     - Email — `data-testid="test-contact-email"`
     - Subject — `data-testid="test-contact-subject"`
     - Message — `data-testid="test-contact-message"`
     - Submit Button — `data-testid="test-contact-submit"`
   - Shows success and error messages dynamically with validation rules:
     - All fields are required.
     - Email must be valid.
     - Message must be at least 10 characters.
