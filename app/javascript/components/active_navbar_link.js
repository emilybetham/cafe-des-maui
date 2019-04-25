const activeNavbarLink = () => {
  // create an array of my links so that I don't have to repeat code for each
  const linksArray = ['home', 'menu', 'our_story', 'live_music', 'contact']
  linksArray.forEach((link) => {
    const url = document.URL
    if (url.endsWith(link)) {
      let activeTab = document.querySelector('.navbar-link.active-tab');
      activeTab.classList.remove('active-tab');
      document.getElementById(link).classList.add('active-tab');
    }
  });
}

export { activeNavbarLink };

