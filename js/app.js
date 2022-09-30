


// Nav Button Hover //////////// 

document.addEventListener('mouseover', (e) => {
    
    if(e.target.classList.contains('nav-hover')) {     
        console.log(e.target);
        let navChild = e.target.querySelector(':nth-child(1)'); 
        navChild.classList.add('dot-active');
    }  
})

document.addEventListener('mouseout', (e) => {   
    if(e.target.classList.contains('nav-hover')) {     
        console.log(e.target);
        let navChild = e.target.querySelector(':nth-child(1)'); 
        navChild.classList.remove('dot-active');
    }  
})