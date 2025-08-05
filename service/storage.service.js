const imageKit = require("imageKit");

const imagekit = new imageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privatekey: "private_c5NIucpoi0oQhBxJKQfbxmMKNVM"
    urlEndpoint:"https://ik.imagekit.io/ld4mscxfr"
});

async function uploadFile(file,filename){


    const response = await imagekit.upload({
        file:file,
        filename: filename,
    })


    return response
}


module.exports = uploadFile;