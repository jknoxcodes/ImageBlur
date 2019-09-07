//I project I completed on Sep 6 2019, Day #3 of 30 days of code in the JavaScript30.com class. In this exercise I learned how to create and use CSS variables. I also continued to practice editing CSS, listening for different kinds of events (change and mousemove), and reading data attributes using the dataset property with JS.

//My way of completing the project this

window.addEventListener('change', editPage);
window.addEventListener('mousemove', editPage); 

function editPage(e){
      const suffix = e.target.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value + suffix);
}

//Wes Bos' way of doing this. I'm not sure why he chose to loop through for listening

//     const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
