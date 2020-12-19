const trafficCanvas = document.getElementById("traffic-chart");
const alertBanner = document.getElementById("alert");
const bellIcon = document.getElementById("notification-icon");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");

//ALERT NOTIFICATION
// Create the html for the banner

alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

// traffic
 let chartButtons = document.getElementById('traffic-nav-btns');
 let trafficLinkNav = document.getElementsByClassName('traffic-nav-link');

 //loop

 for (let i=0; i<trafficLinkNav; i++) {
    trafficLinkNav[i].addEvenentListener("click", (e) => {
        let status = document.getElementsByClassName("active");
        status[0].className = status[0].classname.replace("active", "");
        e.target.classlist.add("active");
    });
 }


//- Chart Widgets

    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

// 1-Monthly Traffic Data Chart
    
    let trafficMonthly = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug","Sept", "Oct", "Nov", "Oct", "Dec"],
        datasets: [{
            data: [800, 4530, 3200, 1300, 4500, 2380, 3467, 1050, 4300, 5300, 2300, 1200],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 2,
        }]
    };

    let monthlyTrafficData = document.querySelector('#monthly-btn');
    monthlyTrafficData.addEventListener('click', e => {
        e.preventDefault();
        trafficChart.data = trafficMonthly
        trafficChart.update();
        
    });


// 2-Weekly Traffic Data Chart

    let trafficWeekly = {
        labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
        datasets: [{
            data: [1100, 750, 4300, 2300, 1000, 5400, 920, 6800, 2460, 1345, 654, 2367],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 2,
        }]
    };

    let weeklyTrafficData = document.querySelector('#weekly-btn');
    weeklyTrafficData.addEventListener('click', (e) => {
        e.preventDefault();
        trafficChart.data = trafficWeekly
        trafficChart.update();

    });

 // 3- Daily Traffic Data Chart
    
    let trafficDaily = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            data: [670, 3045, 3765, 1300, 2345, 890, 760],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 2,
        }]

    };

    let dailyTrafficData = document.querySelector('#daily-btn');
    dailyTrafficData.addEventListener('click', (e) => {
        e.preventDefault();
        trafficChart.data = trafficDaily
        trafficChart.update();

    });


// 4- Hourly Traffic Data Chart

    let trafficHourly = {
        labels: ["7am", "11am", "2pm", "5pm", "8pm", "11pm", "2am", "4am", "6am"],
        datasets: [{
            data: [6789, 3456, 2147, 345, 1987, 2018, 1972, 598, 3456],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 2,
        }]
    };

    let hourlyTrafficData = document.querySelector('#hourly-btn');
    hourlyTrafficData.addEventListener('click', (e) => {
        e.preventDefault();
        trafficChart.data = trafficHourly
        trafficChart.update();
    });

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });



// Bar Graphic

// data for daily traffic bar chart
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
        };

    const dailyOptions = {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        }
    
    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });
        
// Doughnut Chart
    const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
        }]
        };

    const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        });

// Messaging Section

    const user = document.getElementById("userField");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");

    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
        } else {
        alert(`Message successfully sent to: ${user.value}`);
        }
        });


// Local Storage 

    const firstToggle = document.getElementById('email-not');
    const secondToggle =  document.getElementById('pub-pro');
    const timezoneField = document.getElementById('timezone');
    
    // Test for local storage

    function testStorage() {
        const test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    }

    const saveBtn = document.getElementById('save');
    const cancelBtn = document.getElementById('cancel');

    if (testStorage() === true){

        saveBtn.addEvenentListener('click', () => { 
            localStorage.setItem('emailNot', firstToggle.checked);
            localStorage.setItem('pubPro', secondToggle.checked);
            localStorage.setItem('timeZone', timeZoneField.value);
        });

        cancelBtn.addEventListener('click', e => {

            let cancel = confirm('Do you want to cancel?');
    if (cancel) {
            localStorage.setItem('emailNot', firstToggle.checked = null);
            localStorage.setItem('pubPro', secondToggle.checked = null);
            localStorage.setItem('timeZone', timeZoneField.value = null);
        alert('The settings have been successfuly saved!');
    }

        });
        
    };


