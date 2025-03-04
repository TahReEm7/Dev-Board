function displayDate() {
    const today = new Date();
    const weekdayOptions = { weekday: 'short' };
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const day = today.toLocaleDateString('en-US', weekdayOptions);
    const date = today.toLocaleDateString('en-US', dateOptions).replace(",", '  ');
    
  

    document.getElementById('date').innerText = `${day} ,
    ${date}`;
    document.getElementById('time').innerText = `${day} ,
    ${date}`;
  }

  displayDate();
  


  document.getElementById("bg-change").addEventListener("click", function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


document.getElementById("blog").addEventListener("click", function(){
    window.location.href = "blog.html";
});
document.getElementById("blog-m").addEventListener("click", function(){
    window.location.href = "blog.html";
});

