const walletConnect = $('.wallet-connect .btn-connect');
const walletAddress = $('.wallet-connect .wallet-address');

walletConnect.click(function() {
  connect();
})

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    if(account) {
      const wallet_txt = getShortText(account);
      walletAddress.text(wallet_txt);
      walletConnect.addClass('hidden');
      walletAddress.removeClass('hidden');
    } else {
      walletConnect.removeClass('hidden');
      walletAddress.addClass('hidden');
    }
  } else {
    alert('MetaMask is uninstalled!');
  }
}

function getShortText(text) {
  var text = $.trim(text);
  var length = text.length;
  var first_txt = text.substring(0,4);
  var last_txt = text.substring(length-4, length);
  console.log(first_txt);
  console.log(last_txt);
  return first_txt + '...' + last_txt;
}