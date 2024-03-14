class loadImages {
    imgsList = [];
    constructor() {
      this.loadPic();
    }
    loadPic(images) {
      const promiseAll = p[
      images.forEach((src) => {
            const p = new Promise(function (resolve) {
                const img = new Image;
                img.onerror = img.onload = resolve.bind(null, img);
                img.src = 'https://img12.250byl.com/img/' + src;
            });
            promiseAll.push(p);
        });
        Promise.all(promiseAll).then((imgsList) => {
            this.imgsList = imgsList.filter((d) => {
                if (d && d.width > 0) return true;
                return false;
            });
            if (this.imgsList.length == 0) {
                dLog('error', 'imgsList load all error');
                return;
            }
        })
      
    }
}


const obj = new loadImages();
obj.loadPic([
            'jfs/t1/93992/8/9049/4680/5e0aea04Ec9dd2be8/608efd890fd61486.png',
            'jfs/t1/108305/14/2849/4908/5e0aea04Efb54912c/bfa59f27e654e29c.png',
            'jfs/t1/98805/29/8975/5106/5e0aea05Ed970e2b4/98803f8ad07147b9.png',
            'jfs/t1/94291/26/9105/4344/5e0aea05Ed64b9187/5165fdf5621d5bbf.png',
            'jfs/t1/102753/34/8504/5522/5e0aea05E0b9ef0b4/74a73178e31bd021.png',
            'jfs/t1/102954/26/9241/5069/5e0aea05E7dde8bda/720fcec8bc5be9d4.png'
        ])
