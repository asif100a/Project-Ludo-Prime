const imgArr = [
    '1 star.png',
    '2 star.png',
    '3 star.png',
    '3 star.png',
    '5 star.png',
    '6 star.png',
];

const randomPhoto = () => {
    const random = Math.ceil(Math.random() * imgArr.length);
    console.log(random);
};

randomPhoto();