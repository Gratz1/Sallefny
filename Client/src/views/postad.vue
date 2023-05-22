<template>
<div class="postad">
    <br><br><br><br><br><br>
    <div class="col-md-12 h-100 d-flex justify-content-center align-items-center" >
      <div class="col-md-10 rounded px-5 py-5 shadow bg-white text-left">
        <form class="card-panel green-text" @submit.prevent="addPost">
          
            <!--item name-->
          <div class="form-row" id="rent">
            <div class="col-3"><label>Item Name</label></div>
            <div class="col-7">
              <input placeholder="Cars,Camera,AnyTool..." type="text" class="form-control" v-model.trim="$v.item.$model" :class="{'is-invalid': $v.item.$error, 'is-valid': !$v.item.$invalid,}" v-model="post.item_name"/>
              <div class="valid-feedback">Your Item Name is valid!</div>
              <div class="invalid-feedback">
                <p v-if="!$v.item.required">Item Name is required</p>
                <p v-if="!$v.item.minLength"> Item name must have at least {{ $v.item.$params.minLength.min }} Letters .</p>
                <p v-if="!$v.item.maxLength"> Item name must have at most {{ $v.item.$params.maxLength.max }} Letters .</p>
              </div>
            </div>
            
            <div class="col-2"><span>*</span></div>


            <!--item Description-->
            <div class="col-3" id="area"><label>Description</label></div>
            <div class="col-7">
              <textarea placeholder="Description for Your Item..." cols="5" rows="10" class="form-control" v-model.trim="$v.text.$model" :class="{'is-invalid': $v.text.$error, 'is-valid': !$v.text.$invalid,}" v-model="post.description"></textarea>
              <div class="valid-feedback">Your Description is valid!</div>
              <div class="invalid-feedback">
                <p v-if="!$v.text.required">Description is required</p>
                <p v-if="!$v.text.minLength"> Description must have at least {{ $v.text.$params.minLength.min }} Letters .</p>
                <p v-if="!$v.text.maxLength"> Description must have at most {{ $v.text.$params.maxLength.max }} Letters .</p>
              </div>
            </div>
            <div class="col-2" id="star">*</div>
            

            <!--select category-->
            <div class="col-3" id="cato"><label>Select Category</label></div>
            <div class="col-6" id="cato">
           









    <select
      v-model="categoryselect"
      class="form-control browser-default custom-select custom-select-lg mb-3"
      style="color: black; width: 200px"
       v-on:change="temp=false"

    >
      <option
        v-for="category in categories"
        :key="category.id"
        :value="{ text: category.categoryname }"
        
      >
        {{ category.categoryname }}
      </option>
    </select>
    <br />
    <!-- <h1>
      Text:
      {{ categoryselect.text }}
    </h1> -->
    </div>
    <br /><br /><br />
    <br /><br />
    <div  v-if="temp" >
      <div class="form-check"  v-for="category in categories" :key="category.id">
        <input
          class="form-check-input"
          :value="{ text: category.categorytypes }"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {{category.categorytypes}}
        </label>

