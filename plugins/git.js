/* Copyright (C) nijin-husni
Mwonu credits kalayalle
Maalutty-nijin-husni
*/

const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/IMG-20220108-WA0143.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 MAALUTTY_V3💝⦁━►


*Oᴡɴᴇʀ number Aʙᴜ* :https://wa.me/917025994178.
            

*Oᴡɴᴇʀ number Jᴀsɪʟ ᴍᴜʜᴀᴍᴍᴇᴅ* :https://wa.me/917025994178.


*Oᴡɴᴇʀ Iᴅ ɪɴsᴛᴀɢʀᴀᴍ* :https://instagram.com/_husni_ser_.


*Gɪᴛᴜʙ* : https://github.com/SHALU-SER/ABU_SER_V3.


*Aᴜᴅɪᴏ Cᴏᴍᴍᴀɴᴅs* :https://github.com/SHALU-SER/media/tree/main/bgm.


*Sᴛɪᴄᴋᴇʀ Cᴏᴍᴍᴀɴᴅs* :https://github.com/nijin-husni/media/tree/main/stickers.

◄━⦁💝 Aʙᴜ_sᴇʀ_ᴠ3💝⦁━►
■□ ~Aʙᴜ~ Aɴᴅ ~Jᴀsɪʟ ᴍᴜʜᴀᴍᴍᴇᴅ~■□ 

`}) 

}));
