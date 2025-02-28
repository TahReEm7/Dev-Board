document.getElementById("bg-change").addEventListener("click", function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


document.getElementById("blog").addEventListener("click", function(){
    window.location.href = "blog.html";
});

