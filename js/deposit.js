document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositFieldAmount = getValueById('deposit-input');
    if(isNaN(depositFieldAmount) || depositFieldAmount < 0){
        alert('Check');
        return;
    }
    const previousDepositAmount = getPreviousDetails('deposit-amount');
    const newDepositAmount = previousDepositAmount + depositFieldAmount;
    setValue(newDepositAmount, 'deposit-amount')
    const previousBalanceAmount = getPreviousDetails('balance-amount');
    const newBalanceAmount = previousBalanceAmount + depositFieldAmount;
    setValue(newBalanceAmount, 'balance-amount');
})