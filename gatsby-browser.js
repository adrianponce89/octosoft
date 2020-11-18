import CustomLayout from './wrapPageElement';
import './src/global.css';

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none';
  }, 1000);
};

export const wrapPageElement = CustomLayout;
