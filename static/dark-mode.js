function changeTheme(){
  const d = new Date();
  let hour = d.getHours();
  if(hour >= 19 | hour <= 7){
      darkMode()
  }
}

function darkMode(){
  
  document.body.style.backgroundColor = "var(--night-color)";
  document.body.style.color = "var(--night-text)";
  const accordionItems = document.querySelectorAll(".accordion-item");
  const accordionBtns = document.querySelectorAll(".accordion-button");
  accordionItems.forEach(element => {
      element.style.color = "var(--night-secondary)";
      const btn = element.querySelector(".accordion-button");
      btn.style.color = "var(--night-text)";

  });
  const navs = document.querySelectorAll(".navbar a");
  navs.forEach(element => {
      element.style.color = "var(--night-secondary)";

  });
  changeGalleryCaptions();
  
}

function changeGalleryCaptions(){
  const modalContent = document.querySelectorAll(".carousel-caption");
  console.log(modalContent);
  modalContent.forEach(content => {
      content.style.color = "var(--night-text)";
  });
}
changeTheme()