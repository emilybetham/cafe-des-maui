const activeNavbarLink = () => {
  const links = document.querySelectorAll('.navbar-link')
  // console.log(links);
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      let activeTab = document.querySelector('.navbar-link.active-tab');
      activeTab.classList.remove('active-tab');
      activeTab = event.currentTarget
      activeTab.classList.add('active-tab');
      document.querySelector('.navbar-link.active-tab').classList.remove('active-tab');
      const idOfLink = document.getElementById(activeTab.dataset.contentName)
      console.log(idOfLink);
      document.getElementById(activeTab.dataset.contentName).classList.add('active-tab')
      event.currentTarget.classList.add('active-tab')
    });
  });
}

export { activeNavbarLink };


// EXAMPLE FROM RENT YOUR SKATE BELOW - copied same syntax


// const tabDynamic = () => {

//   document.querySelectorAll("a.tab-underlined").forEach((tab) => {

//     tab.addEventListener("click", (event) => {
//       event.preventDefault();
//       let activeTab = document.querySelector("a.tab-underlined.active");
//       activeTab.classList.remove("active");
//       activeTab = event.currentTarget
//       activeTab.classList.add("active");
//       document.querySelector(".tab-content.active").classList.remove("active");
//       document.getElementById(activeTab.dataset.contentName).classList.add('active')

//     });

//   });
// }

// export { tabDynamic };
