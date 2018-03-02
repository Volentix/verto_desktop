<template>
  <div id="wrapper">
    <b-container>
      <b-row style="margin-bottom: 20px;">
        <b-col>
          <h2>Verto Wallet</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-alert show>{{ address }}</b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <qrcode :value="privateKey" :options="{ size: 300 }"></qrcode>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
let bitcoin = require('bitcoinjs-lib')

export default {
  name: 'start-page',
  data () {
    return {
      address: '',
      privateKey: ''
    }
  },
  created () {
    let keyPair = bitcoin.ECPair.makeRandom()
    this.address = keyPair.getAddress()
    this.privateKey = keyPair.toWIF()
  }
}
</script>

<style>
</style>