</div>
            </div>













            
            <div class="col-3" id="ngma">*</div>

            <!--add picture-->
            <div class="col-3" id="img"><label>Add Pictures </label></div>
            <div class="form-group col-6" id="img">
              <input type="file" class="form-control" accept="images/*" @change="uploadImage($event)" multiple/></div>
            <div class="col-3" id="ngma">*</div>
            <br><br><br><br><br>      

            
            <!--rental price-->
            <div class="col-3" id="rental"><label>Rental prices: </label></div>
            <br>
            <div class="form-group col-9" id="rental">
            <div class="row">
              <div class="col-3">
                <label>Day</label><input type="text" v-model="post.per_day">
              </div>
              <div class="col-3">
                <label>Week</label><input type="text" v-model="post.per_week">
              </div>
              <div class="col-3">
                <label>Month</label><input type="text" v-model="post.per_month">
              </div>
            </div>
            </div>


            <!--contact number-->
            <div class="col-3" id="num"><label>Contact Number</label></div>
            <div class="col-6" id="num">
              <input class="form-control" type="text" placeholder="Enter Your Phone Number..." v-model.trim="$v.number.$model" :class="{ 'is-invalid': $v.number.$error, 'is-valid': !$v.number.$invalid, }" v-model="post.current_number"/>
              <div class="valid-feedback">Your Phone Number is valid!</div>
              <div class="invalid-feedback">
                <p v-if="!$v.number.required">Phone Number is required * {{ $v.number.$params.requied }}</p>
                <p v-if="!$v.number.numeric">Only Digits are allowed *</p>
                <p v-if="!$v.number.ensureonly11DigitsLong">Phone Number must be 11 digits long * {{ $v.number.$params.ensureonly11DigitsLong }}</p>
              </div>
            </div>
            <div class="col-3" id="ngm">*</div>


            <!--item location-->
            <div class="col-3" id="loc"><label>Location:</label></div>
            <div class="col-6" id="loc">
              <input placeholder="Any Location..." type="text" class="form-control" v-model.trim="$v.loc.$model" :class="{ 'is-invalid': $v.loc.$error, 'is-valid': !$v.loc.$invalid }" v-model="post.location"/>
              <div class="valid-feedback">Your Loction is valid!</div>
              <div class="invalid-feedback">
                <p v-if="!$v.loc.required">Location is required</p>
                <p v-if="!$v.loc.minLength"> Location must have at least {{ $v.loc.$params.minLength.min }} Letters .</p>
                <p v-if="!$v.loc.maxLength"> Location must have at most {{ $v.loc.$params.maxLength.max }} Letters .</p>
              </div>
              <div class="col-3" id="star3">*</div>
            </div>


            <!--way to contact-->
            <div class="form-group col-12">
            <div class="col-6" id="con">
              <label>Preffered Way to Contact:</label>
            </div>
            <div class="col-6" id="rad">
              <div class="form-check">
                <input class="form-check-input" value="chat" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="post.prefered_way_to_contact"/>
                <label class="form-check-label" for="flexRadioDefault1">Chat</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" value="call" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="post.prefered_way_to_contact"/>
                <label class="form-check-label" for="flexRadioDefault2">Call</label>
              </div>
              <div class="form-check">
                <input class="form-check-input"  value="both" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="post.prefered_way_to_contact"/>
                <label class="form-check-label" for="flexRadioDefault3">Both</label>
              </div>
            </div>
            </div>

                       <!--receive method-->
            <div class="form-group col-12">
            <div class="col-6" id="con">
              <label>receive method:</label>
            </div>
            <div class="col-6" id="rad">
              <div class="form-check">
                <input class="form-check-input" value="directly" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" v-model="post.receive_method"/>
                <label class="form-check-label" for="flexRadioDefault1">directly</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" value="shipping the product" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" v-model="post.receive_method"/>
                <label class="form-check-label" for="flexRadioDefault2">shipping the product</label>
              </div>
 
            </div>
            </div>

            <!--case category-->
            <div class="form-group col-12">
            <div class="col-6" id="con">
              <label>case category:</label>
            </div>
            <div class="col-6" id="rad">
              <div class="form-check">
                <input class="form-check-input" value="New" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" v-model="post.case"/>
                <label class="form-check-label" for="flexRadioDefault1">New</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" value="Used" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" v-model="post.case"/>
                <label class="form-check-label" for="flexRadioDefault2">Used</label>
              </div>
              
               <div class="form-check">
                <input class="form-check-input" value="Renew" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" v-model="post.case"/>
                <label class="form-check-label" for="flexRadioDefault3">Renew</label>
              </div>
 
            </div>
            </div>



            <!--payment method-->
            <div class="col-3" id="pay"><label>Payment Method</label></div>
            <div class="col-6" id="pay">


















                <select
      v-model="paymentmethodselect"
      class="form-control browser-default custom-select custom-select-lg mb-3"
      style="color: black; width: 400px"
    >
      <option :value="{ text: 'Cash' }" selected>Cash</option>
      <option :value="{ text: 'Installements' }">Payment Installements</option>
    </select>
<!-- <h1>
      Text:
      {{ paymentmethodselect.text }}
    </h1> -->
























            </div>
            <div class="col-3" id="spay">*</div>
            <br><br><br><br><br>      



            <!--Additional Details-->
            <div class="col-4" id="area2"><label>Any Additional Details?</label></div>
            <div class="col-8">
              <textarea id="textarea2" placeholder="Additional Details..." cols="5" rows="10" class="form-control" v-model.trim="$v.details.$model" :class="{ 'is-invalid': $v.details.$error, 'is-valid': !$v.details.$invalid, }" v-model="post.additonal"></textarea>
              <div class="valid-feedback">Your Details is valid!</div>
              <div class="invalid-feedback">
                <p v-if="!$v.details.required">Details is required</p>
                <p v-if="!$v.details.minLength"> Details must have at least {{ $v.details.$params.minLength.min }} Letters . </p>
                <p v-if="!$v.details.maxLength"> Details must have at most {{ $v.details.$params.maxLength.max }} Letters .</p>
              </div>
            </div>
          </div>

          <div class="text-right">
            <button class="btn blue" :disabled="$v.$invalid">Post AD</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
let x = {};
import axios from 'axios';

