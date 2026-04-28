// Sample news data (in a real app, this would come from an API)
const newsData = {
    headlines: [
        {
            title: "PM Modi Announces New Infrastructure Projects Worth ₹1.5 Lakh Crore",
            description: "The Prime Minister unveiled plans for new highways, airports, and smart cities across the country.",
            category: "India",
            source: "The Hindu",
            time: "1 hour ago",
            image: "https://via.placeholder.com/300x180?text=Infrastructure+Projects"
        },
        {
            title: "Global Tech Summit Begins in Bengaluru",
            description: "Leaders from top tech companies gather to discuss the future of AI and digital transformation.",
            category: "Technology",
            source: "Economic Times",
            time: "3 hours ago",
            image: "https://via.placeholder.com/300x180?text=Tech+Summit"
        },
        {
            title: "India's GDP Growth Exceeds Expectations at 7.8%",
            description: "Strong performance in manufacturing and services sectors drives economic growth.",
            category: "Business",
            source: "Business Standard",
            time: "5 hours ago",
            image: "https://via.placeholder.com/300x180?text=GDP+Growth"
        },
        {
            title: "Scientists Discover New Species in Western Ghats",
            description: "The newly identified amphibian has unique characteristics never seen before.",
            category: "Science",
            source: "Down To Earth",
            time: "7 hours ago",
            image: "https://via.placeholder.com/300x180?text=New+Species"
        },
        {
            title: "Bollywood Stars Attend Film Festival in Goa",
            description: "The annual event showcases the best of Indian and international cinema.",
            category: "Entertainment",
            source: "Film Companion",
            time: "9 hours ago",
            image: "https://via.placeholder.com/300x180?text=Film+Festival"
        },
        {
            title: "India Defeats England in Thrilling Test Match",
            description: "A spectacular bowling performance seals victory on the final day.",
            category: "Sports",
            source: "ESPN Cricinfo",
            time: "11 hours ago",
            image: "https://via.placeholder.com/300x180?text=Cricket+Match"
        },
        {
            title: "New Education Policy Implementation Begins",
            description: "Schools across the country adopt the revised curriculum from this academic year.",
            category: "India",
            source: "NDTV",
            time: "13 hours ago",
            image: "https://via.placeholder.com/300x180?text=Education+Policy"
        },
        {
            title: "Renewable Energy Investments Reach Record High",
            description: "Solar and wind power projects attract unprecedented funding this quarter.",
            category: "Business",
            source: "Mint",
            time: "15 hours ago",
            image: "https://via.placeholder.com/300x180?text=Renewable+Energy"
        }
    ],
    india: [
        {
            title: "Delhi Metro Expands with Three New Lines",
            description: "The new routes will connect key areas of the national capital region.",
            category: "India",
            source: "Times of India",
            time: "2 hours ago",
            image: "https://via.placeholder.com/300x180?text=Delhi+Metro"
        },
        {
            title: "Supreme Court Verdict on Key Constitutional Matter",
            description: "The landmark judgment clarifies several long-standing legal questions.",
            category: "India",
            source: "The Hindu",
            time: "4 hours ago",
            image: "https://via.placeholder.com/300x180?text=Supreme+Court"
        },
        {
            title: "Monsoon Arrives in Kerala Ahead of Schedule",
            description: "Weather department predicts normal rainfall across the country this year.",
            category: "India",
            source: "India Today",
            time: "6 hours ago",
            image: "https://via.placeholder.com/300x180?text=Monsoon"
        }
    ],
    world: [
        {
            title: "UN Security Council Meets on Global Crisis",
            description: "World leaders discuss coordinated response to ongoing international tensions.",
            category: "World",
            source: "BBC News",
            time: "3 hours ago",
            image: "https://via.placeholder.com/300x180?text=UN+Meeting"
        },
        {
            title: "European Union Announces New Trade Policies",
            description: "The changes aim to boost economic recovery post-pandemic.",
            category: "World",
            source: "Reuters",
            time: "5 hours ago",
            image: "https://via.placeholder.com/300x180?text=EU+Trade"
        }
    ],
    business: [
        {
            title: "RBI Keeps Interest Rates Unchanged",
            description: "Central bank maintains status quo amid global economic uncertainties.",
            category: "Business",
            source: "Economic Times",
            time: "4 hours ago",
            image: "https://via.placeholder.com/300x180?text=RBI+Rates"
        },
        {
            title: "Startup Funding Shows Signs of Recovery",
            description: "Investor confidence returns after several quarters of decline.",
            category: "Business",
            source: "YourStory",
            time: "8 hours ago",
            image: "https://via.placeholder.com/300x180?text=Startup+Funding"
        }
    ],
    technology: [
        {
            title: "Indian Tech Giant Launches New AI Platform",
            description: "The innovative solution promises to transform business operations.",
            category: "Technology",
            source: "TechCrunch",
            time: "2 hours ago",
            image: "https://via.placeholder.com/300x180?text=AI+Platform"
        },
        {
            title: "Global Chip Shortage Expected to Ease Soon",
            description: "Manufacturers report increased production capacity coming online.",
            category: "Technology",
            source: "Wired",
            time: "6 hours ago",
            image: "https://via.placeholder.com/300x180?text=Chip+Shortage"
        }
    ],
    sports: [
        {
            title: "Indian Badminton Team Wins Championship",
            description: "Historic victory against defending champions in finals.",
            category: "Sports",
            source: "Sportsstar",
            time: "5 hours ago",
            image: "https://via.placeholder.com/300x180?text=Badminton+Win"
        },
        {
            title: "IPL Auction: Surprise Buys Dominate Event",
            description: "Several uncapped players fetch record prices at the bidding.",
            category: "Sports",
            source: "Cricbuzz",
            time: "9 hours ago",
            image: "https://via.placeholder.com/300x180?text=IPL+Auction"
        }
    ],
    entertainment: [
        {
            title: "Bollywood's Biggest Award Night Tonight",
            description: "Stars gather for the prestigious annual film awards ceremony.",
            category: "Entertainment",
            source: "Filmfare",
            time: "3 hours ago",
            image: "https://via.placeholder.com/300x180?text=Film+Awards"
        },
        {
            title: "Popular Web Series Renewed for Third Season",
            description: "Streaming platform confirms continuation of hit show.",
            category: "Entertainment",
            source: "OTT Play",
            time: "7 hours ago",
            image: "https://via.placeholder.com/300x180?text=Web+Series"
        }
    ]
};

