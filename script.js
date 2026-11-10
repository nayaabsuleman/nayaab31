// Destination Details

let places = [
    {
        name: "Bali",
        country: "Indonesia",
        category: "Beach",
        description: "Discover tropical beaches and beautiful temples.",
        image: "photo-1537996194471-e657df975ab4"
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        category: "Mountain",
        description: "Enjoy majestic mountains and scenic views.",
        image: "photo-1464822759023-fed622ff2c3b"
    },
    {
        name: "Kyoto",
        country: "Japan",
        category: "City",
        description: "Explore traditional streets and historic temples.",
        image: "photo-1493976040374-85c8e12f0c0e"
    },
    {
        name: "Maldives",
        country: "Maldives",
        category: "Beach",
        description: "Relax beside turquoise waters and white sandy beaches.",
        image: "photo-1514282401047-d79a71a590e8"
    },
    {
        name: "Swiss Valley",
        country: "Switzerland",
        category: "Nature",
        description: "Enjoy peaceful landscapes and beautiful greenery.",
        image: "photo-1472396961693-142e6e269027"
    },
    {
        name: "Paris",
        country: "France",
        category: "City",
        description: "Discover beautiful architecture and charming cafes.",
        image: "photo-1499856871958-5b9627545d1a"
    },
    {
        name: "Santorini",
        country: "Greece",
        category: "Beach",
        description: "Admire whitewashed houses and beautiful sea views.",
        image: "photo-1613395877344-13d4a8e0d49e"
    },
    {
        name: "Manali",
        country: "India",
        category: "Mountain",
        description: "Explore mountain scenery and peaceful valleys.",
        image: "photo-1626621341517-bbf3d9990a23"
    },
    {
        name: "Tokyo",
        country: "Japan",
        category: "City",
        description: "Experience vibrant streets and modern city life.",
        image: "photo-1540959733332-eab4deabeeaf"
    },
    {
        name: "Switzerland",
        country: "Switzerland",
        category: "Nature",
        description: "Discover alpine lakes and picture-perfect scenery.",
        image: "photo-1531366936337-7c912a4589a7"
    },
    {
        name: "London",
        country: "United Kingdom",
        category: "City",
        description: "Explore famous landmarks and historic streets.",
        image: "photo-1513635269975-59663e0ac1ad"
    },
    {
        name: "Phuket",
        country: "Thailand",
        category: "Beach",
        description: "Enjoy tropical coastlines and island adventures.",
        image: "photo-1589394815804-964ed0be2eb5"
    },
    {
        name: "New York",
        country: "United States",
        category: "City",
        description: "Experience iconic skyscrapers and lively neighbourhoods.",
        image: "photo-1496442226666-8d4d0e62e6e9"
    },
    {
        name: "Kashmir",
        country: "India",
        category: "Mountain",
        description: "Discover mountain valleys and serene lakes.",
        image: "photo-1595815771614-ade9d652a65d"
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        category: "City",
        description: "Discover striking skyscrapers and desert experiences.",
       image: "photo-1518684079-3c830dcef090"
    },
    {
        name: "Cappadocia",
        country: "Turkey",
        category: "Nature",
        description: "Admire unusual rock formations and colourful skies.",
       image: "photo-1516483638261-f4dbaf036963"
    },
    {
        name: "Rome",
        country: "Italy",
        category: "City",
        description: "Explore ancient ruins and historic architecture.",
        image: "photo-1552832230-c0197dd311b5"
    },
    {
        name: "Munnar",
        country: "India",
        category: "Nature",
        description: "Walk among lush green tea plantations and misty hills.",
        image: "photo-1602216056096-3b40cc0c9944"
    },
    {
        name: "Venice",
        country: "Italy",
        category: "City",
        description: "Discover beautiful canals and charming old streets.",
        image: "photo-1514890547357-a9ee288728e0"
    },
    {
        name: "Bora Bora",
        country: "French Polynesia",
        category: "Beach",
        description: "Enjoy clear lagoons and beautiful tropical scenery.",
        image: "photo-1500375592092-40eb2168fd21"
    },
    {
        name: "Cape Town",
        country: "South Africa",
        category: "Nature",
        description: "Discover dramatic mountains and beautiful coastlines.",
        image: "photo-1580060839134-75a5edca2e99"
    },
    {
        name: "Jaipur",
        country: "India",
        category: "City",
        description: "Explore colourful markets, forts and royal palaces.",
        image: "photo-1599661046827-dacff0c0f09a"
    },
    {
        name: "Iceland",
        country: "Iceland",
        category: "Nature",
        description: "Experience dramatic waterfalls and volcanic landscapes.",
        image: "photo-1476610182048-b716b8518aae"
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        category: "Mountain",
        description: "Discover an ancient Inca citadel high in the Andes.",
        image: "photo-1526392060635-9d6019884377"
    },
    {
        name: "Amsterdam",
        country: "Netherlands",
        category: "City",
        description: "Explore picturesque canals and charming streets.",
        image: "photo-1512470876302-972faa2aa9a4"
    }
];


