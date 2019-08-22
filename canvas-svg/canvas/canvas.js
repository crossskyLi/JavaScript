
    let i = 5;
    let increase = true;
    let timeGap = 166;
    clearInterval(this.timer);

    /* Rotate change */
    this.timer = setInterval(() => {
      increase ? i++ : i--;
      if (i === 10 || i === 5) {
        increase = !increase;
      }
      this.circleRotate += (i * i) / 40;
      this.leftEllipseRotate += (i * i) / 10;
      this.rightEllipseRotate += (i * i) / 20;

      if (this.circleRotate >= 360) this.circleRotate = 0;
      if (this.leftEllipseRotate >= 360) this.leftEllipseRotate = 0;
      if (this.rightEllipseRotate >= 360) this.rightEllipseRotate = 0;
    }, timeGap);

    /* opcity change */
    const opcityTimeGap = 16;
    let c = 30;
    let incre = true;
    this.opacityTimer = setInterval(() => {
      incre ? c++ : c--;
      if (c === 100 || c === 30) {
        incre = !incre;
      }
      this.opacity = 0.01 * c;
    }, opcityTimeGap);