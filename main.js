var app=new Vue({
    el : '#prod',
    data: {
        fee: false,
      }
       
});


Vue.component('product',{
    props: {
        fee: {
          type: Boolean,
          required: true
        }
      }, 
 template:`<div class="product">
     
     <div class="product-image">
     <img :src='image' width="80px"/>
     </div>
     <div class="product-info">
     <h1>{{ title }}</h1>
     {{ fee }}
     <p>Shipping: {{ shipping }}</p>
     <p>{{ desc }}</p> 
     
     <a :href='link'>click here</a>    
     <p v-if="stock > 10">In Stock</p>
     <p v-else-if="stock <= 10 && stock > 0">Alomst Sold</p>
     <p v-else>Out of stock</p>
     <span v-show="onsale">{{ sale }}</span>
     <ul><li v-for="detail in details">{{ detail }}</li></ul>
     <div class='color-box'
          v-for="(variant,index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateproduct(index)">{{ variant.variantColor }}</div>
    <div class="cart"><p>{{ cart }}</p></div>
    <button v-on:click="addtocart" :disabled="!stock" :class="{ disabledButton: !stock }" class="btn btn-primary">Add to cart</button>
    <button v-on:click="removefromcart" class="btn btn-primary">Remove from cart</button>
</div>
</div>`,
data(){
    
  return {
      
      product:"NAVYSPORT",
        desc: "test this",
        brand: "vue first",
        //image: "./assets/black.jpg",
        selectedVariant:0,
        link: "https://www.vuemastery.com/",
        //stock: 10,
       onsale:true,
        cart:0,
        details: ["20% cotton","30% good"],
        variants: [
        {
            variantId:2234,
            variantColor:"white",
            //shape:"round"
            variantImage:"./assets/white.jpg",
            variantquantity:10
        },
        {
            variantId:2235,
            variantColor:"grey",
            //shape:"square"
            variantImage:"./assets/grey.jpg",
            variantquantity:10
        }
    ]
  } 
},   
    methods:{
         addtocart(){
            this.cart += 1
        },
        removefromcart(){
           if(this.cart > 0){
            this.cart -=1
           } 
           else {
               this.cart=0
           }
           
        },
        updateproduct(index){
            this.selectedVariant=index
            //console.log(index);
            }
        
    },
computed:{
 title(){
            return this.brand + ' ' + this.product
        },
      image(){
           return this.variants[this.selectedVariant].variantImage;
       } ,
       stock(){
        return this.variants[this.selectedVariant].variantquantity; 
       },
       sale(){
        return this.brand + ' ' + this.product; 
       },
       free(){

        return this.brand;
       }
      


}    
    
})

