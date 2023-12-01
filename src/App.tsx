import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Hello } from './components/Hello';
import { Slogans } from './components/Slogans';
import { MyProjects } from './components/MyProjects';
import { Footer } from './components/Footer';
import { Contacts } from './components/Contacts_window';

function App() {
  function contactMenu(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
    let target = e.target as HTMLElement;
    if (target.classList.contains('exit')) {
      const contacts_window = document.getElementById('contacts_window');
      const page_wrapper = document.getElementById('page_wrapper');
      contacts_window?.classList.remove('none');
      page_wrapper?.classList.add('dark');
      document.body.classList.add('overflow');
    } else {
      const contacts_window = document.getElementById('contacts_window');
      const page_wrapper = document.getElementById('page_wrapper');
      contacts_window?.classList.add('none');
      page_wrapper?.classList.remove('dark');
      document.body.classList.remove('overflow');
    }
  }
  return (
    <>
      <Contacts callback={(e) => contactMenu(e)} />
      <div
        className="page_wrapper"
        id="page_wrapper"
        onClick={(e) => contactMenu(e)}
      >
        <Header />
        <Hello />
        <Slogans />
        <MyProjects />
        <Footer />
      </div>
    </>
  );
}

export default App;
