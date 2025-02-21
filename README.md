Insurance Rate Calculator - System Testing with Selenium

Overview

This project involves system testing of a browser-based web application that calculates an individual's insurance rate based on their age, driving experience, and accident history. The testing will be performed using Selenium, ensuring that the application meets business requirements and validates user input correctly.

Business Requirements

The web application determines insurance eligibility and rates based on the following rules:

Insurance Eligibility

If a driver has 3 or more accidents, they are not eligible for insurance.

Otherwise, they are eligible.

Base Rate Calculation

No driving experience → $4000 annually

1 to 9 years of experience → $2500 annually

10 or more years of experience → $1800 annually

Rate Reduction

If the driver is 30 years or older and has at least two years of driving experience, a 25% discount is applied to the base rate.

Input Validation Rules

The application includes the following mandatory input fields:

First Name & Last Name

Address

City

Province

Postal Code (Format: ANA NAN e.g., N2L 3G1)

Phone Number (Formats: 123-123-1234 or (123)123-1234)

Email Address (Format: username@domain.ext e.g., xyz@gmail.com)

Age (Must be ≥16)

Experience (Must be ≥0 and Age - Experience ≥ 16)

Number of Accidents (Must be ≥0)

Setup Instructions

Prerequisites

Ensure you have the following installed:

Python (Version 3.7 or later)

pip (Python package manager)

Google Chrome (or another supported browser)

ChromeDriver (or equivalent for your browser)
