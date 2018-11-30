const left = document.getElementById("left");
const right = document.getElementById("right");
const snap = document.getElementById("snap");
const label = document.getElementById("label");
const link = document.getElementById("link");

const PENS = [
  { name: "Infinity", id: "mQbdWE" },
  { name: "Time", id: "PxYMNO" },
  { name: "Carrot", id: "KrKRzx" },
  { name: "Sky", id: "XyJXxW" },
  { name: "Music", id: "OaVWqM" },
  { name: "Web", id: "pQjrqV" },
  { name: "Sea", id: "xQZqyM" },
  { name: "Cat", id: "yQOjye" },
  { name: "Green", id: "vQKaBK" },
  { name: "Apple", id: "XyKwoy" },
  { name: "RGB", id: "KrgXqW" },
  { name: "Bread", id: "PxbVKr" },
  { name: "Black Hole", id: "eQgwRM" },
  { name: "Coffee", id: "gQWPxg" },
  { name: "Fire", id: "KrqMVw" },
  { name: "Star", id: "RqZGwO" },
  { name: "Crown", id: "bQrQNm" },
  { name: "Paper", id: "vQegvr" },
  { name: "Eggs", id: "MzOjVJ" },
  { name: "Socks", id: "bQaRov" },
  { name: "Skate", id: "EOQbbJ" },
  { name: "Key", id: "dQmVrw" },
  { name: "Lollipop", id: "JevbaM" },
  { name: "Printer", id: "JeByOV" },
  { name: "Screwdriver", id: "mQjBNK" },
  { name: "Bed", id: "LXgqgV" },
  { name: "Man Bun", id: "JeezeR" },
  { name: "Speakers", id: "eQQadV" },
  { name: "Supermarket", id: "jQXOpd" },
  { name: "Computer", id: "mQaNvQ" }
];
let current = -1;

function assignImage(e) {
  if(e.target.id === "right")
    current = (current + 1) < PENS.length ? current + 1 : 0;
  else
    current = (current - 1) < 1 ? PENS.length : current - 1;
  
  snap.src = `https://codepen.io/RominaMartin/pen/${PENS[current].id}/image/small.png`;
  label.innerText = `#${current + 1} - ${PENS[current].name}`;
  link.href = `https://codepen.io/RominaMartin/full/${PENS[current].id}`
}

left.onclick = assignImage
right.onclick = assignImage