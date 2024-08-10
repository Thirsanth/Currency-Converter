document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit=function(event){
        event.preventDefault();
        var apilink='http://api.exchangeratesapi.io/v1/latest?access_key=f03c517e54d710d1d1adb48bb6fbf9b8&format=1';
        fetch(apilink)
        .then(response=> response.json())
        .then(result=>{
            var selectedCurrency = document.getElementById('currency_selected').value;
            const exchange_rate=result.rates[selectedCurrency];
            const amount_entered=document.getElementById('amount').value;
            const converted_amount=exchange_rate*amount_entered;
            document.getElementById('result-data').className='alert alert-primary';
            document.getElementById('result-data').innerHTML=`${amount_entered}EUR is ${converted_amount}${selectedCurrency}`
        })
    }
})




