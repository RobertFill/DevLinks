let btn = document.getElementById('btn')
function toogle() {
    const body = document.body
    if(body.classList.contains('light')){
        body.classList.remove('light');
        btn.style.cursor ='pointer';
        
       
    }else{
        body.classList.add('light')
    }
}


