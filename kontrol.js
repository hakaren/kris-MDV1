//⫰⫯ 𝑵𝒐𝒕𝒆 : 𝑲𝒂𝒍𝒂𝒖 𝑴𝒂𝒖 𝑫𝒊 𝑯𝒂𝒑𝒖𝒔 𝑴𝒊𝒌𝒊𝒓 𝑫𝒖𝒍𝒖 𝑵𝒈𝒂𝒃 𝑺𝒊𝒂𝒑𝒂 𝒀𝒂𝒏𝒈 𝑩𝒊𝒌𝒊𝒏 𝑺𝒄𝒓𝒊𝒑𝒕 𝑫𝒂𝒏 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑵𝒚𝒂

//𝐀𝐮𝐭𝐡𝐨𝐫 : aga md
//𝐖𝐚 : 082144607416 / 082144607416
//sc : aga
//𝐌𝐲 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 : 10 𝑶𝒌𝒕𝒐𝒃𝒆𝒓 2022

//⫹❰⫺ 𝐵𝐼𝐺 𝑇𝐻𝐴𝑁𝐾𝑆 𝑇𝑂 ⫹❱⫺
//⭝ 𝑨𝒍𝒍𝒂𝒉 𝒀𝒂𝒏𝒈 𝑴𝒂𝒉𝒂 𝑬𝒔𝒂
//⭝ 𝑶𝒓𝒂𝒏𝒈 𝑻𝒖𝒂
//⭝ 𝑻𝒆𝒎𝒆𝒏 𝑮𝒘
//⭝ 𝒀𝒂𝒏𝒈 𝑼𝒅𝒂𝒉 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑮𝒖𝒂

//⫹⫺ 𝑇𝒉𝑒 𝑁𝑎𝑚𝑒 𝑇𝒉𝑎𝑡 𝐻𝑒𝑙𝑝𝑒𝑑 𝑀𝑒 ⫹⫺
//⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
//⭝ 𝑨𝒅𝒊𝒘𝒂𝒋𝒊𝒔𝒉𝒊𝒏𝒈
//⭝ 𝑹𝒊𝒔𝒎𝒂𝑩𝒐𝒕𝒛 𝑶𝒇𝒇𝒄
//⭝ 𝑱𝒂𝒓𝒐𝒕 𝑶𝒇𝒇𝒄
//⭝ 𝑪𝒉𝒓𝒊𝒔𝒕𝒊𝒂𝒏 𝑰𝒅
//⭝ 𝑨𝒊𝒏𝒆
//⭝ 𝒁𝒆𝒆𝒐𝒏𝒆 𝑶𝒇𝒄
//⭝ aga md//

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282144607416']
global.ownernomer = "6282144607416"
global.premium = ['6282144607416']
global.packname = 'Sticker By'
global.author = 'aga Hosting'
global.sessionName = 'krisss'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./media/image/kris.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/hakaren'
global.myyt = 'https:'
global.myytv = 'https:'
global.mygc = "https://chat.whatsapp.com/HcPAXNQFQKP5SrTT3PIGGy"
global.botname = 'JegABotz'
global.akulaku = 'Bot aga'
global.ytname = '-'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
