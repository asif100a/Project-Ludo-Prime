const startToPlayGamea = () => {

    addSpinner();
    playGame();

};

const addSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');

    const homeText = document.getElementById('home-text-container');
    homeText.classList.add('hidden');
};

const playGame = () => {

    setTimeout(() => {
        const homePage = document.getElementById('home-page');
        homePage.classList.add('hidden');

        const playGround = document.getElementById('play-ground');
        playGround.classList.remove('hidden');
    }, 3000);
}