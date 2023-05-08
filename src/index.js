document.addEventListener("DOMContentLoaded", () => {
    fetchRamen()
    ramenForm()
})

const ramenMenu = document.getElementById("ramen-menu");

function fetchRamen() {
    fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramenData) => renderRamen(ramenData))
}

function renderRamen(ramenData) {
    if (ramenData.length > 1) {
        ramenData.forEach(ramen => {
            //img:
            const ramenImg = document.createElement("img");
            ramenImg.setAttribute("src", ramen.image);
            ramenImg.addEventListener("click", () => showRamenDetails(ramen));
            ramenMenu.appendChild(ramenImg);
        });
    } else {
        const ramenImg = document.createElement("img");
        ramenImg.setAttribute("src", ramenData.image);
        ramenImg.addEventListener("click", () => showRamenDetails(ramenData));
        ramenMenu.appendChild(ramenImg);
    }
}

function showRamenDetails(ramenData) {
    // image:
    const ramenImg = document.getElementsByClassName("detail-image");
    ramenImg[0].setAttribute("src", ramenData.image);

    //name:
    const ramenName = document.getElementsByClassName("name");
    ramenName[0].textContent = ramenData.name;

    // Resturant Name:
    const ramenRestaurant = document.getElementsByClassName("restaurant");
    ramenRestaurant[0].textContent = ramenData.restaurant;
    
    // rating:
    const ramenRating = document.getElementById("rating-display");
    ramenRating.textContent = ramenData.rating;

    //comment:
    const ramenComment = document.getElementById("comment-display");
    ramenComment.textContent = ramenData.comment;
}

function ramenForm() {
    const ramenForm = document.getElementById("new-ramen");
    const name = document.getElementById("new-name");
    const restaurant = document.getElementById("new-restaurant");
    const image = document.getElementById("new-image");
    const rating = document.getElementById("new-rating");
    const comment = document.getElementById("new-comment");

    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderRamen({
            name: name.value,
            restaurant: restaurant.value,
            image: image.value,
            rating: rating.value,
            comment: comment.value
        })
    })

}