// function nhietDo() {
//     const x = document.getElementById("nd").value
//     if(x < 100){
//         nd.style.backgroundColor = "gray";
//     }else if(x < 500){
//         nd.style.backgroundColor = "green";
//     }else if(x < 1000){
//         nd.style.backgroundColor = "red";
//     }else { 
//         confirm('Lượng mưa quá nhiều!');
//     }        
// }
// function doAm() {
//     const x = document.getElementById("da").value
//     if(x <25){
//         da.style.backgroundColor = "gray";
//     }else if(x < 50){
//         da.style.backgroundColor = "green";
//     }else if(x < 100){
//         da.style.backgroundColor = "red";
//     }else { 
//         confirm('Nhiệt độ quá lớn!');
//     }        
// }
// function anhSang() {
//     const x = document.getElementById("as").value
//     if(x < 25 ){
//         as.style.backgroundColor = "gray";
//     }else if(x < 50){
//         as.style.backgroundColor = "green";
//     }else if(x < 100){
//         as.style.backgroundColor = "red";
//     }else { 
//         confirm('Độ ẩm quá cao!');
//     }        
// }
// function khiGas() {
//     const x = document.getElementById("kg").value
//     if(x <= 50){
//         kg.style.backgroundColor = "yellow";
//     }else { 
//         confirm('Lượng khí gas quá lớn!');
//     }        
// }


//biểu đồ

    const myNodeList = document.querySelectorAll('p');
    const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
    const das =[0,0,0,0,0,0,0,0,0,0,0,0];
    const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
setInterval(function(){
      let nd1 = Math.floor(Math.random()*100);
      let da1 = Math.floor(Math.random()*100);   
      let as1 = Math.floor(Math.random()*100);
      // console.log(nd1);
      // console.log(da1);
      // console.log(as1);
    function fsRandomNhietDo(){               
        if(nd1<20){
          document.getElementById('nhietDo').style.background='#f8897f';
        }else if(nd1<40){
          document.getElementById('nhietDo').style.background='#ff5040';
        }else if(nd1<60){
          document.getElementById('nhietDo').style.background='#dc3309';
        }else if(nd1<80){
          document.getElementById('nhietDo').style.background='#e73323';
        }else {
          document.getElementById('nhietDo').style.background='#701600';
        }
    }
                  
    function fsRandomDoAm(){
        if(nd1<20){
            document.getElementById('doAm').style.background = '#349cf7'
        } else if(nd1<40){
            document.getElementById('doAm').style.background = '#175eda'
        } else if(nd1<60){
            document.getElementById('doAm').style.background = '#1944f0'
        } else if(nd1<80){
            document.getElementById('doAm').style.background = '#0026be'
        } else if(nd1<100){
            document.getElementById('doAm').style.background = '#021e8f'
        }	
    }
             
    function fsRandomAnhSang(){
        if(nd1<20){
            document.getElementById('anhSang').style.background = '#f8f84f'
        } else if(nd1<40){
            document.getElementById('anhSang').style.background = '#ffff00'
        } else if(nd1<60){
            document.getElementById('anhSang').style.background = '#efe143'
        } else if(nd1<80){
            document.getElementById('anhSang').style.background = '#e5da0a'
        } else if(nd1<100){
            document.getElementById('anhSang').style.background = '#c99b04'
        }	
    }
    fsRandomNhietDo();
    fsRandomDoAm();
    fsRandomAnhSang();
  
    function bieuDo(){
        nds.push(nd1); nds.shift();
        das.push(da1); das.shift();
        ass.push(as1); ass.shift();
        console.log(nds);
        console.log(das);
        console.log(ass);
    }
    bieuDo();
    
    for(var i = 0; i < nds.length;i++){
        myNodeList[0].textContent = `${nd1} °C`;
        myNodeList[1].textContent = da1 + ' %';
        myNodeList[2].textContent = as1 +' lux';
    }; 
              
    Highcharts.chart('container', {

        chart: {
            type: 'spline'
        },

            title: {
                    text: 'Biểu đồ thể hiện nhiệt độ, độ ẩm và ánh sáng'
            },
                                
            yAxis: {
                    min:0,
                    max:100
            },
                                
            xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                    
            },
            
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },


            options: {
                    scales: {
                        y: {
                        beginAtZero: true,     
                        }
                    },
            },
        
            series: [{
                name: 'Nhiệt độ',
                data: nds,
                    marker: {
                    symbol: 'square'
                    },
            },  
            {
                name: 'Độ ẩm',
                data: das,
                marker: {
                symbol: 'diamond'
                },
            },
            {
                name: 'Ánh sáng',
                data: ass,
                marker: {
                symbol: 'triangle'
                },
                },],
                                                  
    });
},2000);


//ButtonOnOff                   
function switchOn(){
    if (
        confirm('Bạn chắc chắn muốn bật đèn?')){
        document.getElementById("led1").src = "ON.png"}
    else{
        document.getElementById("led1").src = "OFF.png"}
    }

    function switchOff(){
        if (
            confirm('Bạn chắc chắn muốn tắt đèn?')){
            document.getElementById("led1").src = "OFF.png"}
        else{
            document.getElementById("led1").src = "ON.png"}
        }
// function switchOff(){
//     document.getElementById("led1").src ='OFF.png'
//     confirm('Bạn chắc chắn muốn tắt đèn?')
//   }

function swi(){
    if (confirm('Bạn chắc chắn muốn thay đổi công tắc?')){
      
      document.querySelector('#anh2').src='ON.png'
      document.querySelector('input').checked=true
    }
    else{
      document.querySelector('input').checked=false
      document.querySelector('#anh2').src='OFF.png'
    }
   }