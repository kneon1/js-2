var age = +prompt('ВВЕДИТЕ СВОЙ ВОЗРАСТ');
if(age <19){
    alert('Вы ещё молоды, вам нужно учиться')
}else if(age < 51){
    alert('Вам нужно работать')
}else if(age < 60){
    alert('Вам скоро на пенсию')
}else if(age < 100){
    alert('Вы пенсионер')
}else{
    alert('Что то пошло не так')
}
