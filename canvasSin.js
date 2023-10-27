    <canvas id="plotCanvas" width=600 height=300 />

    const canvas = document.getElementById('plotCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 绘制坐标轴
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // 绘制正弦函数
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    for (let x = 0; x < width; x++) {
      const angle = (x - width / 2) / 30; // 调整角度大小以控制周期与振幅
      const y = (height / 2) - Math.sin(angle) * (height / 4); // 缩放y坐标以适应画布高度

      console.log(x, y);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#f00'; // 设置曲线颜色
    ctx.lineWidth = 1.5; // 设置曲线线宽
    ctx.stroke()
