/* オプション機能 */
var dataLabelPlugin = {

afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(0, 0, 0)';

                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
};

/* 年代別集計 
  var nendai = new Chart(document.getElementById("nendai"), {
    type: 'horizontalBar',
    data: {
        labels: ["10歳未満","10代","20代","30代","40代","50代","60代","70代","80代","90代"],
      datasets: [
      {
          label: "男性",
          data: [53,49,442,567,639,612,451,372,194,56],
          backgroundColor: "rgb(0, 102, 204, 0.5)"
      },
      {
          label: "女性",
          data: [32,62,521,440,326,384,253,252,223,145],
          backgroundColor: "rgb(255, 102, 255, 0.5)"
      }
      
      ]
    },
    options: {legend: {display: false} }
  });*/



/* 軽症者の割合 */
  var ch = document.getElementById("chart");
  var myPieChart = new Chart(ch, {
    type: 'doughnut',
    data: {
        labels: ["軽症","重症","重篤"],
      datasets: [{
          backgroundColor: ["#00CCCC","#FFCC33","#FF9900",],
          data: [80, 13.8, 6.1]
      }]
    },
    plugins: [dataLabelPlugin]
  });

/* 初期症状 */
  var bChart = new Chart(document.getElementById("bchart"), {
    type: 'horizontalBar',
    data: {
        labels: ['発熱','せき','倦怠感',"たん","息切れ","筋肉痛・関節痛","のどの痛み","頭痛","悪寒","吐き気・嘔吐","鼻づまり","下痢","喀血","結膜炎"],
      datasets: [{
          data: [87.9, 67.7, 38.1, 33.4, 18.6, 14.8, 13.9, 13.6, 11.4, 5, 4.8, 3.8, 0.9, 0.8],
          backgroundColor: "#00CCCC"
      }]
    },
    options: {legend: {display: false} }
  });

/* 陽性患者等の推移
var yousei = new Chart(document.getElementById("yous"), {
    type: 'line',
    data: {
        labels: ["2.28","3.7","3.14","3.21","3.28","4.4","4.11","4.18","4.25", "5.1"],
      datasets: [
        {
          label: '陽性者',
          data: [210, 407, 714, 996, 1499, 2935, 6005, 9795, 12829, 14281],
          borderColor: "rgba(0,0,255,0.6)",
          backgroundColor: "rgba(0,0,0,0)"
        },
        {
          label: '無症状・軽症',
          data: [96, 219, 365, 510, 835, 1558, 3214, 5107, 6246, 6701],
          borderColor: "rgba(255,204,0,0.6)",
          backgroundColor: "rgba(0,0,0,0)"
        },
        {
          label: '退院',
          data: [41, 76, 144, 232, 404, 575, 762, 1069, 2662, 3981],
          borderColor: "rgba(102,204,0,0.6)",
          backgroundColor: "rgba(0,0,0,0)"
        },
        {
          label: '重症',
          data: [20, 28, 35, 55, 60, 69, 122, 211, 287, 328],
          borderColor: "rgba(102,51,204,0.6)",
          backgroundColor: "rgba(0,0,0,0)"
        },
        {
          label: '死亡',
          data: [4, 6, 21, 35, 49, 69, 94, 154, 334, 432],
          borderColor: "rgba(0,255,255,0.6)",
          backgroundColor: "rgba(0,0,0,0)"
        }
      ]
    },
    options: {
    		legend: {display: false}
    }
  }); */

/* PCR検査数の推移 
  var pcr = new Chart(document.getElementById("pcr"), {
    type: 'bar',
    data: {
        labels: ["2.28","3.7","3.14","3.21","3.28","4.4","4.11","4.18","4.25","5.1"],
      datasets: [
    		{
      		label: '陽性者数',
      		data: [210, 407, 714, 996, 1499, 2935, 6005, 9795, 12829, 14281],
      		backgroundColor: "rgba(130,201,169,0.7)"
    		},
    		{
      		label: '検査実施件数',
      		data: [2209, 8029, 12919, 18963, 28464, 42882, 74891, 111325, 147454, 174150],
      		backgroundColor: "rgba(219,39,91,0.7)"
    		}
      ]
    },
    options: {
    		legend: {display: false},
			scales: {
   				xAxes:[{
    		  		stacked: true
   				}],
   				yAxes: [{
    				stacked: true,
    				type: 'logarithmic'
   				}]
  			}
    }
}); */

