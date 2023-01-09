class Text {
    constructor(obj) {
      this.el = document.querySelector(obj.el)
      this.txt = this.el.innerHTML
      this.el.innerHTML = ""
      this.str()
    }

    str(x = 0) {
     this.el.innerHTML += this.txt[x]
      x++;  
     if (x < this.txt.length) {
        setTimeout(() => {
            this.str(x)
        }, 200);
     }
    }
}

const text = new Text({
    el: ".header__content h1"
})
const text2 = new Text({
    el: ".header__content p"
})

class Sticky {
  constructor (option) {
   this.nav = document.querySelector(option,el)
   this.nav.style.position = 'fixed'
   this.nav.style.top = this.scrollCalc

   window.addEventListener('scroll', () => this.scrollCalc())

  }   
  scrollCalc (){
  if(window.innerHeight - this.nav.offsetHeight - window.scrollY > 0){
     this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY + 'px'
  }else{
  this.nav.style.top = 0
  }
  }
}

const name = new Sticky({
  el: ".header__nav"
})