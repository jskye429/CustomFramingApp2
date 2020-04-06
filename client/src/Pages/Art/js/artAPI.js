const fetch = require('fetch');
// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  accessKey: "QHKqKp2SyeDuPAzFYtQRrIxuSImokz6MxBmr_mTXXig"
});

unsplash.users.profile("naoufal")
  .catch(err => {
    console.log(err)
  });

