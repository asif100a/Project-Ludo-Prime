const imgArr = [
    '1 star.png',
    '2 star.png',
    '3 star.png',
    '3 star.png',
    '5 star.png',
    '6 star.png',
];

const playBtna = () => {
    removeIntsruction();

    const random = Math.floor(Math.random() * imgArr.length);
    console.log(random);

    const randomImg = imgArr[random];

    const starImg = document.getElementById('star-img');
    starImg.src = `./Images/${randomImg}`;
};
