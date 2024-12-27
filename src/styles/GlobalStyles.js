import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Tanha";
        src: url('/fonts/tanha/tanha.eot'),
        url('/fonts/tanha/tanha.ttf'),
        url('/fonts/tanha/tanha.woff'),
        url('/fonts/tanha/tanha.woff2')
    }
        
    :root {
        --color-primary-50: #fffbeb;
        --color-primary-100: #fef3c7;
        --color-primary-200: #fde68a;
        --color-primary-300: #fcd34d;
        --color-primary-400: #fbbf24;
        --color-primary-500: #f59e0b;
        --color-primary-600: #d97706;
        --color-primary-700: #b45309;
        --color-primary-800: #92400e;
        --color-primary-900: #78350f;
        --color-primary-950: #451a03;

        --color-p: #A69288;

        --color-primary: #dc9749;
        --color-secondary: #825B47;
        --color-danger: #ad1212;
        --color-success: #2cc25e;
        --color-white: #ffffff;
        --color-wheat: #f5deb3;
        --color-dark: #111010;
        --color-dark-secondary: #17161A;
        --color-dark-label: #232227;
        --color-dark-secondary-label: #2b2b2b;

        --color-primary-rgb: 220, 151, 73;
        --color-dark-rgb: 17, 16, 16;
        --color-white-rgb: 255, 255, 255;
        --color-danger-rgb: 173, 18, 18;
        --color-success-rgb: 44, 194, 94;

        --color-gray: #262834;
        --color-gray-100: #f7fafc;
        --color-gray-200: #edf2f7;
        --color-gray-300: #e2e8f0;
        --color-gray-400: #cbd5e0;
        --color-gray-500: #a0aec0;
        --color-gray-600: #718096;
        --color-gray-700: #4a5568;
        --color-gray-800: #2d3748;
        --color-gray-900: #1a202c;

        // shadows dark
        --shadow-dark-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --shadow-dark: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --shadow-dark-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        --shadow-dark-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --shadow-dark-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

        // shadows white
        --shadow-white-sm: 0 1px 2px 0 rgb(255 255 255 / 0.05);
        --shadow-white: 0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1);
        --shadow-white-md: 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1);
        --shadow-white-lg: 0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
        --shadow-white-xl: 0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1);
    }
    
    body {
        font-family: "Tanha";
        color: var(--color-white);
        background-color: var(--color-dark-secondary);
        padding: 0;
        margin: 0;
    }

    ::selection {
        background-color: var(--color-primary) !important;
    }

    ::-webkit-scrollbar {
		width: 4px;
        margin: 0 2px;
	}
	::-webkit-scrollbar-track {
		background: none;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--color-gray-600);
		border-radius: 20px;
		border: solid 1px #242424;
	}
`;

export const xxxxs = `(min-width: 129px)`;
export const xxxs = `(min-width: 281px)`;
export const xxs = `(min-width: 321px)`;
export const xs = `(min-width: 481px)`;
export const sm = `(min-width: 641px)`;
export const md = `(min-width: 720px)`;
export const lg = `(min-width: 1025px)`;
export const xl = `(min-width: 1281px)`;
export const xl2 = `(min-width: 1537px)`;

export default GlobalStyles;
