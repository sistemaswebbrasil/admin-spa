<template>
  <form v-on:submit.prevent="login()" class="app flex-row align-items-center" >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-body">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <input type="email" v-model="data.body.email" class="form-control" placeholder="Username">
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <input type="password" v-model="data.body.password" class="form-control" placeholder="Password">
                </div>
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn btn-primary px-4">Login</button>
                  </div>
                  <div class="col-6 text-right">
                    <button type="submit" class="btn btn-link px-0">Forgot password?</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-body text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button type="button" class="btn btn-primary active mt-3">Register Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        context: 'login context',

        data: {
          body: {
            email: 'adriano.faria@gmail.com',
            password: ''
          },
          rememberMe: false,
          fetchUser: true
        },

        error: null
      }
    },

    mounted () {
      console.log(this.$auth.redirect())

      // Can set query parameter here for auth redirect or just do it silently in login redirect.
    },

    methods: {
      login () {
        var redirect = this.$auth.redirect()
        // alert(JSON.stringify(this.data.body))
        this.$auth.login({
          body: this.data.body, // Vue-resource
          data: this.data.body, // Axios
          rememberMe: this.data.rememberMe,
          redirect: {name: redirect ? redirect.from.name : 'Home'},
          fetchUser: this.data.fetchUser,
          success () {
            console.log('success ' + this.context)
          },
          error (res) {
            console.log('error ' + res + ' - ' + this.context)

            this.error = res.data
          }
        })
      }
    }
  }
</script>