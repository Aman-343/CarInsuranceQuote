**Insurance Rate Calculator**
**Overview**
The Insurance Rate Calculator is a software application designed to calculate an individual's insurance rate based on their personal details, including age, driving experience, and accident history. It follows a set of business rules to determine whether an individual is eligible for insurance and, if so, calculates the appropriate rate based on specific criteria.

**Business Requirements**
The insurance rate is determined based on the following criteria:

**Eligibility:**
If the driver has 3 or more accidents, they will not be eligible for insurance.

**Base Rate:**
No experience: $4000 annually.
1-9 years of experience: $2500 annually.
10+ years of experience: $1800 annually.

**Discount:**
If the driver is 30 years or older and has at least 2 years of driving experience, a 25% reduction in the base rate is applied.

**Key Features**
Eligibility Check: Automatically checks if a user is eligible for insurance based on their accident history.
Base Rate Calculation: Determines the base rate based on driving experience.
Discount Application: Applies a 25% discount if the user meets the age and experience criteria.
Input Validation: Ensures that all required fields are properly formatted and meet the business rules (e.g., valid postal code and phone number).

**Project Setup**
**Prerequisites**
To run this project, you need to have the following software installed:

Apache (For hosting the application on a server)
Git (For version control)
Visual Studio Code

**Version Control**

This project uses Git for source control, managed via GitHub.

Why Git?

Collaboration & Branching - Git allows multiple contributors to work on different features simultaneously without conflicts.

Version Tracking & Rollback - Every change is recorded, making it easy to revert to a previous state if necessary.

Integration with CI/CD - Git integrates well with Continuous Integration/Deployment tools to automate testing and deployment processes.