// Current Category

let selectedCategory = "All";


// Load Favourites

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];


// Display Destination Cards

function displayPlaces() {

    let container = document.getElementById("destinationContainer");

    container.innerHTML = "";

    for (let i = 0; i < places.length; i++) {

        let place = places[i];

        let card = document.createElement("div");
        card.className = "card";
        card.dataset.category = place.category;
        card.id = "place-" + i;

        let image = document.createElement("img");

        image.src =
            "https://images.unsplash.com/" +
            place.image +
            "?auto=format&fit=crop&w=700&q=80";

        image.alt = place.name;

        // Use a fallback if a destination image fails to load

        image.onerror = function() {

            this.onerror = null;

            this.src =
                "data:image/svg+xml;charset=UTF-8," +
                encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="400">' +
                    '<rect width="100%" height="100%" fill="#294638"/>' +
                    '<text x="50%" y="50%" font-size="32" text-anchor="middle" fill="#ffffff">' +
                    place.name +
                    '</text></svg>'
                );
        };

        let content = document.createElement("div");
        content.className = "card-content";

        let title = document.createElement("h3");
        title.textContent = place.name;

        let country = document.createElement("p");
        country.textContent = place.country;

        let description = document.createElement("p");
        description.textContent = place.description;

        let category = document.createElement("p");
        category.textContent = place.category;

        let button = document.createElement("button");

        button.textContent = favourites.includes(place.name)
            ? "♥ Added to Favourites"
            : "♡ Add to Favourites";

        button.onclick = function() {
            toggleFavourite(place.name);
        };

        content.appendChild(title);
        content.appendChild(country);
        content.appendChild(description);
        content.appendChild(category);
        content.appendChild(button);

        card.appendChild(image);
        card.appendChild(content);

        container.appendChild(card);
    }

    searchPlaces();
}


// Search Destinations

function searchPlaces() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    let found = false;

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        let country = cards[i].getElementsByTagName("p")[0].innerText.toLowerCase();

        let category = cards[i].dataset.category;

        let matchesSearch =
            name.includes(input) || country.includes(input);

        let matchesCategory =
            selectedCategory === "All" || category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            cards[i].style.display = "block";
            found = true;

        } else {

            cards[i].style.display = "none";

        }
    }

    document.getElementById("noResults").hidden = found;
}


// Filter Destinations by Category

function showCategory(category, button) {

    selectedCategory = category;

    let buttons = document.querySelectorAll(".categories button");

    buttons.forEach(function(item) {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    searchPlaces();
}


// Add or Remove a Favourite

function toggleFavourite(place) {

    if (favourites.includes(place)) {

        favourites = favourites.filter(function(item) {
            return item !== place;
        });

    } else {

        favourites.push(place);

    }

    localStorage.setItem("favourites", JSON.stringify(favourites));

    displayFavourites();
    displayPlaces();
}


// Display Favourites

function displayFavourites() {

    let list = document.getElementById("favouriteList");

    list.innerHTML = "";

    if (favourites.length === 0) {

        list.innerHTML =
            "<li>No favourites saved yet. Explore and add a place!</li>";

        return;
    }

    for (let i = 0; i < favourites.length; i++) {

        let item = document.createElement("li");

        let name = document.createElement("span");
        name.textContent = favourites[i];

        let button = document.createElement("button");
        button.textContent = "Remove";

        button.onclick = function() {
            removeFavourite(favourites[i]);
        };

        item.appendChild(name);
        item.appendChild(button);

        list.appendChild(item);
    }
}


// Remove a Favourite

function removeFavourite(place) {

    favourites = favourites.filter(function(item) {
        return item !== place;
    });

    localStorage.setItem("favourites", JSON.stringify(favourites));

    displayFavourites();
    displayPlaces();
}


// Surprise Me Feature

function surpriseMe() {

    let visiblePlaces = [];

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        if (cards[i].style.display !== "none") {
            visiblePlaces.push(cards[i]);
        }
    }

    if (visiblePlaces.length === 0) {

        document.getElementById("surpriseMessage").textContent =
            "No destinations found. Try another search!";

        return;
    }

    let randomIndex = Math.floor(Math.random() * visiblePlaces.length);

    let chosenCard = visiblePlaces[randomIndex];

    let chosenPlace = chosenCard.getElementsByTagName("h3")[0].innerText;

    document.getElementById("surpriseMessage").textContent =
        "Your next adventure could be " + chosenPlace + "! ✈️";

    document.querySelectorAll(".card").forEach(function(card) {
        card.classList.remove("highlight");
    });

    chosenCard.classList.add("highlight");

    chosenCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// Run When Website Opens

displayPlaces();
displayFavourites();