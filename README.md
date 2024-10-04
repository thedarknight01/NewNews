

# NewNews API

**NewNews API** is a RESTful API service that provides up-to-date news articles from various sources around the world. With this API, you can query news articles by category, date, source, and keywords, and integrate real-time news data into your applications.

## ✨ Features

- **Real-time News**: Get the latest news articles from trusted sources worldwide.
- **Category Filtering**: Query news by categories such as technology, sports, business, and more.
- **Keyword Search**: Search articles based on specific keywords.
- **Source Filtering**: Filter articles by specific sources or publishers.
- **Pagination and Sorting**: Handle large sets of data with pagination and sort articles by publication date.

## 🚀 Getting Started

### Prerequisites

To use the NewNews API, you need:

- An active API key.
- Node.js (for local development and testing).
- Internet connection for making requests to the API.

### Installation

To set up the NewNews API locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/newnews-api.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd newnews-api
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will start the API server on `http://localhost:3000`.

### Configuration

- Create a `.env` file in the root directory with the following variables:
  ```plaintext
  API_KEY=your_api_key
  BASE_URL=http://newsapi.org/v2
  PORT=3000
  ```
  Replace `your_api_key` with the API key provided by the NewNews service.

## 📡 API Endpoints

### 1. **Get Latest News**

- **URL**: `/api/news/latest`
- **Method**: GET
- **Query Parameters**:
  - `category` (optional): Filter articles by category (e.g., technology, sports, business).
  - `source` (optional): Specify a news source.
  - `page` (optional): Page number for pagination.
  - `pageSize` (optional): Number of articles per page.
  
- **Example Request**:
  ```bash
  GET /api/news/latest?category=technology&page=1&pageSize=10
  ```
  
- **Example Response**:
  ```json
  {
    "status": "ok",
    "totalResults": 100,
    "articles": [
      {
        "source": { "id": "techcrunch", "name": "TechCrunch" },
        "author": "John Doe",
        "title": "Latest tech trends in 2024",
        "description": "An overview of the top technology trends for 2024.",
        "url": "https://techcrunch.com/article",
        "publishedAt": "2024-09-30T10:00:00Z",
        "content": "Full article content here..."
      }
    ]
  }
  ```

### 2. **Search News**

- **URL**: `/api/news/search`
- **Method**: GET
- **Query Parameters**:
  - `q` (required): Search term or keyword.
  - `from` (optional): Filter articles published after this date.
  - `to` (optional): Filter articles published before this date.
  - `sortBy` (optional): Sort articles by `relevance`, `popularity`, or `publishedAt`.
  
- **Example Request**:
  ```bash
  GET /api/news/search?q=climate+change&from=2024-09-01&to=2024-09-30&sortBy=popularity
  ```
  
- **Example Response**:
  ```json
  {
    "status": "ok",
    "totalResults": 50,
    "articles": [
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "Jane Doe",
        "title": "Impact of climate change on global weather patterns",
        "description": "A detailed look into how climate change is affecting weather globally.",
        "url": "https://bbc.com/article",
        "publishedAt": "2024-09-15T12:00:00Z",
        "content": "Full article content here..."
      }
    ]
  }
  ```

## 🔒 Authentication

To authenticate your requests, include your API key in the headers:

```http
GET /api/news/latest HTTP/1.1
Host: localhost:3000
x-api-key: your_api_key
```

## 📘 Usage

### Using `curl`
```bash
curl -X GET "http://localhost:3000/api/news/latest?category=technology" -H "x-api-key: your_api_key"
```

### Using JavaScript (Axios)
```javascript
const axios = require('axios');

axios.get('http://localhost:3000/api/news/latest', {
  headers: { 'x-api-key': 'your_api_key' },
  params: { category: 'technology' }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

## ⚠️ Error Handling

All errors are returned in the following JSON format:

```json
{
  "status": "error",
  "code": "error_code",
  "message": "Description of the error"
}
```

### Common Error Codes

- `401`: Unauthorized - Invalid API key.
- `404`: Not Found - The requested resource does not exist.
- `500`: Internal Server Error - An unexpected error occurred on the server.

## 📝 Contributing

We welcome contributions to enhance the NewNews API! Please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to contribute.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## 💬 Feedback and Support

If you have any questions, suggestions, or issues, feel free to [open an issue](https://github.com/yourusername/newnews-api/issues) or contact us at **[support@newnews.com](mailto:support@newnews.com)**.



### Special Thanks

We would like to thank all contributors and the open-source community for their support! 😊


