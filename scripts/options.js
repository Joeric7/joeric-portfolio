const optionFactory = (node, state) => {
    return {
        node,
        state
    }
}

const darkMode = optionFactory(document.getElementById('toggle-darkmode'), true);

const root = document.querySelector(':root');
const body = document.querySelector('body');

const toggleDarkMode = () => {
    if (darkMode.state) {
        root.style.colorScheme = 'dark';
        darkMode.state = false;
    } else {
        darkMode.state = true;
        root.style.colorScheme = 'light';
    }
}

const toggleBackground = () => {
    if (background.state) {
        background.node.hidden = true;
        background.state = false;
    } else {
        body.style.backgroundImage = '';
        background.state = true;
    }
}

console.log(darkMode.node);

darkMode.node.addEventListener('click', toggleDarkMode);
background.node.addEventListener('click', toggleBackground);
