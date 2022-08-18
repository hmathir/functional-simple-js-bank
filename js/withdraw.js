document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputAmount = getValueById('withdraw-input');
    if(isNaN(withdrawInputAmount) || withdrawInputAmount < 0){
        alert('Error');
        return;
    }
    const previousWithdrawAmount = getPreviousDetails('withdraw-amount');
    const newWithdrawAmount = previousWithdrawAmount + withdrawInputAmount;
    const previousBalanceAmount = getPreviousDetails('balance-amount');
    if(previousBalanceAmount < withdrawInputAmount){
        alert('Fund Shortage');
        return;
    }
    setValue(newWithdrawAmount, 'withdraw-amount');
    const newBalanceAmount = previousBalanceAmount - withdrawInputAmount;
    setValue(newBalanceAmount, 'balance-amount');
})