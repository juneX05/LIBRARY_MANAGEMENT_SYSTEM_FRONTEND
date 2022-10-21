<template>
    <div class="login-box">

        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
            </div>
            <div class="card-body">
          <div id="notification" class="d-none alert-dismissible">
           <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            {{ message }}
          </div>
                <p class="login-box-msg">Sign in to start your session</p>
                <form @submit.prevent="login" method="post">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email:'',
                password:'',
                message: ''
            }
        },
        methods:{
            login() {
                $.ajax({
                    url: API_URL + '/api/login',
                    data: {
                        email: this.email,
                        password: this.password
                    },
                    type: 'POST',
                }).then(response => {
                    this.message = response.message
                    this.processNotification(response.status)

                    localStorage.setItem('user_data', JSON.stringify(response.data));

                    window.location.reload()
                }).catch(({responseJSON}) => {
                    this.message = responseJSON.message
                    this.processNotification(responseJSON.status)
                })
            },
            processNotification(status) {
                $('#notification')
                    .removeClass('d-none alert alert-success alert-danger');
                if (status) {
                    $('#notification').addClass('alert alert-success')
                } else{
                    $('#notification').addClass('alert alert-danger')
                }
            }
        }
    }
</script>