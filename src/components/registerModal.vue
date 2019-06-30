<template>
    <sweet-modal icon="error" ref="register" hide-close-button blocking overlay-theme="dark" modal-theme="dark">
      This is an error…
      <a href="" @click.prevent="cancel(false)">Close</a>
    </sweet-modal>
</template>
<script>
import Bus from '../helpers/bus.js';

export default {
  mounted() {
    this.$refs.register.open();
    this.payWithPaystack();
  },
  computed: {
    scriptLoaded() {
      return new Promise((resolve) => {
        this.loadScript(() => {
          resolve();
        });
      });
    },
  },
  methods: {
    close() {
      alert('INCOMPLETE PAYMENT!!!');
    },
    loadScript(callback) {
      // load paystack's inline js script
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      document.getElementsByTagName('head')[0].appendChild(script);
      if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        // Others
        script.onload = () => {
          callback();
        };
      }
    },
    payWithPaystack() {
      // only after script has loaded
      this.scriptLoaded.then(() => {
        const paystackOptions = {
          key: 'pk_test_a2437b036102451657b8bdbb236b93ee7b6c64fd',
          email: 'dapo@gmail.com',
          amount: 5000,
          ref: '',
          callback: (response) => {
            console.log(response.trxref);
            this.loadText = 'Verifying your payment';
            // verify trnsaction from the backend
          },
          onClose: () => {
            this.close();
          },
          metadata: null,
          currency: this.currency,
          // bearer: this.payObj.bearer
        };
        if (this.embed) {
          paystackOptions.container = 'paystackEmbedContainer';
        }
        const handler = window.PaystackPop.setup(paystackOptions);
        if (!this.embed) {
          handler.openIframe();
        }
      });
    },
    cancel(state) {
      this.$refs.register.close();
      Bus.$emit('register.trigger', state);
    },
  },
};
</script>
