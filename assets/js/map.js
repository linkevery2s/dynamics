var map;var zoom;var url;var todou; var ido; var keido;
var bed = new Array(47); var hos_bed = new Array(47); var yado_bed = new Array(47); var syoki = new Array(47); var x = new Array(47); var y = new Array(47); var mitudo = new Array(47); var mitudo_total = new Array(47);  var density = new Array(47);
var multi = new Array(47); var lastupdate;var multi_n = new Array(47); online_pref = new Array(47);
var yousei = new Array(47); var taiin = new Array(47); var ncurrent = new Array(47); death = new Array(47);
var soku_yousei = new Array(47); var soku_taiin = new Array(47); var soku_ncurrent = new Array(47); soku_death = new Array(47); var soku_update = new Array(47); var soku_name = new Array(47); var ji_update; var kensa = new Array(47); var h = new Array(47);
var j; var sokuho; var zentai_youso; var heavy = new Array(47);

/* 病床数 */
/* 北海道 */ hos_bed[0] = 1811;yado_bed[0]=1170;
/* 青森県 */ hos_bed[1] = 187;yado_bed[1]=130;
/* 岩手県 */ hos_bed[2] = 374;yado_bed[2]=381;
/* 宮城県 */ hos_bed[3] = 345;yado_bed[3]=300;
/* 秋田県 */ hos_bed[4] = 222;yado_bed[4]=16;
/* 山形県 */ hos_bed[5] = 216;yado_bed[5]=188;
/* 福島県 */ hos_bed[6] = 469;yado_bed[6]=160;
/* 茨城県 */ hos_bed[7] = 546;yado_bed[7]=324;
/* 栃木県 */ hos_bed[8] = 313;yado_bed[8]=284;
/* 群馬県 */ hos_bed[9] = 305;yado_bed[9]=1300;
/* 埼玉県 */ hos_bed[10] = 1201;yado_bed[10]=1225;
/* 千葉県 */ hos_bed[11] = 1147;yado_bed[11]=710;
/* 東京都 */ hos_bed[12] = 4000;yado_bed[12]=1860;
/* 神奈川 */ hos_bed[13] = 1939;yado_bed[13]=811;
/* 新潟県 */ hos_bed[14] = 456;yado_bed[14]=176;
/* 富山県 */ hos_bed[15] = 500;yado_bed[15]=125;
/* 石川県 */ hos_bed[16] = 258;yado_bed[16]=340;
/* 福井県 */ hos_bed[17] = 215;yado_bed[17]=75;
/* 山梨県 */ hos_bed[18] = 285;yado_bed[18]=100;
/* 長野県 */ hos_bed[19] = 350;yado_bed[19]=250;
/* 岐阜県 */ hos_bed[20] = 625;yado_bed[20]=466;
/* 静岡県 */ hos_bed[21] = 384;yado_bed[21]=379;
/* 愛知県 */ hos_bed[22] = 791;yado_bed[22]=1300;
/* 三重県 */ hos_bed[23] = 363;yado_bed[23]=100;
/* 滋賀県 */ hos_bed[24] = 429;yado_bed[24]=260;
/* 京都府 */ hos_bed[25] = 530;yado_bed[25]=338;
/* 大阪府 */ hos_bed[26] = 1337;yado_bed[26]=872;
/* 兵庫県 */ hos_bed[27] = 663;yado_bed[27]=698;
/* 奈良県 */ hos_bed[28] = 467;yado_bed[28]=108;
/* 和歌山 */ hos_bed[29] = 400;yado_bed[29]=137;
/* 鳥取県 */ hos_bed[30] = 313;yado_bed[30]=340;
/* 島根県 */ hos_bed[31] = 253;yado_bed[31]=98;
/* 岡山県 */ hos_bed[32] = 257;yado_bed[32]=207;
/* 広島県 */ hos_bed[33] = 553;yado_bed[33]=854;
/* 山口県 */ hos_bed[34] = 423;yado_bed[34]=834;
/* 徳島県 */ hos_bed[35] = 200;yado_bed[35]=150;
/* 香川県 */ hos_bed[36] = 185;yado_bed[36]=101;
/* 愛媛県 */ hos_bed[37] = 229;yado_bed[37]=117;
/* 高知県 */ hos_bed[38] = 192;yado_bed[38]=316;
/* 福岡県 */ hos_bed[39] = 490;yado_bed[39]=1057;
/* 佐賀県 */ hos_bed[40] = 274;yado_bed[40]=253;
/* 長崎県 */ hos_bed[41] = 395;yado_bed[41]=224;
/* 熊本県 */ hos_bed[42] = 400;yado_bed[42]=1430;
/* 大分県 */ hos_bed[43] = 330;yado_bed[43]=700;
/* 宮崎県 */ hos_bed[44] = 246;yado_bed[44]=250;
/* 鹿児島 */ hos_bed[45] = 253;yado_bed[45]=370;
/* 沖縄県 */ hos_bed[46] = 430;yado_bed[46]=340;

