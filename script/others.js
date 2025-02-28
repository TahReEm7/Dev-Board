function displayDate() {
    const today = new Date();
    const weekdayOptions = { weekday: 'short' };
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const day = today.toLocaleDateString('en-US', weekdayOptions);
    const date = today.toLocaleDateString('en-US', dateOptions);
    
    document.getElementById('date').innerText = `${day} 
    ${date}`;
  }

  displayDate();


