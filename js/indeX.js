let a= document.getElementsByTagName('body') [0] .addEventListener('click',function(e) {


    if(e.target.className == "hide"){
    document.getElementsByTagName('p')[0].style.display ='none';
    e.target.className = 'show'
    document.getElementsByClassName('show')[0].textContent = 'اضهار' ;
    
    
    }else   if(e.target.className == "show"){
        document.getElementsByTagName('p')[0].style.display ='block';
        e.target.className = 'hide'
        document.getElementsByClassName('hide')[0].textContent = 'اخفاء' ;
        
    
    }
    
    
    
    
    }) 