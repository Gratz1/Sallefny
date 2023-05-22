
<template>
<div id="app">
<br><br><br><br>

<div class="container-fluid h-100">
 <div class="row h-100">
  <div class="col-md-12 h-100 d-flex justify-content-center align-items-center">
   <div class="col-md-12 rounded px-5 shadow bg-white text-left">
    <h2 class="text-center font-bold pt-0 pb-0 mb-5"><strong>Registration form</strong></h2>
		<div class="form-wizard">
		<form action="" method="post" role="form">
		<p style="text-align:center;"><strong>Fill all form field to go next step</strong></p>
		



  <v-app id="inspire">
    <v-stepper v-model="e1">
    <!-- stepper -->
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Personal Information</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Delivery information</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">Payment Information</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 4" step="4">Registering Completed</v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
      
  
      <v-stepper-items>
        <!--------------------- step 1 --------------------------->
        <v-stepper-content step="1">
              <v-card-text>
            <v-text-field
              ref="firstname"
              v-model="firstname"
              :rules="[() => !!firstname || 'This field is required']"
              :error-messages="errorMessages"
              label="First Name"
              placeholder="John Doe"
              required
            ></v-text-field>
            <v-text-field
              ref="lastname"
              v-model="lastname"
              :rules="[() => !!lastname || 'This field is required']"
              :error-messages="errorMessages"
              label="Last Name"
              placeholder="John Doe"
              required
            ></v-text-field>
            <v-text-field
            ref="email"
            label="Email address"
            value="example"
            suffix="@gmail.com"
            required
            v-model="email"
            :error-messages="errorMessages"
            :rules="[() => !!email || 'This field is required']"
          ></v-text-field>
          <v-text-field
              ref="password"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min,() => !!password || 'This field is required']"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              :error-messages="errorMessages"
            ></v-text-field>
            <v-text-field
              ref="confirmpassword"
              v-model="confirmpassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min,() => !!confirmpassword || 'This field is required']"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              :error-messages="errorMessages"
            ></v-text-field>
            <v-text-field
              ref="phone"
              v-model="phone"
              :rules="[
                () => !!phone || 'This field is required',
                () => !!phone && phone.length <= 11 || 'phone must be less than 11 characters',
                phoneCheck
              ]"
              label="Phone Number"
              counter="11"
              required
              type="number"
            ></v-text-field>
            <v-file-input
              ref="id"
              v-model="id"
              :rules="[
                () => !!id || 'This field is required',
                idCheck
              ]"
              label="National ID"
              required
            ></v-file-input>
          </v-card-text>
            <br><br>
            <v-btn class="float-right" dark color="primary" @click="e1 = 2">NEXT</v-btn>       
        </v-stepper-content>
  




        <!--------------------- step 2 --------------------------->
        <v-stepper-content step="2">
             <v-autocomplete
              ref="country"
              v-model="country"
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              label="Country"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-autocomplete
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'This field is required']"
              :items="countries"
              label="City"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
                () => !!address || 'This field is required',
                () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
              ]"
              label="Address Line"
              placeholder="Snowy Rock Pl"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="job"
              v-model="job"
              :rules="[() => !!job || 'This field is required']"
              :error-messages="errorMessages"
              label="Job Description"
              required
            ></v-text-field>
            <br><br>
          <v-btn class="float-right" color="primary" @click="e1 = 3">NEXT</v-btn>
          <v-btn class="float-left" color="primary" @click="e1 = 1">Previous</v-btn>
        </v-stepper-content>
  





        <!--------------------- step 3 --------------------------->
        <v-stepper-content step="3">
            <v-radio-group v-model="radios">
                <template v-slot:label>
                <h4> <strong>Payment Method</strong></h4>
                </template>
                <v-radio value="img1">
                <template v-slot:label>
                    <div><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px"></div>
                </template>
                </v-radio>
                <v-radio value="img2">
                <template v-slot:label>
                    <div><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px"></div>
                </template>
                </v-radio>
            </v-radio-group>
            <v-text-field
              ref="cardholder'sname"
              v-model="cardholdername"
              :rules="[() => !!cardholdername || 'This field is required']"
              :error-messages="errorMessages"
              label="CardHolder'sName"
              required
            ></v-text-field>
            <v-text-field
              ref="cardnumber"
              v-model="cardnumber"
              :rules="[
                () => !!cardnumber || 'This field is required',
                () => !!cardnumber && cardnumber.length <= 20 || 'cardnumber must be less than 20 characters',
                cardnumberCheck
              ]"
              label="Card Number"
              counter="20"
              required
              type="number"
            ></v-text-field>
             <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Valid Through"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
            <v-text-field
              ref="cvc"
              v-model="cvc"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min,() => !!cvc || 'This field is required']"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="CCV"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              :error-messages="errorMessages"
            ></v-text-field>
            <br><br>
          <v-btn class="float-right" color="primary" @click="e1 = 4">NEXT</v-btn>
          <v-btn class="float-left" color="primary" @click="e1 = 2">Previous</v-btn>
        </v-stepper-content>

        <!--------------------- step 4 --------------------------->
        <v-stepper-content step="4">
            <h2 style="color:green; margin-top:10%; text-align:center;"><strong>Registeration is Completed.</strong></h2>
            <br><br><br>
            <v-btn class="float-right" color="primary" @click="register">submit</v-btn>
          <v-btn class="float-left" color="primary" @click="e1 = 3">Previous</v-btn>
        </v-stepper-content>


      </v-stepper-items>
    </v-stepper>

