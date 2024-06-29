const wind = () => {
    function handleProductClick(event) {
        const slide = event.currentTarget;
        const name = slide.getAttribute('data-name');
        const price = slide.getAttribute('data-price');
        const img = slide.getAttribute('data-img');
        const description = slide.getAttribute('data-description');

        const productDetails = { name, price, img, description };
        sessionStorage.setItem('productDetails', JSON.stringify(productDetails));
        window.location.href = 'product.html';
    }

    document.querySelectorAll('.slide').forEach(slide => {
        slide.addEventListener('click', handleProductClick);
    });
}
export default wind