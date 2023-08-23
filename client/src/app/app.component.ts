import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit(): void {
    const menuBtn = document.querySelector(".logo__button");
    menuBtn?.addEventListener('click', () => {
      const nav = document.querySelector(".nav");
      nav?.classList.toggle("nav-active");
    });


    // Function to toggle the theme and update local storage
    function toggleTheme() {
      const isDarkMode = document.body.classList.toggle('darkMode');
      document.querySelector('.theme__img')?.classList.toggle('darkMode-button');
      localStorage.setItem('darkMode', isDarkMode.toString());
    }

    // Initialize the theme based on the stored flag or default to system setting
    function initializeTheme() {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';

      if (isDarkMode || (localStorage.getItem('darkMode') === null && prefersDarkMode)) {
        document.body.classList.add('darkMode');
        document.querySelector('.theme__img')?.classList.add('darkMode-button');
      }
    }

    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initialize the theme
    initializeTheme();  

    const themeButton = document.querySelector('.theme-icon');
    themeButton?.addEventListener('click', toggleTheme);
  }


}
