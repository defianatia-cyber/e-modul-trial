function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67Uh5S5r4nj":
        Script1();
        break;
      case "67qTGTDMJXg":
        Script2();
        break;
      case "6PBIocEhb57":
        Script3();
        break;
      case "5ue37Ftmdq1":
        Script4();
        break;
      case "6fLnktLwIjj":
        Script5();
        break;
      case "60Uq0OdhKQo":
        Script6();
        break;
      case "61gEXeq3iYg":
        Script7();
        break;
      case "5w4XqBJT3vI":
        Script8();
        break;
      case "656tfsFiYMJ":
        Script9();
        break;
      case "5vmVsOUF4m8":
        Script10();
        break;
      case "6lEtBh3XpQr":
        Script11();
        break;
      case "6bmseZcfTNT":
        Script12();
        break;
      case "5wExXkwLDFU":
        Script13();
        break;
      case "6anO1IL0ZyI":
        Script14();
        break;
      case "5cDaBs10KW0":
        Script15();
        break;
      case "6kaW99LqlxP":
        Script16();
        break;
      case "6pdyvYVhS4O":
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

