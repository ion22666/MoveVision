export default function () {
    //button sidebar
    
    let myButton = document.querySelector(".but1")  
    let element = document.querySelector('#slideBar')
    sidebar()
    function isMouseoff() {
        if(element.style.marginTop === '-4rem'){
        setTimeout(function(){
            element.style.display = "none";
        }, 4000);}else{
            element.style.display = "none";
        }
    }
    
    isMouseOn()
    function isMouseOn(){
        var timeout;
        document.onmousemove = function(){
        clearTimeout(timeout);
        timeout = setTimeout(function(){
        element.style.display = "flex"
        }, 1000);
        if(element.style.display === "flex" && element.style.marginTop === '-4rem'){
            isMouseoff()
        }
    }}
    
    
    
    function sidebar(){
        myButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">'
        + '<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>'
        + '</svg>';
        myButton.addEventListener('click', () => {
            
            if (element.style.marginTop === '-4rem') {
                element.style.marginTop = '1rem';
                myButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">'
                + '<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>'
                + '</svg>';
            }else{
                element.style.marginTop = '-4rem';
                myButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">'
    + '<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>'
    + '</svg>';  
            }
        });
    }
    
}
