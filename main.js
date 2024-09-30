// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Function to fetch news from the API
async function fetchNews() {
    const newsContainer = document.getElementById('news-container');
    const loadingIndicator = document.getElementById('loading');

    try {
        // Fetch news from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles.length > 0) {
            // Remove loading indicator
            loadingIndicator.style.display = 'none';

            // Loop through the articles and create HTML elements for each one
            data.articles.forEach(article => {
                const newsArticle = document.createElement('div');
                newsArticle.className = 'news-article';

                const articleImage = article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}">` : '';
                const articleTitle = `<h2>${article.title}</h2>`;
                const articleDescription = `<p>${article.description || 'No description available.'}</p>`;

                newsArticle.innerHTML = `${articleImage} ${articleTitle} ${articleDescription}`;
                newsContainer.appendChild(newsArticle);
            });
        } else {
            newsContainer.innerHTML = '<p>No news available at the moment.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        loadingIndicator.textContent = 'Error loading news. Please try again later.';
    }
}

// Fetch news on page load
document.addEventListener('DOMContentLoaded', fetchNews);
