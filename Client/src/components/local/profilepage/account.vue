<template>
<div id="app">
			<v-app id="inspire">
				<v-card>
				<v-toolbar flat color="blue">
				<v-icon style="color:white;">mdi-account</v-icon>
				<v-toolbar-title class="font-weight-light" style="color:white;">User Profile</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn color="blue darken-3" fab small @click="isEditing = !isEditing">
				<v-icon v-if="isEditing" style="color:white;">mdi-close</v-icon>
				<v-icon v-else style="color:white;">mdi-pencil</v-icon>
				</v-btn>
			</v-toolbar>


				<v-tabs vertical>
					<v-tab><v-icon left>mdi-account</v-icon>Account</v-tab>
					<v-tab><v-icon left>mdi-lock</v-icon>Password</v-tab>
					<v-tab><v-icon left>mdi-access-point</v-icon>Payment</v-tab>
			
					<!--page 1-->
					<v-tab-item>
					<v-card flat>
						<v-card-text>
							<v-text-field type="text" :disabled="!isEditing" color="blue" label="First Name" v-model="first_name"></v-text-field>
							<v-text-field type="text" :disabled="!isEditing" color="blue" label="Last Name" v-model="last_name"></v-text-field>
							<v-text-field type="email" :disabled="!isEditing" color="blue" label="E-mail" v-model="username"></v-text-field>
							<v-text-field type="number" :disabled="!isEditing" color="blue" label="Phone Number" v-model="phone_number"></v-text-field>
							<v-text-field type="number" :disabled="!isEditing" color="blue" label="National ID" v-model="id"></v-text-field>
						</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn :disabled="!isEditing" color="success" @click="save">update</v-btn></v-card-actions>
					<v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>Your profile has been updated</v-snackbar>
					</v-card>
					</v-tab-item>





					<!--page 2-->
					<v-tab-item>
					<v-card flat>
						<v-card-text>
							<v-text-field type="password" :disabled="!isEditing" color="blue" label="Old Paswword" v-model="currentPassword"></v-text-field>
							<v-text-field type="password" :disabled="!isEditing" color="blue" label="New Password" v-model="newPassword"></v-text-field>
							<v-text-field type="password" :disabled="!isEditing" color="blue" label="Confirm Password" v-model="passwordConfirmation"></v-text-field>
						</v-card-text>
						<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
								:disabled="!isEditing"
								color="success"
								@click="save"
								>
								update
								</v-btn>
							</v-card-actions>
							<v-snackbar
								v-model="hasSaved"
								:timeout="2000"
								absolute
								bottom
								left
							>
								Your profile has been updated
							</v-snackbar>
					</v-card>
					</v-tab-item>






					<!--page 3-->
					<v-tab-item>
					<v-card flat>
						<v-card-text>
							<v-text-field type="text" :disabled="!isEditing" color="blue" label="CardHolder's Name"></v-text-field>
							<v-text-field type="password" :disabled="!isEditing" color="blue" label="Card Number"></v-text-field>
							<v-text-field type="Password" :disabled="!isEditing" color="blue" label="CCV"></v-text-field>
						</v-card-text>
						<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
								:disabled="!isEditing"
								color="success"
								@click="save"
								>
								update
								</v-btn>
							</v-card-actions>
							<v-snackbar
								v-model="hasSaved"
								:timeout="2000"
								absolute
								bottom
								left
							>
								Your profile has been updated
							</v-snackbar>
					</v-card>
					</v-tab-item>


				</v-tabs>
				</v-card>
				</v-app>


				</div>
</template>

<script>
  import axios from 'axios';

export default {
  name: "setting",
  components: {
    
  },
  data () {
    return {
		first_name:'',
		last_name: '',
		username: '',
		phone_number: '',
		id: '',
		currentPassword:'',
		newPassword: '',
		passwordConfirmation: '',

      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
    }
  },
  methods: {
    customFilter (item, queryText,) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
	resetvars () {
		alert("here");

	},
    save () {
		this.isEditing = !this.isEditing
		this.hasSaved = true;
		// alert(this.first_name);
		// alert(this.currentPassword)
		// alert(this.passwordConfirmation)
		// alert(this.currentPassword)
		const formData = new FormData();
        let uri = 'http://localhost:3000/profile'

        // if (this.currentPassword && this.newPassword && this.passwordConfirmation) {
		// 	alert("enter the if loop");
		// 	passFormData.append('currentPassword', this.currentPassword + '');
		// 	passFormData.append('newPassword', this.newPassword + '');
		// 	passFormData.append('passwordConfirmation', this.passwordConfirmation + + '');
		// 	axios.put(pass, passFormData,  { withCredentials: true }).then((res) => {
        //     alert(res.data);
        //   }).catch(error => {
        //     // alert(err.message);
        //     // console.log(err.message);
        //     alert(error + ', ' + error.response.data);

        //   })
		// }
       formData.append('username', this.username);
       formData.append('first_name', this.first_name);
       formData.append('last_name', this.last_name);
       formData.append('national_id', this.id);
       formData.append('phone_number', this.phone_number);
       formData.append('currentPassword', this.currentPassword);
       formData.append('newPassword', this.newPassword);
       formData.append('passwordConfirmation', this.passwordConfirmation);
         axios.put(uri, formData,  { withCredentials: true }).then((res) => {
            // alert('user profile updated successfully');
			if (this.currentPassword && this.newPassword && this.passwordConfirmation) {
				this.currentPassword = '';
				this.newPassword = '';
				this.passwordConfirmation = '';
				alert(res.data)
			}else {
				
				localStorage.setItem("user", JSON.stringify(res.data));
				dispatchEvent(this.$event);

			}
			
			


          }).catch(error => {
            // alert(err.message);
            // console.log(err.message);
            alert(error + ', ' + error.response.data);

          })

    },
  },
  mounted(){

if (localStorage.user) {
    var user = JSON.parse(localStorage.user);
    this.first_name = user.first_name;
	this.last_name = user.last_name;
	this.username = user.username;
	this.phone_number = user.phone_number;
	this.id = user.national_id;

  }
 }
};
</script>

<style scoped>

</style>