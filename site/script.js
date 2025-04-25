document.addEventListener("DOMContentLoaded", () => {
    const images = ['car1.jpg', 'car2.jpg', 'car3.jpg','car4.jpg', 'car5.jpg', 'car6.jpg', 'car7.jpg', 'car8.jpg', 'car9.jpg', 'car10.jpg','car11.jpg', 'car12.jpg', 'car13.jpg', 'car14.jpg', 'car15.jpg', 'car16.jpg', 'car17.jpg', 'car18.jpg', 'car19.jpg', 'car20.jpg', 'car21.jpg', 'car22.jpg', 'car23.jpg', 'car24.jpg'];
    const gallery = document.getElementById("gallery");
    images.forEach(name => {
        const img = document.createElement("img");
        img.src = "image/" + name;
        img.alt = "Car";
        gallery.appendChild(img);
    });
});
