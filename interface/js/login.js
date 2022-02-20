const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = document.querySelectorAll('.column');

    grid.classList.add('active');

    gridColumns.forEach((e) => {
        e.classList.remove('animate-before', 'animate-after');
    });

    heading.classList.remove('animate-before', 'animate-after');
}

function exitScreen(index, exitDelay) {
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = document.querySelectorAll('.column');

    gridColumns.forEach((e) => {
        e.classList.remove('animate-before');
        e.classList.add('animate-after');
    });

    heading.classList.remove('animate-before');
    heading.classList.add('animate-after');

    setTimeout(() => {
        grid.classList.remove('active');
    }, exitDelay);
}

function setupAnimationCycle({ timeFreezePerScreen, exitDelay }) {
    const cycleTime = timeFreezePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(
            () => exitScreen(currentIndex, exitDelay),
            timeFreezePerScreen
        );

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
    }

    nextCycle();

    setInterval(nextCycle, cycleTime);

    // enterScreen(initialScreenIndex);

    // setTimeout(() => {
    //     exitScreen(initialScreenIndex, exitDelay);
    // }, timeFreezePerScreen);
}

setupAnimationCycle({
    timeFreezePerScreen: 3000, //ms
    exitDelay: 300 * 7, //ms
});
