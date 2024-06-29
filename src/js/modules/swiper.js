const swiper = () => {
    const sl1 = document.getElementById('sl1');
    const sl2 = document.getElementById('sl2');
    const sl3 = document.getElementById('sl3');
    const sl4 = document.getElementById('sl4');
    const sl5 = document.getElementById('sl5');
    const sl6 = document.getElementById('sl6');
    const sl7 = document.getElementById('sl7');
    const sl8 = document.getElementById('sl8');
    const sl9 = document.getElementById('sl9');

    const lopik = () => {
        if (sl1.style.display === 'block') {
            sl1.style.display = 'none';
            sl2.style.display = 'block';
        } else if (sl2.style.display === 'block') {
            sl2.style.display = 'none';
            sl3.style.display = 'block';
        } else if (sl3.style.display === 'block') {
            sl3.style.display = 'none';
            sl1.style.display = 'block';
        }
        console.log('lop');
    };
    const lopik2 = () => {
        if (sl4.style.display === 'block') {
            sl4.style.display = 'none';
            sl5.style.display = 'block';
        } else if (sl5.style.display === 'block') {
            sl5.style.display = 'none';
            sl6.style.display = 'block';
        } else if (sl6.style.display === 'block') {
            sl6.style.display = 'none';
            sl4.style.display = 'block';
        }
        console.log('lop');
    };
    const lopik3 = () => {
        if (sl7.style.display === 'block') {
            sl7.style.display = 'none';
            sl8.style.display = 'block';
        } else if (sl8.style.display === 'block') {
            sl8.style.display = 'none';
            sl9.style.display = 'block';
        } else if (sl9.style.display === 'block') {
            sl9.style.display = 'none';
            sl7.style.display = 'block';
        }
        console.log('lop');
    };

    setInterval(lopik, 3000);
    setInterval(lopik2, 3000);
    setInterval(lopik3, 3000);
};

export default swiper 