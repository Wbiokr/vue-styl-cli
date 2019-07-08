Vue.filter('convertUTC',(time)=>{
  const TIME = Number(time);

  const M = new Date(TIME).toDateString().split(' ')[1];
  const D = `0${new Date(TIME).getDate()}`.slice(-2);
  const Y = new Date(TIME).getFullYear();
  const h = `0${new Date(TIME).getHours()}`.slice(-2);
  const m = `0${new Date(TIME).getMinutes()}`.slice(-2);
  return `${M} ${D},${Y} ${h}:${m}`
})
