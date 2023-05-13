/**
 * construire un HTMLIElement conteanant un checkbox et un button
 * @param {class Li,id button}
 */
class TodoList{
    li=document.createElement('li')
    input1=document.createElement('input')
    but2=document.createElement('button')
    constructor(nomli,nombut1){
        this.li.className=nomli
        this.input1.setAttribute('type','checkbox')
        this.but2.id=nombut1
        
    }
    /**
     * suprimer un HTMLLiElement
     * @param {void}
     * @returns {void}
     */
    supprim(){
        this.li.remove()
    }
    style(){
        //this.li.style.animation.slice
        // this.li.style.backgroundColor='blue'
    //    console.log(this.input1.checked) 
        
        this.li.style.marginTop='1px'
    }
   

}


conter=0
var propriClass=[]
function getValue(event) {
    event.preventDefault()
    let ul = document.querySelector('.c-ul');
    let input=document.querySelector('.c-inp')
    let valeur = input.value
    if(valeur !==''){
        document.querySelector('.c-inp').value=''
        let liste= new TodoList('pa'+conter,'pe'+conter)
        liste.li.innerText = valeur
        ul.append(liste.li)
        liste.li.append(liste.input1)
        liste.li.append(liste.but2)
        propriClass.push(liste)
        liste.style()
        liste.but2.addEventListener('click',function(){
            liste.supprim()
            propriClass.splice(propriClass.indexOf(liste.li.pa+conter),1)
        })
     }
      
        conter++
    }
    function fait(){
        propriClass.forEach(element=>{
            if(element.input1.checked==false){
                element.supprim();
            }
            else{let ul=document.querySelector('.c-ul');
            ul.append(element.li)
            element.li.append(element.input1)
            element.li.append(element.but2)
            }
        })
    }
    function tout(){
        // let copyTab=propriClass.slice()
        propriClass.forEach(element=>{
            let ul=document.querySelector('.c-ul');
            ul.append(element.li)
            element.li.append(element.input1)
            element.li.append(element.but2)

        })
    }
    function rest(){
        // console.log(propriClass)
        // let copyTab=propriClass.filter(element=>);
        // console.log(copyTab)element
        // 
        propriClass.forEach(element=>{
            if(element.input1.checked==true){
                element.supprim();
            }
            else{let ul=document.querySelector('.c-ul');
            ul.append(element.li)
            element.li.append(element.input1)
            element.li.append(element.but2)
            }
        })
    }
