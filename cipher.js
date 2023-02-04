var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

class VigenèreCipher{
   constructor(key,alphabet){
      this.key=key;
      this.alphabet=alphabet;
   }
   encode(text){
      let ans="";
      let count=0;
      for(let i=0;i<text.length;i++){
         if(count===this.key.length){
          count=0;
         }
         if(text[i].codePointAt(0)>96 && text[i].codePointAt(0)<123){
            let val = (text[i].codePointAt(0)-97)+(this.key[count].codePointAt(0)-97);
            val = val%26;
            ans+=String.fromCharCode(val+97)
            count++;
         }
         else{
            ans+=text[i]
         }
      }
      console.log(ans)
   }
   decode(text){
       let count=0;
       let ans="";
      for(let i=0;i<text.length;i++){
         if(count===this.key.length){
          count=0;
         }
         if(text[i].codePointAt(0)>96 && text[i].codePointAt(0)<123){
            let val = (text[i].codePointAt(0)-97)-(this.key[count].codePointAt(0)-97);
             if(val<0){
               val=val+26;
             }
   
            ans+=String.fromCharCode(val+97)
            count++;
         }
         else{
            ans+=text[i]
         }
      }
      console.log(ans)
   }
}
var c = new VigenèreCipher(key,alphabet);
c.decode("laxxhsj");
c.encode('codewars');

//Note: Time Complexity For encode and decode function is O(n);
      //Space complexity is length of text keyword O(text.length)