// DOM Elements
const newsContainer = document.getElementById('news-container');
const loadMoreBtn = document.getElementById('load-more');
const navLinks = document.querySelectorAll('nav a');
const currentDate = document.getElementById('current-date');

// Current date display
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = now.toLocaleDateString('en-US', options);
}

// Display news articles
function displayNews(category = 'headlines', initialLoad = true) {
    if (initialLoad) {
        newsContainer.innerHTML = '';
    }
    
    const articles = newsData[category] || newsData.headlines;
    const fragment = document.createDocumentFragment();
    
    articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.className = 'news-card';
        articleEl.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="card-content">
                <span class="category-label">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <div class="news-meta">
                    <span class="source">${article.source}</span>
                    <span class="time">${article.time}</span>
                </div>
            </div>
        `;
        fragment.appendChild(articleEl);
    });
    
    newsContainer.appendChild(fragment);
}

// Navigation click handler
function handleNavClick(e) {
    e.preventDefault();
    const category = this.getAttribute('data-category');
    
    // Update active link
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    // Display news for selected category
    displayNews(category);
    
    // Scroll to news section
    document.querySelector('.news-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Load more news handler
function handleLoadMore() {
    // In a real app, this would fetch more news from an API
    displayNews('headlines', false);
    
    // Disable button after "loading all news"
    loadMoreBtn.textContent = 'No More News to Load';
    loadMoreBtn.disabled = true;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    displayNews();
    
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    loadMoreBtn.addEventListener('click', handleLoadMore);
});

// Search functionality (basic)
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    if (searchTerm.trim() === '') return;
    
    // In a real app, this would call a search API
    alert(`Searching for: ${searchTerm}\nIn a real application, this would display search results.`);
});

// Weather widget interaction
document.querySelector('.weather-widget').addEventListener('click', function() {
    // In a real app, this would expand the weather widget or show more details
    alert('Weather widget clicked. In a real application, this would show extended forecast.');
});