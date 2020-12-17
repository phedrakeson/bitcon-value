function bitcoinValue() {
  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(bitcoin => {
    const bitcoinBRL = bitcoin.BRL
    const dateReturn = new Date;
    document.querySelector('[data-buy]').innerText = bitcoinBRL.buy;
    document.querySelector('[data-sell]').innerText = bitcoinBRL.sell;
    document.querySelector('[data-time]').innerText = dateReturn.getHours() + ':' + dateReturn.getMinutes() + ':' + dateReturn.getSeconds();
    setTimeout(bitcoinValue, 1000)
  })
}



bitcoinValue();