function calculate()
{
    alert("hi I am in calculate");
    var billAmount = $('#amount').val();
    var percTip = $('#Percentage').val();
    var tip = billAmount * (percTip/100);
    var total = Number(billAmount) + tip;

    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));

    return false;
  

}

 function emptyBlocks()
 {
     alert("bhumi here")

     $('#amount').val("");
     $('#Percentage').val("");
     $('#tip').val("");
     $('#total').val("");

     return false;
 }

$('#Calculator').submit(calculate);

$('#btn_pay').click(emptyBlocks);









