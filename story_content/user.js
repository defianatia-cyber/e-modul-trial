function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mRATBCeynw":
        Script1();
        break;
      case "6Pat2iZnLmH":
        Script2();
        break;
      case "6Uq0URr57gU":
        Script3();
        break;
      case "5rYB4JXpiy2":
        Script4();
        break;
      case "6n5bxL8tgMB":
        Script5();
        break;
      case "6bESbRmruN0":
        Script6();
        break;
      case "6LHkzp86Or1":
        Script7();
        break;
      case "6HvwURsh7CT":
        Script8();
        break;
      case "6YXQJ1XNy9E":
        Script9();
        break;
      case "6FOINyqhS8E":
        Script10();
        break;
      case "6LxNW0F6neB":
        Script11();
        break;
      case "6phZ7L1W0Nv":
        Script12();
        break;
      case "6L8fCkvvIBc":
        Script13();
        break;
      case "6XL9XBfqmJ6":
        Script14();
        break;
      case "5mB1MQp3Vta":
        Script15();
        break;
      case "6D9ZIsG8JFm":
        Script16();
        break;
      case "67frOWP7vnS":
        Script17();
        break;
  }
}

function Script1()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script2()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script3()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script4()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script5()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script6()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script7()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script8()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script9()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script10()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script11()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script12()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script13()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script14()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script15()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script16()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

function Script17()
{
  function exportSlideToPDF() {
    // Menargetkan elemen yang HANYA berisi konten slide (mengabaikan menu/player)
    var slideElement = document.querySelector('.slide-window') || document.querySelector('.slide-container') || document.querySelector('#slide');

    if (slideElement) {
        var opt = {
            margin:       0,
            filename:     'Preview_Slide.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true }, // scale 2 untuk resolusi yang lebih tajam
            jsPDF:        { unit: 'px', format: [slideElement.offsetWidth, slideElement.offsetHeight], orientation: 'landscape' }
        };

        // Mengeksekusi pembuatan PDF
        html2pdf().set(opt).from(slideElement).save();
    } else {
        console.log("Area slide tidak ditemukan.");
    }
}

// Mengecek apakah library html2pdf sudah dimuat sebelumnya agar tidak tumpang tindih
if (typeof html2pdf === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = exportSlideToPDF;
    document.head.appendChild(script);
} else {
    exportSlideToPDF();
}
}

