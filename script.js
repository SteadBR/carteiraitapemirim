
document.getElementById('cardForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const id = document.getElementById('id').value;
  const fotoFile = document.getElementById('foto').files[0];

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const background = new Image();
  background.src = 'assets/card_background.png';

  background.onload = () => {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 645, 180, 240, 240); // posição da foto
        ctx.font = 'bold 32px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(nome, 60, 320);
        ctx.font = '24px Arial';
        ctx.fillText('ID: ' + id, 60, 360);

        const dataUrl = canvas.toDataURL();
        document.getElementById('output').src = dataUrl;
        document.getElementById('download').href = dataUrl;
        canvas.style.display = 'none';
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(fotoFile);
  };
});
