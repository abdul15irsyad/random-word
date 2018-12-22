//ini adalah main js
$(document).ready(function(){
	var jumlah_huruf=5;
	var input_1,input_2,input_3,input_4,input_5,input_6;
	var kata="";
	var array_huruf=[];

	//button jumlah huruf 5
	$("#btn_jumlah_5").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".hide").hide();
		$(".hide > .form-control").val('');
		jumlah_huruf=5;
		if (limaHurufAda()){
			$("#btn_generate").removeAttr("disabled");
		}
	});

	//button jumlah huruf 6
	$("#btn_jumlah_6").click(function(){
		$(".btn-jumlah").removeClass('active');
		$(this).addClass(' active');
		$(".hide").show();
		jumlah_huruf=6;
		$("#btn_generate").attr("disabled","disabled");
	});

	$("input.form-control").keyup(function(){
		if (limaHurufAda()) {
			if(jumlah_huruf==5){
				$("#btn_generate").removeAttr("disabled");
			}
			else if($("input[name='input_6']").val()!=""&&jumlah_huruf==6){
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
		input_4 = $("input[name='input_4']").val();
		input_5 = $("input[name='input_5']").val();

		//memasukkan inputan ke dalam array
		array_huruf=[];
		array_huruf.push(input_1,input_2,input_3,input_4,input_5);
		array_huruf.sort();
		
		if (jumlah_huruf==6) {
			input_6 = $("input[name='input_6']").val();
			array_huruf.push(input_6);
		}

		//kombinasi 3 huruf
		var no=1;
		var i,j,k,l,m;
		for(i=0;i<jumlah_huruf;i++){
			for(j=0;j<jumlah_huruf;j++){
				if(i!=j) for(k=0;k<jumlah_huruf;k++){
					if(j!=k&&i!=k){
						kata="<tr><td class='no'>"+no+"</td>";
						kata+="<td>"+array_huruf[i]+array_huruf[j]+array_huruf[k]+"</td></tr>";
						if (no%3==0) {
							$("#tbody_3").append(kata);
						}else if(no%2==0){
							$("#tbody_2").append(kata);
						}else{
							$("#tbody_1").append(kata);
						}
						no++;
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
							kata="<tr><td class='no'>"+no+"</td>";
							kata+="<td>"+array_huruf[i]+array_huruf[j]+array_huruf[k]+array_huruf[l]+"</td></tr>";
							if (no%3==0) {
								$("#tbody_3").append(kata);
							}else if(no%2==0){
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

		// kombinasi 5 huruf
		for(i=0;i<jumlah_huruf;i++){
			for(j=0;j<jumlah_huruf;j++){
				if(i!=j) for(k=0;k<jumlah_huruf;k++){
					if(j!=k&&i!=k) for(l=0;l<jumlah_huruf;l++){
						if(k!=l&&j!=l&&i!=l) for(m=0;m<jumlah_huruf;m++){
							if(l!=m&&k!=m&&j!=m&&i!=m){
								kata="<tr><td class='no'>"+no+"</td>";
								kata+="<td>"+array_huruf[i]+array_huruf[j]+array_huruf[k]+array_huruf[l]+array_huruf[m]+"</td></tr>";
								if (no%3==0) {
									$("#tbody_3").append(kata);
								}else if(no%2==0){
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
	});
});

function hanyaHuruf(){
    var charCode = event.keyCode;

    if ((charCode>64&&charCode<91)||(charCode>96&&charCode<123)||charCode==8)
        return true;
    else
        return false;
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
