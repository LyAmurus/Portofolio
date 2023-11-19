AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>Memahami struktur dasar HTML, termasuk elemen, tag, dan atribut, serta cara mereka berinteraksi untuk membentuk halaman web.</li> <li>Pemahaman tentang elemen-elemen semantik baru HTML5</li><li>Mampu membuat list (unordered atau ordered list) serta tabel (table), termasuk penggunaan atribut-atribut yang relevan untuk menata informasi secara terstruktur.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Memahami berbagai jenis selektor CSS seperti selektor elemen, kelas, ID, atribut, pseudo-class, dan pseudo-element serta cara mereka mempengaruhi elemen HTML.</li><li>Mengenal beragam properti CSS seperti properti warna, ukuran font, margin, padding, background, border, dan lainnya serta cara menggunakannya untuk mengubah tampilan elemen HTML.</li><li>Menggunakan media queries untuk membuat tampilan responsif yang beradaptasi dengan berbagai ukuran layar, seperti ponsel, tablet, dan desktop.</li>",
  },
  {
    langImage: "assets/images/techstack-page/figma.png",
    langName: "Figma",
    langDesc: "<li>Mampu merancang antarmuka pengguna yang efektif dan menarik, mempertimbangkan pengalaman pengguna (user experience) dan desain visual (user interface).</li><li>Memahami penggunaan berbagai tools dalam Figma seperti shapes, pen tool, tekstur, pembuatan mockup, dan pengaturan grid untuk membuat desain dengan lebih detail.</li><li>Kemampuan untuk membuat prototype interaktif yang memungkinkan pengguna untuk menjelajahi antarmuka pengguna yang dirancang, menampilkan interaksi dan transisi antarhalaman.</li><li>Memahami cara bekerja secara kolaboratif dalam Figma, termasuk kemampuan untuk berbagi desain dengan tim, memberikan komentar, dan menyinkronkan perubahan.</li>",
  },
  {
    langImage: "assets/images/techstack-page/photoshop.png",
    langName: "Adobe Photoshop",
    langDesc: "<li>Mengenal antarmuka Photoshop termasuk tools, panel, dan bagaimana cara navigasi di dalamnya.</li><li>Mengganti ukuran, memotong, dan memutar gambar dengan tepat menggunakan tools seperti crop tool, transform tool, dan resize.</li><li>Memahami konsep layers dan kemampuan untuk membuat, mengubah, dan mengatur layers untuk mengedit gambar secara terpisah.</li>",
  },
  {
    langImage: "assets/images/techstack-page/Xd.png",
    langName: "Adobe XD",
    langDesc: "<li>Mengenal antarmuka Adobe XD termasuk tools, panel, artboard, dan navigasi di dalamnya.</li><li>Mampu membuat dan mengatur artboard untuk berbagai perangkat seperti desktop, tablet, dan ponsel untuk merancang pengalaman pengguna.</li>Membuat elemen desain dasar seperti tombol, ikon, field input, dan elemen UI lainnya menggunakan shapes, pen tool, dan tekstur.</li><li>Menggunakan tools seperti shape tools, pen tool, text tool, dan line tool untuk membuat elemen-elemen desain yang diinginkan.</li>",
  },
  {
    langImage: "assets/images/techstack-page/trello.png",
    langName: "Trello",
    langDesc: "<li>Membuat papan (board) baru yang sesuai dengan kebutuhan proyek atau tim.</li> <li>Mampu membuat, mengubah, dan mengelola daftar (lists) di dalam papan untuk mengatur tugas-tugas.</li><li>pembuatan, pengeditan, dan manajemen kartu (cards) untuk merepresentasikan tugas, termasuk menambahkan keterangan, lampiran, checklist, dan label</li>",
  },

];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