</v-app>
    </form>

    </div>

</div>
</div>
</div>
</div>
</div>

</template>

<script>
  import axios from 'axios';

export default {
    name:'signup',
    component:{

    },
    data(){
        return{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
            phone:'',
            id:'',
            city:'',
            country:'',
            address:'',
            job:'',
            cardholdername:'',
            cardnumber:'',
            cvc:'',
             e1: 1,
             show1: false,
              rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
            radios: 'img2',
             date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        }
    },
    methods:{
        register(){
          alert('hello' + this.firstname)
          const formData = new FormData();
        let uri = 'http://localhost:3000/register'
        
       formData.append('email', this.email);
       formData.append('username', this.email);
       formData.append('password', this.password);
       formData.append('first_name', this.firstname);
       formData.append('last_name', this.lastname);
       formData.append('national_id_image', this.id);
       formData.append('phone_number', this.phone);
       formData.append('city', this.city);
       formData.append('covernate', this.country);
       formData.append('address', this.address);
       formData.append('job_description', this.job);
         axios.post(uri, formData,  { withCredentials: true }).then((res) => {
            alert('user registered successfully');
            localStorage.setItem("user", JSON.stringify(res.data));
            dispatchEvent(this.$event);
            this.$router.push({ name: "profile"})


          }).catch(error => {
            // alert(err.message);
            // console.log(err.message);
            alert(error + ', ' + error.response.data);

          })
      },
       submit(){
      //      alert('hello' + this.firstname)
      //     const formData = new FormData();
      //   let uri = 'http://localhost:3000/register'
        
      //  formData.append('username', this.email);
      //  formData.append('password', this.user.password);
      //  formData.append('first_name', this.firstname);
      //  formData.append('last_name', this.lastname);
      //  formData.append('national_id', this.id);
      //  formData.append('phone_number', this.phone);
      //  formData.append('city', this.city);
      //  formData.append('covernate', this.country);
      //  formData.append('address', this.address);
      //  formData.append('job_description', this.job);
      //    axios.post(uri, formData,  { withCredentials: true }).then((res) => {
      //       alert('user registered successfully');
      //       localStorage.setItem("user", JSON.stringify(res.data));

      //     }).catch(error => {
      //       // alert(err.message);
      //       // console.log(err.message);
      //       alert(error + ', ' + error.response.data);

      //     })

       },
    },
    computed:{
     
    }
}
</script>

<style scoped>

</style>