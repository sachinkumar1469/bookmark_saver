let inputEl = document.getElementById('input-el');
let btn = document.getElementById('btn-el');
let ulEl = document.getElementById('ul-el');
let deleteEl = document.getElementById('delete-el');
let tabEl = document.getElementById('tab-el');


let myLeads = [];
inputEl.addEventListener('click',function(){
    inputEl.value="";
})
btn.addEventListener('click', function(event){
    
    let inputValue = inputEl.value;
    if(inputValue){
        myLeads.push(inputValue);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        inputEl.value="";
    } else {
        inputEl.value="Enter Something";
    }
    
})
tabEl.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        
    })
})

let renderEl = document.getElementById('render-el');
let liItems = "";
renderEl.addEventListener('click',function(e){
    liItems="";
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
    if(myLeads){
        for(let i = 0;i<myLeads.length;i++){
            liItems+= `<li> <a targe="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a> </li>`;
            
        }
        ulEl.innerHTML = liItems;
    } 
    
})

deleteEl.addEventListener('click',function(){
    myLeads=[];
    localStorage.clear();
    ulEl.innerHTML="";
})

