const menuItems=document.querySelectorAll('.menu-bar');

const changeActiveitem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

const messageNotification=document.querySelector('#message-notifications');
const messages=document.querySelector('.messages');
const message=document.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow= '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})

messageSearch.addEventListener('keyup',(event)=>{
    const val=event.target.value.toLowerCase();
    if(val.length===0) {
        message.forEach(chat=>{
            chat.style.display='flex';
        })
    }
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
})


menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveitem();
        item.classList.add('active');
        if(item.id!='notifications')
        {
            document.querySelector('.notification-popup').style.display='none';
        }else{
            document.querySelector('.notification-popup').style.display='block';
        }
    })
})

const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customization-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');

themeModal.addEventListener("click",(e)=>{
    if(e.target.classList.contains('customization-theme')){
        themeModal.style.display='none';
    }
})

theme.addEventListener('click',()=>{
    themeModal.style.display='grid';
})

fontSizes.forEach(size=>{
    let fontSize;
    size.classList.toggle('active'); 

     size.addEventListener('click',()=>{
        if(size.classList.contains('font-size-1')){
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
            fontSize='10px';
        }else if(size.classList.contains('font-size-2')){
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
            fontSize='13px';}
        else if(size.classList.contains('font-size-3')){
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','17rem');
            fontSize='16px';}
        else if(size.classList.contains('font-size-4')){
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
            fontSize='19px';}
        else if(size.classList.contains('font-size-5')){
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
            fontSize='22px';}
        
        document.querySelector('html').style.fontSize=fontSize;
     })
    
})

const colorPallete=document.querySelectorAll('.choose-color span');

colorPallete.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

let darkColorlightness;
let whiteColorlightness;
let lightColorlightness;

const changeBg=()=>{
    root.style.setProperty('--light-color-lightness',lightColorlightness);
    root.style.setProperty('--dark-color-lightness',darkColorlightness);
    root.style.setProperty('--white-color-lightness',whiteColorlightness);
}

Bg1.addEventListener('click',()=>{
    darkColorlightness='17%';
    whiteColorlightness='100%';
    lightColorlightness='95%';
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})


Bg2.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorlightness='20%';
    lightColorlightness='15%';
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click',()=>{
    darkColorlightness='95%';
    whiteColorlightness='10%';
    lightColorlightness='0%';
    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBg();
})
