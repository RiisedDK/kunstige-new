document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('#HeaderNavigation nav.header__inline-menu ul.list-menu--inline li.dropdown ul.header__submenu li a span');

    navLinks.forEach(function(link) {
        var navText = link.textContent.trim();

        if (navText === "LED Bloklys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Bloklys_6be8d973-2927-4a87-ace4-58769b14ed11.png?v=1710851831"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Fyrfadslys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Fyrfadslys_7f415ac6-d0d6-4d74-9ccc-2c6778b19b90.png?v=1710851831"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Kertelys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Kertelys_a012d79b-e1ba-443d-afec-2cf4c74d6931.png?v=1710851832"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Kronelys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Kronelys_be48e152-2c3e-4a6f-a93d-475040221d17.png?v=1710851831"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Keglelys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Keglelys_16c9e0c7-f56b-4c85-9608-fe65fa747a96.png?v=1710851830"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Rillelys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Rillelys_e128e404-9770-4851-9d8a-66118411bfd4.png?v=1710851831"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Harlequin LED Bloklys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Harlequin_01ed9274-4921-4149-a7af-f20265f6bc57.png?v=1712905913"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Shape LED Bloklys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Shape.png?v=1712904935"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Square LED Bloklys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Square.png?v=1712904935"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Udendørs LED bloklys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Udendors_LED_Bloklys.png?v=1711458810"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Flydelys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Flydelys.png?v=1713527786"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Gravlys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/LED_Gravlys.png?v=1711458810"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Udendørs pakketilbud") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Udendors_pakketilbud.png?v=1711458810"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "LED Lys") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/LED_Lys_853020ac-46c6-40d6-8e4e-0e2a06a252ad.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Vaser") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Vaser_9fe43627-8cf3-4d68-9c94-a5eadd930e26.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Lysestager") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Lysestager_82879d47-afd9-4034-b2ba-46819dab91c5.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Kunstige blomster") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Kunstige_blomster_5333842e-3100-4222-9083-e37e66cfb799.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Lanterner") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Lanterner_ca6945a6-928d-4aa8-8f33-122075d020d4.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Bakker") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Bakker_a01dcd1f-91b2-45b4-a996-1256ac0cf0e2.png?v=1711458780"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Påske") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Paske_91b0c6e0-72dc-4bec-9c4f-0566ae1baab8.png?v=1711458787"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else if (navText === "Jul") {
            var img = document.createElement('img');
            img.src = "https://cdn.shopify.com/s/files/1/0727/8172/6042/files/Jul_61a3b047-019e-4303-927e-752065b70671.png?v=1711458787"; // Add your image source here
            img.classList.add('menuIconLux');
            link.insertBefore(img, link.firstChild);
        } else {
          
        }
    });
});