const axios = require('axios');

const data = {
    "key": "ogPAAatqDi56qkEHX8ym4bUWwO9g9FNesoKWBoOYxh95zrILEeyCUvIQWzbE",
    "controlnet_model": "inpaint",
    "controlnet_type": "inpaint",
    "model_id": "midjourney",
    "auto_hint": "yes",
    "guess_mode": "no",
    "prompt": null,
    "negative_prompt": null,
    "init_image": "http://ai.lammpee.de/thorn/rundiffusion-1/export_ofade.jpg",
    "mask_image": "http://ai.lammpee.de/thorn/rundiffusion-1/export_mask.jpg",
    "width": "512",
    "height": "512",
    "samples": "1",
    "scheduler": "UniPCMultistepScheduler",
    "num_inference_steps": "30",
    "safety_checker": "no",
    "base64": "no",
    "enhance_prompt": "yes",
    "guidance_scale": 7.5,
    "strength": 0.55,
    "seed": null,
    "webhook": null,
    "track_id": null
}

module.exports = async (qrcode, prompt) => {
    data.prompt = 'monkey';

    const generateConfig = {
        method: 'post',
        url: 'https://stablediffusionapi.com/api/v5/controlnet',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }
    const generateResult = await axios(generateConfig).then(res => res.data);
    console.log(generateResult);
}