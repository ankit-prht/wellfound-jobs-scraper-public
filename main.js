import { Actor } from 'apify';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

await Actor.init();

// Get input
const { keywords, experienceLevel = '', maxResults = 20 } = await Actor.getInput();

const baseUrl = 'https://wellfound.com/jobs';
const searchQuery = keywords.trim().replace(/\s+/g, '-').toLowerCase();
const searchUrl = `${baseUrl}/${searchQuery}-jobs`;

console.log(`🔍 Scraping jobs from: ${searchUrl}`);

const response = await fetch(searchUrl);
const html = await response.text();
const $ = cheerio.load(html);

const results = [];

$('.styles_component__JobListItemWrapper-sc-__sc-1kz2i60-0').each((i, el) => {
    if (results.length >= maxResults) return;

    const title = $(el).find('h3').text().trim();
    const company = $(el).find('h4').text().trim();
    const location = $(el).find('div[class*="location"]').text().trim();
    const link = 'https://wellfound.com' + ($(el).find('a').attr('href') || '');
    const experience = $(el).text().toLowerCase();

    // Simple filter by experience level (basic string match)
    if (experienceLevel && !experience.includes(experienceLevel.toLowerCase())) {
        return;
    }

    results.push({ title, company, location, link });
});

console.log(`✅ Found ${results.length} jobs.`);

// Push results to dataset
await Actor.pushData(results);

await Actor.exit();
