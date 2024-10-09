// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const apiKey = 'API_KEY';
const bapiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;

// Function to fetch news from the API
async function fetchCategoryNews(category) {
    const newsContainer = document.getElementById('news-container');
    const loadingIndicator = document.getElementById('loading');

    try {
        loadingIndicator.style.display = 'block';

        //It will build the url based on the selected category
        const apiUrl = `${bapiUrl}&category=${category}&country=us`;
        // Fetch news from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles.length > 0 && data.articles) {
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
document.addEventListener('DOMContentLoaded',() => fetchCategoryNews('general'));



