<template>
  <form v-on:submit.prevent="registrar()" class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mx-4">
            <div class="card-body p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-user"></i></span>
                <input type="text" v-model="data.body.name" class="form-control" placeholder="Username">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon">@</span>
                <input type="email" v-model="data.body.email" class="form-control" placeholder="Email">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input type="password" v-model="data.body.password1" class="form-control" placeholder="Password">
              </div>

              <div class="input-group mb-4">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input type="password" v-model="data.body.email2" class="form-control" placeholder="Repeat password">
              </div>
            </div>
            <div class="card-footer p-4">
              <div class="row">

              <button type="submit" class="btn btn-block btn-success">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        data: {
          body: {
            name: 'Usuário de teste',
            email: 'teste@gmail.com',
            password1: '',
            password2: ''
          }
        },
        error: null
      }
    },
    methods: {
      registrar () {
        axios.post(`http://spa.com/api/register`, this.data.body)
          .then(response => {})
          .catch(e => {
            this.errors.push(e)
          })

        // axios.post(`http://spa.com/api/register`)
        //   .then(response => {
        //   // JSON responses are automatically parsed.
        //     this.posts = response.data
        //   })
        //   .catch(e => {
        //     // this.errors.push(e)
        //     console.log(e)
        //   })
      }
    }
  }
</script>
