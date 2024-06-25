
# ⚡️ Wellfound Job Listings Scraper

## ⌲ Premium Job Scraper - with over 40 unique data fields

[Try it today for free with our 3-day trial! ](https://apify.com/radeance/wellfound-job-listings-scraper)

![Wellfound Job Listings](https://i.imgur.com/p4AKZlg.jpg)

| Try our other scrapers ► | [Glassdoor Scraper](https://github.com/Radeance/glassdoor-scraper-public) | [Similarweb Scraper](https://apify.com/radeance/similarweb-scraper)| [Tesco UK Scraper](https://apify.com/radeance/tesco-scraper)
|----------------------------|-----------------------------|-----------------------------|-----------------------------|

Welcome to this **Wellfound Job Listings Scraper** on **Apify**! This blazing fast & powerful tool is designed to effortlessly scrape job listings from Wellfound. Perfect for job seekers, recruiters, and market analysts, it can **scrape any job listing** on the site including information like **job title, description, job type, salary range, skills needed,** and much more. It also scrapes the job details page and provides comprehensive **company details like location, type of company, company size, category, and badges**.

One of its best features is it's speed – it can scrape **1000 jobs in a minute** ⚡️

## Key Features


- **🔍 Job Listings Extraction:**
  - Scrapes job listings from Wellfound with pagination
  - Extracts detailed information from job posting pages **automatically**
  - Provides key details such as job id, title, description, posted_at, expires_at, salary range, skills, application url, and many many more.

- **🏢 Company Information:**
  - Scrapes company details including location, type, size, category, linkedik, facebook, twitter, company links and many more. 

- **⚡ Fast and Efficient:**
  - Extremely fast, scraping 1000 data entries in a minute

- **🔧 Advanced Customization:**
  - Allows setting a specific job listings URL and the number of pages to scrape
  - Easy to configure search queries for tailored results

- **📊 Flexible Data Output:**
  - Outputs data in various formats including CSV, XLSX, JSON, JSONL, XML, and RSS


## Use Cases | What it can be used for

- **Recruiters & Hiring Managers**: To gather detailed job listings, including job title, location, pay range, and application and social media URLs.
- **Job Seekers**: To find comprehensive job information, including job type, pay details, remote work policies, and company details.
- **HR Analysts**: To analyze **market trends** in job postings, company sizes, and industry categories.
- **Developers**: To integrate job listing data into applications for better job search experiences.

It streamlines the process of collecting and analyzing job market data, making it a valuable tool for various professionals.

## 📌 Input

![Scraper Sample Input](https://i.imgur.com/2xxfspP.png)

- `Job Title`: (Optional) (String) 
Select desired job from the input list. If you can't find your desired job title use Custom Job Title input field. If you use a url in **advanced options** this gets ignored.
- `Job Location`: (Optional) (String) 
Select desired job location from the input list. If you can't find your desired job location use Custom Job Location input field. If you use a url in **advanced options** this gets ignored.
<br>
- `Max Items`: (Optional) (Number) 
Caps the maximum number of job listing results. **Default** is set to 100.
<br>
- `Custom Job Title`: (Optional) (String) 
Enter your desired job title (e.g. Big Data Analyst).
💡 If you use this Field the `Job Title` Field above is ignored.
- `Custom Job Location`: (Optional) (String) 
Enter your desired job location (e.g. London)
💡 If you use this Field the `Job Location` Field above is ignored.


    #### 🎛️ Advanced Options


![Scraper Sample Input](https://i.imgur.com/9wrDUT4.png)
- `URL`: (Optional) (String) 
Set your desired Wellfound Listings URL directly from this input
Provide the **URL in this format only**: https: //wellfound. com/role/l/software-engineer/united-states (without spaces)
⚠️ If this is set it **replaces** the **Job Title** and **Job Location** (+ both  custom fields) search parameters and **scrapes only using this URL** instead.
- `Max pages`: (Optional) (Number) 
If this is set it **scrapes the amount of pages set**, unless there are no more pages to scrape, In this case the scraper retrieves all the data it could find. **Default** is set to 100.
⚠️ If `Max Items` limit is rechead this is ignored. If you want 100 pages of data it is recommended to set `Max Items`to a high number like 5000.
- `Use US date formats`: (Optional) (Boolean) 
If set to **True** the actor outputs every date field to US datetime format. If set to **False** it uses standard international datetime format.

  #### ✏️ JSON Input
  Sample JSON input if you use the apify api via CURL, Python, JS etc.
  ![Scraper Sample Input](https://i.imgur.com/rxbDc1Q.png)

## 📎 Output

- **Job Details:** Including job ID, title, location, pay range, job type, visa sponsorship, remote work policy, relocation policy, job listing posted date, validity period, direct application status, required experience, and a detailed job description. Additional fields like minimum and maximum salary, salary currency, and salary unit are also included.
- **Company Information:** Details about the company, including name, size, badges, location, category, stage, profile URL, website URL, logo URL, Twitter URL, and LinkedIn URL.
- **Job Posting URL:** Direct link to the job posting and application page.
- **Job Benefits:** Description of job benefits offered.
- **Skills:** List of required skills for the job.
- **Hires Remotely:** Information on remote hiring and location requirements.
- **Export Formats:** Data can be exported in CSV, XLSX, JSON, JSONL, XML, and RSS formats for easy integration and analysis.

#### Output Data Sample
  ![Scraper Sample Output](https://i.imgur.com/Zl53Fo3.png)

  #### ✏️ JSON Output
```json
{
  "job_id": "2156005-software-engineer",
  "job_listing_posted": "05/24/2024 09:40:04 PM",
  "job_published": "1 week ago",
  "job_title": "Software Engineer",
  "job_location": [
    "Remote",
    "New York City"
  ],
  "job_details": [
    "New York City",
    "Remote possible",
    "$130k – $185k"
  ],
  "job_type": "Full Time",
  "job_pay_range": "$130k – $185k",
  "job_min_pay": "$130k",
  "job_max_pay": "$185k",
  "job_min_salary": 130000.0,
  "job_max_salary": 185000.0,
  "job_salary_currency": "USD",
  "job_salary_unit": "YEAR",
  "job_remote_possible": "yes",
  "skills": [
    "Python",
    "TypeScript",
    "React.js",
    "AWS Lambda",
    "Hasura"
  ],
  "job_experience": "3+ years exp",
  "required_experience_years": 3.0,
  "required_experience_months": 36.0,
  "visa_sponsorship": "Not Available",
  "job_location_requirement": "Anywhere",
  "remote_work_policy": "Onsite or remote",
  "hires_remotely": "Everywhere",
  "relocation": "Allowed",
  "hiring_contact": null,
  "hires_remotely_in": null,
  "preferred_timezones": null,
  "job_description": "Join our team and accelerate your career.\nModern Life combines great technology with the advice of the country’s top life insurance experts. We help our advisors streamline their practice, so they can focus on building better connections, delivering better solutions, and helping their clients lead better lives.\nWe have raised $20 million in seed funding, led by Thrive Capital, with participation from 12 unicorn founders from Hippo, Plaid, Reddit, Flatiron Health, Newfront, At Bay, Vouch, Cedar, Lattice, and more.\nJoin a passionate team of product-minded technologists and insurance professionals who are at the leading edge of a massive industry. Make a tangible difference in people’s lives and help deliver our mission to help everyone protect what matters most through advanced technology and tailored advice.\nWhat you'll do\n\nWrite high-quality, well-tested code that runs smoothly in production\nContribute to and lead complex projects, and make business vs technology decisions during all phases of the project lifecycle\nWeigh trade-offs and focus on value delivery. A fast-paced startup demands making trade-offs that balance the near term and long term value add of solutions.\nHelp create and uphold our engineering standards and bring consistency to the codebases and processes you build and encounter\n\nYour impact\n\nShape the best practices, product, and more broadly the culture of the company from an early stage. Your DNA will be deep into what and how we build\nCreate contemporary and tech-forward solutions to help insurance agents across the full stack of insurance advice and distribution\nSet the standard for quality and design in an industry that is ripe for innovation\n\nAbout you\n\nYou have 5+ years of experience as a builder shipping to production\nYou’re product-minded and deeply curious and empathetic about your users\nYou have excellent self-management, sense of ownership, and organization\nYou thrives in a dynamic and fast-growing environment with a high degree of ambiguity\nYou’re genuinely excited about tackling hard technical and product problems\n\nBonus points\n\nYou’ve worked as (and loved being) a founding or early engineer\nYou have experience at an insurtech, healthtech or broader fintech company\nYou’ve helped build a successful, fast-growing, product-focused startup\nYou’re excited to share your side projects with us and what you learned from them",
  "job_benefits": "Unlimited PTO - Whether it’s surfing, family trips, or your garden that’s calling – life is for living, so we give you more time for it. Hybrid office culture - You get the best of a modern office environment, plus the flexibility of working from home when you want to. Team events - Get to know the crew at team meals, events, happy hours, offsites, and group celebrations. Great benefits - Enjoy quality health insurance and benefits including, of course, life insurance – and we’ve got just the people to help you with that.",
  "job_url": "https://wellfound.com/jobs/2156005-software-engineer",
  "job_listing_valid_until": "08/20/2024 07:55:41 AM",
  "direct_application": true,
  "job_application_url": "https://wellfound.com/jobs/2156005-software-engineer?autoOpenApplication=true",
  "company": {
    "name": "Modern Life",
    "category": [
      "Insurance",
      "Technology",
      "Finance Technology"
    ],
    "stage": [
      "Early Stage"
    ],
    "location": "New York City",
    "size": "11-50",
    "badges": [
      "Actively Hiring"
    ],
    "profile_url": "https://wellfound.com/company/modern-life",
    "url": "https://modernlife.com",
    "logo_url": "https://photos.wellfound.com/startups/i/8201481-1ead9cf93dac3a86f6756acede6e639b-medium_jpg.jpg?buster=1660069534",
    "email": null,
    "twitter_url": "https://twitter.com/modernlifehq",
    "linkedin_url": "https://www.linkedin.com/company/modernlife/",
    "facebook_url": null
  }
}
```

## 💬 Feedback and Support

If you have any technical feedback or encounter any bugs with the Wellfound Job Listings Scraper, please feel free to open up an issue.

You can also contact us directly for custom integrations or project use cases at business@radeance.com.


[Try it today for free with our 3-day trial! ](https://apify.com/radeance/wellfound-job-listings-scraper)