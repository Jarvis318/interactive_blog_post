document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            handleToggle()
        })
    }
});

function handleToggle() {
    let mode = localStorage.getItem("mode")|| "light"; 
    if (mode === 'light'){
        mode = "dark";
        localStorage.setItem("mode", mode);
        changeBackground();//function to change the color
    } else{
        mode = "light"
        localStorage.setItem("mode", mode);
        changeBackground(); //function to change the color
    }
}

function changeBackground(){
    let mode = localStorage.getItem("mode")|| "light"; 
    if (mode === 'dark'){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.body.style.borderColor = "white"
    } else{ 
         document.body.style.backgroundColor = "#b6dbfd"
         document.body.style.color = "black"
         document.body.style.borderColor = "black"
    }
}
changeBackground();