for ( var k = 0; k < 47; k++){

	bed[k] = hos_bed[k] + yado_bed[k];

}

function get_kansen(){

	/* 速報 */
	var xhr2 = new XMLHttpRequest();
	var url2 = "https://www.stopcovid19.jp/data/covid19japan-fast.json";
	xhr2.open('GET', url2);
	xhr2.send(null);
	xhr2.onreadystatechange = function(){
		if (xhr2.readyState === 4 && xhr2.status === 200){
			var json_data2 = eval( '('+xhr2.responseText +')');

		}else{}
			/* 要素数カウント */
			sokuho = json_data2.length;
			
			for ( j = 0;  j < sokuho;  j++){
				soku_name[j] = json_data2[j].name;
				soku_yousei[j] = json_data2[j].npatients;
				soku_taiin[j] = json_data2[j].nexits;
				soku_ncurrent[j] = json_data2[j].ncurrentpatients;
				soku_death[j] = json_data2[j].ndeaths;
				soku_update[j] = json_data2[j].lastUpdate.split("-");
			}

	/* 厚労省データ */
	var xhr = new XMLHttpRequest();
	var url = "https://www.stopcovid19.jp/data/covid19japan.json";
	xhr.open('GET', url);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			var json_data = eval( '('+xhr.responseText +')');
			
			syoki[0] = document.getElementById('ja_hokkaido');
			syoki[1] = document.getElementById('ja_aomori');
			syoki[2] = document.getElementById('ja_iwate');
			syoki[3] = document.getElementById('ja_miyagi');
			syoki[4] = document.getElementById('ja_akita');
			syoki[5] = document.getElementById('ja_yamagata');
			syoki[6] = document.getElementById('ja_fukushima');
			syoki[7] = document.getElementById('ja_ibaraki');
			syoki[8] = document.getElementById('ja_tochigi');
			syoki[9] = document.getElementById('ja_gunma');
			syoki[10] = document.getElementById('ja_saitama');
			syoki[11] = document.getElementById('ja_tiba');
			syoki[12] = document.getElementById('ja_tokyo');
			syoki[13] = document.getElementById('ja_kanagawa');
			syoki[14] = document.getElementById('ja_niigata');
			syoki[15] = document.getElementById('ja_toyama');
			syoki[16] = document.getElementById('ja_ishikawa');
			syoki[17] = document.getElementById('ja_fukui');
			syoki[18] = document.getElementById('ja_yamanashi');
			syoki[19] = document.getElementById('ja_nagano');
			syoki[20] = document.getElementById('ja_gifu');
			syoki[21] = document.getElementById('ja_shizuoka');
			syoki[22] = document.getElementById('ja_aichi');
			syoki[23] = document.getElementById('ja_mie');
			syoki[24] = document.getElementById('ja_shiga');
			syoki[25] = document.getElementById('ja_kyoto');
			syoki[26] = document.getElementById('ja_osaka');
			syoki[27] = document.getElementById('ja_hyogo');
			syoki[28] = document.getElementById("ja_nara");
			syoki[29] = document.getElementById("ja_wakayama");
			syoki[30] = document.getElementById("ja_tottori");
			syoki[31] = document.getElementById("ja_shimane");
			syoki[32] = document.getElementById("ja_okayama");
			syoki[33] = document.getElementById("ja_hiroshima");
			syoki[34] = document.getElementById("ja_yamaguchi");
			syoki[35] = document.getElementById("ja_tokushima");
			syoki[36] = document.getElementById("ja_kagawa");
			syoki[37] = document.getElementById("ja_ehime");
			syoki[38] = document.getElementById("ja_kochi");
			syoki[39] = document.getElementById("ja_fukuoka");
			syoki[40] = document.getElementById("ja_saga");
			syoki[41] = document.getElementById("ja_nagasaki");
			syoki[42] = document.getElementById("ja_kumamoto");
			syoki[43] = document.getElementById("ja_oita");
			syoki[44] = document.getElementById("ja_miyazaki");
			syoki[45] = document.getElementById("ja_kagoshima");
			syoki[46] = document.getElementById("ja_okinawa");

			/* 厚労省データ格納 */
			for (var i = 0;  i < 47;  i++){
				kensa[i] = json_data.area[i].ninspections;
				yousei[i] = json_data.area[i].npatients;
				taiin[i] = json_data.area[i].nexits;
				heavy[i] = json_data.area[i].nheavycurrentpatients;
				ncurrent[i] = json_data.area[i].ncurrentpatients;
				death[i] = yousei[i] - taiin[i] - ncurrent[i];
			}

			/* 速報上書き */
			for ( j = 0 ; j < sokuho ; j++){
			/* 北海道 */
			if( soku_name[j] == "Hokkaido" ){
			yousei[0] = soku_yousei[j];
			taiin[0] = soku_taiin[j];
			ncurrent[0] = soku_ncurrent[j];
			death[0] = soku_death[j];
			ji_update = "北海道：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 宮城県 */
			else if( soku_name[j] == "Miyagi" ){
			yousei[3] = soku_yousei[j];
			taiin[3] = soku_taiin[j];
			ncurrent[3] = soku_ncurrent[j];
			death[3] = soku_death[j];
			ji_update += "<br>宮城県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			} 

			/* 福島県 */
			else if( soku_name[j] == "Fukushima" ){
			yousei[6] = soku_yousei[j];
			taiin[6] = soku_taiin[j];
			ncurrent[6] = soku_ncurrent[j];
			death[6] = soku_death[j];
			ji_update += "<br>福島県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			} 

			/* 群馬県 */
			else if( soku_name[j] == "Gunma" ){
			yousei[9] = soku_yousei[j];
			taiin[9] = soku_taiin[j];
			ncurrent[9] = soku_ncurrent[j];
			death[9] = soku_death[j];
			ji_update += "<br>群馬県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2]; 
			}
			
			/* 埼玉県 */
			else if( soku_name[j] == "Saitama" ){
			yousei[10] = soku_yousei[j];
			taiin[10] = soku_taiin[j];
			ncurrent[10] = soku_ncurrent[j];
			death[10] = soku_death[j];
			ji_update += "<br>埼玉県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}

			/* 千葉県 */
			else if( soku_name[j] == "Chiba" ){
			yousei[11] = soku_yousei[j];
			taiin[11] = soku_taiin[j];
			ncurrent[11] = soku_ncurrent[j];
			death[11] = soku_death[j];
			ji_update += "<br>千葉県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}

			/* 東京都 */
			else if( soku_name[j] == "Tokyo" ){
			yousei[12] = soku_yousei[j];
			taiin[12] = soku_taiin[j];
			ncurrent[12] = soku_ncurrent[j];
			death[12] = soku_death[j];
			ji_update += "<br>東京都：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 富山県 */
			else if( soku_name[j] == "Toyama" ){
			yousei[15] = soku_yousei[j];
			taiin[15] = soku_taiin[j];
			ncurrent[15] = soku_ncurrent[j];
			death[15] = soku_death[j];
			ji_update += "<br>富山県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 福井県 */
			else if( soku_name[j] == "Fukui" ){
			yousei[17] = soku_yousei[j];
			taiin[17] = soku_taiin[j];
			ncurrent[17] = soku_ncurrent[j];
			death[17] = soku_death[j];
			ji_update += "<br>福井県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 長野県 */
			else if( soku_name[j] == "Nagano" ){
			yousei[19] = soku_yousei[j];
			taiin[19] = soku_taiin[j];
			ncurrent[19] = soku_ncurrent[j];
			death[19] = soku_death[j];
			ji_update += "<br>長野県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 岐阜県 */
			else if( soku_name[j] == "Gifu" ){
			yousei[20] = soku_yousei[j];
			taiin[20] = soku_taiin[j];
			ncurrent[20] = soku_ncurrent[j];
			death[20] = soku_death[j];
			ji_update += "<br>岐阜県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 静岡県 */
			else if( soku_name[j] == "Shizuoka" ){
			yousei[21] = soku_yousei[j];
			taiin[21] = soku_taiin[j];
			ncurrent[21] = soku_ncurrent[j];
			death[21] = soku_death[j];
			ji_update += "<br>静岡県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 大阪府 */
			else if( soku_name[j] == "Osaka" ){
			yousei[26] = soku_yousei[j];
			taiin[26] = soku_taiin[j];
			ncurrent[26] = soku_ncurrent[j];
			death[26] = soku_death[j];
			ji_update += "<br>大阪府：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 兵庫県 */
			else if( soku_name[j] == "Hyogo" ){
			yousei[27] = soku_yousei[j];
			taiin[27] = soku_taiin[j];
			ncurrent[27] = soku_ncurrent[j];
			death[27] = soku_death[j];
			ji_update += "<br>兵庫県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 奈良県 */
			else if( soku_name[j] == "Nara" ){
			yousei[28] = soku_yousei[j];
			taiin[28] = soku_taiin[j];
			death[28] = soku_death[j];
			ncurrent[28] = soku_yousei[j] - soku_taiin[j] - soku_death[j]; /* 宿泊療養者がいるため、数合わせ */
			ji_update += "<br>奈良県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 和歌山県 */
			else if( soku_name[j] == "Wakayama" ){
			yousei[29] = soku_yousei[j];
			taiin[29] = soku_taiin[j];
			ncurrent[29] = soku_ncurrent[j];
			death[29] = soku_death[j];
			ji_update += "<br>和歌山県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 山口県 */
			else if( soku_name[j] == "Yamaguchi" ){
			yousei[34] = soku_yousei[j];
			taiin[34] = soku_taiin[j];
			ncurrent[34] = soku_ncurrent[j];
			death[34] = soku_death[j];
			ji_update += "<br>山口県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			

			/* 愛媛県 */
			else if( soku_name[j] == "Ehime" ){
			yousei[37] = soku_yousei[j];
			taiin[37] = soku_taiin[j];
			ncurrent[37] = soku_ncurrent[j];
			death[37] = soku_death[j];
			ji_update += "<br>愛媛県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}

			/* 福岡県 */
			else if( soku_name[j] == "Fukuoka" ){
			yousei[39] = soku_yousei[j];
			taiin[39] = soku_taiin[j];
			ncurrent[39] = soku_ncurrent[j];
			death[39] = soku_death[j];
			ji_update += "<br>福岡県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			
			/* 熊本県 */
			else if( soku_name[j] == "Kumamoto" ){
			yousei[42] = soku_yousei[j];
			taiin[42] = soku_taiin[j];
			ncurrent[42] = soku_ncurrent[j];
			death[42] = soku_death[j];
			ji_update += "<br>熊本県：" + soku_update[j][0] +"."+soku_update[j][1]+"."+soku_update[j][2];
			}
			else{}
			
			}/*j末端*/
			
			/* divに掲載 */
			for (var i = 0;  i < 47;  i++){
			syoki[i].innerHTML = json_data.area[i].name_jp + "<br>検査数：" + kensa[i] + "<br>陽性者：" + yousei[i] + "<br>退院者：" + taiin[i] + "<br>現患者：" + ncurrent[i] + "<br>死亡者：" + death[i];
			}

			/* 全体 */
			var total_yousei = yousei[0];
			var total_taiin = taiin[0];
			var total_ncurrent = ncurrent[0];
			var total_death = death[0];
			
			for (var i = 1;  i < 47;  i++){
				total_yousei += yousei[i];
				total_taiin += taiin[i];
				total_ncurrent += ncurrent[i];
					if( death[i] =="-"){
					}else{
				total_death += death[i];}
			}

			var txt = "日本全国<br>検査数：" + json_data.ninspections;
			txt += "<br>陽性者：" + total_yousei;
			txt += "<br>退院者：" + total_taiin;
			txt += "<br>現患者：" + total_ncurrent;
			txt += "<br>死亡者：" + total_death;
			document.getElementById('ja_ka').innerHTML = txt;
			
			x[0] = document.getElementById('2ja_hokkaido');
			x[1] = document.getElementById('2ja_aomori');
			x[2] = document.getElementById('2ja_iwate');
			x[3] = document.getElementById('2ja_miyagi');
			x[4] = document.getElementById('2ja_akita');
			x[5] = document.getElementById('2ja_yamagata');
			x[6] = document.getElementById('2ja_fukushima');
			x[7] = document.getElementById('2ja_ibaraki');
			x[8] = document.getElementById('2ja_tochigi');
			x[9] = document.getElementById('2ja_gunma');
			x[10] = document.getElementById('2ja_saitama');
			x[11] = document.getElementById('2ja_tiba');
			x[12] = document.getElementById('2ja_tokyo');
			x[13] = document.getElementById('2ja_kanagawa');
			x[14] = document.getElementById('2ja_niigata');
			x[15] = document.getElementById('2ja_toyama');
			x[16] = document.getElementById('2ja_ishikawa');
			x[17] = document.getElementById('2ja_fukui');
			x[18] = document.getElementById('2ja_yamanashi');
			x[19] = document.getElementById('2ja_nagano');
			x[20] = document.getElementById('2ja_gifu');
			x[21] = document.getElementById('2ja_shizuoka');
			x[22] = document.getElementById('2ja_aichi');
			x[23] = document.getElementById('2ja_mie');
			x[24] = document.getElementById('2ja_shiga');
			x[25] = document.getElementById('2ja_kyoto');
			x[26] = document.getElementById('2ja_osaka');
			x[27] = document.getElementById('2ja_hyogo');
			x[28] = document.getElementById("2ja_nara");
			x[29] = document.getElementById("2ja_wakayama");
			x[30] = document.getElementById("2ja_tottori");
			x[31] = document.getElementById("2ja_shimane");
			x[32] = document.getElementById("2ja_okayama");
			x[33] = document.getElementById("2ja_hiroshima");
			x[34] = document.getElementById("2ja_yamaguchi");
			x[35] = document.getElementById("2ja_tokushima");
			x[36] = document.getElementById("2ja_kagawa");
			x[37] = document.getElementById("2ja_ehime");
			x[38] = document.getElementById("2ja_kochi");
			x[39] = document.getElementById("2ja_fukuoka");
			x[40] = document.getElementById("2ja_saga");
			x[41] = document.getElementById("2ja_nagasaki");
			x[42] = document.getElementById("2ja_kumamoto");
			x[43] = document.getElementById("2ja_oita");
			x[44] = document.getElementById("2ja_miyazaki");
			x[45] = document.getElementById("2ja_kagoshima");
			x[46] = document.getElementById("2ja_okinawa");
			
			/* 全国を非表示 */
			document.getElementById('2ja_ka').style.backgroundColor = '#FFFFFF';

			/* divに掲載 */
			for (var i = 0;  i < 47;  i++){
			x[i].innerHTML = json_data.area[i].name_jp +"<br><center>現患者数／病床数<br>" + ncurrent[i] + "／" + bed[i] + "</center>重症者数：" + heavy[i] +  "<br>医療病床：" + hos_bed[i] + "<br>宿泊施設：" + yado_bed[i];
			}

			/* 色分け判定 */
			for(var i = 0;  i < 47;  i++){
				if( ncurrent[i] > bed[i]){
					x[i].style.backgroundColor = '#FF0000';
				}
				else if( ncurrent[i] > bed[i]*0.5){
					x[i].style.backgroundColor = '#FF9900';
				}
				else if( ncurrent[i] > bed[i]*0.2){
					x[i].style.backgroundColor = '#FFFF00';
					x[i].style.color = "#000000";
				}
				else if( ncurrent[i] == "0"){
					x[i].style.backgroundColor = '#0000FF';
				}
				else{
					x[i].style.backgroundColor = '#CCFF00';
					x[i].style.color = "#000000";
				}
			}

			/* density */
			
density[0]="5250000";
density[1]="1246000";
density[2]="1227000";
density[3]="2306000";
density[4]="966000";
density[5]="1078000";
density[6]="1846000";
density[7]="2860000";
density[8]="1934000";
density[9]="1942000";
density[10]="7350000";
density[11]="6259000";
density[12]="13921000";
density[13]="9198000";
density[14]="2223000";
density[15]="1044000";
density[16]="1138000";
density[17]="768000";
density[18]="811000";
density[19]="2049000";
density[20]="1987000";
density[21]="3644000";
density[22]="7552000";
density[23]="1781000";
density[24]="1414000";
density[25]="2583000";
density[26]="8809000";
density[27]="5466000";
density[28]="1330000";
density[29]="925000";
density[30]="556000";
density[31]="674000";
density[32]="1890000";
density[33]="2804000";
density[34]="1358000";
density[35]="728000";
density[36]="956000";
density[37]="1339000";
density[38]="698000";
density[39]="5104000";
density[40]="815000";
density[41]="1327000";
density[42]="1748000";
density[43]="1135000";
density[44]="1073000";
density[45]="1602000";
density[46]="1453000";

			y[0] = document.getElementById('3ja_hokkaido');
			y[1] = document.getElementById('3ja_aomori');
			y[2] = document.getElementById('3ja_iwate');
			y[3] = document.getElementById('3ja_miyagi');
			y[4] = document.getElementById('3ja_akita');
			y[5] = document.getElementById('3ja_yamagata');
			y[6] = document.getElementById('3ja_fukushima');
			y[7] = document.getElementById('3ja_ibaraki');
			y[8] = document.getElementById('3ja_tochigi');
			y[9] = document.getElementById('3ja_gunma');
			y[10] = document.getElementById('3ja_saitama');
			y[11] = document.getElementById('3ja_tiba');
			y[12] = document.getElementById('3ja_tokyo');
			y[13] = document.getElementById('3ja_kanagawa');
			y[14] = document.getElementById('3ja_niigata');
			y[15] = document.getElementById('3ja_toyama');
			y[16] = document.getElementById('3ja_ishikawa');
			y[17] = document.getElementById('3ja_fukui');
			y[18] = document.getElementById('3ja_yamanashi');
			y[19] = document.getElementById('3ja_nagano');
			y[20] = document.getElementById('3ja_gifu');
			y[21] = document.getElementById('3ja_shizuoka');
			y[22] = document.getElementById('3ja_aichi');
			y[23] = document.getElementById('3ja_mie');
			y[24] = document.getElementById('3ja_shiga');
			y[25] = document.getElementById('3ja_kyoto');
			y[26] = document.getElementById('3ja_osaka');
			y[27] = document.getElementById('3ja_hyogo');
			y[28] = document.getElementById("3ja_nara");
			y[29] = document.getElementById("3ja_wakayama");
			y[30] = document.getElementById("3ja_tottori");
			y[31] = document.getElementById("3ja_shimane");
			y[32] = document.getElementById("3ja_okayama");
			y[33] = document.getElementById("3ja_hiroshima");
			y[34] = document.getElementById("3ja_yamaguchi");
			y[35] = document.getElementById("3ja_tokushima");
			y[36] = document.getElementById("3ja_kagawa");
			y[37] = document.getElementById("3ja_ehime");
			y[38] = document.getElementById("3ja_kochi");
			y[39] = document.getElementById("3ja_fukuoka");
			y[40] = document.getElementById("3ja_saga");
			y[41] = document.getElementById("3ja_nagasaki");
			y[42] = document.getElementById("3ja_kumamoto");
			y[43] = document.getElementById("3ja_oita");
			y[44] = document.getElementById("3ja_miyazaki");
			y[45] = document.getElementById("3ja_kagoshima");
			y[46] = document.getElementById("3ja_okinawa");

			/* divに掲載 */
			for (var i = 0; i < 47; i++){
				mitudo[i] = Math.round(ncurrent[i] / density[i] * 100000 * 10)/10;
				y[i].innerHTML = json_data.area[i].name_jp + "<br><center>" + mitudo[i] +"</center>";
			}
			
			/* 色分け判定 */
			document.getElementById('3ja_ka').style.backgroundColor = '#FFFFFF';
			for(var i = 0;  i < 47;  i++){
			
				if(mitudo[i] > 10){
					y[i].style.backgroundColor = '#FF0000';
				}
				else if(mitudo[i] > 7){
					y[i].style.backgroundColor = '#FF6600';
				}
				else if(mitudo[i] > 4){
					y[i].style.backgroundColor = '#FFFF00';
					y[i].style.color = "#000000";
				}
				else if(mitudo[i] > 1){
					y[i].style.backgroundColor = '#CCFF00';
					y[i].style.color = "#000000";
				}
				else{
					y[i].style.backgroundColor = '#0000FF';
				}
			
			}

			/* 地域分析用 */
			for (var i = 0; i < 47; i++){
				mitudo_total[i] = Math.round(yousei[i] / density[i] * 100000 * 10)/10;
			}

			/* 陽性率 */
			h[0] = document.getElementById('yous_hokkaido');
			h[1] = document.getElementById('yous_aomori');
			h[2] = document.getElementById('yous_iwate');
			h[3] = document.getElementById('yous_miyagi');
			h[4] = document.getElementById('yous_akita');
			h[5] = document.getElementById('yous_yamagata');
			h[6] = document.getElementById('yous_fukushima');
			h[7] = document.getElementById('yous_ibaraki');
			h[8] = document.getElementById('yous_tochigi');
			h[9] = document.getElementById('yous_gunma');
			h[10] = document.getElementById('yous_saitama');
			h[11] = document.getElementById('yous_tiba');
			h[12] = document.getElementById('yous_tokyo');
			h[13] = document.getElementById('yous_kanagawa');
			h[14] = document.getElementById('yous_niigata');
			h[15] = document.getElementById('yous_toyama');
			h[16] = document.getElementById('yous_ishikawa');
			h[17] = document.getElementById('yous_fukui');
			h[18] = document.getElementById('yous_yamanashi');
			h[19] = document.getElementById('yous_nagano');
			h[20] = document.getElementById('yous_gifu');
			h[21] = document.getElementById('yous_shizuoka');
			h[22] = document.getElementById('yous_aichi');
			h[23] = document.getElementById('yous_mie');
			h[24] = document.getElementById('yous_shiga');
			h[25] = document.getElementById('yous_kyoto');
			h[26] = document.getElementById('yous_osaka');
			h[27] = document.getElementById('yous_hyogo');
			h[28] = document.getElementById("yous_nara");
			h[29] = document.getElementById("yous_wakayama");
			h[30] = document.getElementById("yous_tottori");
			h[31] = document.getElementById("yous_shimane");
			h[32] = document.getElementById("yous_okayama");
			h[33] = document.getElementById("yous_hiroshima");
			h[34] = document.getElementById("yous_yamaguchi");
			h[35] = document.getElementById("yous_tokushima");
			h[36] = document.getElementById("yous_kagawa");
			h[37] = document.getElementById("yous_ehime");
			h[38] = document.getElementById("yous_kochi");
			h[39] = document.getElementById("yous_fukuoka");
			h[40] = document.getElementById("yous_saga");
			h[41] = document.getElementById("yous_nagasaki");
			h[42] = document.getElementById("yous_kumamoto");
			h[43] = document.getElementById("yous_oita");
			h[44] = document.getElementById("yous_miyazaki");
			h[45] = document.getElementById("yous_kagoshima");
			h[46] = document.getElementById("yous_okinawa");

	/* 陽性率　厚労省 */
	var xhr3 = new XMLHttpRequest();
	var url3 = "https://www.stopcovid19.jp/data/covid19japan-all.json";
	xhr3.open('GET', url3);
	xhr3.send(null);
	xhr3.onreadystatechange = function(){
		if (xhr3.readyState === 4 && xhr3.status === 200){
			var json_data3 = eval( '('+xhr3.responseText +')');
			/* 要素数カウント */
			zentai_youso = json_data3.length;

			/* 日本全国非表示 */
			document.getElementById('yous_ka').style.backgroundColor = '#FFFFFF';

				/* 都道府県 */
				for( i = 0; i < 47; i++){
					//var total_y = json_data3[zentai_youso - 1].area[i].npatients / json_data3[zentai_youso - 1].area[i].ninspections * 100;
					//total_y = Math.round(total_y * 10)/10;

					if( json_data3[zentai_youso - 1].area[i].ninspections - json_data3[zentai_youso - 7].area[i].ninspections == 0){
						y_7 = "-";
					}else{
					var y_7 = (json_data3[zentai_youso - 1].area[i].npatients - json_data3[zentai_youso - 7].area[i].npatients ) / (json_data3[zentai_youso - 1].area[i].ninspections - json_data3[zentai_youso - 7].area[i].ninspections) * 100;
					y_7 = Math.round(y_7 * 10)/10;
					}
					
					/* 検査数の変動がありマイナスになったら */
					if ( y_7 < 0){
						y_7 = "-";
					}else{}
					
					if ( json_data3[zentai_youso - 1].area[i].ninspections - json_data3[zentai_youso - 2].area[i].ninspections == 0 ){
						y_2 = "-";
					}else{
					var y_2 = (json_data3[zentai_youso - 1].area[i].npatients - json_data3[zentai_youso - 2].area[i].npatients ) / (json_data3[zentai_youso - 1].area[i].ninspections - json_data3[zentai_youso - 2].area[i].ninspections) * 100;
					y_2 = Math.round(y_2 * 10)/10;
					}
					
					/* 検査数の変動がありマイナスになったら */
					if ( y_2 < 0){
						y_2 = "-";
					}else{}

					/* 陽性率が7％以上 */
					if ( y_7 > 7 && y_2 > 7){ /* 両方 */
						h[i].style.backgroundColor = '#FF0000';
					}else if( y_7 > 7 || y_2 > 7){ /* 片方 */
						h[i].style.backgroundColor = '#FFFF00';
						h[i].style.color = "#000000";
					}else{}

					h[i].innerHTML = "<center>陽　性　率</center>";
					h[i].innerHTML += "７日間：" + y_7;
					h[i].innerHTML += "<br>直　近：" + y_2;
				}
		}

    	};/* xhr3末端 */

      var day1 = json_data.lastUpdate.split("-");
      document.getElementById('day').innerHTML = "厚生労働省：" + day1[0] + "." + day1[1] + "." + day1[2];
      
      document.getElementById('ji_day').innerHTML = ji_update;
      
    }

  };/* xhrの末端 */

	};/* xhr2の末端 */

}

function calculate(){
	var select=document.getElementById("demo-category").value;

	if( select == ""){
		alert("都道府県を選択してください。");
		exit;
	}else{}
	
	var input_jinko = document.getElementById("jinko").value;
	
	if( input_jinko == ""){
		alert("市町村の人口を入力してください。");
		exit;
	}else{}
	
	var answer1 = mitudo[select] * input_jinko / 10;
	
	var answer2 = mitudo_total[select] * input_jinko / 10;
	
	answer1 = Math.round(answer1 * 10)/10;
	
	answer2 = Math.round(answer2 * 10)/10;
	
	var vari = document.getElementsByName("vari");
	
	if( vari[0].checked ){

		document.getElementById("answer").innerHTML = answer2;
	}else{

		document.getElementById("answer").innerHTML = answer1;
	}
	
}

function func1(){
	$("#zentai").show();
	$("#beds").hide();
	$("#density").hide();
}

function func2(){
	$("#zentai").hide();
	$("#beds").show();
	$("#density").hide();
}

function func3(){
	$("#zentai").hide();
	$("#beds").hide();
	$("#density").show();
}

function online(x){

			online_pref[0] = 'hokkaido';
			online_pref[1] = 'aomori';
			online_pref[2] = 'iwate';
			online_pref[3] = 'miyagi';
			online_pref[4] = 'akita';
			online_pref[5] = 'yamagata';
			online_pref[6] = 'fukushima';
			online_pref[7] = 'ibaraki';
			online_pref[8] = 'tochigi';
			online_pref[9] = 'gunma';
			online_pref[10] = 'saitama';
			online_pref[11] = 'tiba';
			online_pref[12] = 'tokyo';
			online_pref[13] = 'kanagawa';
			online_pref[14] = 'nigata';
			online_pref[15] = 'toyama';
			online_pref[16] = 'ishikawa';
			online_pref[17] = 'fukui';
			online_pref[18] = 'yamanashi';
			online_pref[19] = 'nagano';
			online_pref[20] = 'gifu';
			online_pref[21] = 'shizuoka';
			online_pref[22] = 'aichi';
			online_pref[23] = 'mie';
			online_pref[24] = 'shiga';
			online_pref[25] = 'kyoto';
			online_pref[26] = 'osaka';
			online_pref[27] = 'hyogo';
			online_pref[28] = 'nara';
			online_pref[29] = 'wakayama';
			online_pref[30] = 'tottori';
			online_pref[31] = 'shimane';
			online_pref[32] = 'okayama';
			online_pref[33] = 'hiroshima';
			online_pref[34] = 'yamaguchi';
			online_pref[35] = 'tokushima';
			online_pref[36] = 'kagawa';
			online_pref[37] = 'ehime';
			online_pref[38] = 'kochi';
			online_pref[39] = 'fukuoka';
			online_pref[40] = 'saga';
			online_pref[41] = 'nagasaki';
			online_pref[42] = 'kumamoto';
			online_pref[43] = 'oita';
			online_pref[44] = 'miyazaki';
			online_pref[45] = 'kagoshima';
			online_pref[46] = 'okinawa';

document.getElementById('onlinemap').innerHTML = "<h3 class='ti'>地図から探す</h3><iframe src = 'onlinemap/" + online_pref[x -1] + ".html' width='100%' height='450px'>";

document.getElementById('onlinelist').innerHTML = "<br><h3 class='ti'>リストから探す</h3><iframe src = 'onlinelist/" + online_pref[x -1] + ".html' width='100%' height='450px'>";

}

function ji_day(){

	$("#ji_day").slideToggle(500);

}