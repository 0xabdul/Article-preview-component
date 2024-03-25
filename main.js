let sharehover = document.getElementById('share');
let sharedetails = document.getElementById('share-content');
sharehover.addEventListener('mouseenter',()=>{
sharedetails.style.display = 'flex';
})
sharehover.addEventListener('mouseleave',()=>{
sharedetails.style.display = 'none';
})