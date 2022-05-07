setInterval(() => {
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    let ampm = document.getElementById("ampm");
    
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");
    
    let ponto_h = document.querySelector(".ponto_h");
    let ponto_m = document.querySelector(".ponto_m");
    let ponto_s = document.querySelector(".ponto_s");
  
    // chamando o tempo nas variáveis de hora, minuto e segundo
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >=12 ? "PM" : "AM";
  
    // Conversor de relógio 24h para 12h
    if (h > 12) {
      h = h - 12;
    }
  
    // Adicionando zero antes do número com um único dígito
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
    // O que é mostrado no html
    horas.innerHTML = h + "<br><span>Horas</span>";
    minutos.innerHTML = m + "<br><span>Minutos</span>";
    segundos.innerHTML = s + "<br><span>Segundos</span>";
    ampm.innerHTML = am;
    
    // Cores nas bordas
    hh.style.strokeDashoffset = 440 - (440 * h) / 12; //12 horas
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; //60 minutos
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; //60 segundos
    
    //bolinha acompanhando o tempo
    ponto_h.style.transform = `rotate(${h * 30}deg)`; //360 / 12 = 30
    ponto_m.style.transform = `rotate(${m * 6}deg)`; //360 / 60 = 6
    ponto_s.style.transform = `rotate(${s * 6}deg)`; //360 / 60 = 6
  
  })
  