import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "postad",
  components: {},
  data() {
    return {
      cat:null,
      item: "",
      text: "",
      number: "",
      loc: "",
      details: "",
      month:0 ,
      week:0 ,
      day: 0,
      post: {},

























   paymentmethodselect: "",
   categoryselect: "",
   temp: false,
   categories: [
        {
          id: 1,
          categoryname: "Gaming",
          categorytypes: [
            "Action",
            "Adventure",
            "Simulation",
            "Sports",
            "Puzzle",
            "Strategy",
            "Role-Playing",
            "Mix",
          ],
        },

           {
          id: 2,
          categoryname: "Books",
          categorytypes: [
            "Sayed",
            "Omar",
            "Ramadan",
            "hoda",
            "hossam",
            "malhat",
            "he5ohe5o",
            "be5",
          ],
        },       {
          id: 3,
          categoryname: "Camping",
          categorytypes: [
            "Action",
            "Adventure",
            "Simulation",
            "Sports",
            "Puzzle",
            "Strategy",
            "Role-Playing",
            "Mix",
          ],
        },       {
          id: 4,
          categoryname: "Gaming",
          categorytypes: [
            "Action",
            "Adventure",
            "Simulation",
            "Sports",
            "Puzzle",
            "Strategy",
            "Role-Playing",
            "Mix",
          ],
        },       {
          id: 5,
          categoryname: "Gaming",
          categorytypes: [
            "Action",
            "Adventure",
            "Simulation",
            "Sports",
            "Puzzle",
            "Strategy",
            "Role-Playing",
            "Mix",
          ],
        },

      ],

























 };
  },

  methods: {
    postAd() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(this.data);
      }
    },

    addPost() {
      const formData = new FormData();

      // let uri = "https://salefnyapi.herokuapp.com/register";
      let uri = 'http://localhost:3000/posts'

      // alert(this.post.title);
      // this.post.images = x;
      // alert(this.post.item_name);
      // alert(this.post.location);
      // alert(this.post.item_name);
      // alert(this.categoryselect.text);
      // alert(this.post.prefered_way_to_contact);
      // alert(x.length)
       formData.append('post[item_name]', this.post.item_name);
       formData.append('post[description]', this.post.description);
       formData.append('post[category]', this.categoryselect.text);
       formData.append('post[payment_method]', this.paymentmethodselect.text);
       formData.append('post[per_day]', this.post.per_day);
       formData.append('post[per_week]', this.post.per_week);
       formData.append('post[per_month]', this.post.per_month);
       formData.append('post[current_number]', this.post.current_number);
       formData.append('post[location]', this.post.location);
       formData.append('post[prefered_way_to_contact]', this.post.prefered_way_to_contact);
       formData.append('post[additonal]', this.post.additonal);
       formData.append('post[case]', this.post.case);
       formData.append('post[receive_method]', this.post.receive_method);
      for (const i in x) {
        formData.append("images", x[i]);
      }

      // try {
      //   this.axios.post(uri, formData).then(() => {
      //     this.$router.push({ name: "posts" });
      //   });
      // } catch (e) {
      //   console.log(e.response);
      // }
      

    axios.post(uri, formData,  { withCredentials: true }).then((res) => {
            // this.$router.push({name: 'posts'});
          alert('post created successfully');

            console.log(res);
          }).catch((error) => {
            alert(error + ', ' + error.response.data);

          });






      
    },
    uploadImage(e) {
      x = e.target.files || e.dataTransfer.files;
    },
  },

  validations: {
    item: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(17),
    },
    text: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(5000),
    },
    number: {
      required,
      numeric,
      ensureonly11DigitsLong(value) {
        return value.trim().length === 11;
      },
    },
    loc: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(25),
    },
    details: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(5000),
    },
  },
  computed:{

  },
  watch: {
    month: function(v){
      this.week = v * 4;
    },
    week: function(v){
      this.month = v / 4;
      this.day = v * 7;
    },
    day: function(v){
      this.week = v / 7;
    },
  },
};
</script>

<style scoped>
.home{
  background-color:GhostWhite;
}
label {
  font-family: sans-serif;
  color: rgb(60, 60, 250);
  font-size: 20px;
  margin-left: 40%;
}
#rent input,
textarea {
  box-shadow: 5px 10px 18px #eeebeb;
}
#rent span {
  color: red;
  margin-left: 10%;
}



#area {
  margin-top: 5%;
}
textarea {
  margin-top: 12%;
}
#star {
  color: red;
  margin-top: 20%;
  padding-left: 20px;
}



#loc label {
  margin-top: 30%;
}
#loc input {
  margin-top: 15%;
  margin-right: 20%;
}
#star3 {
  margin-left: 100%;
  bottom: 15%;
  color: red;
}



#con {
  margin-top: 5%;
  right: 11%;
}

#rad {
  margin-left: 40%;
  bottom: 22%;
}
#rad label {
  margin-left: 0%;
  color: black;
}






#textarea2 {
  margin-top: 4%;
  margin-left:0%;
  width: 90%;
}
#area2 label {
  margin-left: 20%;
}





#num label {
  margin-top: 30%;
  margin-right: 1.5%;
}
#num input {
  margin-top: 15%;
}
#ngm {
  margin-top: 8%;
  color: red;
}



#cato label {
  margin-top: 15%;
}
#cato select {
  margin-top: 6%;
}
#ngma {
  margin-top: 4%;
  color: red;
}




#pay label {
  margin-bottom: 0%;
  display:inline;
  margin-left:35%
}
#spay {
  margin-top: 1%;
  color: red;
}






#img label {
  margin-top: 20%;
}
#img input {
  margin-top: 8%;
}




button {
  margin-top: 10%;
  color: aliceblue;
}

</style>
