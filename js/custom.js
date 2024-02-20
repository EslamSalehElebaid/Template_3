let lis = document.querySelectorAll('.info-list li');
let divsContent = document.querySelectorAll('.info-content div');

lis.forEach(li=>{
    li.onclick = function(){
        //remove class active from all lis
        lis.forEach(li=>{
            li.classList.remove('active');
            });
            //add class active on clicked li
            this.classList.add('active');
        
           divsContent.forEach(div=>{
                div.classList.remove('active');
                if (div.classList.contains(li.dataset.class )) {
                    div.classList.add('active');
                }
           });
           
        
    }
});