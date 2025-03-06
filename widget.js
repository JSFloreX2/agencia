async function fetchReviews() {
    let response = await fetch("https://reviewapi.io/api/google?placeid=TUPLACEID");
    let data = await response.json();

    data.reviews.forEach(review => {
        let div = document.createElement("div");
        div.className = "review-card";
        div.innerHTML = `
            <h3>${review.author_name}</h3>
            <p>${review.text}</p>
            <span>⭐ ${review.rating}</span>
        `;
        document.getElementById("reviews").appendChild(div);
    });
}

fetchReviews();
