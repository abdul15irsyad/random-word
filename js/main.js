//ini adalah main js
$(document).ready(function(){
	var jumlah_huruf=3;
	var input_1,input_2,input_3,input_4,input_5,input_6;
	var kata="";
	var array_huruf=[];

	//button jumlah huruf 3
	$("#btn_jumlah_3").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".col_4.hide").hide();
		$(".col_5.hide").hide();
		$(".col_6.hide").hide();
		$(".col_4.hide > .form-control").val('');
		$(".col_5.hide > .form-control").val('');
		$(".col_6.hide > .form-control").val('');
		jumlah_huruf=3;
		if (tigaHurufAda()){
			$("#btn_generate").removeAttr("disabled");
		}
	});

	//button jumlah huruf 4
	$("#btn_jumlah_4").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".col_4").show();
		$(".col_5.hide").hide();
		$(".col_6.hide").hide();
		$(".col_5.hide > .form-control").val('');
		$(".col_6.hide > .form-control").val('');
		jumlah_huruf=4;
		if (empatHurufAda()){
			$("#btn_generate").removeAttr("disabled");
		}else{
			$("#btn_generate").attr("disabled","disabled");
		}
	});

	//button jumlah huruf 5
	$("#btn_jumlah_5").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".col_4").show();
		$(".col_5").show();
		$(".col_6.hide").hide();
		$(".col_6.hide > .form-control").val('');
		jumlah_huruf=5;
		if (limaHurufAda()){
			$("#btn_generate").removeAttr("disabled");
		}else{
			$("#btn_generate").attr("disabled","disabled");
		}
	});

	//button jumlah huruf 6
	$("#btn_jumlah_6").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".hide").show();
		jumlah_huruf=6;
		if (enamHurufAda()){
			$("#btn_generate").removeAttr("disabled");
		}else{
			$("#btn_generate").attr("disabled","disabled");
		}
	});

	$("input.form-control").keyup(function(){
		if (tigaHurufAda()) {
			if(jumlah_huruf==3){
				$("#btn_generate").removeAttr("disabled");
			}else if(jumlah_huruf==4&&empatHurufAda()){
				$("#btn_generate").removeAttr("disabled");
			}else if(jumlah_huruf==5&&limaHurufAda()){
				$("#btn_generate").removeAttr("disabled");
			}
			else if(jumlah_huruf==6&&enamHurufAda()){
				$("#btn_generate").removeAttr("disabled");
			}
		}
	});

	//button generate
	$("#btn_generate").click(function(){
		$("table").show();
		$("tbody").empty();
		input_1 = $("input[name='input_1']").val();
		input_2 = $("input[name='input_2']").val();
		input_3 = $("input[name='input_3']").val();

		//memasukkan inputan ke dalam array
		array_huruf=[];
		array_huruf.push(input_1,input_2,input_3);
		array_huruf.sort();
		
		if (jumlah_huruf>=4) {
			input_4 = $("input[name='input_4']").val();
			array_huruf.push(input_4);
			if(jumlah_huruf>=5){
				input_5 = $("input[name='input_5']").val();
				array_huruf.push(input_5);
				if(jumlah_huruf>=6) {
					input_6 = $("input[name='input_6']").val();
					array_huruf.push(input_6);
				}
			}
		}

		//kombinasi 3 huruf
		var no=1;
		var i,j,k,l,m,tmp;
		var kataCheck="";
		for(i=0;i<jumlah_huruf;i++){
			for(j=0;j<jumlah_huruf;j++){
				if(i!=j) for(k=0;k<jumlah_huruf;k++){
					if(j!=k&&i!=k){
						kataCheck=array_huruf[i]+array_huruf[j]+array_huruf[k];
						if(adalahKata(kataCheck)){
							kata="<tr><td class='no'>"+no+"</td>";
							kata+="<td>"+kataCheck+"</td></tr>";
							tmp=no;
							while(tmp>3){
								tmp-=3;
							}
							if (tmp==3) {
								$("#tbody_3").append(kata);
							}else if(tmp==2){
								$("#tbody_2").append(kata);
							}else{
								$("#tbody_1").append(kata);
							}
							no++;
						}
					}
				}
				
			}
		}

		// kombinasi 4 huruf
		for(i=0;i<jumlah_huruf;i++){
			for(j=0;j<jumlah_huruf;j++){
				if(i!=j) for(k=0;k<jumlah_huruf;k++){
					if(j!=k&&i!=k) for(l=0;l<jumlah_huruf;l++){
						if(k!=l&&j!=l&&i!=l){
							kataCheck=array_huruf[i]+array_huruf[j]+array_huruf[k]+array_huruf[l];
							if(adalahKata(kataCheck)){
								kata="<tr><td class='no'>"+no+"</td>";
								kata+="<td>"+kataCheck+"</td></tr>";
								tmp=no;
								while(tmp>3){
									tmp-=3;
								}
								if (tmp==3) {
									$("#tbody_3").append(kata);
								}else if(tmp==2){
									$("#tbody_2").append(kata);
								}else{
									$("#tbody_1").append(kata);
								}
								no++;
							}
						}
					}
				}
			}
		}

		// kombinasi 5 huruf
		for(i=0;i<jumlah_huruf;i++){
			for(j=0;j<jumlah_huruf;j++){
				if(i!=j) for(k=0;k<jumlah_huruf;k++){
					if(j!=k&&i!=k) for(l=0;l<jumlah_huruf;l++){
						if(k!=l&&j!=l&&i!=l) for(m=0;m<jumlah_huruf;m++){
							if(l!=m&&k!=m&&j!=m&&i!=m){
								kataCheck=array_huruf[i]+array_huruf[j]+array_huruf[k]+array_huruf[l]+array_huruf[m];
								if(adalahKata(kataCheck)){
									kata="<tr><td class='no'>"+no+"</td>";
									kata+="<td>"+kataCheck+"</td></tr>";
									tmp=no;
									while(tmp>3){
										tmp-=3;
									}
									if (tmp==3) {
										$("#tbody_3").append(kata);
									}else if(tmp==2){
										$("#tbody_2").append(kata);
									}else{
										$("#tbody_1").append(kata);
									}
									no++;
								}
							}
						}
					}
				}
			}
		}
	});
});

