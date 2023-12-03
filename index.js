const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que hibas a decir que si jsjsjs Hoy es un dia muy importante para nosotros :3 Para nuestro aniversario...Deseo que recibas estos regalos especiales. Felicidad, en lo profundo de tu ser. Serenidad, con cada amanecer. Exito, en cada respecto. Amor, que sea eterno. Recuerdos entrañables, de momentos del ayer. Un presente esplenderoso repleto de bendiciones. Un sendero, que conduzca a un hermoso mañana. Anhelos, que se conviertan en realidad. Y reconocimientos, de todas las cosas maravillosas que hay en ti. !FELIZ ANIVERSARIO AMOR!, y que se vengan mas meses juntos. atte.OMAR  UwU')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
