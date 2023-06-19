async function getCloudflareJSON(){
let data = await fetch('https://1.1.1.1/cdn-cgi/trace').then(res=>res.text())
let arr = data.trim().split('\n').map(e=>e.split('='))
return Object.fromEntries(arr)
}
async function somefunc(){
let cloudflareJSON = await getCloudflareJSON()
document.querySelector('#IpAdressIp).innerHTML = cloudflareJSON.ip
console.log(cloudflareJSON.ip)
}

somefunc().then(console.log)