function hanyaHuruf(){
    var charCode = event.keyCode;

    if ((charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8)
        return true;
    else
        return false;
}

function tigaHurufAda(){
	if ($("input[name='input_1']").val()!=""&&
		$("input[name='input_2']").val()!=""&&
		$("input[name='input_3']").val()!="") {
		return true;
	}
}

function empatHurufAda(){
	if ($("input[name='input_1']").val()!=""&&
		$("input[name='input_2']").val()!=""&&
		$("input[name='input_3']").val()!=""&&
		$("input[name='input_4']").val()!="") {
		return true;
	}
}

function limaHurufAda(){
	if ($("input[name='input_1']").val()!=""&&
		$("input[name='input_2']").val()!=""&&
		$("input[name='input_3']").val()!=""&&
		$("input[name='input_4']").val()!=""&&
		$("input[name='input_5']").val()!="") {
		return true;
	}
}

function enamHurufAda(){
	if ($("input[name='input_1']").val()!=""&&
		$("input[name='input_2']").val()!=""&&
		$("input[name='input_3']").val()!=""&&
		$("input[name='input_4']").val()!=""&&
		$("input[name='input_5']").val()!=""&&
		$("input[name='input_6']").val()!="") {
		return true;
	}
}

function adalahKata(kata){
	var vokal=false;
	for(var i=0;i<kata.length;i++){
		if(kata[i].toLowerCase()=='a'||
			kata[i].toLowerCase()=='i'||
			kata[i].toLowerCase()=='u'||
			kata[i].toLowerCase()=='e'||
			kata[i].toLowerCase()=='o'||
			kata[i].toLowerCase()=='y'){
			vokal=true;
			break;
		}
	}
	if(vokal==false){
		console.log(kata);
	}
	console.log(vokal);
	return vokal;
}