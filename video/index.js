
export function reqVideoPictureInPicture() {
  let video = document.getElementsByTagName('video')[0];
  video.style.width = '1000px';
  video.style.height = '1000px';
  video.width = 1000;
  video.height = 1000;
  video.addEventListener('canplaythrough', function (event) {
    const promise = video.play();
    promise.then(() => {
      video.removeAttribute('muted')
      console.log(video.volume)
    })
    document.addEventListener('click', function () {
      video.requestPictureInPicture();
      video.volume = 1;
    })
  })
}

// reqVideoPictureInPicture();