const optionFactory = (node, state) => {
    return {
        node,
        state
    }
}

const darkMode = optionFactory(document.getElementById('toggle-darkmode'), true);
const darkmodeButton = document.querySelector('#toggle-darkmode div > span');
const backgroundButton = document.querySelector('#toggle-darkmode > div');

const root = document.querySelector(':root');
const body = document.querySelector('body');

const toggleDarkMode = () => {
    if (darkMode.state) {
        darkmodeButton.style.translate = '0';
        root.style.colorScheme = 'dark';
        darkMode.state = false;
    } else {
        darkmodeButton.style.translate = '100%';
        darkMode.state = true;
        root.style.colorScheme = 'light';
    }
}

console.log(darkmodeButton);

darkMode.node.addEventListener('click', toggleDarkMode);
