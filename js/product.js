const productSize = document.querySelectorAll(".product__size-item");

productSize.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentSize = item;

        productSize.forEach(function (item) {
            item.classList.remove('active');
        });

        currentSize.classList.add('active');
    });
});

const productColor = document.querySelectorAll(".product__color-item");

productColor.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentSize = item;

        productColor.forEach(function (item) {
            item.classList.remove('active');
        });

        currentSize.classList.add('active');
    });
});