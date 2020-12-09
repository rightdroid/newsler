import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react';

const THEMES = [
    {id: 0, title : 'Light'}, // default, light
    {id: 1, title : 'Dark'}, // dark
    {id: 2, title : 'Contrast'}, // accessibility, contrast
]

const COLOR_TYPES = [
    'Main',
    'Secondary',
    'Accent',
];

function App() {
    const [theme, setTheme] = useState(0);
    
    // Here we actually change color variables declared
    // in document :root while rotating through themes
    const handleTheme = () => {
        const newThemeId =( theme + 1) > (THEMES.length - 1) ? 0 : theme + 1;
        
        for (let i = 0, j = COLOR_TYPES.length; i < j; i++) {
            const col = getComputedStyle(document.body)
                .getPropertyValue(`--color${COLOR_TYPES[i] + THEMES[newThemeId].title}`);
            document.documentElement.style.setProperty(`--color${COLOR_TYPES[i]}`, col);
        }
        setTheme(newThemeId);
    }
    
    return <div className="App">
        <Header handleTheme={handleTheme} theme={theme} themes={THEMES}/>
        <Body theme={theme}/>
    </div>;
}

export default App;
