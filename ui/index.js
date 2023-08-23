urlInput = document.getElementById('urlInput');
promptInput = document.getElementById('promptInput');
generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', async () => {
    const result = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            url: urlInput.value,
            prompt: promptInput.value
        })
    }).then(res => res.json());
})