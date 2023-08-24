const axios = require('axios');


let data = {
    "key": "ogPAAatqDi56qkEHX8ym4bUWwO9g9FNesoKWBoOYxh95zrILEeyCUvIQWzbE",
    "controlnet_model": "qrcode",
    "controlnet_type": "qrcode",
    "model_id": "rev-animated",
    "auto_hint": "yes",
    "guess_mode": "no",
    "prompt": null,
    "negative_prompt":"bad-quality, worst-quality, bad-artist, bad-hands, nsfw ",
    "init_image": "https://dev2.textrapp.com/itinerary/421c89a8d3ef470d894e99522e9cad3c.png",
    "control_image": "https://i.ibb.co/t8T3pbM/imageedit-3-9919665521.png",
    "control_image": "https://i.ibb.co/t8T3pbM/imageedit-3-9919665521.png",
    "control_image": "https://i.ibb.co/t8T3pbM/imageedit-3-9919665521.png",
    "control_image": "https://i.ibb.co/t8T3pbM/imageedit-3-9919665521.png",
    "width": "512",
    "height": "512",
    "controlnet_conditioning_scale":"1.9",
    "scheduler": "UniPCMultistepScheduler",
    "samples": "1",
    "num_inference_steps": "31",
    "safety_checker": "no",
    "base64": "no",
    "enhance_prompt": "no",
    "guidance_scale": 7.5,
    "controlnet_conditioning_scale": 3,
    "strength": 0.4
}

module.exports = async (qrcode, prompt) => {
    data.prompt = prompt;

    const generateConfig = {
        method: 'POST',
        url: 'https://stablediffusionapi.com/api/v5/controlnet',
        data: data
    }
    let generateResult = await axios(generateConfig).then(res => res.data);
    console.log(generateResult.eta);

    const fetchConfig = {
        method: 'POST',
        url: 'https://stablediffusionapi.com/api/v4/dreambooth/fetch',
        data: {
            key: data.key,
            request_id: generateResult.id
        }
    }
    let fetchResult = await axios(fetchConfig).then(res => res.data);
    
    while (fetchResult.status == 'processing') {
        setPause(1000);
        fetchResult= await axios(fetchConfig).then(res => res.data);
    }
    return fetchResult;
}

function setPause(ms) {
    var start = Date.now();
    var now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}