 function getNowDate() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let H = date.getHours();
  let mm = date.getMinutes();
  let s=date.getSeconds()
        m = m < 10 ? "0" + m : m;
        d = d < 10 ? "0" + d : d;
        H = H < 10 ? "0" + H : H;
        return y + "-" + m + "-" + d + " " + H + ":" + mm+":"+s;
}

export {
  getNowDate
}