//HALLO TOT, I.M botol/DAN'ZZ CYBER
//MAU NYOLONG CASE? TAG DULU NAMA KubilBot ATAU NAMA PANGGILAN "DAN'ZZ"
//REST API BARU YE NGAB, JAN DI BULY
//NOTES : KETAHUAN REUPLOAD KAGA IZIN/TAG, GUA MATIIN REST APINYA
//ATO SC INI DI JUAL? REST API SUNG PADAM BANG, HADEH
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./index')
const { color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const settings = JSON.parse(fs.readFileSync('./config/settings.json'))
namases = settings.SessionsName
randomserver = ['Chrome','Safari','Firefox','Opera']
const randomserverku = randomserver[Math.floor(Math.random() * (randomserver.length))]
randomcolor = ['red','blue','purple']
const randomcolors = randomcolor[Math.floor(Math.random() * (randomcolor.length))]
const waiting = (id, text) => {
    spins.add(id, { text: text })
}
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./botol.js')
nocache('./botol.js', module => console.log(`${module} telah di update!`))

const starts = async (botol = new WAConnection()) => {
    botol.logger.level = 'warn'
    botol.version = [2,2143,3]
    botol.browserDescription = [ `${namabot}`, `${randomserverku}`, '3.0' ]
    console.log(banner)
    botol.on('qr', () => {
        console.log(color('[!]',`${randomcolors}`), color('SCAN OM/TANTE, EXPIRED DALAM 20 DETIK'))
    })
    botol.on('credentials-updated', () => {
		fs.writeFileSync(`./${namases}.json`, JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await botol.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    botol.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync(`./${namases}.json`) && botol.loadAuthInfo(`./${namases}.json`)
    botol.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    botol.on('open', () => {
        success('2', 'Terhubung')
    })
    await botol.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${namases}.json`, JSON.stringify(botol.base64EncodedAuthInfo(), null, '\t'))

    botol.on('chat-update', async (message) => {
        require('./botol.js')(botol, message)
    })
botol.on("group-participants-update", async (anu) => {
    try {
      groupMet = await botol.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await botol.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await botol.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(botol.user.jid)) {
        botol.sendMessage(anu.jid, "Halo Bang", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(botol.user.jid)) {
             const mdata = await botol.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await botol.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await botol.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = botol.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Hallo Kak @${num.split('@')[0]}, Selamat Datang di ${mdata.subject}\n\nInfo Member :\n┌ Nomor : *${num.split('@')[0]}*\n├ Bio : *${thu.status}*\n└ Member : *${memeg}*`
                tekss = `${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                botol.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(botol.user.jid)) {
                const mdata = await botol.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await botol.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = botol.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Byee* 👋 @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:`haha`,buttonText:{displayText:'Selamat Tinggal'}, type:1}]
                tekss = `${time_wel} -  ${time_welc}`
                goodbyeButt = { contentText: `${out}`, footerText: `${tekss}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                botol.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log(color(`${spc2}           [ • CREATOR BY DaniRamadan • ]` ,`${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Hai         :DaniRamadan`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Bot Version : 16.0.0`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Status      : Online!`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Owner       : Dani`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Author      : BotolBotZ`, `${randomcolors}`))
console.log(color(`${spc3}                    [•]`, `${randomcolors}`), color(`Base Ori By : DaniRamadan`, `${randomcolors}`))
console.log(color(`${spc4}                       < ============================================ >`, `${randomcolors}`))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
