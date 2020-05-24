document.getElementById('login').addEventListener('click',()=>{
    document.querySelector('.bg-modal').style.display="flex";
})

document.querySelector('.closebtn').addEventListener('click',()=>{
    document.querySelector('.bg-modal').style.display="none"
})


document.querySelector('.bg-modal').addEventListener('click',(e)=>{
    document.querySelector('.bg-modal').style.display="none";
})

document.querySelector('.content-modal').addEventListener('click',(e)=>{
    e.stopPropagation();
})